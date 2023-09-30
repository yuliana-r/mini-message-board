var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Yuli",
    added: new Date()
  },
  {
    text: "Meowy meow meow",
    user: "Charlie the cat",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'tiny talkies', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'tiny talkies'});
})

router.post('/new', function(req, res, next) {
  console.log("request body is", req.body);

  const messageText = req.body.message;
  const messageUser = req.body.name;
  console.log(messageText);
  console.log(messageUser);
  messages.push({text: messageText, user: messageUser, added: new Date()});
  console.log(messages);
  res.redirect('/');
})

module.exports = router;
