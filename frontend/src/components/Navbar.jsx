import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        📚 StudyGenie AI
      </div>

      <div className="links">
        <span>Dashboard</span>
        <span>Tasks</span>
        <span>Progress</span>
      </div>
    </nav>
  );
}

export default Navbar;