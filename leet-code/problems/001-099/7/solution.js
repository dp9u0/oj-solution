/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let MAX_INT = 2147483647;
    let MIN_INT = -2147483648;
    let ng = false;
    if (x < 0) {
        x = Math.abs(x);
        ng = true;
    }
    x = parseInt(reverseStr(x.toString()));
    if (ng) {
        x = -x;
        return x < MIN_INT ? 0 : x;
    }
    return x > MAX_INT ? 0 : x;
};

var reverseStr = function(s) {
    return s.split('').reverse().join('');
};

console.log(reverse(1234));
console.log(reverse(-1234));
console.log(reverse(0));
console.log(reverse(1000000000000000002));