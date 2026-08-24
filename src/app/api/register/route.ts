import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Formatting the registration data for email
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #0c4a6e; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">New Patient Registration</h2>
        
        <h3 style="color: #0ea5e9; margin-top: 20px;">1. Personal Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9; width: 200px;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.firstName} ${body.lastName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>ID Number:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.idNumber}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>DOB:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.dateOfBirth}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Gender:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.gender}</td></tr>
        </table>

        <h3 style="color: #0ea5e9; margin-top: 20px;">2. Contact Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9; width: 200px;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.phone}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Alt Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.altPhone || "N/A"}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.email || "N/A"}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Address:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.streetAddress}, ${body.suburb}, ${body.city}, ${body.province}, ${body.postalCode}</td></tr>
        </table>

        <h3 style="color: #0ea5e9; margin-top: 20px;">3. Medical Aid & Emergency Contact</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9; width: 200px;"><strong>Medical Aid:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.medicalAidName || "N/A"} (${body.medicalAidNumber || "N/A"})</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;"><strong>Emergency Contact:</strong></td><td style="padding: 8px; border-bottom: 1px solid #f1f5f9;">${body.emergencyName} (${body.emergencyRelationship}) - ${body.emergencyPhone}</td></tr>
        </table>

        <h3 style="color: #0ea5e9; margin-top: 20px;">4. Medical History</h3>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px;">
          <p><strong>Reason for Visit:</strong><br/>${body.currentCondition}</p>
          <p><strong>Pain Level (1-10):</strong> ${body.painLevel || "N/A"}</p>
          <p><strong>Chronic Conditions:</strong> ${body.chronicConditions || "None"}</p>
          <p><strong>Medications:</strong> ${body.medications || "None"}</p>
          <p><strong>Allergies:</strong> ${body.allergies || "None"}</p>
        </div>

        <div style="margin-top: 30px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; pt: 10px;">
          <p>This registration was submitted from the Mkhize Physio website.</p>
          <p>Consent given for POPIA: ${body.consent ? "Yes" : "No"}</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "enquires@mkhizephysio.co.za",
      subject: `New Patient Registration: ${body.firstName} ${body.lastName}`,
      html: htmlContent,
      replyTo: body.email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration API error:", error);
    return NextResponse.json(
      { error: "Failed to submit registration" },
      { status: 500 }
    );
  }
}
