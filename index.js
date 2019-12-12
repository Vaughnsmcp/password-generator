var passwordLength;
var passwordCriteria;
var passwordCriteriaArr = [];
var passwordCriteriaBoolSpecial = false;
var passwordCriteriaBoolNumerical = false;
var passwordCriteriaBoolUpper = false;
var passwordCriteriaBoolLower = false;


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




    passwordCriteria = prompt("Characters must inlude special, numeric, lowercase, and uppercase");
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

    if( passwordCriteriaBoolSpecial === true ||
        passwordCriteriaBoolNumerical === true ||
        passwordCriteriaBoolUpper === true ||
        passwordCriteriaBoolLower === true ) {
        break;
        }
    else
    {

    }


}
