import { createConnection } from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const connection = createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});
