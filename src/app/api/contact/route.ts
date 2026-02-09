import { connectDB } from "@/lib/db";
import { Contact } from "@/models/Contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
        firstName,
        lastName,
        email,
        role,
        purpose,
        contactTime,
        } = body;

        await connectDB();
        await Contact.create({
        firstName,
        lastName,
        email,
        role,
        purpose,
        contactTime,
        });

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.CONTACT_EMAIL,
                pass: process.env.CONTACT_EMAIL_PASS,
            },
        });

        await transporter.sendMail({
        from: `"Users " <${process.env.CONTACT_EMAIL}>`,
        to: process.env.CONTACT_EMAIL,
        subject: "📩 New Contact Form Submission",
        html: `
            <!DOCTYPE html>
            <html>
            <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
                
                <!-- Wrapper -->
                <div style="width:100%;padding:40px 0;">
                
                <!-- Email Container -->
                <div style="max-width:640px;margin:auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 12px 30px rgba(0,0,0,0.08);">
                    
                    <!-- NAVBAR -->
                    <div style="background:linear-gradient(90deg,#1e3a8a,#2563eb);padding:18px 24px;">
                    <h1 style="margin:0;font-size:20px;color:#ffffff;letter-spacing:0.5px;">
                        🧠 Chandresh Mama AI Model
                    </h1>
                    </div>

                    <!-- HERO -->
                    <div style="padding:28px 24px;border-bottom:1px solid #e5e7eb;">
                    <h2 style="margin:0 0 10px;color:#111827;font-size:24px;">
                        New Contact Submission
                    </h2>
                    <p style="margin:0;color:#6b7280;font-size:15px;">
                        Someone just reached out through your platform.
                        Here are the details 👇
                    </p>
                    </div>

                    <!-- CONTENT CARD -->
                    <div style="padding:24px;">
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                        <tr>
                        <td style="padding:12px 0;color:#374151;font-size:14px;">
                            <strong>Name</strong>
                        </td>
                        <td style="padding:12px 0;color:#111827;font-size:14px;text-align:right;">
                            ${firstName} ${lastName}
                        </td>
                        </tr>
                        <tr>
                        <td style="padding:12px 0;color:#374151;font-size:14px;">
                            <strong>Email</strong>
                        </td>
                        <td style="padding:12px 0;color:#2563eb;font-size:14px;text-align:right;">
                            ${email}
                        </td>
                        </tr>
                        <tr>
                        <td style="padding:12px 0;color:#374151;font-size:14px;">
                            <strong>Role</strong>
                        </td>
                        <td style="padding:12px 0;color:#111827;font-size:14px;text-align:right;">
                            ${role}
                        </td>
                        </tr>
                        <tr>
                        <td style="padding:12px 0;color:#374151;font-size:14px;">
                            <strong>Purpose</strong>
                        </td>
                        <td style="padding:12px 0;color:#111827;font-size:14px;text-align:right;">
                            ${purpose}
                        </td>
                        </tr>
                        <tr>
                        <td style="padding:12px 0;color:#374151;font-size:14px;">
                            <strong>Preferred Time</strong>
                        </td>
                        <td style="padding:12px 0;color:#111827;font-size:14px;text-align:right;">
                            ${contactTime || "Not specified"}
                        </td>
                        </tr>
                    </table>

                    </div>

                    <!-- CTA -->
                    <div style="padding:24px;border-top:1px solid #e5e7eb;text-align:center;">
                    <a href="mailto:${email}"
                        style="display:inline-block;background:#2563eb;color:#ffffff;
                                padding:12px 24px;border-radius:10px;
                                text-decoration:none;font-size:14px;font-weight:600;">
                        Reply to ${firstName}
                    </a>
                    </div>

                    <!-- FOOTER -->
                    <div style="background:#f9fafb;padding:18px 24px;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#6b7280;">
                        Submitted via <strong>Chandresh Mama And Team</strong><br/>
                        AI-powered healthcare & research collaboration
                    </p>
                    <p style="margin:8px 0 0;font-size:11px;color:#9ca3af;">
                        © ${new Date().getFullYear()} Chandresh Mama AI Model • Built with (Harish ❤️ Chandresh)
                    </p>
                    </div>

                </div>
                </div>

            </body>
            </html>
        `,

        });


        // ✅ AUTO-REPLY TO USER
        await transporter.sendMail({
            from: `"Chandresh Mama And Team" <${process.env.CONTACT_EMAIL}>`,
            to: email, // sender's email from form
            subject: "We received your message – Thank you!",
            html: `
                <!DOCTYPE html>
                <html>
                <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
                    <div style="width:100%;padding:40px 0;">
                    <div style="max-width:640px;margin:auto;background:#ffffff;border-radius:16px;
                                box-shadow:0 12px 30px rgba(0,0,0,0.08);overflow:hidden;">

                        <!-- Header -->
                        <div style="background:linear-gradient(90deg,#1e3a8a,#2563eb);padding:22px;">
                        <h2 style="margin:0;color:#ffffff;">
                            🧠 Chandresh Mama AI Model
                        </h2>
                        </div>

                        <!-- Body -->
                        <div style="padding:28px;">
                        <h3 style="color:#111827;">Hi ${firstName},</h3>

                        <p style="color:#374151;font-size:15px;line-height:1.6;">
                            Thank you for reaching out to us!  
                            We’ve successfully received your message and truly appreciate your interest.
                        </p>

                        <p style="color:#374151;font-size:15px;line-height:1.6;">
                            Our team will review your message and get back to you as soon as possible.
                        </p>

                        <div style="margin:24px 0;padding:16px;background:#f9fafb;border-radius:10px;">
                            <p style="margin:0;font-size:14px;color:#6b7280;">
                            <strong>Your purpose:</strong><br/>
                            ${purpose}
                            </p>
                        </div>

                        <p style="color:#374151;font-size:14px;">
                            Meanwhile, feel free to explore our platform and research initiatives.
                        </p>

                        <p style="margin-top:32px;color:#111827;font-weight:600;">
                            — Chandresh Mama & Team
                        </p>
                        </div>

                        <!-- Footer -->
                        <div style="background:#f9fafb;padding:16px;text-align:center;">
                        <p style="margin:0;font-size:12px;color:#6b7280;">
                            This is an automated message. Reply only if you have any women number(only young chicks)
                        </p>
                        <p style="margin:6px 0 0;font-size:11px;color:#9ca3af;">
                            © ${new Date().getFullYear()} Chandresh Mama AI Model • Built with (Harish ❤️ Chandresh)
                        </p>
                        </div>

                    </div>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json({ message: "Message sent successfully" });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
        );

    }
}
