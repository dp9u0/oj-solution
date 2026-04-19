/*
 * @lc app=leetcode id=1383 lang=javascript
 *
 * [1383] Maximum Performance of a Team
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const MOD = 1e9 + 7;
    const engineers = [];
    for (let i = 0; i < n; i++) engineers.push([efficiency[i], speed[i]]);
    engineers.sort((a, b) => b[0] - a[0]);

    const heap = [];
    const push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let min = i;
                const l = 2 * i + 1, r = 2 * i + 2;
                if (l < heap.length && heap[l] < heap[min]) min = l;
                if (r < heap.length && heap[r] < heap[min]) min = r;
                if (min === i) break;
                [heap[min], heap[i]] = [heap[i], heap[min]];
                i = min;
            }
        }
        return top;
    };

    let sum = 0, max = 0n;

    for (const [e, s] of engineers) {
        push(s);
        sum += s;
        if (heap.length > k) {
            sum -= pop();
        }
        const perf = BigInt(sum) * BigInt(e);
        if (perf > max) max = perf;
    }

    return Number(max % BigInt(MOD));
};
// @lc code=end

// TEST:
console.log(maxPerformance(6, [2,10,3,1,5,8], [5,4,3,9,7,2], 2)); // 60
console.log(maxPerformance(6, [2,10,3,1,5,8], [5,4,3,9,7,2], 3)); // 68
console.log(maxPerformance(6, [2,10,3,1,5,8], [5,4,3,9,7,2], 4)); // 72
console.log(maxPerformance(3, [1,2,3], [8,7,6], 1)); // 18
console.log(maxPerformance(3, [5,5,5], [1,1,1], 3)); // 15
