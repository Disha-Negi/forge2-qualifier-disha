import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

app.get("/", (req, res) => {
  res.json({
    message: "Study Planner AI Backend Running"
  });
});

app.post("/api/study-plan", async (req, res) => {
  try {

    const { tasks } = req.body;

    const prompt = `
You are an AI Study Planner.

Create a study schedule based on these tasks.

Tasks:
${JSON.stringify(tasks, null, 2)}

Return:
- Priority order
- Study schedule
- Productivity tips
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    res.json({
      plan: response.text,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});