/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let p1 = 0;
    let p2 = 0;
    do {
        p1 = nums[p1]
        p2 = nums[p2]
        p2 = nums[p2]
    } while (p1 !== p2);
    p2 = 0;
    do {
        p1 = nums[p1]
        p2 = nums[p2]
    } while (p1 !== p2);
    return p1;
};

// TEST:
console.log(findDuplicate([1, 3, 4, 2, 2]))
console.log(findDuplicate([3, 1, 3, 4, 2]))
console.log(findDuplicate([1, 1]))
console.log(findDuplicate([1, 1, 2]))
console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]))