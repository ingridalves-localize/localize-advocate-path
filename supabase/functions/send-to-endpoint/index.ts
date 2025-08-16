import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactData {
  name: string;
  email: string;
  phone: string;
  office: string;
  caseQuantity: string;
  averageTicket: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Recebendo dados para envio ao endpoint...');
    const contactData: ContactData = await req.json();
    
    // Validar dados obrigatórios
    if (!contactData.name || !contactData.email || !contactData.phone || 
        !contactData.office || !contactData.caseQuantity || !contactData.averageTicket) {
      return new Response(
        JSON.stringify({ error: 'Todos os campos são obrigatórios' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    // Salvar no Supabase primeiro
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error: dbError } = await supabase
      .from('contacts')
      .insert({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        office: contactData.office,
        case_quantity: contactData.caseQuantity,
        average_ticket: contactData.averageTicket
      });

    if (dbError) {
      console.error('Erro ao salvar no Supabase:', dbError);
    } else {
      console.log('Dados salvos no Supabase com sucesso');
    }

    // Tentar enviar para o endpoint externo
    try {
      console.log('Enviando dados para endpoint externo...');
      const endpointResponse = await fetch('https://localizedigital.com.br/endpoint.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Supabase-Edge-Function/1.0'
        },
        body: JSON.stringify(contactData),
      });

      console.log('Status do endpoint:', endpointResponse.status);
      
      if (endpointResponse.ok) {
        const responseText = await endpointResponse.text();
        console.log('Resposta do endpoint:', responseText);
        
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Dados enviados com sucesso para ambos os sistemas',
            endpointResponse: responseText 
          }),
          { 
            status: 200, 
            headers: { 'Content-Type': 'application/json', ...corsHeaders } 
          }
        );
      } else {
        console.error('Endpoint retornou erro:', endpointResponse.status);
        const errorText = await endpointResponse.text();
        console.error('Detalhes do erro:', errorText);
        
        // Mesmo com erro no endpoint, se salvou no Supabase é considerado sucesso
        return new Response(
          JSON.stringify({ 
            success: true, 
            message: 'Dados salvos no sistema interno. Endpoint externo indisponível.',
            warning: `Endpoint error: ${endpointResponse.status} - ${errorText}`
          }),
          { 
            status: 200, 
            headers: { 'Content-Type': 'application/json', ...corsHeaders } 
          }
        );
      }
      
    } catch (endpointError) {
      console.error('Erro ao conectar com endpoint externo:', endpointError);
      
      // Mesmo com erro no endpoint, se salvou no Supabase é considerado sucesso
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Dados salvos no sistema interno. Endpoint externo indisponível.',
          warning: 'Não foi possível conectar com o endpoint externo'
        }),
        { 
          status: 200, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

  } catch (error) {
    console.error('Erro geral na função:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    );
  }
};

serve(handler);