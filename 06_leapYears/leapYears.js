const leapYears = function(year) {

const divisibleFour = year % 4 === 0;
const iscentury = year % 100 === 0;
const divisibleFourHundred = year % 400 === 0;
    
    if (divisibleFour && (!iscentury || divisibleFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
