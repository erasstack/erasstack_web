import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
const FROM = process.env.RESEND_FROM_EMAIL
  ? `ErasStack Ltd <${process.env.RESEND_FROM_EMAIL}>`
  : "ErasStack Ltd <onboarding@resend.dev>";

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry</title>
</head>
<body style="margin:0;padding:0;background:#F5F7FA;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F7FA;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:0 0 24px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D97706;">ERASSTACK LTD</span>
                  </td>
                  <td align="right">
                    <span style="font-size:12px;color:#9CA3AF;">New Enquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;">

              <!-- Top border accent -->
              <tr>
                <td style="height:3px;background:#D97706;font-size:0;line-height:0;">&nbsp;</td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 40px;">

                  <h1 style="margin:0 0 6px 0;font-size:20px;font-weight:600;color:#0C1E3E;letter-spacing:-0.02em;">You have a new enquiry</h1>
                  <p style="margin:0 0 32px 0;font-size:14px;color:#6B7280;">Submitted via erasstack.com contact form.</p>

                  <!-- Divider -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                    <tr><td style="height:1px;background:#F3F4F6;font-size:0;">&nbsp;</td></tr>
                  </table>

                  <!-- Fields -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom:20px;">
                        <p style="margin:0 0 4px 0;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9CA3AF;">Full Name</p>
                        <p style="margin:0;font-size:15px;font-weight:500;color:#111827;">${name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom:20px;">
                        <p style="margin:0 0 4px 0;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9CA3AF;">Email Address</p>
                        <p style="margin:0;font-size:15px;font-weight:500;color:#111827;">
                          <a href="mailto:${email}" style="color:#D97706;text-decoration:none;">${email}</a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9CA3AF;">Message</p>
                        <div style="background:#F9FAFB;border:1px solid #F3F4F6;border-radius:6px;padding:16px 20px;">
                          <p style="margin:0;font-size:14px;line-height:1.7;color:#374151;white-space:pre-wrap;">${message}</p>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <!-- CTA -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                    <tr>
                      <td>
                        <a href="mailto:${email}?subject=Re: Your enquiry to ErasStack"
                           style="display:inline-block;padding:11px 24px;background:#0C1E3E;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;border-radius:6px;letter-spacing:0.01em;">
                          Reply to ${name}
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 0 0 0;">
              <p style="margin:0;font-size:12px;color:#9CA3AF;text-align:center;">
                ERASSTACK LTD &nbsp;&middot;&nbsp; Abuja, Nigeria &nbsp;&middot;&nbsp; <a href="https://erasstack.com" style="color:#9CA3AF;text-decoration:none;">erasstack.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await resend.emails.send({
      from: FROM,
      to: process.env.REPLY_TO_EMAIL!,
      replyTo: email,
      subject: `Enquiry from ${name}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
