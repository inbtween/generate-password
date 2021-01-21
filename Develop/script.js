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
    //if user does choose any characters, alert to choose at least 2 types
    if (
      !numbersPermitted &&
      !upperCasePermitted &&
      !lowerCasePermitted &&
      !specialCharactersPermitted
    ) {
      alert("You must choose at least two of character types.");
    };