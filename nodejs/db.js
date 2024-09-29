// db.js
import { mysqlTable, serial, text, varchar, createTable } from 'drizzle-orm/mysql-core';
import { drizzle } from 'drizzle-orm/node-mysql';
import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'user2',
  password: 'root123',
  database: 'jewela',
  port: 3307,
});

export const db = drizzle(pool);

// Define your table schema
export const subscribers = mysqlTable('subscribers', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  email: text('email').notNull(),
  phoneNumber: varchar('phone_number', { length: 50 }),
  country: varchar('country', { length: 100 }).notNull(),
});

// Create the table (run this to create the table if it doesn't exist)
async function createSubscribersTable() {
  await db.execute(
    createTable(subscribers)
  );
}

// Uncomment to run the table creation (only once)
// createSubscribersTable();
