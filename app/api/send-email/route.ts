// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "contact@erasstack.com", // <-- Use your verified domain
      to: "erasstack@gmail.com",
      subject: `New Consultation Request from ${body.name}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; color:hsl(220,30%,15%); line-height:1.6; padding:24px; background-color:hsl(40,20%,98%);">
          <header style="text-align:center; margin-bottom:24px;">
            <h1 style="font-family:'DM Sans', sans-serif; font-weight:700; color:hsl(220,47%,20%); margin:0;">ErasStack Consultation Request</h1>
            <p style="color:hsl(215,20%,45%); font-size:14px; margin-top:4px;">New request submitted via website</p>
          </header>

          <section style="background-color:hsl(0,0%,100%); padding:20px; border-radius:8px; border:1px solid hsl(220,15%,88%); box-shadow:0 6px 16px hsl(220,30%,15% / 0.06);">
            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%); width:150px;">Name:</td>
                <td style="padding:6px;">${body.name}</td>
              </tr>
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%);">Email:</td>
                <td style="padding:6px;">${body.email}</td>
              </tr>
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%);">Phone:</td>
                <td style="padding:6px;">${body.phone || "N/A"}</td>
              </tr>
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%);">Organization:</td>
                <td style="padding:6px;">${body.organization || "N/A"}</td>
              </tr>
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%);">Organization Type:</td>
                <td style="padding:6px;">${body.organizationType || "N/A"}</td>
              </tr>
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%);">Project Type:</td>
                <td style="padding:6px;">${body.projectType || "N/A"}</td>
              </tr>
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%);">Requested Date:</td>
                <td style="padding:6px;">${new Date(
                  body.date,
                ).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}</td>
              </tr>
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%);">Requested Time:</td>
                <td style="padding:6px;">${body.time}</td>
              </tr>
              <tr>
                <td style="font-weight:600; padding:6px; color:hsl(220,47%,20%);">Message:</td>
                <td style="padding:6px;">${body.message || "N/A"}</td>
              </tr>
            </table>
          </section>

          <footer style="margin-top:24px; text-align:center; font-size:12px; color:hsl(215,15%,45%);">
            &copy; ${new Date().getFullYear()} ErasStack. All rights reserved.
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
