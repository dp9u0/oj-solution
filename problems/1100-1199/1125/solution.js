/*
 * @lc app=leetcode id=1125 lang=javascript
 *
 * [1125] Smallest Sufficient Team
 */

// @lc code=start
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const skillIdx = new Map();
    for (let i = 0; i < req_skills.length; i++) skillIdx.set(req_skills[i], i);

    const personMask = people.map(skills => {
        let m = 0;
        for (const s of skills) m |= (1 << skillIdx.get(s));
        return m;
    });

    const full = (1 << req_skills.length) - 1;
    const dp = new Array(full + 1).fill(Infinity);
    const prev = new Int32Array(full + 1); // previous mask
    const last = new Int32Array(full + 1); // last person added
    dp[0] = 0;

    for (let i = 0; i < people.length; i++) {
        if (personMask[i] === 0) continue;
        for (let mask = full; mask >= 0; mask--) {
            if (dp[mask] === Infinity) continue;
            const next = mask | personMask[i];
            if (dp[next] > dp[mask] + 1) {
                dp[next] = dp[mask] + 1;
                prev[next] = mask;
                last[next] = i;
            }
        }
    }

    // Reconstruct team
    const team = [];
    let mask = full;
    while (mask > 0) {
        team.push(last[mask]);
        mask = prev[mask];
    }

    return team;
};
// @lc code=end

// TEST:
console.log(smallestSufficientTeam(["java","nodejs","reactjs"], [["java"],["nodejs"],["nodejs","reactjs"]])); // [0,2]
console.log(smallestSufficientTeam(["algorithms","math","java","reactjs","csharp","aws"], [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]])); // [1,2]
console.log(smallestSufficientTeam(["a","b"], [["a"],["b"]])); // [0,1]
console.log(smallestSufficientTeam(["a","b"], [["a","b"]])); // [0]
