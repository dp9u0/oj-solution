/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let r1 = 0; // 记录出现一次
    let r2 = 0; // 记录出现奇数次
    nums.forEach(n => {
        r1 = ~r2 & (r1 ^ n);
        r2 = ~r1 & (r2 ^ n);
    });
    return r1;
};

// TEST:
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
console.log(singleNumber([2, 2, 3, 2]));
