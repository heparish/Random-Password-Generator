var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\"];
var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var generateBtn = document.querySelector("#generate");
var passwordLength = 0

function passwordMath(array) {
  var random = Math.floor(Math.random() * array.length)
  var randomChar = array[random]
  return randomChar;
}

function prompts() {

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Chose a pawword length between 8 and 128 variables.")
  }
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Sorry this is not an eligable numbers, chose another number between 8 and 128.")
    } else if (passwordLength === "" || Number.isNaN(parseInt(passwordLength))) {
      passwordLength = prompt("Sorry this is not an eligable number between 8 and 128, select again")
    } 

  var lowerCase = confirm("Would you like lower case included?");
  var upperCase = confirm("Would you like upper case included?");
  var numbs = confirm("Would you like numbers included?");
  var symbols = confirm("Would you like symbols included?");

  if (lowerCase === true)
     (upperCase === true)
     (numbs === true)
     (symbols === true) 


  var options = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numbs: numbs,
    symbols: symbols,
  }
}
  function generatePassword() {
    var actualPass = prompts()
    var finalPass = []
    var blah = options
    var actualChar = []

    for (var i = 0; i < actualPass.length; i++) {
      var length = passwordMath(blah)
      finalPass.push(length)
    }

    if (actualPass.lowerCase) {
      blah = blah.concat(lowerCase)
      actualChar.push(passwordMath(blah))
    }

    if (actualPass.upperCase) {
      blah = blah.concat(upperCase)
      actualChar.push(passwordMath(blah))
    }

    if (actualPass.numbs) {
      blah = blah.concat(numbs)
      actualChar.push(passwordMath(blah))
    }

    if (actualPass.symbols) {
      blah = blah.concat(symbols)
      actualChar.push(passwordMath(blah))
    }
  }
 
  //I am completely unable to figure out how to get the password to show up in the box

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    for (var i = 0; i = actualChar; i++) {
      finalPass.join()
    }
  }

  generateBtn.addEventListener("click", writePassword);