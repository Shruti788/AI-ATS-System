import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:5000/api/resume/all");
      setResumes(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Stats calculation
  const total = resumes.length;

  const selected = resumes.filter(
    (r) => r.atsScore >= 70
  ).length;

  const rejected = total - selected;

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-6">
        ATS Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {/* Total Resumes */}
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold">
            Total Resumes
          </h2>

          <p className="text-3xl mt-4">
            {total}
          </p>
        </div>

        {/* Selected */}
        <div className="bg-green-50 shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold text-green-700">
            Selected Candidates
          </h2>

          <p className="text-3xl mt-4 text-green-700">
            {selected}
          </p>
        </div>

        {/* Rejected */}
        <div className="bg-red-50 shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold text-red-700">
            Rejected
          </h2>

          <p className="text-3xl mt-4 text-red-700">
            {rejected}
          </p>
        </div>

      </div>

      {/* Optional: Recent Applications */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Recent Applications
        </h2>

        <div className="grid gap-4">

          {resumes.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow">

              <div className="flex justify-between">
                <h3 className="font-bold">
                  ATS Score: {item.atsScore}/100
                </h3>

                <span className={
                  item.atsScore >= 70
                    ? "text-green-600 font-bold"
                    : "text-red-500 font-bold"
                }>
                  {item.atsScore >= 70 ? "Selected" : "Rejected"}
                </span>
              </div>

              <p className="text-gray-600 mt-2">
                {item.jobDescription?.slice(0, 120)}...
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Dashboard;