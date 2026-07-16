function Progress() {
  return (
    <div
      style={{
        background: "white",
        marginTop: "35px",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      <h2>📈 Weekly Progress</h2>

      <div
        style={{
          background: "#ddd",
          height: "18px",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: "70%",
            background: "#2563eb",
            height: "100%",
          }}
        ></div>
      </div>

      <p style={{ marginTop: "10px" }}>
        You completed 70% of your weekly goal.
      </p>
    </div>
  );
}

export default Progress;