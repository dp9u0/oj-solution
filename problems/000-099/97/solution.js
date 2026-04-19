/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    let s1Length = s1.length;
    let s2Length = s2.length;
    // 可以先跳过一些基本情况
    if (s1Length + s2Length !== s3.length) return false;
    let dp = new Array(s2Length + 1).fill(false);
    for (let i = 0; i < s1Length + 1; i++) {
        for (let j = 0; j < s2Length + 1; j++) {
            let c = s3[i + j - 1];
            if (i === 0 && j === 0) {
                // 初始值
                dp[j] = true;
            } else if (j === 0) {
                // 全部由 s1 前缀构成              
                dp[j] = dp[j] && s1[i - 1] === c;
            } else if (i === 0) {
                // 全部由 s2 前缀构成   
                dp[j] = dp[j - 1] && s2[j - 1] === c;
            } else {
                dp[j] = (dp[j] && s1[i - 1] === c) || (dp[j - 1] && s2[j - 1] === c);
            }
        }
    }
    return dp[s2Length];
};

// TEST:
let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
console.log(isInterleave(s1, s2, s3))
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
console.log(isInterleave(s1, s2, s3))