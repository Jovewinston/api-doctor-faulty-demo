import { Resend } from 'resend';

// Clean baseline for main — key comes from env.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string) {
  await resend.emails.send({
    from: 'Demo <onboarding@example.com>',
    to: [to],
    subject: 'Welcome',
    html: '<p>Hello from the demo</p>',
  });
}
