import React, { useState, useEffect } from 'react';

const ReadClass = ({token}) => {

    const [classes, setClasses] = useState([]);


    // on load will fetch the classes of the particular teacher
    useEffect(() => {
        fetch('https://fall-2023-hackathon.herokuapp.com/educator/classes') //this is not correct fetch url, just a placeholder
        .then((res) => res.json())
        .then((data) => setClasses(classes => [...classes, data]))
    }, []);

    return (
        <div>
            {
                // this should add a button for every class that a teacher has, the button would then link to that specific classes page
                classes && classes.length > 0 ?
                classes.map((classes,index) => 
                    <button onClick={() => ShowClass(classes.id)}>{classes.name} Period:{classes.period}</button>
                ) : <div></div>
            }
        </div>  
    )
}

export default ReadClass;