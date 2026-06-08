import {
  FaHome,
  FaTasks,
  FaCheckCircle,
  FaHourglassHalf,
  FaRocket,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./style/App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import TaskStats from "./components/TaskStats";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get("https://task-manager-r36g.onrender.com/api/tasks")
    .then((response) => {
      setTasks(
        [...response.data].reverse()
      );
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const taskListRef = useRef(null);

  const addTask = async (task) => {
  try {
    const response = await axios.post(
  "https://task-manager-r36g.onrender.com/api/tasks",
  task
);

   setTasks([
  response.data.task,
  ...tasks,
]);

    setShowForm(false);
  } catch (error) {
    console.error(error);
  }
};

 const toggleTask = async (id) => {
  try {
    await axios.patch(
  `https://task-manager-r36g.onrender.com/api/tasks/${id}/toggle`
)
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  } catch (error) {
    console.error(error);
  }
};

 const deleteTask = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (confirmDelete) {
    try {
      await axios.delete(
  `https://task-manager-r36g.onrender.com/api/tasks/${id}`
)
      setTasks(
        tasks.filter(
          (task) => task.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  }
};

  const editTask = async (id, newTitle) => {
  try {
    await axios.put(
  `https://task-manager-r36g.onrender.com/api/tasks/${id}`,
      {
        title: newTitle,
      }
    );

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle,
            }
          : task
      )
    );
  } catch (error) {
    console.error(error);
  }
};
  const filteredTasks = tasks.filter(
    (task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      if (filter === "active") {
        return (
          !task.completed &&
          matchesSearch
        );
      }

      if (filter === "completed") {
        return (
          task.completed &&
          matchesSearch
        );
      }

      return matchesSearch;
    }
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}

      <div className="sidebar">
         <h2 className="logo">
  <FaHome /> Dashboard
</h2>


        <button
  className="add-task-btn"
  onClick={() => {
    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }}
>
  + Add Task
</button>

        <div className="sidebar-menu">
          <button
            className={
              filter === "all"
                ? "active-menu"
                : ""
            }
           onClick={() => {
  setFilter("all");

  taskListRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}
          >
            <FaTasks /> All Tasks
          </button>

          <button
            className={
              filter === "active"
                ? "active-menu"
                : ""
            }
           onClick={() => {
  setFilter("active");

  taskListRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}
          >
            <FaHourglassHalf /> Active
          </button>

          <button
            className={
              filter === "completed"
                ? "active-menu"
                : ""
            }
            onClick={() => {
  setFilter("completed");

  taskListRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}
          >
            <FaCheckCircle /> Completed
          </button>
        </div>
      </div>

      {/* Main Content */}

      <div className="main-content">
        <div className="dashboard-header">
          <h1>
  <FaRocket /> Personal Task Manager
</h1>

          <p>
            Track, organize and
            complete your tasks
            efficiently
          </p>
        </div>

        <TaskStats tasks={tasks} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={
            setSearchTerm
          }
        />

       {showForm && (
  <div ref={formRef}>
    <TaskForm addTask={addTask} />
  </div>
)}

        <div ref={taskListRef}>
  <TaskList
    tasks={filteredTasks}
    toggleTask={toggleTask}
    deleteTask={deleteTask}
    editTask={editTask}
  />
</div>
      </div>
    </div>
  );
}

export default App;