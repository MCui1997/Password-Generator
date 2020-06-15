// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var passLength = confirm("Do you want to include password length criteria?");
  var passContent = confirm("Do you want to include password content criteria?");

  if(passLength){

    var selectedLength = prompt("How long should your password be? (Limited between 18-128 characters");
  }
  
  
  if(passContent){

    var selectedContent = confirm("Do you want to include lower case letters?")
  }

}


