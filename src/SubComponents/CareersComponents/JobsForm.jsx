import React, { useState } from "react";
import "../../Assets/css/JobsForm.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function JobsForm(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [resume, setResume] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  const handleClose = () => {
    props.onClose(); // Call the onClose callback from props to close the modal
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("role", role);
    formData.append("yearsOfExperience", yearsOfExperience);
    formData.append("resume", resume);

    try {
      const response = await axios.post(
        "https://formspree.io/f/xvojkpov",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // Successful submission
        console.log("Form submitted successfully");
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="modal-content">
            <div className="form-container">
            <button
  style={{
    fontWeight: "bold",
    color: "red", // Change color as needed
    position: "absolute",
    top: "10px", // Adjust the top position as needed
    right: "10px", // Adjust the right position as needed
    cursor: "pointer",
  }}
  className="close-button"
  onClick={handleClose}
>
  &times;
</button>

              <h1>APPLICATION FORM</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    id="full-name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <p
                    style={{
                      fontWeight: 400, // Normal font weight for a text input
                      fontSize: "16px", // Common font size for a text input
                      padding: "8px", // Similar to text input padding
                      border: "1px solid #ccc", // Border like a text input
                      borderRadius: "4px", // Rounded corners similar to a text input
                      backgroundColor: "rgba(14, 13, 13, 0.1)", // White background like a text input
                      color: "black", // Black text color like a text input
                    }}
                  >
                    {props.jobHeading}
                  </p>
                </div>
                <div className="form-group">
                  <label htmlFor="years-of-experience">
                    Years of Experience
                  </label>
                  <select
                    name="years of experince"
                    id="years-of-experience"
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Years of Experience
                    </option>
                    <option value="0-1">0 - 1 years</option>
                    <option value="1-3">1 - 3 years</option>
                    <option value="3-5">3 - 5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="resume">Resume</label>
                  <input
                    name="resume"
                    type="file"
                    id="resume"
                    onChange={(e) => setResume(e.target.files[0])}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                <button className="submit-buttom" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
