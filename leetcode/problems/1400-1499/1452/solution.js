/*
 * @lc app=leetcode id=1452 lang=javascript
 *
 * [1452] People Whose List of Favorite Companies Is Not a Subset of Another List
 */

// @lc code=start
/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function(favoriteCompanies) {
    const n = favoriteCompanies.length;
    const sets = favoriteCompanies.map(list => new Set(list));
    const result = [];

    for (let i = 0; i < n; i++) {
        let isSubset = false;
        for (let j = 0; j < n; j++) {
            if (i === j || sets[i].size > sets[j].size) continue;
            let allIn = true;
            for (const c of sets[i]) {
                if (!sets[j].has(c)) { allIn = false; break; }
            }
            if (allIn) { isSubset = true; break; }
        }
        if (!isSubset) result.push(i);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(peopleIndexes([["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]])));
console.log(JSON.stringify(peopleIndexes([["leetcode","google","facebook"],["leetcode","amazon"],["facebook","google"]])));
console.log(JSON.stringify(peopleIndexes([["leetcode"],["google"],["facebook"],["amazon"]])));
console.log(JSON.stringify(peopleIndexes([["a","b","c"],["a","b"],["d"]])));
console.log(JSON.stringify(peopleIndexes([["a"],["b"],["c"]])));
