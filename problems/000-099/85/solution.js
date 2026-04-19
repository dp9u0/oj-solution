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

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    if (!matrix.length) return 0;
    let max = 0;
    const lines = matrix.length;
    const count = matrix[0].length;
    const dp = [];
    for (let i = 0; i < count; ++i) {
        dp.push(0);
    }
    for (let i = 0; i < lines; ++i) {
        for (let j = 0; j < count; ++j) {
            dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0;
        }
        max = Math.max(max, largestRectangleArea(dp));
    }
    return max;
};

// TEST:
console.log(maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]))
