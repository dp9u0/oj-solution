/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
    const stack = [];
    let max = 0;
    heights = [0, ...heights, 0]; // 哨兵
    let counter = 0;
    while (counter < heights.length) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[counter]) {
            const heightIndex = stack.pop();
            const height = heights[heightIndex];
            const width = counter - stack[stack.length - 1] - 1;
            const area = height * width;
            max = Math.max(max, area)
        }
        stack.push(counter);
        counter++;
    }
    return max;
}

// TEST:
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([1, 1]))
console.log(largestRectangleArea([]))
console.log(largestRectangleArea([0, 0, 0, 0]))
console.log(largestRectangleArea([1, 2, 3, 4, 5]))
