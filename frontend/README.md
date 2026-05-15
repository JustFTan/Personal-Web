# Portfolio Frontend - Next.js + React + Tailwind + shadcn/ui

## Setup

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password
```

## Notes

- Backend expected at `http://localhost:8000`
- AI chat calls `POST /chat`
- Contact form calls `POST /contact`
- Projects fetch helper is ready for `GET /projects`
