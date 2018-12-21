/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return Math.pow(x, n);
    // if (n === 0 || x === 1) {
    //     return 1;
    // }
    // if (n < 0) {
    //     n = -n;
    //     x = 1 / x;
    // }
    // return (n % 2 == 0) ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);

};

// TEST:
console.log(myPow(1, 2));
console.log(myPow(1.2, 2));
console.log(myPow(1, -12));
console.log(myPow(0.13, 22));
console.log(myPow(124, 2));
console.log(myPow(8.88023, 3));