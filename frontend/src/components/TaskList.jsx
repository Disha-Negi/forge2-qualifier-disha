const tasks = [
  {
    title: "NLP Revision",
    priority: "High",
  },
  {
    title: "Forge Project",
    priority: "Medium",
  },
  {
    title: "DSA Practice",
    priority: "High",
  },
];

function TaskList() {
  return (
    <div
      style={{
        marginTop: "35px",
      }}
    >
      <h2>Today's Tasks</h2>

      {tasks.map((task) => (
        <div
          key={task.title}
          style={{
            background: "white",
            marginTop: "15px",
            padding: "20px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0 8px 18px rgba(0,0,0,.08)",
          }}
        >
          <div>
            <h3>{task.title}</h3>
          </div>

          <span
            style={{
              background:
                task.priority === "High"
                  ? "#ef4444"
                  : "#f59e0b",
              color: "white",
              padding: "6px 12px",
              borderRadius: "20px",
            }}
          >
            {task.priority}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;