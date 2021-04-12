var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\"];
var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var generateBtn = document.querySelector("#generate");
var passwordLength = 0

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
  
	passwordText.value = password;
  }

generateBtn.addEventListener("click", writePassword);

function passwordMath(array) {
  var random = Math.floor(Math.random() * array.length)
  var randomChar = array[random]
  return randomChar;
}

function generatePassword() {

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Chose a password length between 8 and 128 variables.")
  }
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Sorry this is not an eligable numbers, chose another number between 8 and 128.")
    } else if (passwordLength === "" || Number.isNaN(parseInt(passwordLength))) {
      passwordLength = prompt("Sorry this is not an eligable number between 8 and 128, select again")
    } 

  var lowerCasePrompt = confirm("Would you like lower case included?");
  var upperCasePrompt = confirm("Would you like upper case included?");
  var numbsPrompt = confirm("Would you like numbers included?");
  var symbolsPrompt = confirm("Would you like symbols included?");

  let password = '';

     console.log(passwordLength);
	 console.log(lowerCasePrompt);
	 console.log(upperCasePrompt);
	 console.log(numbsPrompt);
	 console.log(symbolsPrompt);

//if all selected
	 if(lowerCasePrompt === true && upperCasePrompt === true && symbolsPrompt === true && numbsPrompt === true){
		for(var i=0; i <length; i++){
			charPick = passwordMath;
      		console.log(charPick);
     		password = password.toString()+charPick.toString();
      		console.log(password);
		}
	}
//no lower case
	else if(lowerCasePrompt != true && upperCasePrompt === true && symbolsPrompt === true && numbsPrompt === true){
		for(var i = 0; i <length; i++){
		passwordMath
	  }
	}
//no upper case
	else if(lowerCasePrompt === true && upperCasePrompt != true && symbolsPrompt === true && numbsPrompt === true){
		for(var i = 0; i <length; i++){
		passwordMath
	  }
	}
//no symbols
	else if(lowerCasePrompt === true && upperCasePrompt === true && symbolsPrompt != true && numbsPrompt === true){
		for(var i = 0; i <length; i++){
		passwordMath
	  }
	}
//no numbers
	else if(lowerCasePrompt === true && upperCasePrompt === true && symbolsPrompt === true && numbsPrompt != true){
		for(var i = 0; i <length; i++){
		passwordMath
	  }
	}
	return password;
}
//I can't make it appear in the box sorry.