import { BrowserRouter, Route, Routes,HashRouter as Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { ToastContainer } from 'react-toastify';
import Job from "./components/Job/Job";
import JobDetails from "./components/JodDetails/JobDetails";
import SavedJob from "./components/SavedJob/SavedJob";
import Appliedjob from "./components/Appliedjob/Appliedjob";
 



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job" element={<Job />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/job-saved" element={<SavedJob />} />
          <Route path="/applied-job" element={<Appliedjob />} />
          
        </Routes>
          <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
