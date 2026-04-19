/*
 * @lc app=leetcode id=1792 lang=javascript
 *
 * [1792] Maximum Average Pass Ratio
 */

// @lc code=start
/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const gain = (p, t) => (p + 1) / (t + 1) - p / t;

    const heap = [];
    for (const [p, t] of classes) {
        if (p < t) heap.push({ p, t, g: gain(p, t) });
    }

    const siftDown = (i, n) => {
        while (true) {
            let largest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && heap[l].g > heap[largest].g) largest = l;
            if (r < n && heap[r].g > heap[largest].g) largest = r;
            if (largest === i) break;
            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            i = largest;
        }
    };

    for (let i = (heap.length >> 1) - 1; i >= 0; i--) siftDown(i, heap.length);

    for (let i = 0; i < extraStudents && heap.length > 0; i++) {
        const top = heap[0];
        top.p++;
        top.t++;
        top.g = gain(top.p, top.t);
        siftDown(0, heap.length);
    }

    let sum = 0;
    for (const { p, t } of heap) sum += p / t;
    const fullCount = classes.length - heap.length;
    return (sum + fullCount) / classes.length;
};
// @lc code=end

// TEST:
console.log(maxAverageRatio([[1,2],[3,5],[2,2]], 2)); // 0.78333
console.log(maxAverageRatio([[2,4],[3,9],[4,5],[2,10]], 4)); // 0.53485
console.log(maxAverageRatio([[1,1]], 5)); // 1.0
console.log(maxAverageRatio([[0,1],[0,1],[0,1]], 3)); // 0.5
console.log(maxAverageRatio([[1,100],[1,100],[1,100]], 1).toFixed(5)); // ~0.01333 more
