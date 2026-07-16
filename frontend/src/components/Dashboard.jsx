function Dashboard() {
  const cards = [
    {
      title: "Total Tasks",
      value: 12,
      color: "#2563eb",
    },
    {
      title: "Completed",
      value: 5,
      color: "#16a34a",
    },
    {
      title: "Today's Tasks",
      value: 3,
      color: "#f97316",
    },
    {
      title: "Progress",
      value: "84%",
      color: "#9333ea",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            borderLeft: `6px solid ${card.color}`,
          }}
        >
          <h3
            style={{
              color: "#666",
              marginBottom: "10px",
            }}
          >
            {card.title}
          </h3>

          <h1 style={{ color: card.color }}>
            {card.value}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;