/*
 * @lc app=leetcode id=2018 lang=javascript
 *
 * [2018] Check if Word Can Be Placed In Crossword
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var placeWordInCrossword = function(board, word) {
    const m = board.length, n = board[0].length;
    const wLen = word.length;

    const checkSlot = (cells) => {
        if (cells.length !== wLen) return false;
        let fwd = true, bwd = true;
        for (let i = 0; i < wLen; i++) {
            const c = cells[i];
            if (c !== ' ' && c !== word[i]) fwd = false;
            if (c !== ' ' && c !== word[wLen - 1 - i]) bwd = false;
            if (!fwd && !bwd) return false;
        }
        return true;
    };

    // Horizontal slots
    for (let i = 0; i < m; i++) {
        let slot = [];
        for (let j = 0; j <= n; j++) {
            if (j < n && board[i][j] !== '#') {
                slot.push(board[i][j]);
            } else {
                if (checkSlot(slot)) return true;
                slot = [];
            }
        }
    }

    // Vertical slots
    for (let j = 0; j < n; j++) {
        let slot = [];
        for (let i = 0; i <= m; i++) {
            if (i < m && board[i][j] !== '#') {
                slot.push(board[i][j]);
            } else {
                if (checkSlot(slot)) return true;
                slot = [];
            }
        }
    }

    return false;
};
// @lc code=end

// TEST:
console.log(placeWordInCrossword([['#',' ','#'],[' ',' ','#'],['#','c',' ']], 'abc')); // true
console.log(placeWordInCrossword([[' ','#','a'],[' ','#','c'],[' ','#','a']], 'ac')); // false
console.log(placeWordInCrossword([['#',' ','#'],[' ',' ','#'],['#',' ','c']], 'ca')); // true
console.log(placeWordInCrossword([['#','a','#']], 'a')); // true
console.log(placeWordInCrossword([['a',' ','b']], 'ab')); // false
console.log(placeWordInCrossword([[' ',' ',' ']], 'ab')); // false
