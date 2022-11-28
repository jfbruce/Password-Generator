// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersArray = "0123456789".split('');
var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var specialCharactersArray = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/".split('');

// Write password to the #password input

function generatePassword() {
  let passwordArray = [];
  let lengthString = prompt("Length of password between 8 and 128 characters");
  let length = parseInt(lengthString);
  if (!validateLength(length)) {
    return;
  }

  let lowercase = prompt("Lower Case Characters? Yes or No").toLowerCase();
  let isLowercase;
  if (lowercase === "yes") {
    isLowercase = true;
  }
  else if (lowercase === "no") {
    isLowercase = false;
  }
  else {
    alert("please put Yes or No")
    return;
  }

  let uppercase = prompt("Upper Case characters? Yes or No").toLowerCase();
  let isUpperCase;
  if (uppercase === "yes") {
    isUpperCase = true;
  }
  else if (uppercase === "no") {
    isUpperCase = false;
  }
  else {
    alert("please put Yes or No")
    return;
  }

  let specialCharacters = prompt("Special Characters? Yes or No").toLowerCase();
  let isSpecialCharacters;
  if (specialCharacters === "yes") {
    isSpecialCharacters = true;
  }
  else if (specialCharacters === "no") {
    isSpecialCharacters = false
  }
  else {
    alert("please put Yes or No")
    return;
  }

  let numbers = prompt("Include numbers? Yes or No").toLowerCase();
  let isNumber;
  if (numbers === "yes") {
    isNumber = true;
  }
  else if (numbers === "no") {
    isNumber = false;
  }
  else {
    alert("please put Yes or No")
    return;
  }

  if (isLowercase) {
    passwordArray.push(...lowerCaseArray)
  }
  if (isUpperCase) {
    passwordArray.push(...upperCaseArray)
  }
  if (isSpecialCharacters) {
    passwordArray.push(...specialCharactersArray)
  }
  if (isNumber) {
    passwordArray.push(...numbersArray)
  }

  if (passwordArray.length === 0) {
    alert("Please input character values");
    return;
  }
  
  let password = "";

  
  for (let index = 0; index < length; index++) {
    const randomCharacter = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    password += randomCharacter
  }
  return password;
}
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function validateLength(length) {
  if (isNaN(length)) {
    alert("please enter a number");
    return false;
  }
  if (length < 8) {
    alert("Please enter a number greater than 8");
    return false;
  }
  if (length > 128) {
    alert("Please enter a number less than 128");
    return false;
  }
  return true;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
