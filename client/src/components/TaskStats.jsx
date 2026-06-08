function TaskStats({ tasks }) {
  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h2>{activeTasks}</h2>
        <p>Active Tasks</p>
      </div>

      <div className="stat-card">
        <h2>{completedTasks}</h2>
        <p>Completed Tasks</p>
      </div>

      <div className="stat-card">
        <h2>{tasks.length}</h2>
        <p>Total Tasks</p>
      </div>
    </div>
  );
}

export default TaskStats;