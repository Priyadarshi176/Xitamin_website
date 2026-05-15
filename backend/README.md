# Xitamin Backend

Small production-ready Node API for the Xitamin website. It uses only built-in Node modules, so it can run without installing external packages.

## Scripts

```bash
npm run dev
npm start
npm test
```

## Endpoints

- `GET /api/health`
- `GET /api/services`
- `POST /api/contact`
- `POST /api/newsletter`

## Environment

Copy `.env.example` to `.env` and adjust values if needed.

## Mailing

The backend can send real email through SMTP when these values are configured:

```bash
MAIL_ENABLED=true
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_STARTTLS=true
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
MAIL_FROM="Xitamin Website <no-reply@xitamin.co.in>"
MAIL_TO=connect@xitamin.co.in
MAIL_REPLY_TO=connect@xitamin.co.in
MAIL_SEND_AUTO_REPLY=true
```

When `MAIL_ENABLED=false`, leads are still saved to storage, and email sending is skipped safely for local development.
