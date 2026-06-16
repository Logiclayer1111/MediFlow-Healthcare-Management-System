# MediFlow Healthcare Management System

Free, open-source EMR/EHR platform for hospitals, clinics, telehealth, and community health centers.

## Features

- Patient Management
- Appointment Scheduling
- Clinical Documentation (SOAP, vitals, labs)
- Prescription Management (eRx)
- Billing & Insurance (ICD-10, CPT, claims)
- Patient Portal
- Interoperability (FHIR, CCDA, SMART on FHIR)
- AI-assisted clinical decision support
- Reporting & Analytics
- Security (RBAC, audit logs, HIPAA-ready)

## Tech Stack

- Frontend: React + Next.js + TypeScript + Tailwind
- Backend: NestJS + TypeScript + REST + FHIR
- Database: PostgreSQL + Redis
- AI: LangChain + pgvector + OpenAI/Claude
- Auth: Keycloak + OAuth2 + MFA
- Infrastructure: Docker + Kubernetes + AWS + GitHub Actions

## Quick Start

```bash
# Clone
git clone https://github.com/your-org/mediflow.git
cd mediflow

# Setup environment
cp .env.example .env

# Start with Docker Compose
docker-compose up -d

# Access
Frontend: http://localhost:3001
Backend API: http://localhost:3000/api
```
