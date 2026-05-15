from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from groq import Groq
from app.core.config import settings

router = APIRouter(prefix="/chat", tags=["AI Chat"])

class ChatRequest(BaseModel):
    question: str

@router.post("")
def chat(request: ChatRequest):
    try:
        if not settings.GROQ_API_KEY:
            raise HTTPException(status_code=500, detail="GROQ_API_KEY is missing")

        client = Groq(api_key=settings.GROQ_API_KEY)

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {
                    "role": "system",
                    "content": "You are Justin Fairman Tan's portfolio AI assistant. Justin focuses on Fullstack Web Development, LLMs, and AI Agents. His projects include AI Sales Page Generator, SPELL Laboratory Website, and Mandarin Content AI.",
                },
                {
                    "role": "user",
                    "content": request.question,
                },
            ],
            temperature=0.4,
        )

        return {"answer": response.choices[0].message.content}

    except HTTPException:
        raise
    except Exception as e:
        print("CHAT ERROR:", str(e))
        raise HTTPException(status_code=500, detail=str(e))