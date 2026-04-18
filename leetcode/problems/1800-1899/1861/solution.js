/*
 * @lc app=leetcode id=1861 lang=javascript
 *
 * [1861] Rotating the Box
 */

// @lc code=start
/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    const m = boxGrid.length, n = boxGrid[0].length;

    // simulate gravity on each row (stones fall right)
    for (const row of boxGrid) {
        let empty = n - 1;
        for (let j = n - 1; j >= 0; j--) {
            if (row[j] === '*') {
                empty = j - 1;
            } else if (row[j] === '#') {
                if (j !== empty) {
                    row[empty] = '#';
                    row[j] = '.';
                }
                empty--;
            }
        }
    }

    // rotate 90 degrees clockwise
    const res = Array.from({ length: n }, (_, i) =>
        Array.from({ length: m }, (_, j) => boxGrid[m - 1 - j][i])
    );
    return res;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    const eq = JSON.stringify(result) === JSON.stringify(expected);
    console.log(eq ? 'OK' : 'FAIL');
};
test(rotateTheBox, [[['#','.','#']]], [['.'],['#'],['#']]);
test(rotateTheBox, [[['#','.','*','.'],['#','#','*','.']]], [['#','.'],['#','#'],['*','*'],['.','.']]);
test(rotateTheBox, [[['#','#','*','.','*','.'],['#','#','#','*','.','.'],['#','#','#','.','#','.']]], [['.','#','#'],['.','#','#'],['#','#','*'],['#','*','.'],['#','.','*'],['#','.','.']]);
test(rotateTheBox, [[['.','#']]], [['.'],['#']]);
test(rotateTheBox, [[['*','#','.']]], [['*'],['.'],['#']]);
