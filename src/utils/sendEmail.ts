import nodemailer from "nodemailer";

export interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({
  to,
  subject,
  html,
}: EmailData): Promise<void> {
  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // e.g., smtp.gmail.com
    port: 465,
    secure: true, // true for port 465, false for 587
    auth: {
      user: process.env.EMAIL_USER, // e.g., your-email@example.com
      pass: process.env.EMAIL_PASS, // App password or real password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Codeverse Lab" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log("✅ Email sent", subject);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    throw new Error("Email failed to send");
  }
}
