import Dashboard from "../components/Dashboard";
import Progress from "../components/Progress";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px"
      }}
    >
      <h1 style={{textAlign:"center"}}>
        📖 StudyGenie AI
      </h1>

      <p
        style={{
          textAlign:"center",
          marginTop:15,
          color:"#555"
        }}
      >
        Plan smarter, stay focused and achieve your learning goals.
      </p>

      <Dashboard />

      <Progress />

      <TaskForm />

      <TaskList />
    </div>
  );
}

export default Home;