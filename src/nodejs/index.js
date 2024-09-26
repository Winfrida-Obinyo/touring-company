const express = require('express');
const mysql = require('mysql2');
const Resend = require('resend');

const app = express();
const port = 3001; // Replace with your desired port

app.use(express.json());

// Replace with your database connection details
const db = mysql.createConnection({
  host: 'your_database_host',
  user: 'user2',
  password: 'root123',
  database: 'jewela',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

app.post('/api/subscribe', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, country } = req.body;

  // Validate data here

  try {
    const sql = 'INSERT INTO subscribers (firstName, lastName, email, phoneNumber, country) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, phoneNumber, country], async (err, result) => {
      if (err) throw err;
      console.log('Subscriber added successfully');

      // Send notification email using Resend
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.email.send({
        templateId: process.env.RESEND_NOTIFICATION_TEMPLATE_ID,
        to: 'your_email@example.com',
        dynamicTemplateData: {
          firstName,
          lastName,
          email,
          phoneNumber,
          country,
        },
      });

      if (!data || error) {
        console.error('Failed to send notification email:', error);
      } else {
        console.log('Notification email sent successfully');
      }

      res.status(200).json({ message: 'Subscription successful' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});