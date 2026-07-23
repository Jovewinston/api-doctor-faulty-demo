# api-doctor-faulty-demo

Tiny sample for **Qualty API Doctor**.

- `main` — clean Resend usage (`process.env.RESEND_API_KEY`)
- branch `demo/hardcoded-resend-key` — intentional footgun for PR scans

## PR test

1. Install **Qualty API Doctor** on this repo.
2. Open a PR from `demo/hardcoded-resend-key` → `main`.
3. Expect API Doctor to flag `resend/security/api-key-hardcoded`.
