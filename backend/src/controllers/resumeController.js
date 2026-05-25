import { generateContent } from "../config/gemini.js";
import pdfParse from "pdf-parse-fork";
import Resume from "../models/Resume.js";

/* =========================
   1. UPLOAD + AI ANALYSIS
========================= */
export async function uploadResume(req, res) {
  try {
    // Check file
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({
        success: false,
        message: "No resume file uploaded."
      });
    }

    // Extract PDF text
    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text;

    // Job description
    const jobDescription = req.body.jobDesc || "";

    // AI Prompt
    const prompt = `
You are an expert ATS (Applicant Tracking System).

Compare RESUME with JOB DESCRIPTION.

Return ONLY valid JSON:

{
  "atsScore": number (0-100),
  "strengths": [],
  "missingSkills": [],
  "suggestions": []
}

RULES:
- Strict evaluation
- Max 5 items per array
- No extra text

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}
`;

    // Gemini AI call
    const result = await generateContent(prompt);
    const text = result?.response?.text?.() || result;

    let data;

    try {
      const cleanedText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      data = JSON.parse(cleanedText);

    } catch (error) {
      console.log("Raw AI response:", text);

      return res.status(500).json({
        success: false,
        message: "AI returned invalid JSON"
      });
    }

    // Save to DB
    await Resume.create({
      resumeText,
      jobDescription,
      atsScore: data.atsScore || 0,
      strengths: data.strengths || [],
      missingSkills: data.missingSkills || [],
      suggestions: data.suggestions || []
    });

    // Response
    return res.json({
      success: true,
      data
    });

  } catch (err) {
    console.error("Upload Error:", err);

    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

/* =========================
   2. DASHBOARD API
========================= */
export async function getAllResumes(req, res) {
  try {
    const data = await Resume.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      data
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}