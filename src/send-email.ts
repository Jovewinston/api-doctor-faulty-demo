import { Resend } from 'resend';

// INTENTIONAL FOOTGUN for api-doctor rule: resend-api-key-hardcoded
// Do not use this pattern in real apps — use env vars instead.
const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error('Missing RESEND_API_KEY');
}

const resend = new Resend(resendApiKey);

export async function sendWelcomeEmail(to: string) {
  await resend.emails.send({
    from: 'Demo <onboarding@example.com>',
    to: [to],
    idempotencyKey: `welcome/${to}`,
    subject: 'Welcome',
    html: '<p>Hello from the faulty demo</p>',
  });
}
