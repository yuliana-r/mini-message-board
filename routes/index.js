var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "I'm reading a book on anti-gravity. It's impossible to put down!",
    user: "PunMaster123",
    added: new Date()
  },
  {
    text: "Why did the cat sit on the computer? Because it wanted to keep an eye on the mouse! 😺🖱️",
    user: "PurrfectHacker",
    added: new Date()
  },
  {
    text: "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    user: "BrowArtist",
    added: new Date()
  }
]

router.get('/', function(req, res, next) {
  res.render('index', { title: 'tiny talkies', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'tiny talkies'});
})

router.post('/new', function(req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.name;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
})

module.exports = router;
