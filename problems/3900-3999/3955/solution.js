/*
 * @lc app=leetcode id=3955 lang=javascript
 *
 * [3955] Valid Binary Strings With Cost Limit
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string[]}
 */
var generateValidStrings = function(n, k) {
    const res = [];
    const path = new Array(n);

    const backtrack = (i, cost) => {
        if (i === n) {
            res.push(path.join(''));
            return;
        }
        // 放 '0'：不影响代价
        path[i] = '0';
        backtrack(i + 1, cost);
        // 放 '1'：前一位不能是 '1'，且代价不超限
        if ((i === 0 || path[i - 1] !== '1') && cost + i <= k) {
            path[i] = '1';
            backtrack(i + 1, cost + i);
        }
    };

    backtrack(0, 0);
    return res;
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(generateValidStrings(3, 1).sort(), ["000", "010", "100"].sort())); // 示例1
console.log(eq(generateValidStrings(1, 0).sort(), ["0", "1"].sort())); // 示例2："1" 的代价是 0
console.log(eq(generateValidStrings(2, 0).sort(), ["00", "10"].sort())); // "01" 代价 1、"11" 连续 '1' 均非法
console.log(eq(generateValidStrings(3, 0).sort(), ["000", "100"].sort())); // 只有下标 0 处可放 '1'
console.log(eq(generateValidStrings(3, 5).sort(), ["000", "001", "010", "100", "101"].sort())); // k 足够大：全部无连续 '1' 的串
console.log(eq(generateValidStrings(4, 2).sort(), ["0000", "0100", "1000", "0010", "1010"].sort())); // "0101" 代价 1+3=4>2、"0001" 代价 3>2 均非法，"1010" 代价 0+2=2 合法
console.log(eq(generateValidStrings(1, 5), ["0", "1"])); // 单字符两种选择
