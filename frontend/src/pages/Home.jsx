import { useEffect, useState } from "react";

import "../styles/home.css";
import AIPlanner from "../components/AIPlanner";
import Dashboard from "../components/Dashboard";
import Progress from "../components/Progress";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("studyTasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        completed: false,
        ...task,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="hero">
        <h1>📖 StudyGenie AI</h1>

        <p>
          Plan smarter, stay focused and complete your goals.
        </p>
      </div>

      <Dashboard tasks={tasks} />

      <Progress tasks={tasks} />

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      <AIPlanner tasks={tasks} />
    </div>
  );
}

export default Home;