import httpx
from app.core.config import settings

SYSTEM_PROMPT = """
You are Justin Fairman Tan's portfolio AI assistant.
Answer briefly and professionally.
Focus on Justin's Fullstack Web Development, LLM, AI Agent, FastAPI, Laravel, PostgreSQL, and AI projects.
Do not invent information. If unsure, say that the portfolio does not contain that information yet.
"""

async def ask_groq(question: str, context: str = "") -> str:
    if not settings.GROQ_API_KEY:
        return "Groq API key is not configured yet."

    payload = {
        "model": settings.GROQ_MODEL,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": f"Context:\n{context}\n\nQuestion: {question}"},
        ],
        "temperature": 0.3,
        "max_tokens": 500,
    }

    async with httpx.AsyncClient(timeout=30) as client:
        r = await client.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={"Authorization": f"Bearer {settings.GROQ_API_KEY}"},
            json=payload,
        )
        r.raise_for_status()
        data = r.json()
        return data["choices"][0]["message"]["content"]

async def classify_message(message: str) -> str:
    answer = await ask_groq(
        f"Classify this contact message into one category only: job, collaboration, research, spam, or general. Message: {message}"
    )
    return answer.strip().split()[0].lower().replace(".", "")[:80]
