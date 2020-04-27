/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (heights === null || heights.length === 0) {
        return 0;
    }
    let stack = [-1]; // 哨兵
    let max = 0;
    let counter = 0;
    while (counter < heights.length) {
        let currentHeight = heights[counter];
        if (stack.length === 1 || currentHeight >= heights[stack[stack.length - 1]]) {
            // 当前高度比前一个高度高 说明可以与前一个高度组成更大的面积
            stack.push(counter);
            counter++;
        } else {
            // 当前高度比前一个高度低 需要计算前一个高度的面积
            let top = stack.pop();
            let height = heights[top];
            let width = counter - stack[stack.length - 1] - 1;
            let area = height * width;
            max = Math.max(area, max);
        }
    }
    // 由于升序序列 可能导致还有元素没有被处理
    while (stack.length > 1) {
        let top = stack.pop();
        let height = heights[top];
        let width = counter - stack[stack.length - 1] - 1;
        let area = height * width;
        max = Math.max(area, max);
    }
    return max;
};


// TEST:
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([1, 1]))
console.log(largestRectangleArea([]))
console.log(largestRectangleArea([0, 0, 0, 0]))
console.log(largestRectangleArea([1, 2, 3, 4, 5]))
