/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if (!nums1.length || !nums2.length || k === 0) return [];
    
    // Use an anonymous class to avoid global namespace conflicts in LeetCode environment
    const MyMinHeap = class {
        constructor() {
            this.heap = [];
        }
        
        size() {
            return this.heap.length;
        }
        
        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }
        
        pop() {
            if (this.size() === 1) return this.heap.pop();
            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.sinkDown(0);
            return top;
        }
        
        bubbleUp(idx) {
            while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                if (this.heap[idx][0] >= this.heap[parentIdx][0]) break;
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            }
        }
        
        sinkDown(idx) {
            let size = this.size();
            while (true) {
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let smallestIdx = idx;
                
                if (leftChildIdx < size && this.heap[leftChildIdx][0] < this.heap[smallestIdx][0]) {
                    smallestIdx = leftChildIdx;
                }
                if (rightChildIdx < size && this.heap[rightChildIdx][0] < this.heap[smallestIdx][0]) {
                    smallestIdx = rightChildIdx;
                }
                
                if (smallestIdx === idx) break;
                
                [this.heap[idx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[idx]];
                idx = smallestIdx;
            }
        }
    };
    
    let pq = new MyMinHeap();
    let result = [];
    
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        pq.push([nums1[i] + nums2[0], i, 0]);
    }
    
    while (k > 0 && pq.size() > 0) {
        let curr = pq.pop();
        let i = curr[1];
        let j = curr[2];
        
        result.push([nums1[i], nums2[j]]);
        
        if (j + 1 < nums2.length) {
            pq.push([nums1[i] + nums2[j+1], i, j+1]);
        }
        
        k--;
    }
    
    return result;
};

module.exports = kSmallestPairs;

// TEST:
console.log(kSmallestPairs([1,7,11], [2,4,6], 3)); // [[1,2],[1,4],[1,6]]
console.log(kSmallestPairs([1,1,2], [1,2,3], 2)); // [[1,1],[1,1]]
