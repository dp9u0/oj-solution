/*
 * @lc app=leetcode.cn id=2113 lang=javascript
 *
 * [2113] 查询删除和添加元素后的数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var elementInNums = function(nums, queries) {
    const m = nums.length;
    return queries.map(([time, index]) => {
        const r = time % (2 * m);
        if (r < m) {
            return index < m - r ? nums[r + index] : -1;
        }
        return index < r - m ? nums[index] : -1;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(elementInNums([0,1,2], [[0,2],[2,0],[3,2],[5,0]]))); // [2,2,-1,0]
console.log(JSON.stringify(elementInNums([2], [[0,0],[1,0],[2,0],[3,0]]))); // [2,-1,2,-1]
console.log(JSON.stringify(elementInNums([5,6], [[4,0],[4,1],[6,1]]))); // [5,6,-1] (r=0 full twice; t=6 -> r=2 empty)
console.log(JSON.stringify(elementInNums([1,2,3,4], [[9,0],[9,2],[10,3]]))); // [2,4,-1] (r=1 shrink; r=2 array [3,4], idx 3 out)
