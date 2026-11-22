/*
 * @lc app=leetcode.cn id=2868 lang=javascript
 *
 * [2868] 单词游戏
 */

// @lc code=start
/**
 * @param {string[]} a
 * @param {string[]} b
 * @return {boolean}
 */
var canAliceWin = function(a, b) {
    const maxA = new Array(26).fill(null), maxB = new Array(26).fill(null);
    for (const w of a) { const c = w.charCodeAt(0) - 97; if (maxA[c] === null || w > maxA[c]) maxA[c] = w; }
    for (const w of b) { const c = w.charCodeAt(0) - 97; if (maxB[c] === null || w > maxB[c]) maxB[c] = w; }
    // fT[c]: does player T win when it is T's turn at letter c
    const calc = (c, maxT, maxO, fT, fO) => {
        const hasT = maxT[c] !== null, hasO = maxO[c] !== null;
        const hasT1 = c < 25 && maxT[c + 1] !== null;
        const hasO1 = c < 25 && maxO[c + 1] !== null;
        if (!hasO || (hasT && maxT[c] > maxO[c])) {
            // T owns the letter max: trap if opponent cannot escape;
            // else T wins by staying (opponent eventually flees to c+1 with T to move)
            // or by fleeing first (opponent faces c+1 and loses there)
            if (!hasO1) return true;
            return fT[c + 1] || (hasT1 && !fO[c + 1]);
        }
        // opponent owns the letter max: the only useful move is to flee,
        // handing letter c+1 to the opponent (T wins iff opponent loses there)
        return hasT1 && !fO[c + 1];
    };
    const fA = new Array(27).fill(false), fB = new Array(27).fill(false);
    const c0 = a[0].charCodeAt(0) - 97;
    for (let c = 25; c >= c0; c--) {
        fA[c] = calc(c, maxA, maxB, fA, fB);
        fB[c] = calc(c, maxB, maxA, fB, fA);
    }
    return !fB[c0];
};
// @lc code=end

// TEST:
console.log(canAliceWin(["avokado","dabar"], ["brazil"])); // false
console.log(canAliceWin(["ananas","atlas","banana"], ["albatros","cikla","nogomet"])); // true
console.log(canAliceWin(["hrvatska","zastava"], ["bijeli","galeb"])); // true
console.log(canAliceWin(["aa","ba"], ["ab","bb"])); // false
console.log(canAliceWin(["aa","ba"], ["ab","bc"])); // false
console.log(canAliceWin(["zz","zzz"], ["aa"])); // false
console.log(canAliceWin(["aa","az","zz"], ["zzb","zzc"])); // false
