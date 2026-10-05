/*
 * @lc app=leetcode.cn id=4065 lang=javascript
 *
 * [4065] 移除不同值重排数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const cnt = new Array(101).fill(0);
    for (const x of nums) cnt[x]++;
    let remaining = nums.length;
    const ans = [];
    while (remaining > 0) {
        // 每轮按升序移除所有不同值各一个
        for (let v = 1; v <= 100; v++) {
            if (cnt[v] > 0) {
                ans.push(v);
                cnt[v]--;
                remaining--;
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(rearrangeArray([3, 1, 3, 2, 1, 3]))); // [1,2,3,1,3,3]
console.log(JSON.stringify(rearrangeArray([7, 7, 4, 4, 4]))); // [4,7,4,7,4]
console.log(JSON.stringify(rearrangeArray([1]))); // [1]
console.log(JSON.stringify(rearrangeArray([5, 5, 5]))); // [5,5,5]
console.log(JSON.stringify(rearrangeArray([1, 2]))); // [1,2]
console.log(JSON.stringify(rearrangeArray([2, 1, 2, 1]))); // [1,2,1,2]
