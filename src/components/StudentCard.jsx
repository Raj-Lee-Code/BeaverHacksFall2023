import React, { useState, useEffect } from 'react';

const StudentCard = (props) => {

    let firstName = props.name
    let lastName = props.lastName

    const handleAddPoints = (e) => {
        e.preventDefault();
        // the end point should change the points of the student to add by 1
        fetch('https://fall-2023-hackathon.herokuapp.com/studentPoints/studentID', { //this is not correct fetch url, just a placeholder
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ course }),
          })
          .then(function(response) {
            return response.json()
          }).then(function(body) {
            console.log(body);
          });
    }

    const handleSubtractPoints = (e) => {
        e.preventDefault();
        // the end point should change the points of the student to subtract by 1
        fetch('https://fall-2023-hackathon.herokuapp.com/studentPoints/studentID', { //this is not correct fetch url, just a placeholder
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ course }),
          })
          .then(function(response) {
            return response.json()
          }).then(function(body) {
            console.log(body);
          });
    }
    const handleSubmitNotes = (e) => {
        e.preventDefault();
        // the end point should add notes to the specific student
        fetch('https://fall-2023-hackathon.herokuapp.com/student/studentNotes', { //this is not correct fetch url, just a placeholder
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ course }),
          })
          .then(function(response) {
            return response.json()
          }).then(function(body) {
            console.log(body);
          });
    }
    const handleRemoveStudent = (e) => {
        e.preventDefault();
        // the end point should remove the student from the class
        fetch('https://fall-2023-hackathon.herokuapp.com/student/studentNotes', { //this is not correct fetch url, just a placeholder
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ course }),
          })
          .then(function(response) {
            return response.json()
          }).then(function(body) {
            console.log(body);
          });
    }
    
    return (
        <div>
            
            <div> {firstName} {lastName} </div>  

            <button onClick={handleSubtractPoints}> - </button> <p>Points</p> <button onClick={handleAddPoints}> - </button> 

            <form>
                <p>Student Notes</p>
                <input type='text' name = "studentNotes"></input>
                <button onClick={handleSubmitNotes}>Submit Notes</button>
            </form>
            <button onClick={handleRemoveStudent}>Remove Student</button>
        </div>
    )
}

export default StudentCard;