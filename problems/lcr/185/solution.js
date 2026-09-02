/*
 * @lc app=leetcode.cn id=LCR 185 lang=javascript
 *
 * [LCR 185] 统计结果概率
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var statisticsProbability = function(num) {
    const max = 6 * num;
    // cur[s] = 当前已投骰子点数总和为 s 的组合方式数
    let cur = new Array(max + 1).fill(0);
    for (let k = 1; k <= 6; k++) cur[k] = 1; // 第一个骰子

    for (let dice = 1; dice < num; dice++) {
        const next = new Array(max + 1).fill(0);
        for (let s = 1; s <= 6 * dice; s++) {
            if (!cur[s]) continue;
            for (let k = 1; k <= 6; k++) next[s + k] += cur[s];
        }
        cur = next;
    }

    const total = Math.pow(6, num);
    const res = [];
    for (let s = num; s <= max; s++) res.push(cur[s] / total);
    return res;
};
// @lc code=end

// TEST:
function assertArrClose(actual, expected, eps = 5e-5) {
  if (actual.length !== expected.length) { console.log(false); return; }
  for (let i = 0; i < actual.length; i++) {
    if (Math.abs(actual[i] - expected[i]) > eps) { console.log(false); return; }
  }
  console.log(true);
}

// num = 1 -> 每个点数概率 1/6
assertArrClose(statisticsProbability(1), Array(6).fill(1 / 6));

// num = 2 -> 和范围 2..12,概率 [1,2,3,4,5,6,5,4,3,2,1]/36
const exp2 = [1,2,3,4,5,6,5,4,3,2,1].map(v => v / 36);
assertArrClose(statisticsProbability(2), exp2);

// num = 3 -> 示例1 (5位小数近似)
const exp3 = [0.00463,0.01389,0.02778,0.04630,0.06944,0.09722,0.11574,0.12500,0.12500,0.11574,0.09722,0.06944,0.04630,0.02778,0.01389,0.00463];
assertArrClose(statisticsProbability(3), exp3);

// num = 3 概率和应 ≈ 1
const p3 = statisticsProbability(3);
console.log(Math.abs(p3.reduce((a,b)=>a+b,0) - 1) < 1e-6);

// num = 1 概率和 = 1
const p1 = statisticsProbability(1);
console.log(Math.abs(p1.reduce((a,b)=>a+b,0) - 1) < 1e-9);

// 对称性: num=3 首尾相等
console.log(p3[0] === p3[p3.length - 1]);

// 峰值在中间: num=2 和=7 概率最大(数组第6个,索引5)
const p2 = statisticsProbability(2);
console.log(p2[5] === Math.max(...p2));

// 数组长度应为 5*num+1
console.log(statisticsProbability(5).length === 26);
console.log(statisticsProbability(11).length === 56);

// 概率全在 (0,1]
console.log(p1.every(v => v > 0 && v <= 1));
