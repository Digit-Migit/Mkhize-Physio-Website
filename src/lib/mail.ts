import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST || "mail.mymedmarketing.online";
const smtpPort = parseInt(process.env.SMTP_PORT || "587");
const smtpUser = process.env.SMTP_USER || "mkhize@mymedmarketing.online";
const smtpPass = process.env.SMTP_PASS || "MailmyMed7545@@";

console.log("SMTP Config:", { host: smtpHost, port: smtpPort, user: smtpUser });

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: false,
  requireTLS: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const mailOptions = {
    from: `"Mkhize Physio" <${smtpUser}>`,
    to,
    subject,
    html,
    replyTo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
