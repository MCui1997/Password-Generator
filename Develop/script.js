// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var passLength = confirm("Do you want to include password length criteria?");
  var passContent = confirm("Do you want to include password content criteria?");


  if(!passLength && !passContent){
    alert("No password could be generated.");
  }


  if(passLength){
    var selectedLength = prompt("How long should your password be? (Limited between 18-128 characters");
  }
  
  
  if(passContent){

    var ifLowerCase = confirm("Do you want to include lower case letters?")
    var ifUpperCase = confirm("Do you want to include upper case letters?")
    var ifNumeric = confirm("Do you want to include numbers?")
    var ifSpecial = confirm("Do you want to include special characters?")
  }

}


