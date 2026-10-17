/*
 * @lc app=leetcode.cn id=面试题 16.10 lang=javascript
 *
 * [面试题 16.10] 生存人数
 */

// @lc code=start
/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function(birth, death) {
    // 差分：出生 +1，死亡次年 -1（死亡当年仍计入）
    const delta = new Array(102).fill(0);
    for (let i = 0; i < birth.length; i++) {
        delta[birth[i] - 1900]++;
        delta[death[i] - 1900 + 1]--;
    }
    let alive = 0;
    let best = 0;
    let bestYear = 1900;
    for (let y = 1900; y <= 2000; y++) {
        alive += delta[y - 1900];
        if (alive > best) {
            best = alive;
            bestYear = y;
        }
    }
    return bestYear;
};
// @lc code=end

// TEST:
console.log(maxAliveYear([1900, 1901, 1950], [1948, 1951, 2000]) === 1901);
console.log(maxAliveYear([2000, 2000], [2000, 2000]) === 2000); // 出生当年死亡仍计入
console.log(maxAliveYear([1970], [1970]) === 1970);
console.log(maxAliveYear([1900, 1900, 1950], [2000, 2000, 1950]) === 1950); // 1950 年 3 人在世
console.log(maxAliveYear([1910, 1910], [1955, 1960]) === 1910);
