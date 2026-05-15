from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.core.config import settings
from app.routers import projects, contact, chat

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.FRONTEND_URL,
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(contact.router)
app.include_router(chat.router)

@app.get("/")
def root():
    return {"message": "Portfolio AI Backend is running"}