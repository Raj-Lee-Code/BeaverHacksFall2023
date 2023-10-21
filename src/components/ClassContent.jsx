import React from 'react'
import {useState, useEffect} from 'react';
import './ClassContent.css'
import StudentCard from './StudentCard';
import { Link } from 'react-router-dom'

const ClassContent = (props) =>  {
  const [students, setStudents] = useState([]);

    // on load will fetch the students of the particular class
    useEffect(() => {
      fetch('https://fall-2023-hackathon.herokuapp.com/class/student') //this is not correct fetch url, just a placeholder
      .then((res) => res.json())
      .then((data) => setStudents(students => [...students, data]))
  }, []);

  let course = props.course

  return (
  <>
  <div id="Component">
    
    <h1> This class is {course}</h1>
    <div id = "classStudentDelete">
      <Link to ="/addStudent"><button>Add a student</button></Link>
      <button id = "removeClassButton" type ='submit'>Remove this class</button>
    </div>
    {
      // this should add a student card for every student added in the class 
      students && students.length > 0 ?
      students.map((students,index) => 
      <StudentCard name = {students.name} lastname = {students.lastname}/>
      ) : <h2> There are no students in this class</h2>
    }
    <p id = "notesLabel">Class Notes</p>
    <form id = "classNotes">
      <input type='text' name = "studentNotes"></input>
      <br></br>
      <button id = "addNoteButton" type ='submit'>Add class note</button>
    </form>

  </div>

  </>
  );
};

export default ClassContent