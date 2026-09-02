/*
 * @lc app=leetcode.cn id=LCR 160 lang=javascript
 *
 * [LCR 160] 数据流中的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    // 大顶堆：存放较小的一半，堆顶为其中最大值
    this.maxHeap = [];
    // 小顶堆：存放较大的一半，堆顶为其中最小值
    this.minHeap = [];
};

/**
 * 在堆中向上调整元素，保持堆序。
 * @param {number[]} heap
 * @param {number} index
 * @param {boolean} isMaxHeap 大顶堆为 true，小顶堆为 false
 */
function siftUp(heap, index, isMaxHeap) {
    while (index > 0) {
        const parent = (index - 1) >> 1;
        const needsSwap = isMaxHeap
            ? heap[index] > heap[parent]
            : heap[index] < heap[parent];
        if (!needsSwap) break;
        [heap[index], heap[parent]] = [heap[parent], heap[index]];
        index = parent;
    }
}

/**
 * 在堆中向下调整元素，保持堆序。
 * @param {number[]} heap
 * @param {boolean} isMaxHeap
 */
function siftDown(heap, isMaxHeap) {
    let index = 0;
    const size = heap.length;
    while (true) {
        let left = index * 2 + 1;
        let right = left + 1;
        let target = index;
        if (left < size) {
            const better = isMaxHeap
                ? heap[left] > heap[target]
                : heap[left] < heap[target];
            if (better) target = left;
        }
        if (right < size) {
            const better = isMaxHeap
                ? heap[right] > heap[target]
                : heap[right] < heap[target];
            if (better) target = right;
        }
        if (target === index) break;
        [heap[index], heap[target]] = [heap[target], heap[index]];
        index = target;
    }
}

/**
 * 向堆中插入一个元素并保持堆序。
 * @param {number[]} heap
 * @param {number} val
 * @param {boolean} isMaxHeap
 */
function heapPush(heap, val, isMaxHeap) {
    heap.push(val);
    siftUp(heap, heap.length - 1, isMaxHeap);
}

/**
 * 弹出堆顶元素并保持堆序，返回堆顶值。
 * @param {number[]} heap
 * @param {boolean} isMaxHeap
 */
function heapPop(heap, isMaxHeap) {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
        heap[0] = last;
        siftDown(heap, isMaxHeap);
    }
    return top;
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.maxHeap.length === this.minHeap.length) {
        // 两边等大：先经右堆过滤，取较小者放入左堆（左堆大小 +1）
        heapPush(this.minHeap, num, false);
        heapPush(this.maxHeap, heapPop(this.minHeap, false), true);
    } else {
        // 左堆已多 1 个：先经左堆过滤，取较大者放入右堆（重新平衡）
        heapPush(this.maxHeap, num, true);
        heapPush(this.minHeap, heapPop(this.maxHeap, true), false);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.length > this.minHeap.length) {
        return this.maxHeap[0];
    }
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

// TEST:
let mf1 = new MedianFinder();
mf1.addNum(1);
mf1.addNum(2);
console.log(mf1.findMedian()); // 1.5
mf1.addNum(3);
console.log(mf1.findMedian()); // 2

let mf2 = new MedianFinder();
mf2.addNum(2);
console.log(mf2.findMedian()); // 2
mf2.addNum(3);
console.log(mf2.findMedian()); // 2.5

let mf3 = new MedianFinder();
mf3.addNum(-1);
console.log(mf3.findMedian()); // -1
mf3.addNum(-2);
console.log(mf3.findMedian()); // -1.5
mf3.addNum(-3);
console.log(mf3.findMedian()); // -2

let mf4 = new MedianFinder();
mf4.addNum(5);
mf4.addNum(10);
mf4.addNum(1);
mf4.addNum(8);
console.log(mf4.findMedian()); // 6.5

// 单元素
let mf5 = new MedianFinder();
mf5.addNum(42);
console.log(mf5.findMedian()); // 42
