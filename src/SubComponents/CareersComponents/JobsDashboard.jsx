import React, { useState, useEffect } from "react";
import "../../Assets/css/JobDashboard.css";
import JobsForm from "./JobsForm";

import axios from "axios";
import { Link } from "react-router-dom";

function JobDashboard() {
  const [jobPosts, setJobPosts] = useState([{}]);
  const [formDisplay, setFormDisplay] = useState(false);
  const [selectedJobHeading, setSelectedJobHeading] = useState("");

  const jobDataCollection = [
    {
      uuid: "906d8d52-e9af-489b-9c79-f95e5388e948",
      jobHeading: "NODE JS",
      jobLocation: "Hyderabad",
      jobDescription: "Fresher",
      minExperience: "0",
      maxExperience: "5",
      jobPostedDate: "August 11, 2023",
      __v: 0
    },
    {
      uuid: "f45b3a7c-72e1-4e16-87f3-2cbe04d4e901",
      jobHeading: "Full Stack Developer",
      jobLocation: "Hyderabad",
      jobDescription: "Experienced developer for web applications",
      minExperience: "3",
      maxExperience: "7",
      jobPostedDate: "August 20, 2023",
      __v: 0
    },
    {
      uuid: "c7e1451b-82dd-4b14-bdb1-9db9e530193a",
      jobHeading: "Data Scientist",
      jobLocation: "Hyderabad",
      jobDescription: "Analyzing and interpreting complex data",
      minExperience: "2",
      maxExperience: "6",
      jobPostedDate: "August 28, 2023",
      __v: 0
    },
    {
      uuid: "8a527c75-9fc0-4e2f-b977-418fe1319d10",
      jobHeading: "UX/UI Designer",
      jobLocation: "Hyderabad",
      jobDescription: "Creating intuitive and visually appealing user interfaces",
      minExperience: "2",
      maxExperience: "5",
      jobPostedDate: "August 2, 2023",
      __v: 0
    },
    {
      uuid: "b0e6c198-51e5-4d8b-9269-26c0bdef93cd",
      jobHeading: "UI Path",
      jobLocation: "Hyderabad",
      jobDescription: "Developing and implementing UI Path",
      minExperience: "4",
      maxExperience: "8",
      jobPostedDate: "August 25, 2023",
      __v: 0
    }
  ];
  
  

  const handleGet = async () => {
    try {
      let response = await axios.get("http://localhost:5000/");
      setJobPosts(response.data);
    } catch (err) {
      alert("Error occured please try again later ");
    }
  };

  const formbutton = (jobHeading) => {
    setSelectedJobHeading(jobHeading);
    setFormDisplay(!formDisplay);
  };
  // useEffect(() => {
  //   handleGet();
  // }, []);

  //used to show latest job first
  const lastData = jobPosts.slice().reverse();

  return (
    <>
      <div >
        <div className="container jobs_container_title pt-5">
          <div class="section-title left-block text-center pt-3">
            <h6>Latest Jobs</h6>
          </div>
        </div>

        <div className="container jobs_container_content">
          {jobDataCollection.map((job, index) => (
            <div className="item-jobpost" key={index}>
              <div className="row">
                <div className="col-md-5">
                  <div className="posting">
                    {/* heading */}
                    <h5 className="heading">{job.jobHeading}</h5>
                    <span className="heading">{job.minExperience}</span>-<span className="heading">{job.maxExperience}</span>
                    <span  className="heading">Experience</span>

                    {/* discription */}
                    <p className="description">{job.jobDescription}</p>
                  </div>
                  <ul className="list-inline">
                    <li>
                      <label className="label bg-green lighten-1">
                        {job.jobPostedDate}
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 jobpost-location">
                  <h6>
                    <i className="fa fa-map-marker"></i>

                    {job.jobLocation}
                  </h6>
                </div>
                <div class="col-md-2 jobpost-apply-btn">
                  <Link
                    class="btn btn-primary"
                    role="button"
                    to='/contact'

                    // onClick={() => formbutton(job.jobHeading)}
                  >
                    {/* Apply Now */}
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {formDisplay && (
          <JobsForm
            jobHeading={selectedJobHeading}
            isOpen={formDisplay}
            onClose={() => setFormDisplay(false)}
          />
        )}

      </div>
    </>
  );
}
export default JobDashboard;