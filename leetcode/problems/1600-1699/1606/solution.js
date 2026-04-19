/*
 * @lc app=leetcode id=1606 lang=javascript
 *
 * [1606] Find Servers That Handled Most Number of Requests
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {
    const available = new Set(Array.from({ length: k }, (_, i) => i));
    const sortedAvailable = Array.from({ length: k }, (_, i) => i);
    // busy: minHeap by end time
    const busy = [];
    const count = new Array(k).fill(0);

    const heapPush = (entry) => {
        busy.push(entry);
        let j = busy.length - 1;
        while (j > 0) {
            const p = (j - 1) >> 1;
            if (busy[p][0] > busy[j][0]) { [busy[p], busy[j]] = [busy[j], busy[p]]; j = p; }
            else break;
        }
    };
    const heapPop = () => {
        const top = busy[0];
        busy[0] = busy[busy.length - 1];
        busy.pop();
        let j = 0;
        while (true) {
            let min = j, l = 2 * j + 1, r = 2 * j + 2;
            if (l < busy.length && busy[l][0] < busy[min][0]) min = l;
            if (r < busy.length && busy[r][0] < busy[min][0]) min = r;
            if (min !== j) { [busy[j], busy[min]] = [busy[min], busy[j]]; j = min; }
            else break;
        }
        return top;
    };

    const bisectLeft = (arr, x, lo = 0, hi = arr.length) => {
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    // Use sorted array for available servers
    let avail = [];
    for (let i = 0; i < k; i++) avail.push(i);

    const insertAvail = (server) => {
        const pos = bisectLeft(avail, server);
        avail.splice(pos, 0, server);
    };

    const removeAvail = (idx) => {
        avail.splice(idx, 1);
    };

    for (let i = 0; i < arrival.length; i++) {
        const t = arrival[i];

        // Release finished servers
        while (busy.length > 0 && busy[0][0] <= t) {
            const [, server] = heapPop();
            insertAvail(server);
        }

        if (avail.length === 0) continue;

        const target = i % k;
        const pos = bisectLeft(avail, target);
        const idx = pos < avail.length ? pos : 0;
        const server = avail[idx];
        removeAvail(idx);
        count[server]++;

        heapPush([t + load[i], server]);
    }

    const maxCount = Math.max(...count);
    const result = [];
    for (let i = 0; i < k; i++) {
        if (count[i] === maxCount) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(busiestServers(3, [1, 2, 3, 4, 5], [5, 2, 3, 3, 3]))); // [1]
console.log(JSON.stringify(busiestServers(3, [1, 2, 3, 4], [1, 2, 1, 2]))); // [0]
console.log(JSON.stringify(busiestServers(3, [1, 2, 3], [10, 12, 11]))); // [0,1,2]
console.log(JSON.stringify(busiestServers(1, [1], [1]))); // [0]
console.log(JSON.stringify(busiestServers(2, [1, 2, 3], [1, 1, 1]))); // [0]
