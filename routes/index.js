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
  },
  {
    text: "Why don't scientists trust atoms? Because they make up everything!",
    user: "AtomWhisperer",
    added: new Date()
  },
  {
    text: "I'm on a seafood diet. I see food and I eat it... especially if it's fish! 🐟😸 Bon appétit, meow!",
    user: "MrFishBoy",
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
