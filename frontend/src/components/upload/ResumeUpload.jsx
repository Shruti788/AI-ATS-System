import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import API from "../../api/api"; // ✅ IMPORTANT CHANGE (central API)

function ResumeUpload() {

  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {

    if (!file) {
      alert("Please select resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", file);
      formData.append("jobDesc", jobDesc);

      // ✅ CLEAN API CALL (NO HARD-CODED URL)
      const response = await API.post("/resume/upload", formData);

      console.log(response.data);

      setResult(response.data.data);

    } catch (error) {
      console.log(error);
      alert("Upload failed");

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10 text-center">

      <FaFileUpload className="text-5xl text-blue-600 mx-auto mb-4" />

      <h2 className="text-2xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-3 rounded-lg w-full"
      />

      <textarea
        placeholder="Paste Job Description here..."
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
        className="border p-3 rounded-lg w-full mt-4 h-40"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {/* RESULT UI */}
      {result && (
        <div className="mt-8 p-6 bg-gray-100 rounded-xl text-left">

          <h2 className="text-2xl font-bold">
            ATS Score: {result.atsScore}/100
          </h2>

          <h3 className="mt-4 font-bold">Strengths</h3>
          <ul>
            {result.strengths?.map((item, i) => (
              <li key={i}>✅ {item}</li>
            ))}
          </ul>

          <h3 className="mt-4 font-bold">Missing Skills</h3>
          <ul>
            {result.missingSkills?.map((item, i) => (
              <li key={i}>❌ {item}</li>
            ))}
          </ul>

          <h3 className="mt-4 font-bold">Suggestions</h3>
          <ul>
            {result.suggestions?.map((item, i) => (
              <li key={i}>💡 {item}</li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}

export default ResumeUpload;