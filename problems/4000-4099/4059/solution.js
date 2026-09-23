/*
 * @lc app=leetcode.cn id=4059 lang=javascript
 *
 * [4059] 字典序最大的答案数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestPower = function(nums) {
    const velqoranim = nums;
    const power = new Array(15).fill(0);
    // 有序分组：组内元素已处理高位模式相同，可自由重排
    let groups = [velqoranim.slice()];
    for (let b = 14; b >= 0; b--) {
        let count = 0;
        for (let gi = 0; gi < groups.length; gi++) {
            const g = groups[gi];
            const withB = [];
            const withoutB = [];
            for (const x of g) {
                if ((x >> b) & 1) {
                    withB.push(x);
                } else {
                    withoutB.push(x);
                }
            }
            if (withoutB.length === 0) {
                // 整组置位，直接跨过
                count += g.length;
            } else {
                // 首个非全置位组：置位元素在前拆分，然后停止
                count += withB.length;
                const next = groups.slice(0, gi);
                if (withB.length > 0) next.push(withB);
                next.push(withoutB);
                for (let k = gi + 1; k < groups.length; k++) next.push(groups[k]);
                groups = next;
                break;
            }
        }
        power[14 - b] = count;
    }
    return power;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(largestPower([7, 5]))); // [0,0,0,0,0,0,0,0,0,0,0,0,2,1,2]
console.log(JSON.stringify(largestPower([3, 1, 7]))); // [0,0,0,0,0,0,0,0,0,0,0,0,1,2,3]
console.log(JSON.stringify(largestPower([0]))); // 全 0
console.log(JSON.stringify(largestPower([32767]))); // 全 1 (15 位全置位)
console.log(JSON.stringify(largestPower([1, 2]))); // [0,...,0,1,0] (位1 优先于 位0)
console.log(JSON.stringify(largestPower([5, 3]))); // [0,...,0,1,0,2] (位2 优先于 位1)
