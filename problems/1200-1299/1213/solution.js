/*
 * @lc app=leetcode.cn id=1213 lang=javascript
 *
 * [1213] 三个有序数组的交集
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    const res = [];
    let i = 0, j = 0, k = 0;
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        const a = arr1[i], b = arr2[j], c = arr3[k];
        if (a === b && b === c) {
            res.push(a);
            i++; j++; k++;
        } else {
            const min = Math.min(a, b, c);
            if (a === min) i++;
            if (b === min) j++;
            if (c === min) k++;
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(arraysIntersection([1,2,3,4,5], [1,2,5,7,9], [1,3,4,5,8])); // [1,5]
console.log(arraysIntersection([197,418,523,876,1356], [501,880,1593,1710,1870], [521,682,1337,1395,1764])); // []
console.log(arraysIntersection([1], [1], [1])); // [1]
console.log(arraysIntersection([1,2], [2,3], [2,4])); // [2]
console.log(arraysIntersection([1,3,5], [2,4,6], [1,2,3])); // []
