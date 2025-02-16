const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    
    let [a,b] = [0,1]
    for (i = 0; i < num; i++){
        let aux = a+b
        a = b
        b = aux
    } return a
};

// Do not edit below this line
module.exports = fibonacci;
