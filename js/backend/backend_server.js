console.log("Starting the server...");
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// enable cors for all routes
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'george', // Your MySQL username
    password: '@@@', // Your MySQL password
    database: 'reaction_time_db',
    port: 3306
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Endpoint to record response time
app.post('/record', (req, res) => {
    const responseTime = req.body.responseTime;
    const sql = 'INSERT INTO response_times (response_time) VALUES (?)';
    db.query(sql, [responseTime], (err, result) => {
        if (err) throw err;
        res.send('Response time recorded successfully');
    });
});

// Start server
app.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}`);
});
