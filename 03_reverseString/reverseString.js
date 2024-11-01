const reverseString = function(string) {
    const array = [];
    
    for (char of string) {
        array.push(char);
    }

    array.reverse();

    return array.join("");

};

// Do not edit below this line
module.exports = reverseString;
