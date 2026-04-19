/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const values = [];
    const needswap = (a, b) => b < a; // 大根堆
    stones.forEach(v => {
        values.push(v);
        heapfyUp(values, values.length - 1, needswap);
    });
    while (values.length > 1) {
        const max1 = values[0];
        values[0] = values.pop();
        heapfyDown(values, 0, needswap);
        const max2 = values[0];
        values[0] = max1 - max2;
        heapfyDown(values, 0, needswap);
    }
    return values[0]
};

function heapfyUp(heap, index, needswap) {
    let comparing = ~~((index - 1) / 2);
    while (index !== 0 && needswap(heap[index], heap[comparing])) {
        [heap[index], heap[comparing]] = [heap[comparing], heap[index]]
        index = comparing;
        comparing = ~~((index - 1) / 2);
    }
}

function heapfyDown(heap, index, needswap) {
    let left = 2 * index + 1;
    let right = index * 2 + 2;
    while (heap.length > left) {
        let comparing = left;
        if (heap.length > right && needswap(heap[right], heap[left])) {
            comparing = right;
        }
        // 上下大小是否满足 heap 特性
        if (!needswap(heap[comparing], heap[index])) {
            break;
        }
        [heap[index], heap[comparing]] = [heap[comparing], heap[index]];
        index = comparing;
        left = 2 * index + 1;
        right = index * 2 + 2;
    }
}


// TEST:
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))