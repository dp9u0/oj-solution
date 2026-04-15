/*
 * @lc app=leetcode id=3044 lang=javascript
 *
 * [3044] Most Frequent Prime
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var mostFrequentPrime = function(mat) {
    const m = mat.length, n = mat[0].length;
    const dirs = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];
    const count = new Map();

    const isPrime = (x) => {
        if (x < 2) return false;
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false;
        }
        return true;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (const [dr, dc] of dirs) {
                let num = 0;
                let r = i, c = j;
                while (r >= 0 && r < m && c >= 0 && c < n) {
                    num = num * 10 + mat[r][c];
                    if (num > 10 && isPrime(num)) {
                        count.set(num, (count.get(num) || 0) + 1);
                    }
                    r += dr;
                    c += dc;
                }
            }
        }
    }

    if (count.size === 0) return -1;

    let result = -1;
    let maxFreq = 0;
    for (const [num, freq] of count) {
        if (freq > maxFreq || (freq === maxFreq && num > result)) {
            maxFreq = freq;
            result = num;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(mostFrequentPrime([[1,1],[9,9],[1,1]]));           // 19
console.log(mostFrequentPrime([[7]]));                          // -1
console.log(mostFrequentPrime([[9,7,8],[4,6,5],[2,8,6]]));    // 97
