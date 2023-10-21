import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom'
import ReadClass from './ReadClass'
import { useState, useEffect } from 'react';
import ClassContent from '../components/ClassContent';

function HomePage() {

  const [currentClass, setClasses] = useState("math");

  function ShowClass(classID) {
    setClasses(classID)
  }

  return (

    <>
      <div id="header">
        <h2 id="classesHeader">Your Classes:</h2>
          <div id = "classButtons">
            <ReadClass/>

            <Link to="/AddClass">
                <button>
                    Add a class
                </button>
            </Link>

          </div>
      </div>
      
      <div >
        {
        currentClass == 0 ?
        <div id="falseComponent"><h1>Please select a class</h1></div> : <ClassContent course = {currentClass}/>
        }

      </div>

    </>

  )
}

export default HomePage;
