/*
 * @lc app=leetcode id=1733 lang=javascript
 *
 * [1733] Minimum Number of People to Teach
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    const m = languages.length;
    // Convert to sets for fast lookup
    const langSets = languages.map(l => new Set(l));

    // Find friends who can't communicate
    const needHelp = [];
    for (const [u, v] of friendships) {
        let canCommunicate = false;
        for (const lang of langSets[u - 1]) {
            if (langSets[v - 1].has(lang)) {
                canCommunicate = true;
                break;
            }
        }
        if (!canCommunicate) needHelp.push([u, v]);
    }

    if (needHelp.length === 0) return 0;

    // Collect users who need help
    const users = new Set();
    for (const [u, v] of needHelp) {
        users.add(u);
        users.add(v);
    }

    // For each language, count how many users in needHelp don't know it
    let minTeach = Infinity;
    for (let lang = 1; lang <= n; lang++) {
        let count = 0;
        for (const user of users) {
            if (!langSets[user - 1].has(lang)) count++;
        }
        minTeach = Math.min(minTeach, count);
    }

    return minTeach;
};
// @lc code=end

// TEST:
console.log(minimumTeachings(2, [[1],[2],[1,2]], [[1,2],[1,3],[2,3]])); // 1
console.log(minimumTeachings(3, [[2],[1,3],[1,2],[3]], [[1,4],[1,2],[3,4],[2,3]])); // 2
console.log(minimumTeachings(2, [[1],[1]], [[1,2]])); // 0
console.log(minimumTeachings(1, [[1],[1]], [[1,2]])); // 0
console.log(minimumTeachings(2, [[1],[2]], [[1,2]])); // 1
