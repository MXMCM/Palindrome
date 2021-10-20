var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco cat"
  } );
});

router.post('/', function (req,res) {
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText),
    reverse: reverseString(req.body.userText)
  })
});
module.exports = router;


function checkPalindrome(phrase) {
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  if (Checkspaces(phrase)===Checkspaces(temp)){
    return true;
  }
  else {
    return false
  }
}

function Checkspaces(phrase) {
  phrase = (phrase.toLowerCase().replace("!",""));
  phrase = (phrase.toLowerCase().replace(",",""));
  phrase = (phrase.toLowerCase().replace(" ",""));
  phrase = (phrase.toLowerCase().replace(";",""));
  phrase = (phrase.toLowerCase().replace(":",""));
  phrase = (phrase.toLowerCase().replace("?",""));
  phrase = (phrase.toLowerCase().replace("'",""));
  phrase = (phrase.toLowerCase().replace(".",""));
  return phrase
}



function getResultDescription(phrase) {
  if(checkPalindrome(phrase)){
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}
function reverseString(s){
  return s.split("").reverse().join("");
}