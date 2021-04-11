// Assignment Code
var symbols = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var userInputYes="Yes"
var userInputNo="No"

function passwordMath (array){
	var random = Math.floor(Math.random()*array.length)
	var randomChar = array[random]
	return randomChar;
}

function prompts(){

while (passwordLength < 8 || passwordLength > 128) {
	passwordLength = prompt ("Chose a pawword length between 8 and 128 variables.")

	if (passwordLength < 8 || passwordLength > 128){
		passwordLength = prompt ("Sorry this is not between the given numbers, chose another number between 8 and 128.")
	}
	else if (passwordLength === "" || Number.isNaN(parseInt(passwordLength))){
		passwordLength = prompt ("Sorry this is not a number between 8 and 128, select again")
	}
}

var lowerCase = prompt("Would you like lower case included? Write yes or no in the space below.");
var upperCase = prompt("Would you like upper case included? Write yes or no in the space below.");
var numbers = prompt("Would you like numbers included? Write yes or no in the space below.");
var symbols = prompt("Would you like symbols included? Write yes or no in the space below.");

if (lowerCase === null && lowerCase == "no" &&
	upperCase === null && upperCase == "no" &&
	numbers === null && numbers == "no" &&
	symbols === null && symbols == "no" 
 ){
	alert ("Must select charatcter type")
	return;
 }

var options = {
	passwordLength:passwordLength,
	lowerCase:lowerCase,
	upperCase:upperCase,
	numbers:numbers,
	symbols:symbols,
}
console.log (options)
return options

function generatePassword(){
	var actualPass = prompts()
	var finalPass = []
	var blah = []
	var actualChar = []

for (var i = 0; i < actualPass.length; i++){
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

	if (actualPass.numbers) {
		blah = blah.concat(numbers)
		actualChar.push(passwordMath(blah))
	}
	if (actualPass.symbols) {
		blah = blah.concat(symbols)
		actualChar.push(passwordMath(blah))
	}
}

// Write password to the #password input. at the end do another for loop with actuachar, then final pass of i = actualchar inside for loop, then return finalpass with message called .join so they are all togethers

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}