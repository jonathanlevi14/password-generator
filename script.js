// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//geting how many characters they want
var howLong = prompt("Choose a length for your Password and type it here: At Least 8 characters, no more than 128.")
  if (howLong < 8){
    prompt("Choose a length for your Password and type it here: At Least 8 character, no more than 128")
  }else {}
  console.log(howLong)

//advise them on which button to click
var advisor = alert("Choose 'OK' for Yes and 'Cancel' for No. " + "No need to enter text unless asked");

// var character = prompt("WOuld you like to use UpperCase in your password?")
//  if (character === true){
// } else if (character === false){

// }
