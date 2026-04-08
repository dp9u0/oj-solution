/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 10;
    
    let totalCount = 10;
    let currentUniqueDigits = 9;
    let availableNumber = 9;
    
    for (let i = 2; i <= n && i <= 10; i++) {
        currentUniqueDigits = currentUniqueDigits * availableNumber;
        totalCount += currentUniqueDigits;
        availableNumber--;
    }
    
    return totalCount;
};

module.exports = countNumbersWithUniqueDigits;

// TEST:
console.log(countNumbersWithUniqueDigits(0)); // 1
console.log(countNumbersWithUniqueDigits(1)); // 10
console.log(countNumbersWithUniqueDigits(2)); // 91
