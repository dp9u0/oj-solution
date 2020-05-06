/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let xor = 0;
    for (let i of nums) { xor ^= i; }
    let i = 0;
    while (((xor >> i) & 1) !== 1) { i++; }
    let a = 0, b = 0;
    for (let x of nums) {
        if (((x >> i) & 1) === 1) { a ^= x; }
        else { b ^= x; }
    }
    return [a, b];
};

// TEST:
console.log(singleNumber([1, 2, 1, 3, 2, 5]));