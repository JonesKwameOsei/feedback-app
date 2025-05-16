# 🚀 Feedback App Frontend

A modern, interactive feedback application built with React. This project allows users to submit, view, and manage feedback with a beautiful UI and smooth user experience.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [📁 Project Structure](#-project-structure)
- [⚙️ Main Components](#️-main-components)
- [🎨 Styling](#-styling)
- [📦 Data](#-data)
- [📄 Pages](#-pages)
- [🧩 Context](#-context)
- [🚦 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

---

## ✨ Features

- 🌟 Submit feedback with a rating and review text
- 📊 View average rating and total reviews
- 🗑️ Delete feedback with confirmation
- 📝 Edit existing feedback
- ⭐ Visual star ratings
- 🧭 About page with navigation
- 🎨 Responsive and modern UI

---

## 📁 Project Structure

```
feedback-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Button.jsx
│   │   │   └── Card.jsx
│   │   ├── AboutIconLink.jsx
│   │   ├── FeedbackForm.jsx
│   │   ├── FeedbackItem.jsx
│   │   ├── FeedBackList.jsx
│   │   ├── FeedbackStats.jsx
│   │   ├── Header.jsx
│   │   └── RatingSelect.jsx
│   ├── context/
│   │   └── FeedbackContext.jsx
│   ├── data/
│   │   └── FeedBackData.jsx
│   ├── pages/
│   │   └── AboutPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

---

## ⚙️ Main Components

- **`Header.jsx`** 🏷️ — App header with title
- **`FeedbackForm.jsx`** 📝 — Form for submitting new feedback
- **`FeedbackItem.jsx`** ⭐ — Displays individual feedback with rating and actions
- **`FeedBackList.jsx`** 📋 — Lists all feedback items
- **`FeedbackStats.jsx`** 📊 — Shows total reviews and average rating
- **`AboutIconLink.jsx`** ❓ — Floating question mark icon for About navigation
- **`RatingSelect.jsx`** 🔢 — Rating selection UI
- **`shared/Button.jsx`** & **`shared/Card.jsx`** 🃏 — Reusable UI components

---

## 🎨 Styling

- **`index.css`** 🎨 — Custom styles for layout, cards, buttons, ratings, and responsiveness
- Uses [Poppins](https://fonts.google.com/specimen/Poppins) font for a modern look
- Color palette: `#202142` (background), `#ff6a95` (accents)

---

## 📦 Data

- **`FeedBackData.jsx`** — Sample feedback data for initial state and testing

---

## 📄 Pages

- **`AboutPage.jsx`** 📖 — Simple About page describing the app

---

## 🧩 Context

- **`FeedbackContext.jsx`** 🧠 — Provides global state for feedback items and actions (add, delete, update)

---

## 🚦 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/feedback-app.git
   cd feedback-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## 📝 License

This project is not licensed.
