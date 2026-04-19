/*
 * @lc app=leetcode id=1942 lang=javascript
 *
 * [1942] The Number of the Smallest Unoccupied Chair
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    let n = times.length;
    let events = [];
    for (let i = 0; i < n; i++) {
        events.push([times[i][0], 1, i]); // arrival
        events.push([times[i][1], 0, i]); // leaving
    }
    events.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

    let available = []; // min-heap of chair numbers
    let nextChair = 0;
    let chairOf = new Array(n).fill(-1);

    for (let [time, type, friend] of events) {
        if (type === 0) { // leaving
            push(available, chairOf[friend]);
        } else { // arrival
            let chair = available.length > 0 ? pop(available) : nextChair++;
            chairOf[friend] = chair;
            if (friend === targetFriend) return chair;
        }
    }
};

function push(heap, val) {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
        let p = (i - 1) >> 1;
        if (heap[p] <= heap[i]) break;
        [heap[p], heap[i]] = [heap[i], heap[p]];
        i = p;
    }
}

function pop(heap) {
    let top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    let i = 0;
    while (true) {
        let smallest = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l] < heap[smallest]) smallest = l;
        if (r < heap.length && heap[r] < heap[smallest]) smallest = r;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
    }
    return top;
}
// @lc code=end

// TEST:
console.log(smallestChair([[1,4],[2,3],[4,6]], 1)); // 1
console.log(smallestChair([[3,10],[1,5],[2,6]], 0)); // 2
