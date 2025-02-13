/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  extractMin() {
    if (this.size() === 1) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  extractMax() {
    if (this.size() === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return max;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

/**
 * MedianFinder class uses two heaps to efficiently find the median of a data stream:
 * - maxHeap stores the smaller half of the numbers
 * - minHeap stores the larger half of the numbers
 * The heaps are balanced so their size difference is at most 1
 */
var MedianFinder = function () {
  this.minHeap = new MinHeap();  // stores the larger half
  this.maxHeap = new MaxHeap();  // stores the smaller half
};

/** 
 * Adds a number to the data stream and maintains heap balance
 * @param {number} num - The number to be added
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // If maxHeap is empty or num is smaller than maxHeap's max,
  // add to maxHeap (smaller half), otherwise add to minHeap (larger half)
  if (this.maxHeap.size() === 0 || num < this.maxHeap.peek()) {
    this.maxHeap.insert(num);
  } else {
    this.minHeap.insert(num);
  }

  // Rebalance the heaps if necessary
  // maxHeap can have at most one more element than minHeap
  if (this.maxHeap.size() > this.minHeap.size() + 1) {
    this.minHeap.insert(this.maxHeap.extractMax());
  } else if (this.minHeap.size() > this.maxHeap.size()) {
    this.maxHeap.insert(this.minHeap.extractMin());
  }
};

/**
 * Returns the median of the data stream
 * @return {number} - The median value
 */
MedianFinder.prototype.findMedian = function () {
  // If maxHeap has more elements, median is its top element
  if (this.maxHeap.size() > this.minHeap.size()) {
    return this.maxHeap.peek();
  } 
  // If minHeap has more elements, median is its top element
  else if (this.maxHeap.size() < this.minHeap.size()) {
    return this.minHeap.peek();
  }
  // If heaps have equal size, median is the average of their top elements
  return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

// TEST:
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // 2

