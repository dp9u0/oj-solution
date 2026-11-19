/*
 * @lc app=leetcode.cn id=1087 lang=javascript
 *
 * [1087] 花括号展开
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function(s) {
    // parse into sorted option groups
    const groups = [];
    let i = 0;
    while (i < s.length) {
        if (s[i] === '{') {
            const j = s.indexOf('}', i);
            groups.push(s.slice(i + 1, j).split(',').sort());
            i = j + 1;
        } else {
            groups.push([s[i]]);
            i++;
        }
    }

    const res = [];
    const buf = [];
    const dfs = (gi) => {
        if (gi === groups.length) {
            res.push(buf.join(''));
            return;
        }
        for (const c of groups[gi]) { // sorted groups => output is already lexicographic
            buf.push(c);
            dfs(gi + 1);
            buf.pop();
        }
    };
    dfs(0);
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(expand("{a,b}c{d,e}f"))); // ["acdf","acef","bcdf","bcef"]
console.log(JSON.stringify(expand("abcd"))); // ["abcd"]
console.log(JSON.stringify(expand("{b,a}"))); // ["a","b"] (group sorted)
console.log(JSON.stringify(expand("{x,y}{a,b}"))); // ["xa","xb","ya","yb"]
console.log(JSON.stringify(expand("{a,b}{z}"))); // ["az","bz"]
