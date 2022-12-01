// Assignment Code
// var "selector name" = [Array list]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ",", "<", ">", "/", "'"]
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompt per var selected
  // var lengthPassword=prompt("Choose a length of at least 8 characters and no more than 128 characters.")

  var userInput = parseInt(
    prompt("how many characters would you like?"), 10
  )
  if (Number.isNaN(userInput)) {
    alert("you must enter a number")
    return null
  }

  if (userInput > 128) {
    alert("you must enter less than 128")
    return null
  }
  if (userInput < 8) {
    alert("you must enter greater than 8")
    return null
  }

  var confirmUppercase = confirm("Do you want upperCase?")
  var confirmNumbers = confirm("Do you want numbers?")
  var confirmLowerCase = confirm("Do you want lower case?")
  var confirmSymbols = confirm("Do you want symbols?")

  // ! makes falesy
  // && ampersand
  if (
    !confirmUppercase && !confirmNumbers && !confirmLowerCase && !confirmSymbols
  ) {
    alert(" Must pick one")
    return null
  }
  // null = nothing
  // store user input
  // key 
  var inputStore = {
    userInput: userInput,
    confirmUppercase: confirmUppercase,
    confirmNumbers: confirmNumbers,
    confirmLowerCase: confirmLowerCase,
    confirmSymbols: confirmSymbols

  }
  return inputStore
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

