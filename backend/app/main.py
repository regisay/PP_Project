from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth

app = FastAPI(title="Dashboard Backend")

origins = [
    "http://localhost:3000",  # 로컬 Next.js
    "https://pp-project-67z994p16-regisays-projects.vercel.app",  # 배포된 프론트
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth")

