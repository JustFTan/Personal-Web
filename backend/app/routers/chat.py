from fastapi import APIRouter
from pydantic import BaseModel
from groq import Groq
from app.core.config import settings

router = APIRouter(prefix="/chat", tags=["AI Chat"])

class ChatRequest(BaseModel):
    question: str

PORTFOLIO_CONTEXT = """
You are Justin Fairman Tan's portfolio AI assistant.

About Justin:
Justin Fairman Tan is an Electrical Engineering graduate from Telkom University focused on Fullstack Web Development, Large Language Models (LLMs), and AI Agents.

Main Focus:
- Fullstack Web Development
- AI-powered web applications
- Large Language Models (LLMs)
- AI Agent development
- REST API and database systems

Skills:
- Python
- PHP Laravel
- FastAPI
- React
- Next.js
- TailwindCSS
- shadcn/ui
- PostgreSQL
- MySQL
- REST API Development
- Artificial Intelligence
- LLM Integration
- AI Agent Development

Projects:
1. AI Sales Page Generator
Website: https://salesgenai.my.id/
Tech Stack: PHP Laravel, MySQL, LLM API
Description: AI-powered SaaS web application for generating structured sales landing pages automatically.

2. SPELL Laboratory Website
Website: https://www.spell-lab.id/
Tech Stack: FastAPI, PostgreSQL, Python
Description: Fullstack laboratory management and branding platform for Telkom University. It manages datasets, thesis archives, alumni data, and student information.

3. Mandarin Content AI
Status: Ongoing
Description: AI-powered content generation platform for Mandarin learning content.

Research:
- IEEE Access Journal: Real-Time Fall Detection With Hybrid CNN-LSTM Using IWR6843AOP FMCW Radar.
- ICISS 2025: Design and Implementation of a Real-Time Smart Door Lock with FaceNet Face Authentication and Blink Detection.

Answer as Justin's portfolio assistant. Keep answers concise, professional, and based only on this context.
"""

@router.post("")
def chat(request: ChatRequest):
    client = Groq(api_key=settings.GROQ_API_KEY)

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": PORTFOLIO_CONTEXT,
            },
            {
                "role": "user",
                "content": request.question,
            },
        ],
        temperature=0.4,
    )

    return {
        "answer": response.choices[0].message.content
    }