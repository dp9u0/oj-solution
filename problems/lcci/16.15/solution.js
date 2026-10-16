/*
 * @lc app=leetcode.cn id=面试题 16.15 lang=javascript
 *
 * [面试题 16.15] 珠玑妙算
 */

// @lc code=start
/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function(solution, guess) {
    // 猜中：位置颜色都对；伪猜中按剔除猜中后的剩余频次取 min
    let hit = 0;
    const solRest = new Map();
    const gueRest = new Map();
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] === guess[i]) {
            hit++;
        } else {
            solRest.set(solution[i], (solRest.get(solution[i]) || 0) + 1);
            gueRest.set(guess[i], (gueRest.get(guess[i]) || 0) + 1);
        }
    }
    let pseudo = 0;
    for (const [c, n] of gueRest) {
        pseudo += Math.min(n, solRest.get(c) || 0);
    }
    return [hit, pseudo];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(masterMind('RGBY', 'GGRR')) === '[1,1]');
console.log(JSON.stringify(masterMind('RGRB', 'BBBY')) === '[0,1]');
console.log(JSON.stringify(masterMind('RGBY', 'RGBY')) === '[4,0]');
console.log(JSON.stringify(masterMind('RGBY', 'GBYR')) === '[0,4]');
console.log(JSON.stringify(masterMind('AAAA', 'AAAA')) === '[4,0]');
console.log(JSON.stringify(masterMind('RRRR', 'GGGG')) === '[0,0]');
