import axios from "axios";

const API_URL = "http://localhost:5000";

export async function generateStudyPlan(tasks) {

  const response = await axios.post(
    `${API_URL}/api/study-plan`,
    { tasks }
  );

  return response.data.plan;
}