// Assignment Code
// var "selector name" = [Array list]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ",", "<", ">", "/", "'"]
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //parseInt = input characters
  var userInput = parseInt(
    prompt("how many characters would you like?"), 10
  )
  // is nan= not a number
  if (Number.isNaN(userInput)) {
    alert("you must enter a number")
    return null
  }
  // null = nothing (not necessary but good practice)
  // user input is what user value is entered
  if (userInput > 128) {
    alert("you must enter less than 128")
    return null
  }
  if (userInput < 8) {
    alert("you must enter greater than 8")
    return null
  }
  // how we show confirm or cancel 
  var confirmUppercase = confirm("Do you want upperCase?")
  var confirmNumbers = confirm("Do you want numbers?")
  var confirmLowerCase = confirm("Do you want lower case?")
  var confirmSymbols = confirm("Do you want symbols?")

  // ! in front of makes falesy
  // && ampersand always use when all is false
  if (
    !confirmUppercase && !confirmNumbers && !confirmLowerCase && !confirmSymbols
  ) {
    alert("Must pick one")
    return null
  }
  // null = nothing
  // storage user input 
  // var *keyStorageName* = {1 object var: same object value} 
  var inputStore = {
    userInput: userInput,
    confirmUppercase: confirmUppercase,
    confirmNumbers: confirmNumbers,
    confirmLowerCase: confirmLowerCase,
    confirmSymbols: confirmSymbols

  }
  //will resturn inputStore var
  return inputStore
}
//randomizer selcector
function randomizer(charz) {
  var randomChar = Math.floor(Math.random() * charz.length)
  var randomEl = charz[randomChar]
  return randomEl
  //will return random var
}

var checkArrays

//function create password inside store generate password inside var, create 3 empty arrays 
//(1 will store result) 
//2 will store posidble chars)
//3 will have definite chars)
// conditonal logic (if else) (switch case)
// run check arrays = user input u,l,s,
// push to empty array *.push method*
//

function createPassword() {
  var result = [];
  var possibleChars = [];
  var definiteChars = [];



  var choices = generatePassword()
  if (!choices) {
    return null
  }
  if (!choices.confirmUppercase) {
    possibleChars = possibleChars + upperCase
    definiteChars.push(randomizer(upperCase))
  }

  if (!choices.confirmLowerCase) {
    possiblesChars = possibleChars + lowerCase
    definiteChars.push(randomizer(lowerCase))
  }

  if (!choices.confirmNumbers) {
    possibleChars = possibleChars + numbers
    definiteChars.push(randomizer(numbers))
  }
    if (!choices.confirmSymbols) {
      possibleChars = possibleChars + symbols
      definiteChars.push(randomizer(symbols))
    }

  }




}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

