import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #0c4a6e; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">New Booking Request</h2>
        
        <div style="margin-top: 20px; background-color: #f0f9ff; padding: 15px; border-radius: 8px;">
          <h3 style="color: #0369a1; margin-top: 0;">Appointment Details</h3>
          <p><strong>Service Area:</strong> ${body.area}</p>
          <p><strong>Visit Type:</strong> ${body.visitType === "home" ? "Home Visit" : "Clinic Appointment"}</p>
          <p><strong>Location:</strong> ${body.location === "pmb" ? "Pietermaritzburg" : "Hammersdale"}</p>
          <p><strong>Preferred Date:</strong> ${body.preferredDate}</p>
          <p><strong>Time Preference:</strong> ${body.preferredTime}</p>
        </div>

        <div style="margin-top: 20px;">
          <h3 style="color: #0369a1;">Patient Information</h3>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Email:</strong> ${body.email || "Not provided"}</p>
        </div>

        ${body.notes ? `
        <div style="margin-top: 20px; background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #e2e8f0;">
          <p><strong>Patient Notes:</strong></p>
          <p style="white-space: pre-wrap; font-style: italic;">${body.notes}</p>
        </div>
        ` : ""}

        <div style="margin-top: 30px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; pt: 10px;">
          <p>This booking request was submitted from the Mkhize Physio website.</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "mkhize@mymedmarketing.online",
      subject: `Booking Request: ${body.fullName} - ${body.area}`,
      html: htmlContent,
      replyTo: body.email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to submit booking request" },
      { status: 500 }
    );
  }
}
