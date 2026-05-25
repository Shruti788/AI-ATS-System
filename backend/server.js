import express from "express"
import cors from "cors"
import resumeRoutes from "./src/routes/resumeRoutes.js"
import dotenv from "dotenv"
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";

connectDB();

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/resume", resumeRoutes)
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("ATS Backend Running")
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})