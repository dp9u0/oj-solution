/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    if (dead.has('0000')) return -1;
    if (target === '0000') return 0;

    const visited = new Set(['0000']);
    const queue = [['0000', 0]];

    const getNext = (s) => {
        const result = [];
        for (let i = 0; i < 4; i++) {
            const d = parseInt(s[i]);
            for (const delta of [1, -1]) {
                const nd = (d + delta + 10) % 10;
                result.push(s.slice(0, i) + nd + s.slice(i + 1));
            }
        }
        return result;
    };

    let idx = 0;
    while (idx < queue.length) {
        const [cur, steps] = queue[idx++];
        for (const next of getNext(cur)) {
            if (visited.has(next) || dead.has(next)) continue;
            if (next === target) return steps + 1;
            visited.add(next);
            queue.push([next, steps + 1]);
        }
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(openLock(["0201","0101","0102","1212","2002"], "0202")); // 6
console.log(openLock(["8888"], "0009")); // 1
console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888")); // -1
