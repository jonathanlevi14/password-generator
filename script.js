// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0",]
var specialChar =["!","@","#","$","%","&"]
var passwordArray = [""]
var organizedArray = ""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  alert("Choose 'OK' for Yes and 'Cancel' for No. ");

  var howLong = prompt(
    "Choose a length for your Password and type it here: At Least 8 characters, no more than 128."
  );
  if (howLong < 8 || howLong > 129) {
    prompt(
      "Choose a length for your Password and type it here: At Least 8 characters, no more than 128."
    );
    generatePassword();
  }

  var bigLetter = confirm("Do you want Upper Case letters in your password?");
  if (bigLetter === true) {
    passwordArray = upperCaseLetters.concat(passwordArray);
  }

  var smallLetter = confirm("Do you want Lower Case letters in your password");
  if (smallLetter === true) {
    passwordArray = lowerCaseLetters.concat(passwordArray);
  }

  var numeric = confirm("Do you want Numbers in your password?");
  if (numeric === true) {
    passwordArray = numbers.concat(passwordArray);
  }

  var special = confirm("Do you want Special Characters in your password");
  if (special === true) {
    passwordArray = specialChar.concat(passwordArray);
  }
  var randomArray = [];
  for (var i = 0; i <= howLong - 1; i++) {
    var password = passwordArray[Math.floor(Math.random() * i)];
    randomArray.push(password);
  }
  var organizedArray = randomArray.join("");
  console.log(organizedArray)
  // return organizedArray;
  alert("Your Password is " + organizedArray)
}


