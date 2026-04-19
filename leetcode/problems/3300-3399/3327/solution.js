/*
 * @lc app=leetcode id=3327 lang=javascript
 *
 * [3327] Check if DFS Strings Are Palindromes
 */

// @lc code=start
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {boolean[]}
 */
var findAnswer = function(parent, s) {
    const n = parent.length;
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[parent[i]].push(i);

    const euler = [];
    const start = new Int32Array(n);
    const sz = new Int32Array(n);

    function build(x) {
        start[x] = euler.length;
        for (const c of children[x]) build(c);
        euler.push(s.charCodeAt(x));
        sz[x] = euler.length - start[x];
    }
    build(0);

    const M1 = 1000000007n, M2 = 1000000009n;
    const B1 = 131n, B2 = 137n;

    const pw1 = [1n], pw2 = [1n];
    for (let i = 1; i <= n; i++) {
        pw1[i] = pw1[i - 1] * B1 % M1;
        pw2[i] = pw2[i - 1] * B2 % M2;
    }

    const fh1 = [0n], fh2 = [0n];
    for (let i = 0; i < n; i++) {
        const ch = BigInt(euler[i]);
        fh1[i + 1] = (fh1[i] * B1 + ch) % M1;
        fh2[i + 1] = (fh2[i] * B2 + ch) % M2;
    }

    const rev = euler.slice().reverse();
    const rh1 = [0n], rh2 = [0n];
    for (let i = 0; i < n; i++) {
        const ch = BigInt(rev[i]);
        rh1[i + 1] = (rh1[i] * B1 + ch) % M1;
        rh2[i + 1] = (rh2[i] * B2 + ch) % M2;
    }

    const getH = (fh, pw, l, r, M) =>
        ((fh[r + 1] - fh[l] * pw[r - l + 1] % M) % M + M) % M;

    const answer = [];
    for (let i = 0; i < n; i++) {
        const l = start[i], r = l + sz[i] - 1;
        answer.push(
            getH(fh1, pw1, l, r, M1) === getH(rh1, pw1, n - 1 - r, n - 1 - l, M1) &&
            getH(fh2, pw2, l, r, M2) === getH(rh2, pw2, n - 1 - r, n - 1 - l, M2)
        );
    }
    return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findAnswer([-1,0,0,1,1,2], "aababa"))); // [true,true,false,true,true,true]
console.log(JSON.stringify(findAnswer([-1,0,0,0,0], "aabcb"))); // [true,true,true,true,true]
console.log(JSON.stringify(findAnswer([-1], "a"))); // [true]
console.log(JSON.stringify(findAnswer([-1,0], "ab"))); // [false,true]
console.log(JSON.stringify(findAnswer([-1,0], "aa"))); // [true,true]
