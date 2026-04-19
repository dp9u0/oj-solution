/*
 * @lc app=leetcode id=630 lang=javascript
 *
 * [630] Course Schedule III
 */

// @lc code=start
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    // Sort by deadline
    courses.sort((a, b) => a[1] - b[1]);

    // Max heap (using negate for JS sort simulation)
    const heap = [];
    let time = 0;

    const heapPush = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (heap[parent] >= heap[i]) break;
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
            while (true) {
                let largest = i;
                const l = 2 * i + 1, r = 2 * i + 2;
                if (l < heap.length && heap[l] > heap[largest]) largest = l;
                if (r < heap.length && heap[r] > heap[largest]) largest = r;
                if (largest === i) break;
                [heap[i], heap[largest]] = [heap[largest], heap[i]];
                i = largest;
            }
        }
        return top;
    };

    const heapTop = () => heap[0];

    for (const [duration, lastDay] of courses) {
        if (time + duration <= lastDay) {
            time += duration;
            heapPush(duration);
        } else if (heap.length > 0 && heapTop() > duration) {
            const removed = heapPop();
            time = time - removed + duration;
            heapPush(duration);
        }
    }

    return heap.length;
};
// @lc code=end

// TEST:
console.log(scheduleCourse([[100,200],[200,1300],[1000,1250],[2000,3200]])); // 3
console.log(scheduleCourse([[1,2]]));                                        // 1
console.log(scheduleCourse([[3,2],[4,3]]));                                   // 0
