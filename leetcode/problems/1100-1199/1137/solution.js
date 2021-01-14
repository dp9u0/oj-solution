const f = { 0: 0, 1: 1, 2: 1 }
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (f[n] !== undefined) return f[n]
    let result = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
    f[n] = result;
    return result
};

// TEST:
console.log(tribonacci(0))
console.log(tribonacci(1))
console.log(tribonacci(2))
console.log(tribonacci(3))
console.log(tribonacci(25))
console.log(tribonacci(37))
