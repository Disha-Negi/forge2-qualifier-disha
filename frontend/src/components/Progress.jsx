import "../styles/progress.css";

function Progress({ tasks }) {

  const completed = tasks.filter(t => t.completed).length;

  const percent =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (

    <div className="progress-box">

      <h2>📈 Weekly Progress</h2>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />

      </div>

      <p>{percent}% completed</p>

    </div>

  );
}

export default Progress;