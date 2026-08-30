/*
 * @lc app=leetcode id=3964 lang=javascript
 *
 * [3964] Minimum Lights to Illuminate a Road
 */

// @lc code=start
/**
 * @param {number[]} lights
 * @return {number}
 */
var minLights = function(lights) {
    const n = lights.length;

    // 差分数组：标记已有工作灯泡照亮的区间 [max(0,i-v), min(n-1,i+v)]
    const diff = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        const v = lights[i];
        if (v > 0) {
            diff[Math.max(0, i - v)]++;
            diff[Math.min(n - 1, i + v) + 1]--;
        }
    }

    // 前缀和得到每个位置是否被照亮
    const lit = new Array(n).fill(false);
    let running = 0;
    for (let i = 0; i < n; i++) {
        running += diff[i];
        lit[i] = running > 0;
    }

    // 贪心：从左到右，遇到最左未照亮位置 i，把新灯泡装在 j = min(i+1, n-1)
    //（尽量靠右，半径 1 仍覆盖 i），随后跳到 j+2
    let ans = 0;
    let i = 0;
    while (i < n) {
        if (!lit[i]) {
            const j = Math.min(i + 1, n - 1);
            ans++;
            i = j + 2;
        } else {
            i++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minLights([0, 0, 0, 0]) === 2); // 示例1：位置1和3各装一个
console.log(minLights([0, 0, 0, 2, 0]) === 1); // 示例2：已有灯照亮[1,4]，位置1补一个
console.log(minLights([0]) === 1); // 单个暗位置，装在0
console.log(minLights([1]) === 0); // 单个亮位置，无需安装
console.log(minLights([0, 0, 0]) === 1); // 位置1一个灯照亮全部
console.log(minLights([1, 0, 0, 0, 1]) === 1); // 两端已亮，中间位置3补一个
console.log(minLights([0, 0, 0, 0, 0, 0, 0]) === 3); // 7个暗位置，1/4/6三个灯
console.log(minLights([0, 0, 5, 0, 0]) === 0); // 大半径灯照亮全部