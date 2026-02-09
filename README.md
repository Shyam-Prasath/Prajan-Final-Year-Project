# 🧠 Early Detection Platform

An AI-powered web platform focused on **early disease detection, research collaboration, and user engagement**, built with modern full-stack technologies.

This project integrates secure authentication, database-driven forms, email notifications, and a clean UI/UX to support researchers, students, and healthcare professionals.

---

## 🚀 Features

### 🔐 Authentication
- User **Sign Up & Sign In**
- Secure credential validation
- Local storage–based session persistence
- User profile preview with initials / avatar
- Logout functionality

### 📩 Contact & Feedback System
- Fully functional **Contact Form**
- Saves submissions to database
- Sends:
  - 📬 **Admin notification email**
  - 📧 **Auto-reply confirmation email to user**
- Professionally designed HTML email templates

### 🎨 UI / UX
- Modern responsive layout
- Dark / Light theme toggle
- Animated buttons and hover effects
- Clean modal-based authentication dialogs
- Mobile-friendly navigation

---

## 🧱 Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- Context API for dialog & state handling

### Backend
- **Next.js API Routes**
- **MongoDB** with Mongoose
- **Nodemailer** for email delivery

### Authentication & State
- Custom credential authentication
- LocalStorage for lightweight user persistence

---

## 📁 Project Structure (Simplified)

```

src/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   └── contact/
│   └── layout.tsx
│
├── components/
│   ├── Auth/
│   ├── Layout/
│   └── Common/
│
├── models/
│   ├── User.ts
│   └── Contact.ts
│
├── lib/
│   └── db.ts
│
└── context/
└── AuthDialogContext.tsx

````

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string

CONTACT_EMAIL=your_admin_email@gmail.com
CONTACT_EMAIL_PASS=your_gmail_app_password

EMAIL_FROM=your_admin_email@gmail.com
````

⚠️ **Note:**
For Gmail, enable **App Passwords** (not your normal password).

---

## ▶️ Running the Project

```bash
npm install
npm run dev
```

Open:
👉 `http://localhost:3000`

---

## ✉️ Email Workflow

### On Contact Form Submission:

1. Data is stored in MongoDB
2. Admin receives a detailed HTML email
3. User receives an auto-reply confirmation email

Both emails are **professionally styled** for real-world use.

---

## 🛡️ Security Notes

* Passwords are securely handled
* Environment variables protect sensitive credentials
* API routes handle validation and errors gracefully

---

## 📌 Use Cases

* Final year engineering project
* Research collaboration platform
* Healthcare AI demo system
* Startup MVP foundation

---

## 👨‍💻 Author

Built with ❤️ and discipline by **Shyam Prasath**
Focused on clean architecture, real-world features, and production-ready code.

---

## 📄 License

This project is for educational and demonstration purposes.

```

---

If you want, next I can:
- ✨ tailor this README for **IEEE / academic submission**
- 🏢 rewrite it like a **startup pitch repo**
- 📄 convert it into **project documentation PDF**

Just say the word 👌