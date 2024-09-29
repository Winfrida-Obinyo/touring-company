// subscribers.js
import express from 'express';
import { db, subscribers } from '../../src/nodejs/db';  // Assuming these are properly configured
import { insert } from 'drizzle-orm/mysql-core';

const router = express.Router();

router.post('/api/subscribe', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, country } = req.body;

    // Insert subscriber data into the database
    await db.execute(
      insert(subscribers).values({
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
      })
    );

    res.status(201).json({ message: 'Subscriber added successfully!' });
  } catch (error) {
    console.error('Error subscribing:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
