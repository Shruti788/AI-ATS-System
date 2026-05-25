import express from "express"
import { uploadResume, getAllResumes } from "../controllers/resumeController.js"
import upload from "../config/multer.js"

const router = express.Router()

router.post("/upload", upload.single("resume"), uploadResume)
router.get("/all", getAllResumes);

export default router