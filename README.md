# Personal Task Manager

## Project Overview

I chose Exercise 1, the Personal Task Manager. The application is a full-stack task management system built using React and Node.js. It allows a user to create, edit, delete, search, filter, and manage tasks efficiently through a clean dashboard interface.
The application supports task persistence using a JSON file on the backend, ensuring tasks remain available even after server restarts. Users can also track completed and active tasks through real-time statistics and visually identify overdue tasks.

---

# Live Demo Links

Frontend:
https://task-manager-six-tau-87.vercel.app

Backend:
https://task-manager-r36g.onrender.com

---

# Tech Stack

## Frontend

* React (Vite)
* Axios
* React Icons
* CSS3

## Backend

* Node.js
* Express.js

## Storage

* JSON File Storage (`server/data/tasks.json`)

## Development Tools

* Git
* GitHub
* VS Code
* Postman

---

# How to Run Locally

## Install Dependencies

Backend:

```bash
cd server
npm install
```

Frontend:

```bash
cd client
npm install
```

## Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

## Start Frontend

Open a second terminal:

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Documentation

## Base URL

```text
http://localhost:5000/api/tasks
```

---

## GET /api/tasks

Returns all saved tasks.

### Response

```json
[
  {
    "id": 1,
    "title": "Learn React",
    "description": "Practice Hooks",
    "dueDate": "2026-06-10",
    "completed": false
  }
]
```

---

## POST /api/tasks

Creates a new task.

### Request Body

```json
{
  "title": "Learn React",
  "description": "Practice Hooks",
  "dueDate": "2026-06-10"
}
```

### Response

```json
{
  "message": "Task created successfully"
}
```

---

## PUT /api/tasks/:id

Updates a task.

### Request Body

```json
{
  "title": "Updated Task"
}
```

### Response

```json
{
  "message": "Task updated successfully"
}
```

---

## PATCH /api/tasks/:id/toggle

Toggles task completion status.

### Response

```json
{
  "message": "Task status updated successfully"
}
```

---

## DELETE /api/tasks/:id

Deletes a task.

### Response

```json
{
  "message": "Task deleted successfully"
}
```

---

# Project Structure

```text
Task-Manager/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── TaskStats.jsx
│   │   │
│   │   ├── style/
│   │   │   └── App.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── data/
│   │   └── tasks.json
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Features Implemented

## Must Have

* Add a new task
* View all tasks
* Edit tasks
* Delete tasks with confirmation
* Toggle task completion
* Filter by:

  * All
  * Active
  * Completed

## Should Have

* Active vs Completed task statistics
* Overdue task highlighting
* Empty state UI

## Nice To Have

* Search tasks by title
* Persistent JSON storage

---

# What Works

* Add task with title, description, and due date
* Edit task title
* Delete task with confirmation
* Toggle completion status
* Filter tasks by status
* Search tasks by title
* Display task statistics
* Highlight overdue tasks
* Persist tasks using JSON file storage
* Responsive layout for mobile devices
* Full frontend-backend integration

---

# Challenges Faced

* Connecting React frontend with Express backend
* Managing task persistence through file storage
* Implementing RESTful CRUD operations
* Deploying frontend and backend separately
* Handling CORS and production API URLs

---

# Next Steps

If given more time, I would add:

* User Authentication
* Task Priority Levels
* Drag-and-Drop Task Reordering
* Toast Notifications
* Dark Mode
* Automated Unit Tests
* SQLite or MongoDB Integration
* Environment Variable Configuration
* Task Categories and Tags

---

# Production Note

This project uses JSON file storage for simplicity and assessment purposes. In a production environment, task data would typically be stored in a database such as PostgreSQL, MySQL, MongoDB, or SQLite to provide scalability and reliability.

---

# Author

Harsh Chauhan

B.Tech Computer Science & Engineering

Graphic Era Hill University

