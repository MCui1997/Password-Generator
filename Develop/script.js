
// Gets the generate button linked to the html
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Initialization of all necesarry variables (Final Password and Length of Final Password)

var finalPassword = "";
var finalPasswordLength = 0;

// Create the strings of characters that will be used to generate the password
var numbers = "1234567890";
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowerLetters = "abcdefghijklmnopqrstuvwyxz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var finalCombination = "";


////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions

// This function takes the generated password and writes it to the page
function writePassword() {

  var password = (generatePassword());
  var passwordText = document.querySelector("#password");

  passwordText.value = (finalPassword);

}

// This function generates the actual password
function generatePassword(){

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
    finalPasswordLength = selectedLength;

    //If the character limit is broken, shows message and exits
    if(selectedLength <18 || selectedLength >128){
      alert("No password could be generated due to improper length");
      return;
    }
  }

  //If length criteria wasn't specified
  if(!passLength){
    
    finalPasswordLength = Math.random() * (128 - 18) + 18;

  }

  // If content was selected, then ask what types of characters the user wants
  if(passContent){

    var ifLowerCase = confirm("Do you want to include lower case letters?")
    var ifUpperCase = confirm("Do you want to include upper case letters?")
    var ifNumeric = confirm("Do you want to include numbers?")
    var ifSpecial = confirm("Do you want to include special characters?")


    //Adds lowercase options to final option of combinations
    if(ifLowerCase){

      finalCombination = (finalCombination +lowerLetters);

    }

    //Adds uppercase options to final option of combinations
    if(ifUpperCase){
      
      finalCombination = (finalCombination + upperLetters);

    }

    //Adds numeric options to final option of combinations
    if(ifNumeric){

      finalCombination = (finalCombination + numbers);
      
    }

    //Adds speical char options to final option of combinations
    if(ifSpecial){

      finalCombination = (finalCombination + specialChar);

      
    }


    //Generate the random password

    var randomstring = "";

    //Generate a randomstring with the numbers
    for (var i=0; i<finalPasswordLength; i++) {
      var rnum = Math.floor(Math.random() * finalCombination.length);
      randomstring += finalCombination.substring(rnum,rnum+1);
    }

    finalPassword = randomstring;
    //Clear the final combination so it resets for next time
    finalCombination = "";
    
  
  }

  }


  
  
  




