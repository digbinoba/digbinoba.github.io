import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.MY_EMAIL;
export async function POST(req) {
  const { email, subject, message } = await req.json();
  const subjectLineBuilder = `${email} - ${subject}`;

  console.log('server is attempting to send email');

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [toEmail],
      subject: subjectLineBuilder,
      text: message,
    });
    console.log('server sent the email!');
  } catch (error) {
    console.log('sorry the server had a problem');
  }
}