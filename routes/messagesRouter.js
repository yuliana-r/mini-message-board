const { Router } = require('express');
const messagesController = require('../controllers/messagesController');
const messagesRouter = Router();

messagesRouter.get('/', messagesController.getAllMessages);
messagesRouter.get('/new', messagesController.showCreateMessageForm);
messagesRouter.get('/messages/:messageId', messagesController.getMessageById);
messagesRouter.post('/new', messagesController.createMessage);

module.exports = messagesRouter;
