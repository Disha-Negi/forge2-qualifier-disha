import { useState } from "react";
import { generateStudyPlan } from "../api/gemini";

function AIPlanner({ tasks }) {
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (tasks.length === 0) {
      alert("Please add at least one task.");
      return;
    }

    try {
      setLoading(true);
      const result = await generateStudyPlan(tasks);
      setPlan(result);
    } catch (err) {
      console.error(err);
      alert("Failed to generate AI study plan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        width: "80%",
        margin: "30px auto",
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>🤖 AI Study Planner</h2>

      <button onClick={handleClick}>
        {loading ? "Generating..." : "Generate AI Study Plan"}
      </button>

      {plan && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
          {plan}
        </div>
      )}
    </div>
  );
}

export default AIPlanner;