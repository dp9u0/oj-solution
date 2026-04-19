/*
 * @lc app=leetcode id=2271 lang=javascript
 *
 * [2271] Maximum White Tiles Covered by a Carpet
 */

// @lc code=start
/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function(tiles, carpetLen) {
    tiles.sort((a, b) => a[0] - b[0]);
    const n = tiles.length;

    // prefix sum of tile lengths
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + (tiles[i][1] - tiles[i][0] + 1);
    }

    let result = 0;

    for (let i = 0, j = 0; i < n; i++) {
        const start = tiles[i][0];
        const end = start + carpetLen - 1;

        // advance j to find the last tile that starts <= end
        while (j < n && tiles[j][1] <= end) {
            j++;
        }

        // full coverage from i to j-1
        let covered = prefix[j] - prefix[i];

        // partial coverage of tile j if it exists and starts <= end
        if (j < n && tiles[j][0] <= end) {
            covered += end - tiles[j][0] + 1;
        }

        result = Math.max(result, covered);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maximumWhiteTiles([[1,5],[10,11],[12,18],[20,25],[30,32]], 10)); // 9
console.log(maximumWhiteTiles([[10,11],[1,1]], 2)); // 2
console.log(maximumWhiteTiles([[1,5],[10,15],[20,25]], 5)); // 5
console.log(maximumWhiteTiles([[1,100]], 50)); // 50
console.log(maximumWhiteTiles([[1,5],[10,15],[20,30],[35,50]], 20)); // 16
