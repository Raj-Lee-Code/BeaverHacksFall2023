import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom'
import ReadClass from './ReadClass'
import { useState, useEffect } from 'react';
import ClassContent from '../components/ClassContent';

function HomePage() {

  const [schoolClass, setClasses] = useState(0);

  function ShowClass(classID) {

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
      
      <div id="falseComponent">
        {
        schoolClass == 0 ?
        <h1>Please select a class</h1> : <ClassContent course = {schoolClass}/>
        }

      </div>

    </>

  )
}

export default HomePage;
