import "../styles/dashboard.css";

function Dashboard({ tasks }) {

  const completed = tasks.filter(t => t.completed).length;

  const pending = tasks.length - completed;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (

    <div className="dashboard">

      <div className="card blue">
        <h3>Total Tasks</h3>
        <h1>{tasks.length}</h1>
      </div>

      <div className="card green">
        <h3>Completed</h3>
        <h1>{completed}</h1>
      </div>

      <div className="card orange">
        <h3>Pending</h3>
        <h1>{pending}</h1>
      </div>

      <div className="card purple">
        <h3>Progress</h3>
        <h1>{progress}%</h1>
      </div>

    </div>

  );
}

export default Dashboard;