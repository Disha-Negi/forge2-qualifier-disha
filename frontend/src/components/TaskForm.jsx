function TaskForm() {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        marginTop: "35px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      <h2>Add Study Task</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr auto",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input placeholder="Task Title" />

        <select>
          <option>DSA</option>
          <option>NLP</option>
          <option>OS</option>
        </select>

        <select>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input type="date" />

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 18px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TaskForm;