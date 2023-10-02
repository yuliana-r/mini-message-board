var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "We were on a break!!!",
    user: "Ross",
    added: new Date(Date.parse("02/13/1997"))
  },
  {
    text: "What matters isn't if people are good or bad. What matters is, if they're trying to be better today than they were yesterday.",
    user: "Michael, TGP",
    added: new Date(Date.parse("04/23/2023"))
  },
  {
    text: "We have to remember what's important in life: friends, waffles and work. Or waffles, friends, work. But work has to come third.",
    user: "Leslie Knope",
    added: new Date(Date.parse("10/01/2023"))
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
