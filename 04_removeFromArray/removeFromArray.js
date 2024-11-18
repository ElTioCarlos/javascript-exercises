const removeFromArray = function(arr, ...items) {
    newArr = [];

    arr.forEach(element => {
        
        if (!items.includes(element)) {
            newArr.push(element);
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
