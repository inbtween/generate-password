// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write function to return password

function generatePassword() {
  // Variables
  var result = "";
  var numbers = "0123456789";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%";

  var characterLength = Number(
    prompt("How long do you want in your password?")
  );

  while (characterLength < 8 || characterLength > 128) {
    characterLength = Number(
      prompt("Please choose a number between 8 and 128.")
    );
  }
  // Variables for yes/no to permitted characters
  var numbersPermitted = false;
  var upperCasePermitted = false;
  var lowerCasePermitted = false;
  var specialCharactersPermitted = false;

  while (
    !numbersPermitted &&
    !upperCasePermitted &&
    !lowerCasePermitted &&
    !specialCharactersPermitted
  ) {
    numbersPermitted =
      prompt(
        "Do you want numbers in your password? Answer yes or no."
      ).toLowerCase() === "yes"
        ? true
        : false;
    upperCasePermitted =
      prompt(
        "Do you want upper case letters in your password? Answer yes or no."
      ).toLowerCase() === "yes"
        ? true
        : false;
    lowerCasePermitted =
      prompt(
        "Do you want lower case letters in your password? Answer yes or no."
      ).toLowerCase() === "yes"
        ? true
        : false;
    specialCharactersPermitted =
      prompt(
        "Do you want special characters in your password? Answer yes or no."
      ).toLowerCase() === "yes"
        ? true
        : false;
    //if user does not choose any characters, alert to choose at least 2 types
    if (
      !numbersPermitted &&
      !upperCasePermitted &&
      !lowerCasePermitted &&
      !specialCharactersPermitted
    ) {
      alert("You must choose at least two of character types.");
    }
  }
  //list of Permitted characters to be included in the passwowrd. All Permitted characters will be concatenated
  var permittedCharacters = "";
  if (numbersPermitted) {
    permittedCharacters = numbers;
    //console.log(permittedCharacters)
  }
  if (upperCasePermitted) {
    permittedCharacters += upperCase;
    //console.log(permittedCharacters)
  }
  if (lowerCasePermitted) {
    permittedCharacters += lowerCase;
    //console.log(permittedCharacters)
  }
  if (specialCharactersPermitted) {
    permittedCharacters += specialCharacters;
    //console.log(permittedCharacters)
  }
  // Create length of password
  for (let i = 0; i < characterLength; i++) {
    // Computer comes up with a random number based on the length of the Permitted characters by the user
    let randomIndex = Math.floor(Math.random() * permittedCharacters.length);
    console.log(permittedCharacters[randomIndex]);
    //put together all the permitted characters as a long string to choose from
    result += permittedCharacters[randomIndex];
    console.log(result);
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(8);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword(len) {
//   var length = len ? len : 10;
//   var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
//   var numeric = "0123456789";
//   var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
//   var password = "";
//   var character = "";
//   var crunch = true;
//   while (password.length < length) {
//     entity1 = Math.ceil(string.length * Math.random() * Math.random());
//     entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
//     entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
//     hold = string.charAt(entity1);
//     hold = password.length % 2 == 0 ? hold.toUpperCase() : hold;
//     character += hold;
//     character += numeric.charAt(entity2);
//     character += punctuation.charAt(entity3);
//     password = character;
//   }
//   password = password
//     .split("")
//     .sort(function () {
//       return 0.5 - Math.random();
//     })
//     .join("");
//   return password.substr(0, len);
// }
