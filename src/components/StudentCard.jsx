import React, { useState, useEffect } from 'react';

const StudentCard = (props) => {

    let firstName = props.name
    let lastName = props.lastName


    return (
        <div>
            <div> {firstName} {lastName} </div>  
            
            <form>
                <input type='text' name = "notes"></input>
            </form>
        </div>
    )
}

export default StudentCard;