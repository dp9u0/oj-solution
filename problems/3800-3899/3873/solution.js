/*
 * @lc app=leetcode id=3873 lang=javascript
 *
 * [3873] Maximum Points Activated with One Addition
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxActivated = function(points) {
    // Coordinate compression: x and y get separate IDs
    const xMap = new Map();
    const yMap = new Map();
    let xId = 0, yId = 0;

    for (const [x, y] of points) {
        if (!xMap.has(x)) xMap.set(x, xId++);
        if (!yMap.has(y)) yMap.set(y, yId++);
    }

    const total = xId + yId;
    const parent = new Int32Array(total);
    const rnk = new Uint8Array(total);
    for (let i = 0; i < total; i++) parent[i] = i;

    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const union = (a, b) => {
        a = find(a); b = find(b);
        if (a === b) return;
        if (rnk[a] < rnk[b]) [a, b] = [b, a];
        parent[b] = a;
        if (rnk[a] === rnk[b]) rnk[a]++;
    };

    const yOff = xId;
    for (const [x, y] of points) {
        union(xMap.get(x), yOff + yMap.get(y));
    }

    // Count points per connected component
    const compSize = new Map();
    for (const [x, y] of points) {
        const root = find(xMap.get(x));
        compSize.set(root, (compSize.get(root) || 0) + 1);
    }

    const sizes = [...compSize.values()].sort((a, b) => b - a);

    if (sizes.length >= 2) return sizes[0] + sizes[1] + 1;
    return sizes[0] + 1;
};
// @lc code=end

// TEST:
console.log(maxActivated([[1,1],[1,2],[2,2]]));        // 4
console.log(maxActivated([[2,2],[1,1],[3,3]]));        // 3
console.log(maxActivated([[2,3],[2,2],[1,1],[4,5]]));  // 4
console.log(maxActivated([[1,1]]));                     // 2
console.log(maxActivated([[1,2],[3,4],[5,6]]));        // 3 (merge two singletons)
