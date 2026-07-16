import { useState } from "react";

import "../styles/taskform.css";

function TaskForm({ addTask }) {

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("DSA");
  const [priority, setPriority] = useState("High");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      title,
      subject,
      priority,
      date,
    });

    setTitle("");
    setDate("");
  };

  return (

    <div className="task-form">

      <h2>Add Study Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <select
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        >

          <option>DSA</option>
          <option>DBMS</option>
          <option>OS</option>
          <option>CN</option>
          <option>Java</option>
          <option>React</option>

        </select>

        <select
          value={priority}
          onChange={(e)=>setPriority(e.target.value)}
        >

          <option>High</option>
          <option>Medium</option>
          <option>Low</option>

        </select>

        <input
          type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />

        <button>
          Add
        </button>

      </form>

    </div>

  );
}

export default TaskForm;