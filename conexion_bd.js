const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your MySQL password
  database: 'login',
  port: 3306,
  charset: 'utf8' // Set charset to utf8 for consistent encoding
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    // Handle connection errors appropriately
  } else {
    console.log('Connected to MySQL database');
  }
});