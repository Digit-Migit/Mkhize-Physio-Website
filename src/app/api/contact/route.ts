import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #0c4a6e; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">New Website Enquiry</h2>
        
        <div style="margin-top: 20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          <p><strong>Service Required:</strong> ${service || "General Enquiry"}</p>
        </div>

        <div style="margin-top: 20px; background-color: #f8fafc; padding: 15px; border-radius: 8px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; pt: 10px;">
          <p>This email was sent from the Mkhize Physio website contact form.</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "mkhize@mymedmarketing.online",
      subject: `New Enquiry from ${name} - ${service}`,
      html: htmlContent,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send enquiry" },
      { status: 500 }
    );
  }
}
