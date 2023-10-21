import React from 'react'
import {useState, useEffect} from 'react';
import './ClassContent.css'
import StudentCard from './StudentCard';
import { Link } from 'react-router-dom'

const ClassContent = (props) =>  {
  const [students, setStudents] = useState([]);

    // possible sudo code for the fetch function
    // const fetchStudents = async () => {
    //     const {data} = await backend
    //     from('students')
    //     select('students who are in the current class')

    //     .order('created_at', { ascending: true });
    //     // set state of posts
    //     setClasses(data)
    //   }

    // useEffect(() => {
    //     fetchStudents()
    // }, []);

  let course = props.course

  return (
  <>
  <div id="Component">
    
    <h1> This class is {course}</h1>
    <Link to ="/addStudent"><button>Add a student</button></Link>
    {
      // this should add a student card for every student added in the class 
      students && students.length > 0 ?
      students.map((students,index) => 
      <StudentCard name = {students.name} lastname = {students.lastname}/>
      ) : <h2> There are no students in this class</h2>
    }

  </div>

  </>
  );
};

export default ClassContent