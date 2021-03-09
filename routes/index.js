var express = require('express');
var router = express.Router();

const messages = [
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages});
});

router.get('/new', function(req, res, next){
  res.render('form', {title: "Form"})
})

router.post('/new', function(req, res){
  console.log("found")
  messages.push({
    text: req.body.text, 
    user: req.body.user,
    added: new Date()})
  res.redirect('/')
})

module.exports = router;

console.log("found")