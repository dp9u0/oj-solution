/*
 * @lc app=leetcode.cn id=277 lang=javascript
 *
 * [277] 搜寻名人
 */

// @lc code=start
/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        // pass 1: keep the only possible candidate
        let cand = 0;
        for (let i = 1; i < n; i++) {
            if (knows(cand, i)) cand = i;
        }
        // pass 2: verify both properties
        for (let i = 0; i < n; i++) {
            if (i === cand) continue;
            if (knows(cand, i) || !knows(i, cand)) return -1;
        }
        return cand;
    };
};
// @lc code=end

// TEST:
const makeKnows = matrix => (a, b) => matrix[a][b] === 1;
const find = m => solution(makeKnows(m))(m.length);
// celebrity is 2 (row 2 all 0; column 2 all 1 except diag)
console.log(find([[0,0,1],[0,0,1],[0,0,0]])); // 2
// no celebrity
console.log(find([[0,1],[1,0]])); // -1
// celebrity is 1
console.log(find([[0,1],[0,0]])); // 1
// single person
console.log(find([[0]])); // 0
// candidate fails second pass
console.log(find([[0,0,1],[0,0,1],[1,0,0]])); // -1 (2 does not know 0? matrix[2][0]=1 -> knows(cand,0) -> fail)
