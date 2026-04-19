/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    let solved = new Set();
    return checkScramble(s1, s2, solved);
};

/**
 * @param {string} s1
 * @param {string} s2
 * @param {Set} solved
 * @return {boolean}
 */
const checkScramble = function (s1, s2, solved) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    let length = s1.length;
    let map = {}
    for (let i = 0; i < length; i++) {
        map[s1[i]] = (map[s1[i]] || 0) + 1;
        map[s2[i]] = (map[s2[i]] || 0) - 1;
    }
    for (const c in map) {
        if (map[c] !== 0) return false;
    }
    if (solved.has(s1 + s2)) return true;
    for (let i = 1; i < length; i++) {
        let s11 = s1.slice(0, i);
        let s12 = s1.slice(i);
        let s21 = s2.slice(0, i);
        if ((checkScramble(s11, s21, solved))) {
            solved.add(s11 + s21);
            let s22 = s2.slice(i);
            if (checkScramble(s12, s22, solved)) {
                solved.add(s12 + s22);
                return true;
            }
        }
        let s23 = s2.slice(length - i);
        if (checkScramble(s11, s23, solved)) {
            solved.add(s11 + s23);
            let s24 = s2.slice(0, length - i);
            if (checkScramble(s12, s24, solved)) {
                solved.add(s12 + s24);
                return true;
            }
        }
    }
    return false;
}

// TEST:
console.log(isScramble("great", "rgeat"));
console.log(isScramble("great", "rgtae"));
console.log(isScramble("abcde", "caebd"));
