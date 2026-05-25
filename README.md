# AI ATS Resume Analyzer 🚀

An AI-powered ATS (Applicant Tracking System) Resume Analyzer built using the MERN Stack and Gemini AI.

Users can:
- Upload resumes
- Paste job descriptions
- Get ATS score analysis
- View strengths, missing skills, and suggestions
- Login & Signup securely using JWT Authentication

---

# 🌐 Live Demo

Frontend:  
https://ai-ats-system-mu.vercel.app

Backend:  
https://ai-ats-system.onrender.com

---

# ✨ Features

✅ AI Resume Analysis using Gemini AI  
✅ ATS Score Generation  
✅ Resume vs Job Description Matching  
✅ JWT Authentication (Login/Signup)  
✅ MongoDB Database Storage  
✅ Dashboard UI  
✅ Responsive Frontend using Tailwind CSS  
✅ Full Stack Deployment (Vercel + Render)

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- pdf-parse-fork
- Gemini AI API

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# 📂 Project Structure

```bash
AI-ATS-System/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Shruti788/AI-ATS-System.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GEMINI_API_KEY=your_gemini_api_key

JWT_SECRET=your_secret_key
```

---

# ▶️ Run Project Locally

## Start Backend

```bash
cd backend
npm start
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# 🤖 AI Prompt Functionality

The system compares:
- Resume Content
- Job Description

Then AI returns:
- ATS Score
- Strengths
- Missing Skills
- Suggestions

---

# 🔐 Authentication

Implemented secure authentication using:
- JWT Tokens
- Login API
- Signup API
- Protected User Sessions

---

# 🚀 Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render

## Database
- MongoDB Atlas

---

# 🚀 Future Improvements

- Dark Mode
- Resume History
- Download PDF Report
- AI Interview Questions
- Charts & Analytics
- Resume Improvement Generator
- Admin Dashboard

---

# 👩‍💻 Author

Shruti Yadav

GitHub:  
https://github.com/Shruti788

---

# ⭐ Support

If you like this project, give it a star ⭐ on GitHub.
