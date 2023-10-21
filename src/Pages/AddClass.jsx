import React, { useState } from 'react';
import './AddClass.css'
import { Link } from 'react-router-dom'

function AddClass() {

  const [course, setCourse] = useState([]);

  const handleOnSubmit= (e) => {
    e.preventDefault();
    // change endpoint api location from localhost *****
    fetch('https://someAddress/addClass', { 
        method: 'POST',
        body: JSON.stringify({ course }),
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  };

  return (
    <div id = "addClassPage">
      <Link to = "/"><button>Back to HomePage</button></Link>
      <br></br>
      
      <form id = "classForm" onSubmit={handleOnSubmit}>
        <p>Class Name</p>
        <input type = "text" name = "className" value={course.name} onChange={(e) => setCourse({ ...course, className: e.target.value })}></input>
        <p>Class Period</p>
        <input type = "number" min="0" name = "classPeriod" value={course.period} onChange={(e) => setCourse({ ...course, classPeriod: e.target.value })}></input>
        <br></br>
        <button id = "classSubmit" type ='submit'>Add class</button>
      </form>
    </div>
  );
}

export default AddClass;
