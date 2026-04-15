/*
 * @lc app=leetcode id=1424 lang=javascript
 *
 * [1424] Diagonal Traverse II
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const groups = new Map();
    let maxKey = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            const key = i + j;
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(nums[i][j]);
            maxKey = Math.max(maxKey, key);
        }
    }

    const ans = [];
    for (let key = 0; key <= maxKey; key++) {
        const group = groups.get(key);
        if (group) {
            // Reverse since we collected top-to-bottom, need bottom-to-top
            for (let k = group.length - 1; k >= 0; k--) {
                ans.push(group[k]);
            }
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])));                                    // [1,4,2,7,5,3,8,6,9]
console.log(JSON.stringify(findDiagonalOrder([[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]])));             // [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
