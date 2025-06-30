let express = require('express');
const { body, validationResult } = require('express-validator');
const {
  getAllMessages,
  insertMessage,
  getMessageById,
} = require('../db/queries');
let router = express.Router();

const validateMessage = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage('Name must be between 1 and 20 characters'),
  body('message')
    .trim()
    .isLength({ min: 1, max: 150 })
    .withMessage('Message cannot be empty'),
];

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

router.post('/new', validateMessage, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', {
      title: 'tiny talkies',
      errors: errors.array(),
      data: req.body,
    });
  }

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
