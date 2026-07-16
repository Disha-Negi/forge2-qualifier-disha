import "../styles/tasklist.css";

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}) {

  return (

    <div className="task-list">

      <h2>Today's Tasks</h2>

      {

        tasks.length === 0 ?

        <p>No tasks yet. Add your first task!</p>

        :

        tasks.map(task=>(

          <div
            className="task"
            key={task.id}
          >

            <input
              type="checkbox"
              checked={task.completed}
              onChange={()=>toggleTask(task.id)}
            />

            <div
  className="task-info"
  style={{
    flex: 1,
  }}
>
  <h3>{task.title}</h3>

  <p>
    {task.subject} • {task.priority} • {task.date}
  </p>
</div>

<button
  onClick={() => deleteTask(task.id)}
  style={{
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Delete
</button>

          </div>

        ))

      }

    </div>

  );
}

export default TaskList;