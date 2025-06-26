let express = require('express');
const {
  getAllMessages,
  insertMessage,
  getMessageById,
} = require('../db/queries');
let router = express.Router();

router.get('/', async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.render('index', { title: 'tiny talkies', messages: messages });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'tiny talkies' });
});

router.get('/messages/:messageId', async (req, res) => {
  const { messageId } = req.params;

  try {
    const message = await getMessageById(messageId);
    if (!message) {
      return res.status(404).send('Message not found');
    }
    res.render('message', {
      title: 'tiny talkies',
      message: message,
    });
  } catch (error) {
    console.error('Error finding message:', error);
    res.status(500).send('Failed to find message');
  }
});

router.post('/new', async (req, res) => {
  const { name, message } = req.body;
  try {
    await insertMessage(message, name);
    res.redirect('/');
  } catch (error) {
    console.error('Insert error:', error);
    res.status(500).send('Failed to insert messages');
  }
});

module.exports = router;
