// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)





//button event
function generatePassword() {
  // //advise them on which button to click
  var advisor = alert("Choose 'OK' for Yes and 'Cancel' for No. " + "No need to enter text unless asked");
 // //geting how many characters they want
  var howLong = prompt("Choose a length for your Password and type it here: At Least 8 characters, no more than 128.")
  if (howLong < 8 || howLong>129){
    prompt("Choose a length for your Password and type it here: At Least 8 character, no more than 128")
  }else {}
  

  //Capital Letters?
  var bigLetter = confirm("Do you want Upper Case letters in your password?");
    if (bigLetter === true) {
      //code for adding uppercase letters
    } else {}


  //Lower Case Letters
  var smallLetter = confirm("Do you want Lower Case letters in your password");
    if (bigLetter === true) {
    //code for adding uppercase letters
    } else {}


  //Numbers
  var numeric = confirm("Do you want Numbers in your password?")
    if (numeric ===true) {
      //code for adding numbers
    } else{}

  //Special Characters
  var special = confrim("Do you want Special Characters in your password")
  if (special) ===true) {
    //code for adding numbers
  } else{}

}




// let letters = ["a","b","c","d","e","f","g","h","i",""j,"k","l","m","n","o","p","q","r","s","t","u","","","","",""]

// // var character = prompt("WOuld you like to use UpperCase in your password?")
//  if (character === true){
// } else if (character === false){

// }
