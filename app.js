
/*
    SETUP
*/
import express from 'express';
// import path from 'path';

import { createDbConnection } from './backend/database/db_connecter.js';
// const PORT = 3306;
const port = process.env.PORT || 3000;
const app = express();
// const cors = require('cors');

app.use(express.json());
const connection = createDbConnection();

connection.connect();
// app.use(cors({
//     origin: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
//   }));
// Serve static files (like JavaScript and CSS) from the "dist" folder
// app.use(express.static(path.join(__dirname, 'dist')));
/*
    ROUTES
*/

//INSERT for Class
app.post('/addClass', (req, res) => {
    const { className, period } = req.body;
    
    let addClassQuery = 'INSERT INTO Classes (name, period, educatorID) VALUES (?, ?, ?);';

    connection.query(addClassQuery, [className, period, educatorID], (err, results) => {
        if (err) {
            console.error('Error inserting class into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('Class inserted into database.');
        }
    })});

//INSERT for Student
app.post('/addStudent', (req, res) => {
    const { fName, lName } = req.body;

    let addStudentQuery = 'INSERT INTO Students (fName, lName) VALUES (?, ?);';

    connection.query(addStudentQuery, [fName, lName], (err, results) => {
        if (err) {
            console.error('Error inserting student into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('Student inserted into database.');
        }
    })});

//INSERT for Educators
app.post('/addEducator', (req, res) => {
    const { fName, lName, emailAddress, password } = req.body;

    let addEducatorQuery = 'INSERT INTO Educators (fName, lName, emailAddress, password ) VALUES (?, ?, ?, ?);';

    connection.query(addEducatorQuery, [fName, lName, emailAddress, password], (err, results) => {
        if (err) {
            console.error('Error inserting educator into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('Educator inserted into database.');
        }
    })});

//INSERT for Notes
app.post('/addNote', (req, res) => {
    const { date, noteText, studentID } = req.body;

    let addNoteQuery = 'INSERT INTO Notes (date, noteText, studentID) VALUES (?, ?, ?);';

    connection.query(addNoteQuery, [date, noteText, studentID], (err, results) => {
        if (err) {
            console.error('Error inserting note into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('Note inserted into database.');
        }
    })});

//INSERT for ClassNotes
app.post('/addClassNote', (req, res) => {
    const { date, noteText, classID } = req.body;

    let addClassNoteQuery = 'INSERT INTO ClassNotes (date, noteText, classID) VALUES (?, ?, ?);';

    connection.query(addClassNoteQuery, [date, noteText, classID], (err, results) => {
        if (err) {
            console.error('Error inserting class note into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('Class note inserted into database.');
        }
    })});

//INSERT for PointTypes
app.post('/addPointType', (req, res) => {
    const { pointName, defaultDailyPoints } = req.body;

    let addPointTypesQuery = 'INSERT INTO PointTypes (pointName, defaultDailyPoints) VALUES (?, ?);';

    connection.query(addPointTypesQuery, [pointName, defaultDailyPoints], (err, results) => {
        if (err) {
            console.error('Error inserting point type into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('PointType inserted into database.');
        }
    })});

//INSERT for PointsInClasses
app.post('/addPointsInClass', (req, res) => {
    const { pointID, classID } = req.body;

    let addPointsInClassQuery = 'INSERT INTO PointsInClasses (pointID, classID) VALUES (?, ?);';

    connection.query(addPointsInClassQuery, [pointID, classID], (err, results) => {
        if (err) {
            console.error('Error inserting PointsInClasses into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('PointsInClasses inserted into database.');
        }
    })});

//INSERT for PointLogs
app.post('/addPointLog', (req, res) => {
    const { date, points, pointID, studentID } = req.body;

    let addPointLogQuery = 'INSERT INTO PointLogs (date, points, pointID, studentID) VALUES (?, ?, ?, ?);';

    connection.query(addPointLogQuery, [date, points, pointID, studentID], (err, results) => {
        if (err) {
            console.error('Error inserting PointLog into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('PointLog inserted into database.');
        }
    })});


//SELECT for Classes for specific educator
app.get('/classesForEducator', (req, res) => {
    let classesQuery = 'SELECT name FROM Classes WHERE educatorID = ?;';

    connection.query(classesQuery, [educatorID], (err, results) => {

        //Send results to browser
        res.send(JSON.stringify(results));
    });
});

//SELECT for Students for specific class
app.get('/studentsForClass', (req, res) => {
    let studentsForClassQuery = 'SELECT fName, lName FROM Students WHERE classID = ?;';

    connection.query(studentsForClassQuery, [classID], (err, results) => {

        //Send results to browser
        res.send(JSON.stringify(results));
    });
});

//SELECT for Notes for specific student
app.get('/getStudentNotes', (req, res) => {
    let notesForStudentQuery = 'SELECT DISTINCT Students.fName, Students.lName, Notes.noteText FROM Students INNER JOIN studentInClass ON Students.studentID = studentInClass.studentID INNER JOIN Classes ON studentInClass.classID = Classes.classID INNER JOIN Notes ON Students.studentID = Notes.studentID WHERE Classes.classID IN (SELECT Classes.classID FROM Classes WHERE Classes.educatorID = ?) AND Notes.date = CURDATE();';

    connection.query(notesForStudentQuery, [educatorID], (err, results) => {

        //Send results to browser
        res.send(JSON.stringify(results));
    });
});

//SELECT for Class Notes
app.get('/getClassNotes', (req, res) => {
    let classNotesQuery = 'SELECT Classes.name, ClassNotes.noteText FROM ClassNotes INNER JOIN Classes ON ClassNotes.classID = Classes.classID WHERE ClassNotes.classID IN (SELECT classID FROM Classes WHERE educatorID = ?) AND ClassNotes.date = CURDATE();';

    connection.query(classNotesQuery, [educatorID], (err, results) => {
            
            //Send results to browser
            res.send(JSON.stringify(results));
        });
    });
    


// // Serve your React application from the root URL
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

/*
    LISTENER
*/
app.listen(port, () => {            
    console.log(`Server is running on port ${port}`)
});