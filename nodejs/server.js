const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();

// Enable CORS
app.use(cors());

app.use(bodyParser.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'user1',
  password: 'root123',
  database: 'jewela',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the MySQL database');
});

// Define a route to handle the form submission
app.post('/api/subscribe', (req, res) => {
  const { firstName, lastName, email, phoneNumber, country } = req.body;

   // Log received data
   console.log('Received subscriber data:', {
    firstName,
    lastName,
    email,
    phoneNumber,
    country,
  });

  // Insert form data into the database
  const query = `INSERT INTO subscribers (firstName, lastName, email, phoneNumber, country) VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [firstName, lastName, email, phoneNumber, country], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error subscribing');
    }
    res.status(200).send({ message: 'Subscription successful', id: result.insertId });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
