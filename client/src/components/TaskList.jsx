import { useState } from "react";
function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
}) {
  const [editingId, setEditingId] = useState(null);
const [editTitle, setEditTitle] = useState("");
const [editDescription, setEditDescription] = useState("");
const [editDueDate, setEditDueDate] = useState("");
  return (
    <div>
     <h2 className="task-list-title">
  Task List
</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
         <div
  className="task-card"
  key={task.id}
  style={{
    border:
      task.dueDate &&
      new Date(task.dueDate) < new Date() &&
      !task.completed
        ? "2px solid red"
        : "1px solid gray",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  }}
>
           {editingId === task.id ? (
  <>
    <input
      type="text"
      value={editTitle}
      onChange={(e) =>
        setEditTitle(e.target.value)
      }
    />

    <br /><br />

    <textarea
      value={editDescription}
      onChange={(e) =>
        setEditDescription(e.target.value)
      }
    />

    <br /><br />

    <input
      type="date"
      value={editDueDate}
      onChange={(e) =>
        setEditDueDate(e.target.value)
      }
    />
    <button
  onClick={() => {
    editTask(task.id, editTitle);
    setEditingId(null);
  }}
>
  Save
</button>
  </>
) : (
  <>
    <h3>{task.title}</h3>

    <p>{task.description}</p>

    <p>{task.dueDate}</p>
  </>
)}

            <p
  className={
    task.completed
      ? "status-completed"
      : "status-active"
  }
>
  Status: {task.completed ? "Completed" : "Active"}
</p>

            <button
  className="complete-btn"
  onClick={() => toggleTask(task.id)}
>
              {task.completed
                ? "Mark Active"
                : "Mark Complete"}
            </button>
        
 <button
  className="edit-btn"
  onClick={() => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditDueDate(task.dueDate);
  }}
>
  Edit
</button>

            <button
  className="delete-btn"
  onClick={() => deleteTask(task.id)}
>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;