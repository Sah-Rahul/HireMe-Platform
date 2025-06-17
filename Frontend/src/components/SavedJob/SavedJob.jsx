import React, { useState, useEffect } from "react";

const SavedJob = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSavedJobs(jobs);
  }, []);

  const removeJob = (job_id) => {
    const filteredJobs = savedJobs.filter((job) => job.job_id !== job_id);
    setSavedJobs(filteredJobs);
    localStorage.setItem("savedJobs", JSON.stringify(filteredJobs));
  };

  if (savedJobs.length === 0)
    return (
      <div className="p-6 text-center text-gray-500 text-lg font-medium">
        No saved jobs found.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Saved Jobs</h1>

      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-green-600 text-white uppercase text-sm tracking-wider">
              <th className="py-3 px-6 text-left border-r border-green-700">Company</th>
              <th className="py-3 px-6 text-left border-r border-green-700">Location</th>
              <th className="py-3 px-6 text-left border-r border-green-700">Date Posted</th>
              <th className="py-3 px-6 text-left border-r border-green-700">Status</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {savedJobs.map((job) => (
              <tr
                key={job.job_id}
                className="hover:bg-green-50 border-b border-gray-200"
              >
                <td className="py-4 px-6 border-r border-gray-200">{job.employer_name || "N/A"}</td>
                <td className="py-4 px-6 border-r border-gray-200">{job.job_city || "N/A"}</td>
                <td className="py-4 px-6 border-r border-gray-200">{job.job_posted_at || "N/A"}</td>
                <td className="py-4 px-6 border-r border-gray-200">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      job.job_is_active
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {job.job_is_active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => removeJob(job.job_id)}
                    className="bg-red-600  cursor-pointer hover:bg-red-700 text-white px-4 py-2 rounded transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SavedJob;
