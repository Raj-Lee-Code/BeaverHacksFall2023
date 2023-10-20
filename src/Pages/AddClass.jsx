import React from 'react';
import './AddClass.css'
import { Link } from 'react-router-dom'
function AddClass() {

  return (
    <div id = "addClassPage">
      <Link to = "/"><button>Back to HomePage</button></Link>
      <br></br>
      
      <form id = "classForm">
        <p>Class Name</p>
        <input type = "text" name = "className"></input>
        <p>Class Period</p>
        <input type = "number" min="0" name = "classPeriod"></input>
        <br></br>
        <button id = "classSubmit" type ='submit'>Add class</button>
      </form>
    </div>
  );
}

export default AddClass;
