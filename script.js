// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to generate password
function generatePassword() {
  // declare all variables to generate password
  var result = "";
  var numbers = "0123456789";
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
  var numbersPermitted = true;
  var upperCasePermitted = true;
  var lowerCasePermitted = true;
  var specialCharactersPermitted = true;
  while (
    numbersPermitted &&
    upperCasePermitted &&
    lowerCasePermitted &&
    specialCharactersPermitted
  ) {
    // now for the password questions, length, upper + lowercase + special characters
    numbersPermitted =
      prompt("Do you want numbers in your password? Yes or no?") === "yes"
        ? true
        : false;
    upperCasePermitted =
      prompt("Do you want upper case letters in your password? Yes or no?")
        .toLowerCase === "yes"
        ? true
        : false;

    lowerCasePermitted =
      prompt("Do you want lower case letters in your password? Yes or no?")
        .toLowerCase === "yes"
        ? true
        : false;
    specialCharactersPermitted =
      prompt("Do you want special characters in your password? Yes or no?")
        .toLowerCase === "yes"
        ? true
        : false;

    // if answer is no to all prompts, then alert to choose two types
    if (
      !numbersPermitted &&
      !upperCasePermitted &&
      !lowerCasePermitted &&
      !specialCharactersPermitted
    ) {
      alert("You must choose atleast two character types.");
    }
  }

  var permittedCharacters = "";
  if (numbersPermitted) {
    permittedCharacters = numbers;
    console.log(permittedCharacters);
  }
  if (upperCasePermitted) {
    permittedCharacters += upperCase;
  }
  if (lowerCasePermitted) {
    permittedCharacters += lowerCase;
  }
  if (specialCharactersPermitted) {
    permittedCharacters += specialCharacters;
  }
  // Create length of password
  for (let i = 0; i < characterLength; i++) {
    let randomIndex = Math.floor(Math.random() * permittedCharacters.length);
    console.log(permittedCharacters[randomIndex]);

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
