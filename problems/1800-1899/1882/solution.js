/*
 * @lc app=leetcode id=1882 lang=javascript
 *
 * [1882] Process Tasks Using Servers
 */

// @lc code=start
/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {
    const n = servers.length;
    const m = tasks.length;
    const ans = new Array(m);

    // Min heap: compare function returns negative for higher priority
    const Heap = (cmp) => {
        const h = [];
        const push = (v) => {
            h.push(v);
            let i = h.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (cmp(h[p], h[i]) <= 0) break;
                [h[p], h[i]] = [h[i], h[p]];
                i = p;
            }
        };
        const pop = () => {
            const top = h[0];
            const last = h.pop();
            if (h.length > 0) {
                h[0] = last;
                let i = 0;
                while (true) {
                    let s = i, l = 2*i+1, r = 2*i+2;
                    if (l < h.length && cmp(h[l], h[s]) < 0) s = l;
                    if (r < h.length && cmp(h[r], h[s]) < 0) s = r;
                    if (s === i) break;
                    [h[s], h[i]] = [h[i], h[s]];
                    i = s;
                }
            }
            return top;
        };
        return { push, pop, peek: () => h[0], size: () => h.length };
    };

    // Free: [weight, index], sort by weight then index
    const free = Heap((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    // Busy: [freeTime, weight, index], sort by freeTime then weight then index
    const busy = Heap((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });

    for (let i = 0; i < n; i++) free.push([servers[i], i]);

    let time = 0;
    for (let j = 0; j < m; j++) {
        time = Math.max(time, j);

        while (busy.size() > 0 && busy.peek()[0] <= time) {
            const [, w, idx] = busy.pop();
            free.push([w, idx]);
        }

        if (free.size() === 0) {
            const [ft, w, idx] = busy.peek();
            time = ft;
            while (busy.size() > 0 && busy.peek()[0] <= time) {
                const [, w2, idx2] = busy.pop();
                free.push([w2, idx2]);
            }
        }

        const [w, idx] = free.pop();
        ans[j] = idx;
        busy.push([time + tasks[j], w, idx]);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(assignTasks([3,3,2], [1,2,3,2,1,2])) === JSON.stringify([2,2,0,2,1,2]));
console.log(JSON.stringify(assignTasks([5,1,4,3,2], [2,1,2,4,5,2,1])) === JSON.stringify([1,4,1,4,1,3,2]));
console.log(JSON.stringify(assignTasks([10,1], [1,1])) === JSON.stringify([1,1]));
console.log(JSON.stringify(assignTasks([1,1], [1,1,1])) === JSON.stringify([0,0,0]));
console.log(JSON.stringify(assignTasks([3,1,2], [1,2,3,4,5])) === JSON.stringify([1,1,2,1,0]));
