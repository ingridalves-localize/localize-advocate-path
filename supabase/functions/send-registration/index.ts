import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  office: string;
  caseQuantity: string;
  averageTicket: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, office, caseQuantity, averageTicket }: RegistrationData = await req.json();

    console.log("Sending registration data:", { name, email, phone, office, caseQuantity, averageTicket });

    const emailResponse = await resend.emails.send({
      from: "Localize <onboarding@resend.dev>",
      to: ["ingrid.alves@localize.com.br"],
      subject: "Nova solicitação de cadastro - Localize",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nova Solicitação de Cadastro
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Dados do Interessado:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 150px;">Nome:</td>
                <td style="padding: 8px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0; color: #1e293b;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Telefone:</td>
                <td style="padding: 8px 0; color: #1e293b;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Escritório/Empresa:</td>
                <td style="padding: 8px 0; color: #1e293b;">${office}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Quantidade de Processos:</td>
                <td style="padding: 8px 0; color: #1e293b;">${caseQuantity}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Ticket Médio:</td>
                <td style="padding: 8px 0; color: #1e293b;">${averageTicket}</td>
              </tr>
            </table>
          </div>
          
          <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
            Esta solicitação foi enviada através do formulário de cadastro do site Localize.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-registration function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);