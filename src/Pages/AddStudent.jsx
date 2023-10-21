import React, { useState } from 'react';
import './AddStudent.css'
import { Link } from 'react-router-dom'
function AddStudent() {
  const [student, setStudent] = useState({ firstName: '', lastName: '' });

  const handleOnSubmit= (e) => {
    e.preventDefault();
    // change endpoint api location from localhost *****
    fetch('https://someAddress/addStudent', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ student }),
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  };
  return (
    <div id = "addStudentPage">
      <Link to = "/"><button>Back to HomePage</button></Link>
      <br></br>
      
      <form id = "studentForm" onSubmit={handleOnSubmit}>
        <p>Student First Name</p>
        <input type = "text" name = "firstName" value={student.firstName} onChange={(e) => setStudent({ ...student, firstName: e.target.value })}></input>
        <p>Student Last Name</p>
        <input type = "text" name = "lastName" value={student.lastName} onChange={(e) => setStudent({ ...student, lastName: e.target.value })}></input>
        <br></br>
        <button id = "studentSubmit" type ='submit'>Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
