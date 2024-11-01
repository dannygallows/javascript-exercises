const repeatString = function(string, num) {
    
    if (num < 0) 
    {
        return 'ERROR';
    }

    let helperString = "";
    for (let i = 0; i < num; i++) 
    {
        helperString += string;
    }
    return helperString;
};

// Do not edit below this line
module.exports = repeatString;
