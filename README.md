# api-doctor-faulty-demo

Tiny intentional broken sample for **Qualty API Doctor**.

## What it breaks

Rule: `resend-api-key-hardcoded` (severity: error)

File: `src/send-email.ts` hardcodes a fake Resend API key (`re_…`) in the client constructor.

## Local check

```bash
npx @api-doctor/cli@latest . --no-telemetry
```

## PR test with API Doctor App

1. Install **Qualty API Doctor** GitHub App on this repo.
2. Open a PR that includes `src/send-email.ts`.
3. Expect a failing/erroring API Doctor check + findings comment.
