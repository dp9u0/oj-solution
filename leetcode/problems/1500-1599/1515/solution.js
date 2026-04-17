/*
 * @lc app=leetcode id=1515 lang=javascript
 *
 * [1515] Best Position for a Service Centre
 */

// @lc code=start
/**
 * @param {number[][]} positions
 * @return {number}
 */
var getMinDistSum = function(positions) {
    const dist = (x, y) => {
        let sum = 0;
        for (const [xi, yi] of positions) sum += Math.hypot(x - xi, y - yi);
        return sum;
    };

    const bestY = (x) => {
        let lo = 0, hi = 100;
        for (let i = 0; i < 80; i++) {
            const m1 = lo + (hi - lo) / 3, m2 = hi - (hi - lo) / 3;
            if (dist(x, m1) < dist(x, m2)) hi = m2; else lo = m1;
        }
        return dist(x, (lo + hi) / 2);
    };

    let loX = 0, hiX = 100;
    for (let i = 0; i < 80; i++) {
        const m1 = loX + (hiX - loX) / 3, m2 = hiX - (hiX - loX) / 3;
        if (bestY(m1) < bestY(m2)) hiX = m2; else loX = m1;
    }
    return bestY((loX + hiX) / 2);
};
// @lc code=end

// TEST:
console.log(getMinDistSum([[0,1],[1,0],[1,2],[2,1]]).toFixed(5)); // 4.00000
console.log(getMinDistSum([[1,1],[3,3]]).toFixed(5)); // 2.82843
console.log(getMinDistSum([[1,1]]).toFixed(5)); // 0.00000
console.log(getMinDistSum([[0,0],[0,100],[100,0],[100,100]]).toFixed(5)); // 282.84271
console.log(getMinDistSum([[1,1],[1,1],[1,1]]).toFixed(5)); // 0.00000
