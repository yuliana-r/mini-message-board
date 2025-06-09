var express = require('express');
var router = express.Router();

const messages = [
  {
    id: 0,
    text: 'WE WERE ON A BREAK!!!',
    user: 'Ross',
    added: new Date(Date.parse('02/13/1997')),
  },
  {
    id: 1,
    text: "What matters isn't if people are good or bad. What matters is, if they're trying to be better today than they were yesterday.",
    user: 'Michael, TGP',
    added: new Date(Date.parse('04/23/2023')),
  },
  {
    id: 2,
    text: "It gets easier. Every day it gets a little easier. But you gotta do it every day. That's the hard part.",
    user: 'BoJack H.',
    added: new Date(Date.parse('10/01/2023')),
  },
];

router.get('/', function (req, res, next) {
  res.render('index', { title: 'tiny talkies', messages: messages });
});

router.get('/messages/:messageId', function (req, res, next) {
  const { messageId } = req.params;
  res.render('message', {
    title: 'tiny talkies',
    message: messages[messageId],
  });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'tiny talkies' });
});

router.post('/new', function (req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.name;
  messages.push({
    id: messages.length,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
