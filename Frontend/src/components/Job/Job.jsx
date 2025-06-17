import React, { useEffect, useState } from "react";
import { getJobs } from "../getjob/getJob";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    query: "developer",
    country: "us",
    date_posted: "all",
    limit: 5,
  });

  const fetchJobs = async () => {
    setLoading(true);
    const data = await getJobs({ ...filters, page });
    setJobs(data?.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [filters, page]);

  const handleFilterChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setPage(1); // Reset to page 1 on filter change
  };

  return (
    <>
      {/* Navbar with green gradient */}
      <nav className="h-24 bg-gradient-to-r from-green-600 via-green-700 to-green-800 flex items-center px-10 shadow-md">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">JobsHub</h1>
        </Link>
      </nav>

      <div className="min-h-screen flex px-4 md:px-16 py-10 gap-8 bg-gray-50">
        {/* Sidebar Filters */}
        <aside className="w-1/4 hidden md:block bg-white shadow-md p-6 rounded-lg space-y-6">
          <h2 className="text-xl font-semibold mb-4">Filter Jobs</h2>

          <div>
            <label className="block mb-1">Location</label>
            <select
              name="query"
              onChange={handleFilterChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="developer">All</option>
              <option value="delhi">Kathmandu</option>
              <option value="delhi">Pokhara</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Posted</label>
            <select
              name="date_posted"
              onChange={handleFilterChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="all">Any Time</option>
              <option value="today">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Results Per Page</label>
            <select
              name="limit"
              onChange={handleFilterChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

          {loading ? (
            <Loader />
          ) : jobs.length === 0 ? (
            <p>
              Oops! No jobs found. It's possible the API limit has been reached
              — you can try again next month. Thanks for your patience!
            </p>
          ) : (
            jobs.map((job, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{job.job_title}</h3>
                <p className="text-sm text-gray-500">
                  Location: {job.job_city || "N/A"} | Company:{" "}
                  {job.employer_name}
                </p>
                <p className="mt-2 text-gray-700">
                  {job.job_description.slice(0, 150)}...
                </p>
                <Link
                  to={`/job-details/${job.job_id}`}
                  state={{ job }}
                  rel="noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                >
                  Apply Now
                </Link>
              </div>
            ))
          )}

          {/* Pagination */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              disabled={page === 1}
            >
              Prev
            </button>
            <span className="px-4 py-2">{page}</span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Job;
