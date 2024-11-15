const reverseString = function(word) {
    let result = "";
    let length = word.length - 1;

    for (let i = length; i > -1; --i) {
        let letter = word[i];
        result += letter;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
