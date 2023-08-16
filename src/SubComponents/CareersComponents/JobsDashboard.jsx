import React, { useState, useEffect } from "react";
import "../../Assets/css/JobDashboard.css";
import JobsForm from "./JobsForm";

import axios from "axios";

function JobDashboard() {
  const [jobPosts, setJobPosts] = useState([{}]);
  const [formDisplay, setFormDisplay] = useState(false);
  const [selectedJobHeading, setSelectedJobHeading] = useState("");

  const handleGet = async () => {
    try {
      let response = await axios.get("http://localhost:5000/");
      console.log(response.data);

      setJobPosts(response.data);
      console.log(jobPosts);
    } catch (err) {
      alert("Error occured please try again later ");
    }
  };

  const formbutton = (jobHeading) => {
    setSelectedJobHeading(jobHeading);
    setFormDisplay(!formDisplay);
  };
  useEffect(() => {
    handleGet();
  }, []);

  //used to show latest job first
  const lastData = jobPosts.slice().reverse();

  return (
    <>
      <div >
        <div className="container jobs_container_title">
          <div class="section-title left-block text-center">
            <h6>Latest Jobs</h6>
          </div>
        </div>

        <div className="container jobs_container_content">
          {lastData.map((job, index) => (
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
                  <a
                    class="btn btn-primary"
                    role="button"
                    onClick={() => formbutton(job.jobHeading)}
                  >
                    Apply Now
                  </a>
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