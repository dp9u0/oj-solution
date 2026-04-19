/*
 * @lc app=leetcode id=3076 lang=javascript
 *
 * [3076] Shortest Uncommon Substring in an Array
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function(arr) {
    const n = arr.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        const s = arr[i];
        const len = s.length;
        let best = '';

        for (let l = 1; l <= len && best === ''; l++) {
            const candidates = [];
            for (let j = 0; j + l <= len; j++) {
                const sub = s.substring(j, j + l);
                let found = false;
                for (let k = 0; k < n; k++) {
                    if (k !== i && arr[k].includes(sub)) {
                        found = true;
                        break;
                    }
                }
                if (!found) candidates.push(sub);
            }
            if (candidates.length > 0) {
                candidates.sort();
                best = candidates[0];
            }
        }

        result.push(best);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(shortestSubstrings(["cab","ad","bad","c"])));       // ["ab","","ba",""]
console.log(JSON.stringify(shortestSubstrings(["abc","bcd","abcd"])));         // ["","","abcd"]
console.log(JSON.stringify(shortestSubstrings(["a","b"])));                    // ["a","b"]
console.log(JSON.stringify(shortestSubstrings(["ab","ab"])));                  // ["",""]
console.log(JSON.stringify(shortestSubstrings(["aaa","a"])));                  // ["aa",""]
