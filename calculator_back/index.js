const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'IImtiyazW4556@', // Replace with your MySQL root password
  database: 'calculator',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Create a table for calculation history
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS calculations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    expression TEXT,
    result DOUBLE
  );
`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created or already exists.');
  }
});

// Insert data into the calculations table
const insertQuery = 'INSERT INTO calculations (expression, result) VALUES (?, ?)';
const values = ['2 + 3', 5];

connection.query(insertQuery, values, (err, results) => {
  if (err) {
    console.error('Error inserting data:', err);
  } else {
    console.log('Data inserted successfully.');
  }
});

// Retrieve data from the calculations table
const selectQuery = 'SELECT * FROM calculations';
connection.query(selectQuery, (err, results) => {
  if (err) {
    console.error('Error retrieving data:', err);
  } else {
    console.log('Retrieved data:', results);
  }
});

// Close the database connection when done
connection.end((err) => {
  if (err) {
    console.error('Error closing database connection:', err);
  } else {
    console.log('Database connection closed.');
  }
});
