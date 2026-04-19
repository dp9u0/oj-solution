/*
 * @lc app=leetcode id=3453 lang=javascript
 *
 * [3453] Separate Squares I
 */

// @lc code=start
/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let minY = Infinity, maxY = -Infinity, totalArea = 0;
    for (const [, y, l] of squares) {
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y + l);
        totalArea += l * l;
    }

    const half = totalArea / 2;

    const areaBelow = (yLine) => {
        let area = 0;
        for (const [, y, l] of squares) {
            if (yLine <= y) continue;
            const top = y + l;
            area += yLine >= top ? l * l : l * (yLine - y);
        }
        return area;
    };

    let lo = minY, hi = maxY;
    for (let i = 0; i < 80; i++) {
        const mid = (lo + hi) / 2;
        if (areaBelow(mid) < half) lo = mid;
        else hi = mid;
    }
    return hi;
};
// @lc code=end

// TEST:
console.log(separateSquares([[0,0,1],[2,2,1]])); // 1.0
console.log(separateSquares([[0,0,2],[1,1,1]])); // 1.16667
console.log(separateSquares([[0,0,1]])); // 0.5
console.log(separateSquares([[0,0,1],[0,1,1]])); // 1.0
console.log(separateSquares([[0,0,3],[1,1,1]])); // total=10, half=5
