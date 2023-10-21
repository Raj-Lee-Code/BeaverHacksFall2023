import React from 'react';
import './AddStudent.css'
import { Link } from 'react-router-dom'
function AddStudent() {

  return (
    <div id = "addStudentPage">
      <Link to = "/"><button>Back to HomePage</button></Link>
      <br></br>
      
      <form id = "studentForm">
        <p>Student First Name</p>
        <input type = "text" name = "firstName"></input>
        <p>Student Last Name</p>
        <input type = "text" name = "lastName"></input>
        <br></br>
        <button id = "studentSubmit" type ='submit'>Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
