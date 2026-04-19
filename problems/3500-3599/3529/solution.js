/*
 * @lc app=leetcode id=3529 lang=javascript
 *
 * [3529] Count Cells in Overlapping Horizontal and Vertical Substrings
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @param {string} pattern
 * @return {number}
 */
var countCells = function(grid, pattern) {
    const m = grid.length, n = grid[0].length;
    const pLen = pattern.length;
    const total = m * n;

    const kmpSearch = (text, pat) => {
        const len = pat.length;
        const lps = new Array(len).fill(0);
        for (let i = 1, j = 0; i < len; i++) {
            while (j > 0 && pat[i] !== pat[j]) j = lps[j - 1];
            if (pat[i] === pat[j]) lps[i] = ++j;
        }
        const matches = [];
        for (let i = 0, j = 0; i < text.length; i++) {
            while (j > 0 && text[i] !== pat[j]) j = lps[j - 1];
            if (text[i] === pat[j]) j++;
            if (j === len) {
                matches.push(i - len + 1);
                j = lps[j - 1];
            }
        }
        return matches;
    };

    const buildHString = () => {
        let s = '';
        for (let r = 0; r < m; r++)
            for (let c = 0; c < n; c++) s += grid[r][c];
        return s;
    };

    const buildVString = () => {
        let s = '';
        for (let c = 0; c < n; c++)
            for (let r = 0; r < m; r++) s += grid[r][c];
        return s;
    };

    const hStr = buildHString();
    const vStr = buildVString();

    const hMatches = kmpSearch(hStr, pattern);
    const vMatches = kmpSearch(vStr, pattern);

    const hDiff = new Int32Array(total + 1);
    for (const j of hMatches) {
        hDiff[j]++;
        if (j + pLen <= total) hDiff[j + pLen]--;
    }
    const vDiff = new Int32Array(total + 1);
    for (const j of vMatches) {
        vDiff[j]++;
        if (j + pLen <= total) vDiff[j + pLen]--;
    }

    let count = 0, hSum = 0, vSum = 0;
    const hPrefix = new Int32Array(total);
    const vPrefix = new Int32Array(total);
    for (let i = 0; i < total; i++) {
        hSum += hDiff[i];
        hPrefix[i] = hSum;
    }
    for (let i = 0; i < total; i++) {
        vSum += vDiff[i];
        vPrefix[i] = vSum;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const hIdx = r * n + c;
            const vIdx = c * m + r;
            if (hPrefix[hIdx] > 0 && vPrefix[vIdx] > 0) count++;
        }
    }

    return count;
};
// @lc code=end

// TEST:
console.log(countCells([['a','a','c','c'],['b','b','b','c'],['a','a','b','a'],['c','a','a','c'],['a','a','b','a']], 'abaca') === 1);
console.log(countCells([['c','a','a','a'],['a','a','b','a'],['b','b','a','a'],['a','a','b','a']], 'aba') === 4);
console.log(countCells([['a']], 'a') === 1);
console.log(countCells([['a','b'],['c','d']], 'ab') === 0);
console.log(countCells([['a','b'],['b','a']], 'ab') === 1);
