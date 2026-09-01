/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    let xSet = new Set();
    for (const [l, r] of buildings) {
        xSet.add(l);
        xSet.add(r);
    }
    let priorityQueue = Array.from(xSet).sort((a, b) => a - b);
    let results = [];
    for (const p of priorityQueue) {
        let height = 0;
        for (const [l, r, h] of buildings) {
            if (l > p) break;
            if (r > p) {
                height = Math.max(height, h);
            }
        }
        if (results.length !== 0 && results[results.length - 1][1] === height) continue; // 合并
        results.push([p, height]);
    }
    return results;
};


// TEST:
console.log(getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8]
]))