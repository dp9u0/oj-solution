/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let p1 = 0;
    let p2 = 0;
    let sLength = s.length;
    let tLength = t.length;
    while (p1 < sLength && p2 < tLength) {
        if (s[p1] === t[p2]) {
            p1++;
        }
        p2++;
    }
    return p1 === s.length
};


/**
// TEST:
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
*/