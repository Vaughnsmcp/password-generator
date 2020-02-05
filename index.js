var passwordLength;
var passwordCriteria;
var passwordCriteriaArr = [];
var passwordCriteriaBoolSpecial = false;
var passwordCriteriaBoolNumerical = false;
var passwordCriteriaBoolUpper = false;
var passwordCriteriaBoolLower = false;
var buttonElement=document.getElementById("button").addEventListener("click", generate);

function generate(){
    while (passwordLength !== null) {

        passwordLength = prompt("Password Length is between 8-128 characters");
        passwordLength = parseInt(passwordLength);
    
        //exit loop
    
        if (isNaN(passwordLength)) {
            alert("Please enter a valid number");
    
        }
        if (passwordLength < 8 || passwordLength > 128) {
            alert("Please enter between 8 and 128 charaters");
        }
        if (passwordLength > 8 || passwordLength < 128) {
            break;
        }
    }
    while (passwordCriteria !== null) {
    
    
    
    
        passwordCriteria = prompt("Characters must inlude special, numeric, lowercase, and uppercase. Enter 'S' for Special, 'N' for number, 'L' for lowercase, 'U' for uppercase.");
        if (passwordCriteria !== null) { passwordCriteriaArr = passwordCriteria.split(""); }
    
    
        for (var i = 0; i < passwordCriteriaArr.length; i++) {
            if (passwordCriteriaArr[i].includes('s')) {
                passwordCriteriaBoolSpecial = true;
    
            }
            if (passwordCriteriaArr[i].includes('n')) {
                passwordCriteriaBoolNumerical = true;
    
            }
            if (passwordCriteriaArr[i].includes('l')) {
                passwordCriteriaBoolLower = true;
            }
            if (passwordCriteriaArr[i].includes('u')) {
                passwordCriteriaBoolUpper = true;
            }
        }
    
        if (passwordCriteriaBoolSpecial === true ||
            passwordCriteriaBoolNumerical === true ||
            passwordCriteriaBoolUpper === true ||
            passwordCriteriaBoolLower === true) {
            break;
        }
        else {
            alert("enter a valid password");
    
        }
    
    
    }
    
    generatePassword(passwordLength, passwordCriteriaBoolSpecial, passwordCriteriaBoolNumerical, passwordCriteriaBoolLower, passwordCriteriaBoolUpper);

}

function generatePassword(length, specialCharBool, numericalCharBool, lowerCharBool, upperCharBool) {
    var passwordString;
    var passwordArr = [];
    var availableCharSetArr = [];
    var availableCharSetString;
    var specialCharSet = [' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~'];
    var numericalCharSet = ['1234567890'];
    var lowerCharSet = ['abcdefghijklmnopqrstuvwyxz'];
    var upperCharSet = ['ABCDEFGHIJKLMNOPQRSTUVWYXZ'];
    if (specialCharBool === true) {
        availableCharSetArr = availableCharSetArr.concat(specialCharSet);
    }
    if (numericalCharBool === true) {
        availableCharSetArr = availableCharSetArr.concat(numericalCharSet);
    }
    if (lowerCharBool === true) {
        availableCharSetArr = availableCharSetArr.concat(lowerCharSet);
    }
    if (upperCharBool === true) {
        availableCharSetArr = availableCharSetArr.concat(upperCharSet);
    }
    availableCharSetArr = availableCharSetArr.join('');
    availableCharSetString = availableCharSetArr.toString();

    for (var i = 0; i < length; i++) {
        var randomNum = Math.floor((Math.random() * availableCharSetArr.length) + 1)

        passwordArr.push(availableCharSetString.charAt(randomNum));
        

    }
    passwordArr = passwordArr.join("");
   passwordString = passwordArr.toString(); 
   document.getElementById("password").value=passwordString
   console.log(passwordString);
   alert("Your password is " + passwordString);


}


