/*
 * @lc app=leetcode.cn id=1606 lang=javascript
 *
 * [1606] 找到处理最多请求的服务器
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {
    // 树状数组维护空闲服务器集合(下标 1..k 对应服务器 0..k-1,空闲记 1)
    const tree = new Array(k + 1).fill(0);
    const add = (i, delta) => {
        for (; i <= k; i += i & -i) tree[i] += delta;
    };
    const prefix = (i) => {
        let sum = 0;
        for (; i > 0; i -= i & -i) sum += tree[i];
        return sum;
    };
    // 找第 rank 个空闲服务器(1-based 下标)
    const kth = (rank) => {
        let idx = 0;
        for (let bit = 1 << Math.floor(Math.log2(k)); bit > 0; bit >>= 1) {
            const next = idx + bit;
            if (next <= k && tree[next] < rank) {
                idx = next;
                rank -= tree[next];
            }
        }
        return idx + 1;
    };

    // 最小堆维护忙碌服务器的 [结束时间, 服务器编号]
    const heap = [];
    const heapPush = (node) => {
        heap.push(node);
        let i = heap.length - 1;
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (heap[parent][0] <= heap[i][0]) break;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };
    const heapPop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const left = 2 * i + 1;
                const right = left + 1;
                let smallest = i;
                if (left < heap.length && heap[left][0] < heap[smallest][0]) smallest = left;
                if (right < heap.length && heap[right][0] < heap[smallest][0]) smallest = right;
                if (smallest === i) break;
                [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
                i = smallest;
            }
        }
        return top;
    };

    for (let s = 1; s <= k; s++) add(s, 1);

    const counts = new Array(k).fill(0);
    for (let i = 0; i < arrival.length; i++) {
        // 归还已结束请求占用的服务器
        while (heap.length > 0 && heap[0][0] <= arrival[i]) {
            add(heapPop()[1] + 1, 1);
        }
        const start = i % k;
        const total = prefix(k);
        const freeBefore = prefix(start); // 编号 < start 的空闲数
        let server = -1;
        if (total > freeBefore) {
            server = kth(freeBefore + 1) - 1; // 第一个空闲编号 >= start
        } else if (total > 0) {
            server = kth(1) - 1; // 环绕回最小空闲编号
        }
        if (server === -1) continue; // 全忙,请求被丢弃
        add(server + 1, -1);
        counts[server]++;
        heapPush([arrival[i] + load[i], server]);
    }

    let max = 0;
    for (let s = 0; s < k; s++) {
        if (counts[s] > max) max = counts[s];
    }
    const result = [];
    for (let s = 0; s < k; s++) {
        if (counts[s] === max) result.push(s);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(busiestServers(3, [1, 2, 3, 4, 5], [5, 2, 3, 3, 3])) === JSON.stringify([1])); // [1]
console.log(JSON.stringify(busiestServers(3, [1, 2, 3, 4], [1, 2, 1, 2])) === JSON.stringify([0])); // [0]
console.log(JSON.stringify(busiestServers(3, [1, 2, 3], [10, 12, 11])) === JSON.stringify([0, 1, 2])); // [0,1,2]
console.log(JSON.stringify(busiestServers(3, [1, 2, 3, 4, 8, 9, 10], [5, 2, 10, 3, 1, 2, 2])) === JSON.stringify([1])); // [1]
console.log(JSON.stringify(busiestServers(1, [1], [1])) === JSON.stringify([0])); // [0]
console.log(JSON.stringify(busiestServers(2, [1, 2, 3, 4], [1, 1, 1, 1])) === JSON.stringify([0, 1])); // 全部轮流处理
console.log(JSON.stringify(busiestServers(4, [1, 2, 3, 4], [1, 1, 1, 1])) === JSON.stringify([0, 1, 2, 3])); // 各处理一个