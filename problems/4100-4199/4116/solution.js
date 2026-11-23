/*
 * @lc app=leetcode.cn id=4116 lang=javascript
 *
 * [4116] 下雨天安排伞
 */

// @lc code=start
/**
 * @param {number[]} rain
 * @return {string[]}
 */
var assignUmbrella = function(rain) {
    const n = rain.length;
    const ans = [];
    let cntA = 0, cntB = 0;
    for (let i = 0; i < n; i++) {
        const bobNeed = rain[i] === 1;
        const aliceNeed = bobNeed && i < n - 1 && rain[i + 1] === 1;
        if (aliceNeed && bobNeed) {
            if (cntA <= cntB) { ans.push("Alice"); cntA++; }
            else { ans.push("Bob"); cntB++; }
        } else if (bobNeed) {
            ans.push("Bob");
            cntB++;
        } else if (aliceNeed) {
            ans.push("Alice");
            cntA++;
        } else {
            ans.push("None");
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(assignUmbrella([1,1,0,1,1]))); // ["Alice","Bob","None","Alice","Bob"]
console.log(JSON.stringify(assignUmbrella([0,1,0,1]))); // ["None","Bob","None","Bob"]
console.log(JSON.stringify(assignUmbrella([0]))); // ["None"]
console.log(JSON.stringify(assignUmbrella([1]))); // ["Bob"]
console.log(JSON.stringify(assignUmbrella([1,1]))); // ["Alice","Bob"]
