
/*
    SETUP
*/
import express from 'express';
import { pool } from './database/db_connecter.js';
const PORT = 3306;
const app = express();
app.use(express.json());

/*
    ROUTES
*/

//INSERT for Class
app.post('/addClass', (req, res) => {
    const { className, period } = req.body;
    
    let addClassQuery = 'INSERT INTO Classes (name, period, educatorID) VALUES (?, ?, ?);';

    pool.query(addClassQuery, [className, period, educatorID], (err, results) => {
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

    pool.query(addStudentQuery, [fName, lName], (err, results) => {
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

    pool.query(addEducatorQuery, [fName, lName, emailAddress, password], (err, results) => {
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

    pool.query(addNoteQuery, [date, noteText, studentID], (err, results) => {
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

    pool.query(addClassNoteQuery, [date, noteText, classID], (err, results) => {
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

    pool.query(addPointTypesQuery, [pointName, defaultDailyPoints], (err, results) => {
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

    pool.query(addPointsInClassQuery, [pointID, classID], (err, results) => {
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

    pool.query(addPointLogQuery, [date, points, pointID, studentID], (err, results) => {
        if (err) {
            console.error('Error inserting PointLog into database:', err);
            res.status(500).json( {error: 'Internal server error: Please try again later.' });
        } else {
            console.log('PointLog inserted into database.');
        }
    })});

/*
    LISTENER
*/
app.listen(PORT, function(){            
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});