/*
 * @lc app=leetcode id=1705 lang=javascript
 *
 * [1705] Maximum Number of Eaten Apples
 */

// @lc code=start
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function(apples, days) {
    let n = apples.length;
    // min-heap: [expireDay, count]
    let heap = [];
    let res = 0;
    let day = 0;

    while (day < n || heap.length > 0) {
        // add new apples
        if (day < n && apples[day] > 0) {
            push(heap, [day + days[day], apples[day]]);
        }
        // remove expired
        while (heap.length > 0 && heap[0][0] <= day) {
            pop(heap);
        }
        // eat one
        if (heap.length > 0) {
            heap[0][1]--;
            res++;
            if (heap[0][1] === 0) pop(heap);
        }
        day++;
    }
    return res;
};

function push(heap, val) {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
        let p = (i - 1) >> 1;
        if (heap[p][0] <= heap[i][0]) break;
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
        let s = i, l = 2 * i + 1, r = 2 * i + 2;
        if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
        if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
        if (s === i) break;
        [heap[i], heap[s]] = [heap[s], heap[i]];
        i = s;
    }
    return top;
}
// @lc code=end

// TEST:
console.log(eatenApples([1,2,3,5,2], [3,2,1,4,2])); // 7
console.log(eatenApples([3,0,0,0,0,2], [3,0,0,0,0,2])); // 5
