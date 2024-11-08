const palindromes = function (inputString) {
    
    let string = inputString.toLowerCase();
    string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '');
    
    let strlen = string.length;
    
    for (let i = 0; i < strlen; i++) {
        strlen--;

        if (string.charAt(i) != string.charAt(strlen)) {
            return false;
        }
    }
    return true;
};



// Do not edit below this line
module.exports = palindromes;
