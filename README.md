# Personal Task Manager

## Project Overview

Personal Task Manager is a full-stack web application built using React and Node.js. The application helps users organize and manage their daily tasks efficiently through a clean dashboard interface.

Users can create, edit, delete, search, filter, and track the completion status of tasks. The application follows a full-stack architecture with a React frontend, Express backend, and JSON-based data persistence.

This project was developed as part of the Studio Graphene Full Stack Developer Assessment.

---

# GitHub Repository

Repository Link:

https://github.com/Harsh1001-1/Task-Manager

---

# Live Demo

Frontend: Not Deployed Yet

Backend: Not Deployed Yet

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

## Data Storage

* JSON File Storage (`tasks.json`)

## Tools

* Git
* GitHub
* VS Code
* Postman

---

# Features

## Task Management

* Create new tasks
* View all tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Mark tasks as active

## Filtering

* View All Tasks
* View Active Tasks
* View Completed Tasks

## Search

* Search tasks by title

## Statistics Dashboard

* Total Tasks Count
* Active Tasks Count
* Completed Tasks Count

## Additional Features

* Overdue Task Highlighting
* Confirmation Before Delete
* Persistent Data Storage
* Responsive Dashboard Layout
* Sidebar Navigation
* Modern UI Design

---

# Screenshots

Add screenshots of the application here before submission.

Example:

* Dashboard View
* Add Task Form
* Task Statistics
* Task Filtering

---

# Project Structure

```text
taskmanager/
│
├── client/
│   ├── src/
│   │
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskStats.jsx
│   │
│   ├── style/
│   │   └── App.css
│   │
│   ├── App.jsx
│   │
│   └── main.jsx
│
├── server/
│   │
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
│   │
│   └── package.json
│
├── .gitignore
│
└── README.md
```

---

# API Documentation

## Get All Tasks

### Request

```http
GET /api/tasks
```

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

## Create Task

### Request

```http
POST /api/tasks
```

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

## Update Task

### Request

```http
PUT /api/tasks/:id
```

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

## Delete Task

### Request

```http
DELETE /api/tasks/:id
```

### Response

```json
{
  "message": "Task deleted successfully"
}
```

---

## Toggle Task Status

### Request

```http
PATCH /api/tasks/:id/toggle
```

### Response

```json
{
  "message": "Task status updated successfully"
}
```

---

# How To Run Locally

## Prerequisites

Install:

* Node.js
* Git

---

## Clone Repository

```bash
git clone https://github.com/Harsh1001-1/Task-Manager.git
```

```bash
cd Task-Manager
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Design Decisions

## Why React?

React provides component-based architecture and efficient state management for building dynamic user interfaces.

## Why Express?

Express offers a lightweight and flexible framework for building REST APIs.

## Why JSON File Storage?

The assessment allowed in-memory storage, JSON files, or SQLite. JSON file storage was chosen because it provides persistence without requiring database setup.

---

# Challenges Faced

* Integrating React frontend with Express backend
* Implementing task persistence using file storage
* Managing CRUD operations across frontend and backend
* Maintaining responsive UI layout

---

# Future Improvements

Given more time, the following features would be added:

* User Authentication
* Task Categories
* Task Priority Levels
* Drag and Drop Reordering
* Toast Notifications
* Dark Mode
* Unit Testing
* Pagination
* Cloud Database Integration
* Deployment on Vercel and Render

---

# Assessment Requirements Covered

### Must Have

* Add Task
* View Tasks
* Edit Task
* Delete Task
* Toggle Completion Status
* Filter Tasks

### Should Have

* Task Statistics
* Overdue Task Highlighting
* Empty State UI

### Nice To Have

* Search Tasks
* Persistent Storage using JSON File

---

# Author

Harsh Chauhan

B.Tech Computer Science & Engineering

Graphic Era Hill University

GitHub:
https://github.com/Harsh1001-1

---
