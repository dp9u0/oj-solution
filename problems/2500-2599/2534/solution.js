/*
 * @lc app=leetcode.cn id=2534 lang=javascript
 *
 * [2534] 通过门的时间
 */

// @lc code=start
/**
 * @param {number[]} arrival
 * @param {number[]} state
 * @return {number[]}
 */
var timeTaken = function(arrival, state) {
    const n = arrival.length;
    const enterQ = [], exitQ = [];
    let ptr = 0;
    const ans = new Int32Array(n);
    let t = arrival[0];
    let lastUse = -1; // -1 none, 0 enter, 1 exit
    let eh = 0, xh = 0; // queue heads
    let served = 0;
    while (served < n) {
        while (ptr < n && arrival[ptr] <= t) {
            (state[ptr] === 0 ? enterQ : exitQ).push(ptr);
            ptr++;
        }
        const eLen = enterQ.length - eh, xLen = exitQ.length - xh;
        if (eLen === 0 && xLen === 0) {
            // idle: jump to next arrival, door unused
            if (ptr < n) t = arrival[ptr];
            lastUse = -1;
            continue;
        }
        const exitFirst = lastUse !== 0; // none or exit -> exit priority
        let u;
        if (exitFirst && xLen > 0) {
            u = exitQ[xh++];
            lastUse = 1;
        } else if (eLen > 0) {
            u = enterQ[eh++];
            lastUse = 0;
        } else {
            u = exitQ[xh++];
            lastUse = 1;
        }
        ans[u] = t;
        served++;
        t++;
    }
    return Array.from(ans);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(timeTaken([0,1,1,2,4], [0,1,0,0,1]))); // [0,3,1,2,4]
console.log(JSON.stringify(timeTaken([0,0,0], [1,0,1]))); // [0,2,1]
console.log(JSON.stringify(timeTaken([0], [0]))); // [0]
console.log(JSON.stringify(timeTaken([0,0,0,0], [1,1,1,1]))); // [0,1,2,3]
console.log(JSON.stringify(timeTaken([0,5,6], [0,1,0]))); // [0,5,6]
