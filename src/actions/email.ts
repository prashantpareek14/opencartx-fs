import nodemailer from "nodemailer";

const sendEmail = async (to: string, subject: string, msg: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.opencartx.com",
      port: 587,
      secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: msg,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

export const sendVerificationEmail = async (email: string, token: string) => {
  try {
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}`;
    const subject = "Verify your email for OpenCartX";
    const msg = `Thank you for signing up for OpenCartX! Please verify your email by clicking the link below:\n\n${verificationLink}\n\nIf you did not sign up, please ignore this email.`;

    await sendEmail(email, subject, msg);
  } catch (error) {
    throw new Error("Failed to send verification email");
  }
}