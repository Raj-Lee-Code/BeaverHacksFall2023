import React, { useState, useEffect } from 'react';

const ReadClass = ({token}) => {

    const [classes, setClasses] = useState([]);

    // possible sudo code for the fetch function
    // const fetchPosts = async () => {
    //     const {data} = await backend
    //     from('classes')
    //     select('*')

    //     .order('created_at', { ascending: true });
    //     // set state of posts
    //     setClasses(data)
    //   }

    // useEffect(() => {
    //     fetchClasses()
    // }, []);

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