import React, { useState } from "react"; 
import "../../Assets/css/JobsForm.css" 
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios"; 
export default function JobsForm(props) { 
  const [isOpen, setIsOpen] = useState(props.isOpen); 
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  // const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const role=props.jobHeading
  
  const handleClose = () => { 
    props.onClose(); // Call the onClose callback from props to close the modal 
  }; 
 
  const handleUpload = (event) => {
    event.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append('file', file);
    formData.append('username', username);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('role', role);
    formData.append('experience', experience);
  console.log("Logging FormData content:");
for (let pair of formData.entries()) {
  console.log(pair[0] + ": " + pair[1]);
}
    // Make an HTTP POST request to the server
    // fetch('http://localhost:5000/formData/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    axios.post('http://localhost:5000/formData/upload',formData)
      
      .then(data => {
        alert("Data sent successfully, Thank you !")
        // console.log(data);
      })
      .catch(error => {
        alert("Some Error occured Please try again later !")
        console.log(error);
      });
  };
  const handleCombinedSubmit = (event) => {
    event.preventDefault();
    
    // Call handleUpload function
    handleUpload(event);

    // Call handleClose function
    handleClose();
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
              <form onSubmit={handleCombinedSubmit}> 
                <div className="form-group"> 
                  <label htmlFor="full-name">Full Name</label> 
                  <input 
                    name="name" 
                    type="text" 
                    id="full-name" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
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
                      fontWeight: 400,  
                      fontSize: "16px",  
                      padding: "8px",  
                      border: "1px solid #ccc", 
                      borderRadius: "4px",  
                      backgroundColor: "rgba(14, 13, 13, 0.1)", 
                      color: "black",  
                    }} 
                  > 
                    {/* {setRole(props.jobHeading)}  */}
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
                    value={experience} 
                    onChange={(e) => setExperience(e.target.value)} 
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
                    onChange={handleFileChange} 
                    accept=".pdf" 
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