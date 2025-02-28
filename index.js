// REQUIREMENTS //
  // Generate two random passwords when user clicks button
  // Each password should be 15 characters long

// STRETCH GOALS //
  // Ability to set the password length
  // Add "copy-on-click"
  // Toggle "symbols" and "numbers" on/off

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Select input fields
let inputOne = document.getElementById("input-one");
let inputTwo = document.getElementById("input-two");
let generatePasswordBtn = document.getElementById("generatePasswordBtn");


// Generate password function

function generatePassword(length = 15) {
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}


// Assign passwords to input fields (assuming they are input elements)

generatePasswordBtn.addEventListener("click", function() {
    inputOne.value = generatePassword();
    inputTwo.value = generatePassword();
});


// Function to copy text on click
function copyToClipboard(event) {
  let inputField = event.target;
  inputField.select();
  document.execCommand("copy");

  // Show a temporary copied message
  let originalValue = inputField.value;
  inputField.value = "Copied!";
  setTimeout(() => {
      inputField.value = originalValue;
  }, 1000);
}

// Add click event to both input fields
inputOne.addEventListener("click", copyToClipboard);
inputTwo.addEventListener("click", copyToClipboard);

