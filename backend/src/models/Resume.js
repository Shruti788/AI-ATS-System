import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    resumeText: String,
    jobDescription: String,

    atsScore: Number,
    strengths: [String],
    missingSkills: [String],
    suggestions: [String]
  },
  { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);