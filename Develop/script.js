// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

// Ask two confirm prompts to determine which criteria should be included
  var passLength = confirm("Do you want to include password length criteria?");
  var passContent = confirm("Do you want to include password content criteria?");


  // If neither criteria is selected, alert that no password could be generated
  if(!passLength && !passContent){
    alert("No password could be generated.");
  }


  // If length was selected as criteria, then ask how many characters should be in the password
  if(passLength){
    var selectedLength = prompt("How long should your password be? (Limited between 18-128 characters");
  }
  
  
  // If content was selected, then ask what types of characters the user wants
  if(passContent){

    var ifLowerCase = confirm("Do you want to include lower case letters?")
    var ifUpperCase = confirm("Do you want to include upper case letters?")
    var ifNumeric = confirm("Do you want to include numbers?")
    var ifSpecial = confirm("Do you want to include special characters?")
  }



}


