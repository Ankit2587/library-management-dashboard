# 📚 Library Management Dashboard

A professional Library Management Dashboard built using **HTML, CSS, JavaScript, Node.js, and Express.js**.

---

## 🚀 Features

### Dashboard
- Total Books Count
- Available Books Count
- Unavailable Books Count
- Total Categories Count
- Recent Activity Section
- API Status Indicator

### Books Management
- View All Books
- Search Books
- Add New Book
- Delete Book
- Book Availability Status
- Responsive Table Layout

### UI/UX Features
- Professional Dashboard Design
- Responsive Layout
- Sidebar Navigation
- SweetAlert2 Notifications
- Custom Delete Confirmation
- Loading Spinner During API Requests
- Custom 404 Page

### Backend Features
- Express.js REST API
- JSON File Storage
- Modular Folder Structure
- Error Handling Middleware

---

# 🛠️ Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- SweetAlert2

## Backend
- Node.js
- Express.js

---

# 📂 Project Structure

```text
library-management-dashboard
│
├── client
│   ├── css
│   ├── js
│   ├── pages
│   └── index.html
│
├── server
│   ├── controllers
│   ├── data
│   │   └── books.json
│   ├── middleware
│   ├── routes
│   ├── services
│   └── app.js
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/library-management-dashboard.git
```

## Move Into Project

```bash
cd library-management-dashboard
```

## Install Dependencies

```bash
cd server
npm install
```

## Start Server

```bash
npm run dev
```

Server will run on:

```text
http://localhost:5000
```

---

# 📡 API Endpoints

## Get All Books

```http
GET /api/books
```

## Get Book By ID

```http
GET /api/books/:id
```

Example:

```http
GET /api/books/1
```

---

## Search Books

```http
GET /api/books/search?title=clean
```

---

## Get Books By Category

```http
GET /api/books/category/Programming
```

---

## Add Book

```http
POST /api/books
```

Request Body:

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "category": "Programming",
  "publishedYear": 2008,
  "available": true
}
```

---

## Update Book

```http
PUT /api/books/:id
```

---

## Delete Book

```http
DELETE /api/books/:id
```

---

# 📊 Dashboard Statistics

The dashboard displays:

- Total Books
- Available Books
- Unavailable Books
- Total Categories

All statistics are generated dynamically from API data.

---

# 🔔 Notifications

The project uses **SweetAlert2** for:

- Success Messages
- Error Messages
- Warning Messages
- Delete Confirmation Dialogs

---

# 📱 Responsive Design

The dashboard is fully responsive and works on:

- Desktop
- Tablet
- Mobile Devices

---

# 🧪 Testing

API endpoints were tested using:

- Postman
- Browser
- Fetch API

---

# 👨‍💻 Author

**Ankit Sharma**

B.Tech Computer Science Engineering  
UPES Dehradun

---

# 📜 License

This project is created for educational and learning purposes.