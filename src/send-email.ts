import { Resend } from 'resend';

// INTENTIONAL FOOTGUN for api-doctor rule: resend-api-key-hardcoded
// Do not use this pattern in real apps — use env vars instead.
const resend = new Resend('re_123456789_AbCdEfGhIjKlMnOp');

export async function sendWelcomeEmail(to: string) {
  await resend.emails.send({
    from: 'Demo <onboarding@example.com>',
    to: [to],
    subject: 'Welcome',
    html: '<p>Hello from the faulty demo</p>',
  });
}
