/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    if (target > x + y) {
        return false;
    }
    if (target === 0) {
        return true;
    }
    
    // Calculate GCD using Euclidean algorithm
    let a = x, b = y;
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    let gcd = a;
    
    return target % gcd === 0;
};

module.exports = canMeasureWater;

// TEST:
console.log(canMeasureWater(3, 5, 4)); // true
console.log(canMeasureWater(2, 6, 5)); // false
console.log(canMeasureWater(1, 2, 3)); // true
