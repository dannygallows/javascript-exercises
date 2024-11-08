const findTheOldest = function(array) {

    array.forEach(element => {
        if (!element.yearOfDeath) {
            element.yearOfDeath = 2024;
        }
    });

    let userAges = array.map(item => (
    {
        name: item.name,
        age : item.yearOfDeath - item.yearOfBirth
    }));

    let sorted = userAges.sort( (a,b) => b.age - a.age);

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
