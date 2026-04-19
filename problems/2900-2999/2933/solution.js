/*
 * @lc app=leetcode id=2933 lang=javascript
 *
 * [2933] High-Access Employees
 */

// @lc code=start
/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {
    const groups = new Map();
    for (const [name, time] of access_times) {
        if (!groups.has(name)) groups.set(name, []);
        const mins = parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(2));
        groups.get(name).push(mins);
    }
    const result = [];
    for (const [name, times] of groups) {
        times.sort((a, b) => a - b);
        for (let i = 2; i < times.length; i++) {
            if (times[i] - times[i - 2] < 60) {
                result.push(name);
                break;
            }
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findHighAccessEmployees([["a","0549"],["b","0457"],["a","0532"],["a","0621"],["b","0540"]]));
console.log(findHighAccessEmployees([["d","0002"],["c","0808"],["c","0829"],["e","0215"],["d","1508"],["d","1444"],["d","1410"],["c","0809"]]));
console.log(findHighAccessEmployees([["cd","1025"],["ab","1025"],["cd","1046"],["cd","1055"],["ab","1124"],["ab","1120"]]));
