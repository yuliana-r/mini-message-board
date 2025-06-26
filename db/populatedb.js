const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message TEXT NOT NULL,
  author VARCHAR ( 255 ) NOT NULL,
  added DATE NOT NULL
);

INSERT INTO messages (message, author, added)
VALUES
  ('WE WERE ON A BREAK!!!', 'Ross', '1997-02-13'),
  ('What matters isn''t if people are good or bad. What matters is, if they''re trying to be better today than they were yesterday.', 'Michael, TGP', '2023-04-23'),
  ('It gets easier. Every day it gets a little easier. But you gotta do it every day. That''s the hard part.', 'BoJack H.', '2023-10-01');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_PUBLIC_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
