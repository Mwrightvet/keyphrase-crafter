// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompting the user for the password criteria
function writePassword() {
  var passwordLength = prompt(
    "Your password must be between 8 to 18 characters long, enter your desired number."
  );

  // Validating the length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 18) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  var includeSpecialCharacters = confirm("Include special characters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumeric = confirm("Include numbers?");

  // Validating that at least one criteria is selected
  if (!(includeSpecialCharacters || includeUppercase || includeLowercase || includeNumeric)) {
    alert("Please select at least one criteria for the password.");
    return;
  }

  // Generate the password
  var password = generatePassword(passwordLength, includeSpecialCharacters, includeUppercase, includeLowercase, includeNumeric);

  // Display the password on the page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate the password
function generatePassword(length, includeSpecialCharacters, includeUppercase, includeLowercase, includeNumeric) {
  var specialChars = "!@#$%^&*()_-+=<>?";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";

  var allChars = "";
  var password = "";

  if (includeSpecialCharacters) allChars += specialChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumeric) allChars += numericChars;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}
