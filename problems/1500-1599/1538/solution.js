/*
 * @lc app=leetcode.cn id=1538 lang=javascript
 *
 * [1538] 找出隐藏数组中出现次数最多的元素
 */

// @lc code=start
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares 4 different elements in the array
 *     // return 4 if the values of the 4 elements are the same (0 or 1).
 *     // return 2 if three elements have a value equal to 0 and one element has value equal to 1 or vice versa.
 *     // return 0 : if two element have a value equal to 0 and two elements have a value equal to 1.
 *     @param {number} a, b, c, d
 *     @return {number}
 *     this.query = function(a, b, c, d) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var guessMajority = function(reader) {
    const n = reader.length();
    const r3 = reader.query(0, 1, 2, 3);
    const A = [3]; // same value as nums[3]
    const B = []; // different from nums[3]
    for (let i = 4; i < n; i++) {
        // query(0,1,2,i) === r3  <=>  nums[i] === nums[3] (holds for all 0/1 combos)
        (reader.query(0, 1, 2, i) === r3 ? A : B).push(i);
    }

    if (n === 5) {
        if (A.length === 1) { // B = [4], nums[4] != nums[3]
            if (r3 === 4) return 3; // k=3: X=4 vs Y=1
            if (r3 === 0) return 4; // k=1: X=2 vs Y=3
            const q = reader.query(0, 1, 2, 4);
            return q === 4 ? 0 : 3; // 4 -> k=0 (Y=4, index 0); 0 -> k=2 (X=3)
        }
        if (r3 === 4) return 3; // k=3: X=5
        if (r3 === 0) return 3; // k=1: X=3 vs Y=2
        // r3 === 2 -> k in {0, 2}
        const q = reader.query(0, 1, 3, 4);
        if (q === 4) return 3; // v0,v1 both == x -> k=2, X majority
        if (q === 0) return 0; // v0,v1 both != x -> k=0, Y majority, v0 in Y
        const q2 = reader.query(3, 4, 0, 1); // q===2: exactly one of v0,v1 == x
        return q2 === 2 ? 3 : 0; // 2 -> v0==x (k=2, X wins); 0 -> v0!=x (k=0, Y wins)
    }

    // n >= 6: a same-value pair always exists (|A|>=2 or |B|>=2)
    let pairInA = A.length >= 2;
    let p, qi;
    if (pairInA) { p = A[0]; qi = A[1]; } else { p = B[0]; qi = B[1]; }
    const classify = (t) => {
        let fourth, sameMeans;
        if (pairInA) {
            if (B.length) { fourth = B[0]; sameMeans = 2; } // {x,x,vt,¬x}: 2 iff vt==x
            else { fourth = A[2]; sameMeans = 4; }          // {x,x,vt,x}: 4 iff vt==x
        } else {
            fourth = 3; sameMeans = 2; // {¬x,¬x,vt,x}: 2 iff vt==¬x
        }
        const idx = [p, qi, t, fourth].sort((a, b) => a - b); // API needs a<b<c<d
        return reader.query(idx[0], idx[1], idx[2], idx[3]) === sameMeans;
    };
    const eq = [classify(0), classify(1), classify(2)]; // vt == v3 ?
    const k = eq.filter(Boolean).length;
    const sizeX = A.length + k; // class of nums[3]
    if (sizeX * 2 === n) return -1;
    if (sizeX * 2 > n) return A[0];
    if (B.length) return B[0];
    for (let t = 0; t < 3; t++) if (!eq[t]) return t;
    return -1;
};
// @lc code=end

// TEST:
const makeReader = (arr) => {
    let calls = 0;
    return {
        calls: () => calls,
        length: () => arr.length,
        query: (a, b, c, d) => {
            calls++;
            const vals = [arr[a], arr[b], arr[c], arr[d]];
            const ones = vals.reduce((s, v) => s + v, 0);
            if (ones === 0 || ones === 4) return 4;
            return ones === 2 ? 0 : 2;
        },
    };
};
console.log(guessMajority(makeReader([0,0,1,0,1,1,1,1]))); // 4 (majority 1s)
console.log(guessMajority(makeReader([0,0,1,1,0]))); // 4 (majority 0s -> index in {0,1,4})
console.log(guessMajority(makeReader([1,0,1,0,1,0,1,0]))); // -1 (tie)
console.log(guessMajority(makeReader([1,1,1,1]))); // 3
console.log(guessMajority(makeReader([0,1,1,1,1]))); // 3 (majority 1s)
