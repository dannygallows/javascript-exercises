const fibonacci = function(x) {
    let num = parseInt(x);

    if (num < 0) return "OOPS";

    let array = [];
    let fibonacci = 0;

    for (let i = 0; i < num; i++)
    {
        if (array.length > 1) {
            fibonacci = array[i - 2] + array[i - 1];
        } else fibonacci += i;
        array.push(fibonacci);
    }

    if (array.length > 1) return array[array.length - 2] + array[array.length - 1];
    else if (array.length == 0) return 0;
    else return 1;
};

// Do not edit below this line
module.exports = fibonacci;
