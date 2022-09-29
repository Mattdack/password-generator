// Assignment Code
var generateBtn = document.querySelector("#generate");
var needPassword = false;
var numCharacters;
var includeLow = false;
var includeUp = false;
var includeNum = false;
var includeSpecial = false;
var characterPool = [];
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
var finalPassword = "";

// Function that takes in user input for character selection and updates the possible character pool.
function confirmInclude() {
  includeLow = confirm(
    "Do you want lowercase letters included in your password. Click OK for yes."
  );

  if (includeLow) {
    letters.toLowerCase();
    characterPool = letters.split("");
    console.log(characterPool);
  }

  includeUp = confirm(
    "Do you want uppercase letters included in your password. Click OK for yes."
  );

  if (includeUp) {
    var bigString = letters.toUpperCase();
    var bigLetters = bigString.split("");
    characterPool = characterPool.concat(bigLetters);
    console.log(characterPool);
  }

  includeNum = confirm(
    "Do you want numbers included in your password. Click OK for yes."
  );

  if (includeNum) {
    var numArray = numbers.split("");
    characterPool = characterPool.concat(numArray);
    console.log(characterPool);
  }

  includeSpecial = confirm(
    "Do you want special characters included in your password. Click OK for yes."
  );
  if (includeSpecial) {
    var specArray = specialChars.split("");
    characterPool = characterPool.concat(specArray);
    console.log(characterPool);
  }
}

//Generates randomized password based on user criteria
function generatePassword() {
  numCharacters = 0;
  finalPassword = "";
  characterPool = [];
    alert(
      "You will now be prompted with how many and what characters to inlcude in your password.\n \nPasswords must have at least 8 and no more than 128 characters.\n \nOne character type must be included."
    );
    //TO DO: Prevent entries that are not numbers like text or special characters.
    numCharacters = prompt("Please enter a number between 8 and 128 (inclusive).");  
    numCharacters = parseInt(numCharacters);
  
    // While loop that ensures that user enters a length between 8 and 128.
    while (numCharacters < 8 || numCharacters > 128 || isNaN(numCharacters)) {
      if(!(isNaN(numCharacters))) {
        numCharacters = prompt(
          "You entered a value out of bounds. Please enter a number between 8 and 128 (inclusive)."
        );
      } else {
        numCharacters = prompt(
          "You did not enter a number value. Please enter a number between 8 and 128 (inclusive)."
        )
      }
    }

    // Confirms for each character: lowercase, uppercase, numeric, and/or special characters
    confirmInclude();

    // While loop that ensures that user selects at least one character type.
    while (!includeLow && !includeUp && !includeNum && !includeSpecial) {
      alert(
        "You did not select any character types to be included.\n Please select to include at least one type from the list of lowercase, uppercase, numbers, and special characters."
      );
      confirmInclude();
    }
    // Generates a randomized password the length requested by user and with character types that they include
    for (x = 0; x < numCharacters; x++) {
      finalPassword +=
        characterPool[Math.floor(Math.random() * characterPool.length)];
    }
    console.log(finalPassword);

  return finalPassword;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Thank you for using our service");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);