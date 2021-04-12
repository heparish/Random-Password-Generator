var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value= password
  }

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var charLength = prompt("How many character do you want in your new password? Select a number between 8 and 128");
  var lowerCase = confirm("Do you want lower case letters?");
  var upperCase = confirm("Do you want upper case letters?");
  var numbers = confirm("Do you want numbers in your password?");
  var symbols = confirm("Do you want symbols in your password?");
  

  let password = '';

  console.log(charLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numbers);
  console.log(symbols);

  // if uppercase and numbers are confirmed
  if(num === true && whichCase === true){
    for(var i = 0; i <charLength; i++){

      charPick = symbols[Math.floor(Math.random()*symbols.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);



    }
  }  
//if uppercase but no numbers
    else if(num != true && whichCase === true){
      for(var i = 0; i <charLength; i++){

      charPick = upperCase[Math.floor(Math.random()*upperCase.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);



    }
  }
// numbers no uppercase
    else if(num === true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = numbers[Math.floor(Math.random()*numbers.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);       
      }

    }
    else if(num != true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = lowerCase[Math.floor(Math.random()*lowerCase.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);


  } 
    }
    return password;
}