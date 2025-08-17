# Laymans Terms

Summarize Terms & Conditions into plain English.

## Local Quickstart
```bash
npm i
cp .env.local.example .env.local # then set OPENAI_API_KEY
npm run dev
```
Open http://localhost:3000 and paste text, a URL, or upload a PDF.

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel, click **New Project → Import** your repo.
3. Set the Environment Variable `OPENAI_API_KEY` (Project Settings → Environment Variables).
4. Framework preset: **Next.js** (auto-detected). No extra build settings needed.
5. Deploy. (This repo includes `next.config.mjs` with `output: "standalone"` and a `vercel.json` for convenience.)

## Notes
- Server route sanitizes to 150k chars to avoid oversized inputs.
- Max output length ~1000 words.
- Sections include: TL;DR, What You Agree To, Data & Privacy, Fees/Payments, Cancellations, Disputes/Arbitration, Liability, Intellectual Property, Governing Law, Contact/Support (only when relevant).
- Not legal advice. Always link to the source.
