/*
 * @lc app=leetcode.cn id=面试题 17.20 lang=javascript
 *
 * [面试题 17.20] 连续中值
 */

// @lc code=start
// 二叉堆：cmp 返回负值者优先在上
const heapPush = (heap, val, cmp) => {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
        const p = (i - 1) >> 1;
        if (cmp(heap[i], heap[p]) < 0) {
            [heap[i], heap[p]] = [heap[p], heap[i]];
            i = p;
        } else {
            break;
        }
    }
};
const heapPop = (heap, cmp) => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
        heap[0] = last;
        let i = 0;
        for (;;) {
            const l = 2 * i + 1;
            const r = l + 1;
            let m = i;
            if (l < heap.length && cmp(heap[l], heap[m]) < 0) m = l;
            if (r < heap.length && cmp(heap[r], heap[m]) < 0) m = r;
            if (m === i) break;
            [heap[i], heap[m]] = [heap[m], heap[i]];
            i = m;
        }
    }
    return top;
};

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    // 下半部分大根堆 + 上半部分小根堆，lower 保持 size 相等或多 1
    this.lower = [];
    this.upper = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    heapPush(this.lower, num, (a, b) => b - a);
    heapPush(this.upper, heapPop(this.lower, (a, b) => b - a), (a, b) => a - b);
    if (this.upper.length > this.lower.length) {
        heapPush(this.lower, heapPop(this.upper, (a, b) => a - b), (a, b) => b - a);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.lower.length > this.upper.length) return this.lower[0];
    return (this.lower[0] + this.upper[0]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

// TEST:
const mf1 = new MedianFinder();
mf1.addNum(1);
mf1.addNum(2);
console.log(mf1.findMedian() === 1.5);
mf1.addNum(3);
console.log(mf1.findMedian() === 2);
const mf2 = new MedianFinder();
for (const n of [5, 15, 1, 3]) mf2.addNum(n);
console.log(mf2.findMedian() === 4);
const mf3 = new MedianFinder();
mf3.addNum(-1);
console.log(mf3.findMedian() === -1);
const mf4 = new MedianFinder();
for (const n of [2, 2, 2, 2]) mf4.addNum(n);
console.log(mf4.findMedian() === 2);
const mf5 = new MedianFinder();
for (const n of [6, 10, 2, 6, 5, 0, 6, 3, 1, 0]) mf5.addNum(n); // 排序后 0,0,1,2,3,5,6,6,6,10 → 中值 4
console.log(mf5.findMedian() === 4);
