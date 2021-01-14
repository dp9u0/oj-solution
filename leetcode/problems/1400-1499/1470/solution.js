/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let p1 = 0;
    let p2 = n;
    const array = [];
    while (p1 < n) {
        array.push(nums[p1++])
        array.push(nums[p2++])
    }
    return array;
};


// TEST:
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8], 4))
