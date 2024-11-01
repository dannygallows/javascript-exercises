const removeFromArray = function(array, ...itemsToRemove) {
    
    let resultArray = [];
    let lengthOfRemoveArray = itemsToRemove.length;
    
    for (item of array) {
        
        for (let i = 0; i < lengthOfRemoveArray; i++) {
 
            if (item == itemsToRemove[i] && (typeof(item) == typeof(itemsToRemove[i]))) {
                break;
            }
                
            if (i == lengthOfRemoveArray - 1) {
                resultArray.push(item);
            }
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
