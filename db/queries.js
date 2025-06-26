const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
}

//insertMessage

//getMessageById

module.exports = {
  getAllMessages,
};
