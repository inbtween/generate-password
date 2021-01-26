// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to generate password
function generatePassword() {
  // declare all variables to generate password
  var result = "";
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%";
  // how long do you want the password?
  var characterLength = Number(
    prompt("How many characters long, do you want your password to be?")
  );
  // password length should be between 8, but less than 128
  while (characterLength < 8 || characterLength > 128) {
    characterLength = Number(prompt("Choose a number between 8 and 128"));
  }
  // declare variables for yes/no answers
  var numbersPermitted = confirm("Do you want numbers in your password?");
  var upperCasePermitted = confirm(
    "Do you want uppercase letters in your password ?"
  );
  var lowerCasePermitted = confirm(
    "Do you want lowercase letters in your password?"
  );
  var specialCharactersPermitted = confirm(
    "Do you want special characters in your password?"
  );

  // if answer is no to all prompts, then alert to choose two types
  if (
    !numbersPermitted &&
    !upperCasePermitted &&
    !lowerCasePermitted &&
    !specialCharactersPermitted
  ) {
    alert("You must choose atleast two character types.");
  }

  var permittedCharacters = [];
  if (numbersPermitted) {
    permittedCharacters = numbersPermitted.concat(permittedCharacters);
    console.log(permittedCharacters);
  }
  if (upperCasePermitted) {
    permittedCharacters = upperCasePermitted.concat(permittedCharacters);
  }
  if (lowerCasePermitted) {
    permittedCharacters += lowerCasePermitted.concat(permittedCharacters);
  }
  if (specialCharactersPermitted) {
    permittedCharacters = specialCharacters.concat(permittedCharacters);
  }
  console.log(permittedCharacters);
  // Create length of password
  for (let i = 0; i < characterLength; i++) {
    let randomIndex = Math.floor(Math.random() * permittedCharacters.length);
    console.log([randomIndex]);

    result += permittedCharacters[randomIndex];
    console.log(result);
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
