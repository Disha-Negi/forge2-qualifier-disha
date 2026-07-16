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
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
      }}
    >
      <h2>📚 StudyGenie AI</h2>

      <div style={{display:"flex",gap:"30px"}}>
        <span>Dashboard</span>
        <span>Tasks</span>
      </div>
    </nav>
  );
}

export default Navbar;