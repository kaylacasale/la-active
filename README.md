# LA Active

A full-stack web application for user authentication and management, built with React (frontend) and NestJS (backend), using PostgreSQL as the database. The project is structured for easy local development and deployment, with environment variables for configuration and Docker for database management.

## Features
- User sign-up and login
- User data management
- Secure environment variable handling
- Modern, modular codebase

## Tech Stack
- **Frontend:** React, TypeScript, Styled Components, React Router
- **Backend:** NestJS, TypeScript, TypeORM, PostgreSQL
- **DevOps:** Docker, Docker Compose, .env configuration

## Project Structure
```
la-active/
  backend/    # NestJS API server
  frontend/   # React client app
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- Docker (for local database)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd la-active
```

### 2. Setup Environment Variables
Create `.env` files in both `backend/` and `frontend/` directories:

**backend/.env**
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=root
DB_PASS=my-pass
DB_NAME=my-db
FRONTEND_URL=http://localhost:3000
```

**frontend/.env**
```
REACT_APP_BACKEND_URL=http://localhost:3000
```

### 3. Start the Database (Docker)
```bash
cd backend
docker-compose up -d
```

### 4. Start the Backend
```bash
cd backend
npm install
npm run start:dev
```

### 5. Start the Frontend
```bash
cd frontend
npm install
npm start
```

The React app will be available at [http://localhost:3000](http://localhost:3000) and the NestJS API at [http://localhost:3001](http://localhost:3001).

## Usage
- Visit `/signup` to create a new user.
- Visit `/login` to log in.

## License
MIT 