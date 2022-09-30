// Assignment Code
var generateBtn = document.querySelector("#generate");
//arrays to create a bigArray
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0",]
var specialChar =["!","@","#","$","%","&"]
//open Arrays
var passwordArray = []
var organizedArray = ""

//creating function
function generatePassword() {
  alert("Choose 'OK' for Yes and 'Cancel' for No. ");
//choosing length of password
  var howLong = Number(prompt("Choose a length for your Password and type it here: At Least 8 characters, no more than 128."));
  console.log(howLong)
  if (howLong < 8 || howLong > 128) {
    alert("Choose a length for your Password and type it here: At Least 8 characters, no more than 128.");
    generatePassword()
  } 
  if (!howLong) {
    alert("Please enter a valid number 0-9");
    generatePassword()
  } 
//selecting upperCase letters
  var bigLetter = confirm("Do you want Upper Case letters in your password?");
  if (bigLetter === true) {
    passwordArray = upperCaseLetters.concat(passwordArray);
  }
//selecting lowerCase letters
  var smallLetter = confirm("Do you want Lower Case letters in your password");
  if (smallLetter === true) {
    passwordArray = lowerCaseLetters.concat(passwordArray);
  }
//selecting a number
  var numeric = confirm("Do you want Numbers in your password?");
  if (numeric === true) {
    passwordArray = numbers.concat(passwordArray);
  }
  //selecting a special character
  var special = confirm("Do you want Special Characters in your password");
  if (special === true) {
    passwordArray = specialChar.concat(passwordArray);
  }
  //Edge Case that they dont pick an option
  if (bigLetter===false && smallLetter===false && numeric===false && special===false){
    alert("Plase Choose 'Yes' to at least one option. PLEASE START OVER")
    generatePassword()
  }
  //an array of random numbers that is the length chosen 
  var randomArray = [];
  for (var i = 0; i <= howLong-1 ; i++) {
    var randomNumbers = passwordArray[Math.floor(Math.random() *passwordArray.length)];
    randomArray.push(randomNumbers);
  }
  
  organizedArray = randomArray.join("");
 
  return organizedArray;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);