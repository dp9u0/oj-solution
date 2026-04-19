/*
 * @lc app=leetcode id=3321 lang=javascript
 *
 * [3321] Find X-Sum of All K-Long Subarrays II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const n = nums.length;
    const cnt = new Map();
    const inTop = new Set();
    let topSum = 0;
    const ans = [];

    // Min-heap for top set, max-heap for bottom set
    const topH = [], botH = [];
    const lt = (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);

    const push = (h, e, isMax) => {
        h.push(e);
        let i = h.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (isMax ? !lt(h[p], e) : !lt(e, h[p])) break;
            [h[p], h[i]] = [h[i], h[p]];
            i = p;
        }
    };

    const pop = (h, isMax) => {
        const r = h[0];
        if (h.length === 1) { h.length = 0; return r; }
        h[0] = h.pop();
        let i = 0;
        while (true) {
            let t = i;
            const l = 2 * i + 1, ri = 2 * i + 2;
            if (l < h.length && (isMax ? lt(h[t], h[l]) : lt(h[l], h[t]))) t = l;
            if (ri < h.length && (isMax ? lt(h[t], h[ri]) : lt(h[ri], h[t]))) t = ri;
            if (t === i) break;
            [h[i], h[t]] = [h[t], h[i]];
            i = t;
        }
        return r;
    };

    const pruneTop = () => {
        while (topH.length && (!inTop.has(topH[0][1]) || cnt.get(topH[0][1]) !== topH[0][0]))
            pop(topH, false);
    };

    const pruneBot = () => {
        while (botH.length && (inTop.has(botH[0][1]) || cnt.get(botH[0][1]) !== botH[0][0]))
            pop(botH, true);
    };

    const adjust = () => {
        for (;;) {
            pruneTop();
            pruneBot();
            if (inTop.size === x && topH.length && botH.length && lt(topH[0], botH[0])) {
                const t = pop(topH, false), b = pop(botH, true);
                inTop.delete(t[1]); topSum -= t[0] * t[1];
                inTop.add(b[1]); topSum += b[0] * b[1];
                push(botH, t, true);
                push(topH, b, false);
            } else if (inTop.size > x) {
                pruneTop();
                if (!topH.length) return;
                const t = pop(topH, false);
                inTop.delete(t[1]); topSum -= t[0] * t[1];
                push(botH, t, true);
            } else if (inTop.size < x) {
                pruneBot();
                if (!botH.length) return;
                const b = pop(botH, true);
                inTop.add(b[1]); topSum += b[0] * b[1];
                push(topH, b, false);
            } else return;
        }
    };

    // Build first window
    for (let i = 0; i < k; i++) cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1);
    for (const [v, f] of cnt) push(botH, [f, v], true);

    // Promote top x
    for (let i = 0; i < x; i++) {
        pruneBot();
        if (!botH.length) break;
        const [f, v] = pop(botH, true);
        inTop.add(v); topSum += f * v;
        push(topH, [f, v], false);
    }
    ans.push(topSum);

    // Slide window
    for (let i = k; i < n; i++) {
        const lv = nums[i - k], lf = cnt.get(lv);
        if (inTop.has(lv)) {
            topSum -= lv;
            if (lf === 1) { cnt.delete(lv); inTop.delete(lv); }
            else { cnt.set(lv, lf - 1); push(topH, [lf - 1, lv], false); }
        } else {
            if (lf === 1) cnt.delete(lv);
            else { cnt.set(lv, lf - 1); push(botH, [lf - 1, lv], true); }
        }
        adjust();

        const rv = nums[i], rf = (cnt.get(rv) || 0) + 1;
        cnt.set(rv, rf);
        if (inTop.has(rv)) { topSum += rv; push(topH, [rf, rv], false); }
        else push(botH, [rf, rv], true);
        adjust();

        ans.push(topSum);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(findXSum([1,1,2,2,3,4,2,3], 6, 2)); // [6,10,12]
console.log(findXSum([3,8,7,8,7,5], 2, 2)); // [11,15,15,15,12]
console.log(findXSum([1,1,1,1], 4, 1)); // [4]
console.log(findXSum([1,2,3,4], 4, 2)); // [7]
console.log(findXSum([1], 1, 1)); // [1]
