import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, promoCode, message } =
      body;

    // Format promo code block if provided
    const promoCodeRow = promoCode?.trim()
      ? `<p><strong>Promo Code:</strong> <span style="color: #ea580c; font-weight: bold; font-size: 1.1em;">${promoCode.trim().toUpperCase()}</span></p>`
      : `<p><strong>Promo Code:</strong> <em>None applied</em></p>`;

    const companyRow = company?.trim()
      ? `<p><strong>Company:</strong> ${company.trim()}</p>`
      : "";

    await sendEmail({
      to: "support@codeverselab.com",
      subject: `Project Alert from ${name}${promoCode ? ` [Promo: ${promoCode.toUpperCase()}]` : ""}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${companyRow}
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        ${promoCodeRow}
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
