# 🧭 Personal Dashboard Project

개인의 할 일, 일정, 통계, 메모 등을 한 곳에서 관리할 수 있는 **Full-Stack 개인 대시보드 프로젝트**입니다.  
프론트엔드는 **Next.js + React + MUI**, 백엔드는 **Python FastAPI**, 데이터베이스는 **PostgreSQL**을 사용합니다.

---

## 🚀 Tech Stack

### **Frontend**
- Next.js (React Framework)
- React 18
- MUI (Material UI)
- TypeScript
- React Query (데이터 fetching/캐싱 예정)
- Zustand or Redux (상태 관리 예정)

### **Backend**
- Python FastAPI
- PostgreSQL
- Raw SQL (ORM 최소화)
- psycopg2
- JWT Authentication

### **Infra / Deployment**
- AWS S3 + CloudFront (Frontend Hosting)
- AWS EC2 (FastAPI Backend)
- AWS RDS (PostgreSQL)
- Docker / Docker Compose (개발 환경)

---

## 🎯 Project Goals

- 개인 생산성을 높일 수 있는 **대시보드 웹 서비스** 개발
- Next.js + FastAPI 기반의 **풀스택 구조 학습**
- 직접 작성한 SQL 기반의 **DB 설계 능력 강화**
- AWS 배포 경험 및 DevOps 역량 향상
- 포트폴리오로 제출 가능한 완성도 있는 프로젝트 만들기

---

## 🛠 Features (Plan)

### ✔ v1 기능
- 회원가입 / 로그인 (JWT)
- Todo 리스트 관리 (CRUD)
- 카테고리 관리
- 월별 Todo 통계
- 기본 대시보드 레이아웃 (Sidebar / Header / Content)

### ✔ v2 기능 (추가 예정)
- 메모 기능
- 이미지 업로드 (S3)
- 목표 관리(Goal Tracker)
- 대시보드 위젯 커스터마이징
- 다크모드

---

## 📁 Project Structure (초기)

root
├── frontend/ # Next.js + MUI
│ ├── src/
│ ├── app/
│ ├── components/
│ └── package.json
│
├── backend/ # FastAPI + SQL
│ ├── app/
│ ├── routers/
│ ├── db.py
│ └── main.py
│
└── docker-compose.yml