const sumAll = function(from, to) {
    
    let finalSum = 0;  
    let count = 0;
    
    if (from > to) {
        count = from;
    }
    else count = to;

    if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < 0) {
        return "ERROR";
    }

    
    for (let i = 1; i <= count; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
