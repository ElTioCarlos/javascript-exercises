const palindromes = function (str) {
    text = str.toLowerCase().replaceAll(".", "").replaceAll(",", "").replaceAll("!","").replaceAll(" ", "")
    let invertido = text.split("").reverse().join("");
    return invertido === text
};
// Do not edit below this line
module.exports = palindromes;
