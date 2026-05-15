from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import resend
from app.core.config import settings

router = APIRouter(prefix="/contact", tags=["Contact"])

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

@router.post("")
def send_contact(data: ContactRequest):
    try:
        resend.api_key = settings.RESEND_API_KEY

        result = resend.Emails.send({
            "from": "Portfolio <onboarding@resend.dev>",
            "to": [settings.OWNER_EMAIL],
            "subject": f"New Hire Me Message from {data.name}",
            "html": f"""
            <h2>New Portfolio Message</h2>
            <p><b>Name:</b> {data.name}</p>
            <p><b>Email:</b> {data.email}</p>
            <p><b>Message:</b></p>
            <p>{data.message}</p>
            """
        })

        print("RESEND RESULT:", result)

        return {
            "message": "Message sent successfully",
            "resend_result": result
        }

    except Exception as e:
        print("RESEND ERROR:", str(e))
        raise HTTPException(status_code=500, detail=str(e))