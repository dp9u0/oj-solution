/*
 * @lc app=leetcode id=2019 lang=javascript
 *
 * [2019] The Score of Students Solving Math Expression
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 */
var scoreOfStudents = function(s, answers) {
    // Parse numbers and operators
    const nums = [];
    const ops = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '+' || s[i] === '*') {
            ops.push(s[i]);
        } else {
            nums.push(parseInt(s[i]));
        }
    }
    const n = nums.length;

    // Compute correct answer: multiplication first, then addition
    const correctCalc = () => {
        const arr = [...nums];
        const opList = [...ops];
        // First pass: handle multiplication
        let i = 0;
        while (i < opList.length) {
            if (opList[i] === '*') {
                arr[i] = arr[i] * arr[i + 1];
                arr.splice(i + 1, 1);
                opList.splice(i, 1);
            } else {
                i++;
            }
        }
        // Second pass: handle addition
        let result = arr[0];
        for (let j = 0; j < opList.length; j++) {
            result += arr[j + 1];
        }
        return result;
    };
    const correctAns = correctCalc();

    // Interval DP: compute all possible results
    // dp[i][j] = Set of possible values for nums[i..j]
    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => new Set()));
    for (let i = 0; i < n; i++) dp[i][i].add(nums[i]);

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            for (let k = i; k < j; k++) {
                const op = ops[k];
                for (const a of dp[i][k]) {
                    for (const b of dp[k + 1][j]) {
                        const val = op === '+' ? a + b : a * b;
                        if (val <= 1000) dp[i][j].add(val);
                    }
                }
            }
        }
    }

    const possibleSet = dp[0][n - 1];
    let total = 0;
    for (const ans of answers) {
        if (ans === correctAns) {
            total += 5;
        } else if (possibleSet.has(ans)) {
            total += 2;
        }
    }
    return total;
};
// @lc code=end

// TEST:
console.log(scoreOfStudents("7+3*1*2", [20,13,42])); // 7
console.log(scoreOfStudents("3+5*2", [13,0,10,13,13,16,16])); // 19
console.log(scoreOfStudents("6+0*1", [12,9,6,4,8,6])); // 10
