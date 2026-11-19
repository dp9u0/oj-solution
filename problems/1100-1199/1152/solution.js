/*
 * @lc app=leetcode.cn id=1152 lang=javascript
 *
 * [1152] 用户网站访问行为分析
 */

// @lc code=start
/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    const n = username.length;
    const idx = Array.from({ length: n }, (_, i) => i);
    idx.sort((a, b) => timestamp[a] - timestamp[b]);

    const visits = new Map(); // user -> sites ordered by time
    for (const i of idx) {
        if (!visits.has(username[i])) visits.set(username[i], []);
        visits.get(username[i]).push(website[i]);
    }

    const score = new Map(); // pattern key -> set of matching users
    for (const [user, sites] of visits) {
        const m = sites.length;
        const seen = new Set(); // a user matching a pattern twice counts once
        for (let a = 0; a < m; a++) {
            for (let b = a + 1; b < m; b++) {
                for (let c = b + 1; c < m; c++) {
                    // ',' sorts below lowercase letters, so key order == tuple lexicographic order
                    const key = sites[a] + ',' + sites[b] + ',' + sites[c];
                    if (seen.has(key)) continue;
                    seen.add(key);
                    if (!score.has(key)) score.set(key, new Set());
                    score.get(key).add(user);
                }
            }
        }
    }

    let best = null, bestScore = 0;
    for (const [key, users] of score) {
        if (users.size > bestScore || (users.size === bestScore && key < best)) {
            bestScore = users.size;
            best = key;
        }
    }
    return best.split(',');
};
// @lc code=end

// TEST:
console.log(JSON.stringify(mostVisitedPattern(
    ["joe","joe","joe","james","james","james","james","mary","mary","mary"],
    [1,2,3,4,5,6,7,8,9,10],
    ["home","about","career","home","cart","maps","home","home","about","career"]))); // ["home","about","career"]
console.log(JSON.stringify(mostVisitedPattern(["ua","ua","ua","ub","ub","ub"], [1,2,3,4,5,6], ["a","b","a","a","b","c"]))); // ["a","b","a"]
console.log(JSON.stringify(mostVisitedPattern(["u","u","u"], [1,2,3], ["x","x","x"]))); // ["x","x","x"]
console.log(JSON.stringify(mostVisitedPattern(["u","u","u","u"], [4,1,3,2], ["b","a","c","d"]))); // time order a,d,c,b -> combos (a,d,c),(a,d,b),(a,c,b): lex smallest "a,c,b" → ["a","c","b"]
