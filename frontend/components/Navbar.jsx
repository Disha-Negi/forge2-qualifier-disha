function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>AI Study Planner</h2>

      <div>
        <span style={{ marginRight: "20px" }}>Dashboard</span>
        <span>Tasks</span>
      </div>
    </nav>
  );
}

export default Navbar;