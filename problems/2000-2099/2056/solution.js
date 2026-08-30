/*
 * @lc app=leetcode id=2056 lang=javascript
 *
 * [2056] Number of Valid Move Combinations On Chessboard
 */

// @lc code=start
/**
 * @param {string[]} pieces
 * @param {number[][]} positions
 * @return {number}
 */
var countCombinations = function(pieces, positions) {
    const DIRS = {
        rook: [[-1, 0], [1, 0], [0, -1], [0, 1]],
        bishop: [[-1, -1], [-1, 1], [1, -1], [1, 1]],
        queen: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]],
    };

    const n = pieces.length;

    // 每个棋子的候选目标：原地不动 + 沿允许方向可达的所有格子
    const getCandidates = (i) => {
        const [r, c] = positions[i];
        const candidates = [[r, c]];
        for (const [dr, dc] of DIRS[pieces[i]]) {
            let nr = r + dr, nc = c + dc;
            while (nr >= 1 && nr <= 8 && nc >= 1 && nc <= 8) {
                candidates.push([nr, nc]);
                nr += dr;
                nc += dc;
            }
        }
        return candidates;
    };

    const allCandidates = positions.map((_, i) => getCandidates(i));

    // 展开棋子的位置序列：从起点沿单位方向每秒一格，到目标即停
    const getPath = (i, target) => {
        const [r, c] = positions[i];
        const [tr, tc] = target;
        const dr = Math.sign(tr - r), dc = Math.sign(tc - c);
        const steps = Math.max(Math.abs(tr - r), Math.abs(tc - c));
        const path = [];
        for (let s = 0; s <= steps; s++) path.push([r + dr * s, c + dc * s]);
        return path;
    };

    // 逐时间步快照检查：同一时刻两子同格则无效（快照法天然允许相邻互换穿过）
    const isValid = (paths) => {
        const maxLen = Math.max(...paths.map((p) => p.length));
        for (let t = 0; t < maxLen; t++) {
            const seen = new Set();
            for (const path of paths) {
                const [r, c] = t < path.length ? path[t] : path[path.length - 1];
                const key = r * 8 + c;
                if (seen.has(key)) return false;
                seen.add(key);
            }
        }
        return true;
    };

    let count = 0;
    const chosen = [];
    const backtrack = (i) => {
        if (i === n) {
            if (isValid(chosen.map((target, idx) => getPath(idx, target)))) count++;
            return;
        }
        for (const cand of allCandidates[i]) {
            chosen.push(cand);
            backtrack(i + 1);
            chosen.pop();
        }
    };
    backtrack(0);
    return count;
};
// @lc code=end

// TEST:
console.log(countCombinations(["rook"], [[1, 1]])); // 15
console.log(countCombinations(["queen"], [[1, 1]])); // 22
console.log(countCombinations(["bishop"], [[4, 3]])); // 12
console.log(countCombinations(["rook", "rook"], [[1, 1], [8, 8]])); // 223 (225 组合中 2 个同目标同刻到达者无效)
console.log(countCombinations(["queen", "bishop"], [[5, 3], [3, 4]])); // 293
