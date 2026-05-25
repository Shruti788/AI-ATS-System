import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({});

export async function generateContent(prompt) {
  try {
    const response = await ai.models.generateContent({
      // FIX: Update to the current developer model string
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error(`Failed to generate content: ${error.message}`);
  }
}

// This means hey geminiAI, here is my secret key,
// let's connect.