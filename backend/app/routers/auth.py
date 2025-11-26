from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.db import get_connection
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt
from dotenv import load_dotenv
import os

load_dotenv()
JWT_SECRET = os.getenv("JWT_SECRET", "default_secret")

router = APIRouter()
pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")



class UserLogin(BaseModel):
    email: str
    password: str


@router.post("/login")
def login(user: UserLogin):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, password_hash FROM users WHERE email = %s;", (user.email,))
    db_user = cur.fetchone()
    cur.close()
    conn.close()

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    user_id, password_hash = db_user

    if not pwd_context.verify(user.password, password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    payload = {"sub": user_id, "exp": datetime.utcnow() + timedelta(hours=24)}
    token = jwt.encode(payload, JWT_SECRET, algorithm="HS256")
    return {"access_token": token}
