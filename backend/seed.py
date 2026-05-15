from app.database import SessionLocal, Base, engine
from app.models.portfolio import Project

Base.metadata.create_all(bind=engine)
db = SessionLocal()

projects = [
    Project(
        title="AI Sales Page Generator",
        description="AI-powered SaaS web app that generates structured sales landing pages from product information using an LLM API.",
        tech_stack="Laravel, MySQL, LLM API",
        demo_url="https://salesgenai.my.id/",
        github_url=""
    ),
    Project(
        title="SPELL Laboratory Website",
        description="Fullstack laboratory branding and management website for datasets, thesis archives, alumni, and student information.",
        tech_stack="FastAPI, PostgreSQL, Python",
        demo_url="https://www.spell-lab.id/",
        github_url=""
    ),
]

for item in projects:
    exists = db.query(Project).filter(Project.title == item.title).first()
    if not exists:
        db.add(item)

db.commit()
db.close()
print("Seed data inserted.")
