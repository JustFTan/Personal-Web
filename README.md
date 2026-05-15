# Justin Portfolio Fullstack AI

Stack:
- Frontend: Next.js React + NextAuth
- Backend: FastAPI
- Database: PostgreSQL
- AI: Groq API
- Storage: Cloudinary
- Deployment: Railway

## Local Setup

### 1. Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Open: http://localhost:3000

## Railway Deployment

Create 3 services:
1. PostgreSQL database
2. Backend service from `/backend`
3. Frontend service from `/frontend`

Set environment variables from `.env.example` files.
