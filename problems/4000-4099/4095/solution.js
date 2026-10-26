/*
 * @lc app=leetcode.cn id=4095 lang=javascript
 *
 * [4095] 统计频次阶梯子数组的数目 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countStaircase = function(nums) {
    const n = nums.length;
    const rank = new Int32Array(100001); // 值 -> 首次出现位次(1-based)
    const cnt = new Int32Array(100001);
    const stamp = new Int32Array(100001).fill(-1);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let k = 0;     // 不同值个数
        let len = 0;
        let tri = 0;   // k(k+1)/2
        let cntBad = 0; // 计数已越过自身位次(只增)
        for (let j = i; j < n; j++) {
            const x = nums[j];
            if (stamp[x] !== i) {
                stamp[x] = i;
                rank[x] = ++k;
                cnt[x] = 1;
                tri += k;
            } else if (++cnt[x] === rank[x] + 1) {
                cntBad++;
            }
            len++;
            if (cntBad > 0) break; // 计数只增,此后永不合法
            if (tri === len) {
                ans++;
            } else if (tri - len > n - 1 - j) {
                break; // gap 每步至多降 1,剩余长度不足以归零
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countStaircase([5,8,8,2,2,2]) === 9);
console.log(countStaircase([6,6,9,9]) === 5);
console.log(countStaircase([2,3,4,4,3,4]) === 8);
console.log(countStaircase([1]) === 1);
console.log(countStaircase([1,1]) === 2);
