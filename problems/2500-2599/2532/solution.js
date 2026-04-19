/*
 * @lc app=leetcode id=2532 lang=javascript
 *
 * [2532] Time to Cross a Bridge
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} time
 * @return {number}
 */
var findCrossingTime = function(n, k, time) {
    const eff = (i) => time[i][0] + time[i][2];
    const cmp = (a, b) => {
        const d = eff(a) - eff(b);
        return d !== 0 ? d : a - b;
    };

    // Max-heap (less efficient = higher priority)
    const pushMax = (h, v) => {
        h.push(v);
        let i = h.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (cmp(h[p], h[i]) >= 0) break;
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        }
    };
    const popMax = (h) => {
        const t = h[0];
        const l = h.pop();
        if (h.length > 0) {
            h[0] = l;
            let i = 0;
            while (true) {
                let s = i, L = 2*i+1, R = 2*i+2;
                if (L < h.length && cmp(h[L], h[s]) > 0) s = L;
                if (R < h.length && cmp(h[R], h[s]) > 0) s = R;
                if (s === i) break;
                [h[i], h[s]] = [h[s], h[i]];
                i = s;
            }
        }
        return t;
    };

    // Min-heap for events [finishTime, worker]
    const pushMin = (h, v) => {
        h.push(v);
        let i = h.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (h[p][0] <= h[i][0]) break;
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        }
    };
    const popMin = (h) => {
        const t = h[0];
        const l = h.pop();
        if (h.length > 0) {
            h[0] = l;
            let i = 0;
            while (true) {
                let s = i, L = 2*i+1, R = 2*i+2;
                if (L < h.length && h[L][0] < h[s][0]) s = L;
                if (R < h.length && h[R][0] < h[s][0]) s = R;
                if (s === i) break;
                [h[i], h[s]] = [h[s], h[i]];
                i = s;
            }
        }
        return t;
    };
    const peekMin = (h) => h.length > 0 ? h[0][0] : Infinity;

    const leftWait = [], rightWait = [];
    const rightWork = [], leftWork = [];

    for (let i = 0; i < k; i++) pushMax(leftWait, i);

    let remaining = n, cur = 0, ans = 0;

    while (remaining > 0 || rightWait.length > 0 || rightWork.length > 0) {
        // Process completed work
        while (peekMin(rightWork) <= cur) {
            const [, w] = popMin(rightWork);
            pushMax(rightWait, w);
        }
        while (peekMin(leftWork) <= cur) {
            const [, w] = popMin(leftWork);
            pushMax(leftWait, w);
        }

        if (rightWait.length > 0) {
            const w = popMax(rightWait);
            cur += time[w][2];
            ans = cur;
            pushMin(leftWork, [cur + time[w][3], w]);
        } else if (leftWait.length > 0 && remaining > 0) {
            const w = popMax(leftWait);
            cur += time[w][0];
            remaining--;
            pushMin(rightWork, [cur + time[w][1], w]);
        } else {
            const next = Math.min(peekMin(rightWork), peekMin(leftWork));
            if (next === Infinity) break;
            cur = next;
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(findCrossingTime(1, 3, [[1,1,2,1],[1,1,3,1],[1,1,4,1]])); // 6
console.log(findCrossingTime(3, 2, [[1,5,1,8],[10,10,10,10]])); // 37
console.log(findCrossingTime(1, 1, [[1,1,1,1]])); // 3 (cross right 1 + pick 1 + cross left 1)
console.log(findCrossingTime(2, 1, [[1,1,1,1]])); // 7 (1+1+1+1 + 1+1+1)
console.log(findCrossingTime(1, 2, [[1,1,1,1],[2,2,2,2]])); // 3
