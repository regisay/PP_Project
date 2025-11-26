from passlib.context import CryptContext
import psycopg2

# pbkdf2_sha256 해시 사용
pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

username = "testuser"
email = "test@example.com"
password = "password"
hashed = pwd_context.hash(password)

# DB 연결
conn = psycopg2.connect(
    host="localhost",
    port=5432,
    database="dashboard",
    user="magna",
    password="password"
)

cur = conn.cursor()
cur.execute(
    "INSERT INTO users (username, email, password_hash) VALUES (%s, %s, %s);",
    (username, email, hashed)
)
conn.commit()
cur.close()
conn.close()

print("User created:", username, email)
