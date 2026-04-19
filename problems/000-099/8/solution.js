/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let result = parseInt(str);
    return result < -2147483648 ? -2147483648 : result > 2147483647 ? 2147483647 : (result || 0);
};

// TEST:
console.log(myAtoi('-123'));
console.log(myAtoi('13'));
console.log(myAtoi('-2147483649'));
console.log(myAtoi('2147483648'));
console.log(myAtoi('0'));
console.log(myAtoi('+'));