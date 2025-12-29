import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { Resend } from "npm:resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const resendApiKey = Deno.env.get("sendemail");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    if (!resendApiKey) {
      throw new Error("sendemail API key is not set in environment variables.");
    }
    const resend = new Resend(resendApiKey);

    // 1. Destructure the new fields to match your form
    // Note: The names 'firstName', 'lastName', etc., must match what your frontend sends
    const { firstName, lastName, email, company, projectDetails } = await req.json();

    // 2. Create a more descriptive email subject
    const subject = `New Project Inquiry from ${firstName} ${lastName}`;

    // 3. Build the new HTML body with all the fields from your form
    const htmlBody = `
      <h2>New Project Inquiry</h2>
      <p>You have a new submission from your "Start a Conversation" form.</p>
      <hr>
      <h3>Submitter Details</h3>
      <ul>
        <li><strong>First Name:</strong> ${firstName}</li>
        <li><strong>Last Name:</strong> ${lastName}</li>
        <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
        <li><strong>Company:</strong> ${company || 'Not provided'}</li>
      </ul>
      <h3>Project Details</h3>
      <p>${projectDetails}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <inquiries@fecorporation.ca>",
      to: ["abdulahad@i8is.com"],
      subject: subject,
      html: htmlBody,
      reply_to: email, // This allows you to reply directly to the user
    });

    if (error) {
      console.error({ resendError: error });
      throw new Error("Failed to send email.");
    }

    return new Response(JSON.stringify({ message: "Form submitted successfully!" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});