/*
 * @lc app=leetcode id=1462 lang=javascript
 *
 * [1462] Course Schedule IV
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const reachable = Array.from({ length: numCourses }, () => new Array(numCourses).fill(false));
    for (const [a, b] of prerequisites) reachable[a][b] = true;

    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (reachable[i][k] && reachable[k][j]) reachable[i][j] = true;
            }
        }
    }

    return queries.map(([u, v]) => reachable[u][v]);
};
// @lc code=end

// TEST:
console.log(checkIfPrerequisite(2, [[1,0]], [[0,1],[1,0]])); // [false,true]
console.log(checkIfPrerequisite(2, [], [[1,0],[0,1]])); // [false,false]
console.log(checkIfPrerequisite(3, [[1,2],[1,0],[2,0]], [[1,0],[1,2]])); // [true,true]
