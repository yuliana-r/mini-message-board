const { body, validationResult } = require('express-validator');
const db = require('../db/queries');

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

function handleServerError(res, error, message = 'Internal Server Error') {
  console.error(message, error);
  res.status(500).send(message);
}

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await db.getAllMessages();
    res.render('index', { title: 'tiny talkies', messages });
  } catch (error) {
    handleServerError(res, error);
  }
};

exports.showCreateMessageForm = (req, res) => {
  res.render('form', { title: 'tiny talkies | new message' });
};

exports.getMessageById = async (req, res) => {
  const { messageId } = req.params;

  try {
    const message = await db.getMessageById(messageId);
    if (!message) {
      return res.status(404).send('Message not found');
    }
    res.render('message', {
      title: 'tiny talkies | view message',
      message,
    });
  } catch (error) {
    handleServerError(res, error);
  }
};

exports.createMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('form', {
        title: 'tiny talkies | new message',
        errors: errors.array(),
        data: req.body,
      });
    }

    const { name, message } = req.body;

    try {
      await db.insertMessage(message, name);
      res.redirect('/');
    } catch (error) {
      handleServerError(res, error);
    }
  },
];
