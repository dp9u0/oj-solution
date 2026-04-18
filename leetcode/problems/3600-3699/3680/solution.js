/*
 * @lc app=leetcode id=3680 lang=javascript
 *
 * [3680] Generate Schedule
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateSchedule = function(n) {
    if (n <= 4) return []; // n=2,3,4: no solution

    const matches = [];
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (i !== j) matches.push([i, j]);

    const total = matches.length;
    // Seed a simple deterministic pseudo-random
    let seed = 12345;
    const rand = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };

    for (let attempt = 0; attempt < 200; attempt++) {
        const used = new Uint8Array(total);
        const lastPlayed = new Int32Array(n).fill(-1000);
        const schedule = [];
        let ok = true;

        for (let day = 0; day < total; day++) {
            const valid = [];
            for (let i = 0; i < total; i++) {
                if (used[i]) continue;
                const [a, b] = matches[i];
                if (lastPlayed[a] === day - 1 || lastPlayed[b] === day - 1) continue;
                valid.push(i);
            }
            if (valid.length === 0) { ok = false; break; }

            // Pick match with longest-resting teams, with some randomness
            let bestIdx = valid[0], bestScore = -1;
            for (const idx of valid) {
                const [a, b] = matches[idx];
                const score = Math.min(day - lastPlayed[a], day - lastPlayed[b]) + (attempt > 0 ? rand() * 0.5 : 0);
                if (score > bestScore) { bestScore = score; bestIdx = idx; }
            }

            used[bestIdx] = 1;
            const [a, b] = matches[bestIdx];
            lastPlayed[a] = day;
            lastPlayed[b] = day;
            schedule.push(matches[bestIdx]);
        }
        if (ok) return schedule;
    }
    return [];
};
// @lc code=end

// TEST:
const test = (fn, args, check) => {
    const result = fn(...args);
    const ok = check(result);
    console.log('n=' + args[0], ok ? 'OK' : 'FAIL', result.length > 0 ? '(' + result.length + ' matches)' : '[]');
};
const validate = (n, schedule) => {
    if (schedule.length === 0) return true;
    const expected = n * (n - 1);
    if (schedule.length !== expected) return false;
    for (let i = 1; i < schedule.length; i++) {
        const [a, b] = schedule[i - 1];
        const [c, d] = schedule[i];
        if (a === c || a === d || b === c || b === d) return false;
    }
    return true;
};
test(generateSchedule, [3], r => r.length === 0);
test(generateSchedule, [4], r => r.length === 0);
test(generateSchedule, [5], r => validate(5, r));
test(generateSchedule, [8], r => validate(8, r));
test(generateSchedule, [50], r => validate(50, r));
