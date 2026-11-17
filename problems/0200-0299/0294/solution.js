/*
 * @lc app=leetcode.cn id=294 lang=javascript
 *
 * [294] 翻转游戏 II
 */

// @lc code=start
/**
 * @param {string} currentState
 * @return {boolean}
 */
var canWin = function(currentState) {
    const memo = new Map();

    // true if the player to move on state s has a winning move
    const dfs = s => {
        if (memo.has(s)) return memo.get(s);
        let win = false;
        for (let i = 1; i < s.length && !win; i++) {
            if (s[i] === '+' && s[i - 1] === '+') {
                const next = s.slice(0, i - 1) + '--' + s.slice(i + 1);
                // winning move: leaves the opponent with a losing state
                if (!dfs(next)) win = true;
            }
        }
        memo.set(s, win);
        return win;
    };

    return dfs(currentState);
};
// @lc code=end

// TEST:
console.log(canWin("++++")); // true (take middle pair)
console.log(canWin("+")); // false
console.log(canWin("++")); // true
console.log(canWin("---")); // false (no move)
console.log(canWin("+++++")); // false (every move gives opponent a win)
console.log(canWin("+-+")); // false
