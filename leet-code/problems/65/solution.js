/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return parseFloat(s);
};

// TEST:

console.log(isNumber('0')); //True
console.log(isNumber('0.1')); //True
console.log(isNumber(' 0.1 ')); //True
console.log(isNumber('abc'));
console.log(isNumber('abc'));
console.log(isNumber('1 a'));
console.log(isNumber('2e10')); //True