/*
 * @lc app=leetcode.cn id=1868 lang=javascript
 *
 * [1868] 两个行程编码数组的积
 */

// @lc code=start
/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function(encoded1, encoded2) {
    const res = [];
    let i = 0, j = 0;
    let f1 = 0, f2 = 0;
    while (i < encoded1.length || j < encoded2.length) {
        if (f1 === 0) { f1 = encoded1[i][1]; }
        if (f2 === 0) { f2 = encoded2[j][1]; }
        const t = Math.min(f1, f2);
        const val = encoded1[i][0] * encoded2[j][0];
        const last = res[res.length - 1];
        if (last && last[0] === val) {
            last[1] += t;
        } else {
            res.push([val, t]);
        }
        f1 -= t;
        f2 -= t;
        if (f1 === 0) i++;
        if (f2 === 0) j++;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findRLEArray([[1,3],[2,3]], [[6,3],[3,3]]))); // [[6,6]]
console.log(JSON.stringify(findRLEArray([[1,3],[2,1],[3,2]], [[2,3],[3,3]]))); // [[2,3],[6,1],[9,2]]
console.log(JSON.stringify(findRLEArray([[2,2],[5,2],[8,2]], [[3,1],[6,5]]))); // [[6,1],[12,1],[30,2],[48,2]]
console.log(JSON.stringify(findRLEArray([[7,4]], [[5,4]]))); // [[35,4]]
console.log(JSON.stringify(findRLEArray([[1,1],[2,2]], [[3,2],[1,1]]))); // [[3,1],[2,1],[2,1]]
