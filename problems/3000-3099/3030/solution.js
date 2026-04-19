/*
 * @lc app=leetcode id=3030 lang=javascript
 *
 * [3030] Find the Grid of Region Average
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} threshold
 * @return {number[][]}
 */
var resultGrid = function(image, threshold) {
    const m = image.length, n = image[0].length;
    const sumAvg = Array.from({ length: m }, () => new Int32Array(n));
    const cnt = Array.from({ length: m }, () => new Int32Array(n));

    const check = (si, sj) => {
        for (let i = si; i < si + 3; i++)
            for (let j = sj; j < sj + 2; j++)
                if (Math.abs(image[i][j] - image[i][j + 1]) > threshold) return false;
        for (let i = si; i < si + 2; i++)
            for (let j = sj; j < sj + 3; j++)
                if (Math.abs(image[i][j] - image[i + 1][j]) > threshold) return false;
        return true;
    };

    for (let i = 0; i <= m - 3; i++) {
        for (let j = 0; j <= n - 3; j++) {
            if (!check(i, j)) continue;
            let s = 0;
            for (let di = 0; di < 3; di++)
                for (let dj = 0; dj < 3; dj++)
                    s += image[i + di][j + dj];
            const avg = Math.floor(s / 9);
            for (let di = 0; di < 3; di++)
                for (let dj = 0; dj < 3; dj++) {
                    sumAvg[i + di][j + dj] += avg;
                    cnt[i + di][j + dj]++;
                }
        }
    }

    return image.map((row, i) =>
        row.map((v, j) => cnt[i][j] > 0 ? Math.floor(sumAvg[i][j] / cnt[i][j]) : v)
    );
};
// @lc code=end

// TEST:
console.log(resultGrid([[5,6,7,10],[8,9,10,10],[11,12,13,10]], 3)); // [[9,9,9,9],[9,9,9,9],[9,9,9,9]]
console.log(resultGrid([[10,20,30],[15,25,35],[20,30,40],[25,35,45]], 12)); // [[25,25,25],[27,27,27],[27,27,27],[30,30,30]]
console.log(resultGrid([[5,6,7],[8,9,10],[11,12,13]], 1)); // [[5,6,7],[8,9,10],[11,12,13]]
