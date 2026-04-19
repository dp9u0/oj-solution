/*
 * @lc app=leetcode id=672 lang=javascript
 *
 * [672] Bulb Switcher II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
    const len = Math.min(n, 6);
    const states = new Set();

    for (let mask = 0; mask < 16; mask++) {
        const bits = mask.toString(2).padStart(4, '0');
        const p1 = +bits[0], p2 = +bits[1], p3 = +bits[2], p4 = +bits[3];
        const sum = p1 + p2 + p3 + p4;
        if (sum > presses || (presses - sum) % 2 !== 0) continue;

        const state = new Array(len);
        for (let i = 0; i < len; i++) {
            let s = 1;
            if (p1) s ^= 1;
            if (p2 && (i + 1) % 2 === 0) s ^= 1;
            if (p3 && (i + 1) % 2 === 1) s ^= 1;
            if (p4 && (i + 1) % 3 === 1) s ^= 1;
            state[i] = s;
        }
        states.add(state.join(''));
    }
    return states.size;
};
// @lc code=end

// TEST:
console.log(flipLights(1, 1) === 2);
console.log(flipLights(2, 1) === 3);
console.log(flipLights(3, 1) === 4);
console.log(flipLights(1, 0) === 1);
console.log(flipLights(3, 2) === 7);
console.log(flipLights(100, 100) === 8);
