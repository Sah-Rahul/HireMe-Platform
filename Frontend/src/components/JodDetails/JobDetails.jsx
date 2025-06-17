import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";

const JobDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const job = location.state?.job;

  if (!job)
    return <p className="text-center mt-10 text-lg">Job details not found.</p>;

  const saveJobToLocalStorage = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const isAlreadySaved = savedJobs.some((j) => j.job_id === job.job_id);

    if (isAlreadySaved) {
      toast.error("Job already saved.");
      return;
    }

    savedJobs.push(job);
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    toast.success("Job saved successfully!");
  };

  const [modal, setModal] = useState(false);
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    linkdin: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setValue((prev) => ({ ...prev, file: files[0] }));
    } else {
      setValue((prev) => ({ ...prev, [name]: value }));
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, linkdin, file } = value;

    if (!fullname || !email || !linkdin || !file) {
      toast.error("Please fill all fields and upload resume.");
      return;
    }

    toast.success(`Applied successfully as ${fullname}`);
    const saveApplyJob = localStorage.setItem( "ApplyJob", JSON.stringify(value))
    setModal(false);
    console.log("Application Data:", value);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 px-6 py-10 md:px-20">
      <Link to={"/"}>
        <h1 className="text-3xl font-semibold text-green-600">JobHub</h1>
      </Link>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          {job.job_title}
        </h2>
        <div className="flex flex-col md:flex-row justify-between text-gray-600 mb-4">
          <p>
            <strong>Company:</strong> {job.employer_name}
          </p>
          <p>
            <strong>Location:</strong> {job.job_city || "N/A"}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Job Description:</h3>
          <p className="text-gray-700 leading-relaxed">
            {job.job_description.slice(0, 500)}...
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Job Highlights:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {job.job_highlights?.Qualifications?.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            onClick={saveJobToLocalStorage}
            className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow-md transition"
          >
            Save Job
          </button>
          <button
            onClick={() => setModal(true)}
            className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow-md transition"
          >
            Apply Now
          </button>
        </div>

        {/* MODAL */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="h-[640px] w-[450px] shadow-2xl rounded-md bg-white relative">
              <div className="h-12 flex items-center justify-between p-5 border-b-2">
                <p className="text-[20px] font-semibold text-green-600">
                  Apply for this Job
                </p>
                <button
                  onClick={() => setModal(false)}
                  className="text-gray-600 text-2xl hover:rotate-90 transition-transform duration-200 cursor-pointer"
                >
                  <RxCross1 />
                </button>
              </div>
              <div className="p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      onChange={handleChange}
                      name="fullname"
                      type="text"
                      placeholder="e.g. Jane Doe"
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      onChange={handleChange}
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      LinkedIn Profile URL
                    </label>
                    <input
                      onChange={handleChange}
                      name="linkdin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Resume
                    </label>
                    <div className="mt-1 p-4 h-44 w-full border-2 border-dashed border-gray-300 rounded-md text-center flex flex-col items-center justify-center gap-2 cursor-pointer">
                      <FiUpload className="text-3xl text-green-600" />
                      <p className="font-medium">
                        Upload a file or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                      <input
                        onChange={handleChange}
                        name="file"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="absolute w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    {value.file && (
                      <p className="text-sm text-green-600 mt-2">
                        Selected: {value.file.name}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => setModal(false)}
                      type="button"
                      className="cursor-pointer mr-2 px-4 py-2 bg-gray-200 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 cursor-pointer text-white rounded-md"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
