/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    return x === reverse(x);
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while (x > 0) {
        let digit = x % 10;
        x = (x - digit) / 10;
        result = (result * 10) + digit;
    }
    if ((result >> 0) != result) {
        return 0;
    }
    return result;
};

// TEST:
console.log(isPalindrome(214748364));
console.log(isPalindrome(-214748364));
console.log(isPalindrome(1234321));
console.log(isPalindrome(1));
console.log(isPalindrome(-2147447412));