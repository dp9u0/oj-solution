/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    let minCap = Infinity;
    let minIdx = -1;

    for (let i = 0; i < capacity.length; i++) {
        if (capacity[i] >= itemSize) {
            if (capacity[i] < minCap) {
                minCap = capacity[i];
                minIdx = i;
            } else if (capacity[i] === minCap && i < minIdx) {
                minIdx = i;
            }
        }
    }

    return minIdx;
};

// TEST:
console.log(minimumIndex([1, 5, 3, 7], 3)); // Expected: 2
console.log(minimumIndex([3, 5, 4, 3], 2)); // Expected: 0
console.log(minimumIndex([4], 5)); // Expected: -1
console.log(minimumIndex([5, 3, 5, 2], 3)); // Expected: 1
console.log(minimumIndex([1, 2, 3], 1)); // Expected: 0
