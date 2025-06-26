let express = require('express');
const { getAllMessages } = require('../db/queries');
let router = express.Router();

router.get('/', async (req, res) => {
  try {
    const messages = await getAllMessages();
    res.render('index', { title: 'tiny talkies', messages: messages });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'tiny talkies' });
});

// get /messages/:messageId

// post /new

// const messages = [
//   {
//     id: 0,
//     text: 'WE WERE ON A BREAK!!!',
//     user: 'Ross',
//     added: new Date(Date.parse('02/13/1997')),
//   },
//   {
//     id: 1,
//     text: "What matters isn't if people are good or bad. What matters is, if they're trying to be better today than they were yesterday.",
//     user: 'Michael, TGP',
//     added: new Date(Date.parse('04/23/2023')),
//   },
//   {
//     id: 2,
//     text: "It gets easier. Every day it gets a little easier. But you gotta do it every day. That's the hard part.",
//     user: 'BoJack H.',
//     added: new Date(Date.parse('10/01/2023')),
//   },
// ];

// router.get('/messages/:messageId', function (req, res, next) {
//   const { messageId } = req.params;
//   res.render('message', {
//     title: 'tiny talkies',
//     message: messages[messageId],
//   });
// });

// router.post('/new', function (req, res, next) {
//   const messageText = req.body.message;
//   const messageUser = req.body.name;
//   messages.push({
//     id: messages.length,
//     text: messageText,
//     user: messageUser,
//     added: new Date(),
//   });
//   res.redirect('/');
// });

module.exports = router;
