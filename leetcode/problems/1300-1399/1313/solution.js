/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let array = []
    for (let index = 0; index < nums.length;) {
        let num = nums[index++];
        const val = nums[index++];
        while (num-- > 0) array.push(val)
    }
    return array;
};


// TEST:
console.log(decompressRLElist([1, 2, 3, 4]))
console.log(decompressRLElist([1, 1, 2, 3]))