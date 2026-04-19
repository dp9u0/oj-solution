/*
 * @lc app=leetcode id=2250 lang=javascript
 *
 * [2250] Count Number of Rectangles Containing Each Point
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function(rectangles, points) {
    const groups = Array.from({ length: 101 }, () => []);
    for (const [l, h] of rectangles) {
        groups[h].push(l);
    }
    for (let h = 1; h <= 100; h++) {
        groups[h].sort((a, b) => a - b);
    }

    const binarySearch = (arr, target) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return arr.length - lo;
    };

    return points.map(([xj, yj]) => {
        let count = 0;
        for (let h = yj; h <= 100; h++) {
            if (groups[h].length > 0) {
                count += binarySearch(groups[h], xj);
            }
        }
        return count;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countRectangles([[1,2],[2,3],[2,5]], [[2,1],[1,4]]))); // [2,1]
console.log(JSON.stringify(countRectangles([[1,1],[2,2],[3,3]], [[1,3],[1,1]]))); // [1,3]
