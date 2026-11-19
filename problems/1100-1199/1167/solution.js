/*
 * @lc app=leetcode.cn id=1167 lang=javascript
 *
 * [1167] 连接木棍的最低费用
 */

// @lc code=start
/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    if (sticks.length <= 1) return 0;

    const heap = sticks.slice();
    const down = (i) => { // sift down
        for (;;) {
            const l = 2 * i + 1, r = 2 * i + 2;
            let m = i;
            if (l < heap.length && heap[l] < heap[m]) m = l;
            if (r < heap.length && heap[r] < heap[m]) m = r;
            if (m === i) break;
            [heap[i], heap[m]] = [heap[m], heap[i]];
            i = m;
        }
    };
    for (let i = (heap.length >> 1) - 1; i >= 0; i--) down(i);

    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length) {
            heap[0] = last;
            down(0);
        }
        return top;
    };
    const push = (v) => { // sift up
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    let total = 0;
    while (heap.length > 1) {
        const s = pop() + pop(); // merge the two shortest
        total += s;
        push(s);
    }
    return total;
};
// @lc code=end

// TEST:
console.log(connectSticks([2,4,3])); // 14
console.log(connectSticks([1,8,3,5])); // 30
console.log(connectSticks([5])); // 0
console.log(connectSticks([1,2])); // 3
console.log(connectSticks([1,2,3,4,5])); // 33
