/*
 * @lc app=leetcode id=1023 lang=javascript
 *
 * [1023] Camelcase Matching
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    const match = (query) => {
        let j = 0;
        for (let i = 0; i < query.length; i++) {
            if (j < pattern.length && query[i] === pattern[j]) {
                j++;
            } else if (query[i] >= 'A' && query[i] <= 'Z') {
                return false;
            }
        }
        return j === pattern.length;
    };
    return queries.map(match);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FB"))); // [true,false,true,true,false]
console.log(JSON.stringify(camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBa"))); // [true,false,true,false,false]
console.log(JSON.stringify(camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBaT"))); // [false,true,false,false,false]
