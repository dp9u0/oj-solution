/*
 * @lc app=leetcode.cn id=面试题 16.14 lang=javascript
 *
 * [面试题 16.14] 最佳直线
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number[]}
 */
var bestLine = function(points) {
    // 锚点 i 分桶：斜率约分定号后作精确哈希键，桶内 j 升序
    const n = points.length;
    let bestCount = 0;
    let best = [0, 1];
    for (let i = 0; i < n - 1; i++) {
        const groups = new Map();
        for (let j = i + 1; j < n; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];
            const g = gcd(Math.abs(dx), Math.abs(dy)) || 1;
            dx /= g;
            dy /= g;
            if (dx < 0 || (dx === 0 && dy < 0)) {
                dx = -dx;
                dy = -dy;
            }
            const key = dx + ',' + dy;
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(j);
        }
        for (const js of groups.values()) {
            // 仅严格更多才更新：i 升序 + Map 插入序（j_min 升序）保证并列时 [S0,S1] 最小
            if (js.length > bestCount) {
                bestCount = js.length;
                best = [i, js[0]];
            }
        }
    }
    return best;
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
// @lc code=end

// TEST:
console.log(JSON.stringify(bestLine([[0, 0], [1, 1], [1, 0], [2, 0]])) === '[0,2]');
console.log(JSON.stringify(bestLine([[1, 1], [2, 2], [3, 3]])) === '[0,1]'); // 全共线
console.log(JSON.stringify(bestLine([[0, 0], [0, 1], [0, 2], [1, 1]])) === '[0,1]'); // 垂直线 3 点
console.log(JSON.stringify(bestLine([[0, 0], [1, 1]])) === '[0,1]');
console.log(JSON.stringify(bestLine([[-1, -1], [-2, -2], [1, 1]])) === '[0,1]'); // 负坐标共线，取最小两下标
console.log(JSON.stringify(bestLine([[0, 0], [1, 0], [0, 1], [1, 1]])) === '[0,1]'); // 并列取最小 [S0,S1]
