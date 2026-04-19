/*
 * @lc app=leetcode id=1946 lang=javascript
 *
 * [1946] Largest Number After Mutating Substring
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function(num, change) {
    const arr = num.split('');
    let started = false;

    for (let i = 0; i < arr.length; i++) {
        const d = +arr[i];
        const c = change[d];
        if (c > d) {
            arr[i] = String(c);
            started = true;
        } else if (c < d) {
            if (started) break;
        }
    }

    return arr.join('');
};
// @lc code=end

// TEST:
console.log(maximumNumber("132", [9,8,5,0,3,6,4,2,6,8])); // "832"
console.log(maximumNumber("021", [9,4,3,5,7,2,1,9,0,6])); // "934"
console.log(maximumNumber("5", [1,4,7,5,3,2,5,6,9,4]));   // "5"
console.log(maximumNumber("334", [0,0,0,4,5,6,7,8,9,9])); // "445"
