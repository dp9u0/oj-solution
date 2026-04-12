/*
 * @lc app=leetcode id=565 lang=javascript
 *
 * [565] Array Nesting
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    const n = nums.length;
    const visited = new Array(n).fill(false);
    let result = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        let count = 0;
        let j = i;
        while (!visited[j]) {
            visited[j] = true;
            j = nums[j];
            count++;
        }
        result = Math.max(result, count);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(arrayNesting([5,4,0,3,1,6,2])); // 4
console.log(arrayNesting([0,1,2])); // 1
console.log(arrayNesting([0])); // 1
