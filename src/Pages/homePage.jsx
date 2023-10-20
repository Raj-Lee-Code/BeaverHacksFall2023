import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom'
import ReadClass from './ReadClass'

function HomePage() {

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
        <h1>Please select a class</h1>
      </div>


    </>

  )
}

export default HomePage;
