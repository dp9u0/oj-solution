/*
 * @lc app=leetcode id=838 lang=javascript
 *
 * [838] Push Dominoes
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const n = dominoes.length;
    const forces = new Array(n).fill(0);

    let force = 0;
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === 'R') force = n;
        else if (dominoes[i] === 'L') force = 0;
        else force = Math.max(force - 1, 0);
        forces[i] += force;
    }

    force = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === 'L') force = n;
        else if (dominoes[i] === 'R') force = 0;
        else force = Math.max(force - 1, 0);
        forces[i] -= force;
    }

    let result = '';
    for (let i = 0; i < n; i++) {
        result += forces[i] > 0 ? 'R' : forces[i] < 0 ? 'L' : '.';
    }
    return result;
};
// @lc code=end

// TEST:
console.log(pushDominoes("RR.L")); // 'RR.L'
console.log(pushDominoes(".L.R...LR..L..")); // 'LL.RR.LLRRLL..'
console.log(pushDominoes("...")); // '...'
