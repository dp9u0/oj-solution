/*
 * @lc app=leetcode id=3311 lang=javascript
 *
 * [3311] Construct 2D Grid Matching Graph Layout
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var constructGridLayout = function(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    const adjSet = Array.from({ length: n }, () => new Set());
    const deg = new Uint8Array(n);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
        adjSet[u].add(v);
        adjSet[v].add(u);
        deg[u]++;
        deg[v]++;
    }

    let d4 = 0, hasDeg1 = false;
    for (let i = 0; i < n; i++) {
        if (deg[i] === 4) d4++;
        if (deg[i] <= 1) hasDeg1 = true;
    }

    let R, C;
    if (hasDeg1) { R = 1; C = n; }
    else if (d4 === 0) { R = 2; C = n / 2; }
    else {
        const S = (n - d4 + 4) / 2;
        const disc = Math.round(Math.sqrt(S * S - 4 * n));
        R = (S - disc) / 2;
        C = n / R;
        if (R > C) [R, C] = [C, R];
    }

    let corner = 0;
    for (let i = 1; i < n; i++) {
        if (deg[i] < deg[corner]) corner = i;
    }

    function tryBuild(R, C) {
        const used = new Uint8Array(n);

        if (R === 1) {
            const row = [corner];
            used[corner] = 1;
            let cur = corner;
            while (row.length < n) {
                for (const nb of adj[cur]) {
                    if (!used[nb]) {
                        row.push(nb);
                        used[nb] = 1;
                        cur = nb;
                        break;
                    }
                }
            }
            return [row];
        }

        let firstCol;
        if (R === 2) {
            let below = adj[corner].find(nb => deg[nb] === 2);
            if (below === undefined) below = adj[corner][0];
            firstCol = [corner, below];
        } else {
            for (const startNb of adj[corner]) {
                const chain = [corner, startNb];
                const vis = new Set([corner, startNb]);
                let cur = startNb;
                while (chain.length < R) {
                    let next = -1;
                    for (const nb of adj[cur]) {
                        if (!vis.has(nb) && deg[nb] <= 3) { next = nb; break; }
                    }
                    if (next === -1) break;
                    chain.push(next);
                    vis.add(next);
                    cur = next;
                }
                if (chain.length === R) { firstCol = chain; break; }
            }
            if (!firstCol) return null;
        }

        for (const node of firstCol) used[node] = 1;
        const grid = Array.from({ length: R }, () => new Array(C));
        for (let i = 0; i < R; i++) grid[i][0] = firstCol[i];

        for (let j = 1; j < C; j++) {
            for (let i = 0; i < R; i++) {
                let found = false;
                for (const nb of adj[grid[i][j - 1]]) {
                    if (!used[nb] && (i === 0 || adjSet[grid[i - 1][j]].has(nb))) {
                        grid[i][j] = nb;
                        used[nb] = 1;
                        found = true;
                        break;
                    }
                }
                if (!found) return null;
            }
        }
        return grid;
    }

    return tryBuild(R, C) || tryBuild(C, R);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(constructGridLayout(4, [[0,1],[0,2],[1,3],[2,3]])));
console.log(JSON.stringify(constructGridLayout(5, [[0,1],[1,3],[2,3],[2,4]])));
console.log(JSON.stringify(constructGridLayout(9, [[0,1],[0,4],[0,5],[1,7],[2,3],[2,4],[2,5],[3,6],[4,6],[4,7],[6,8],[7,8]])));
console.log(JSON.stringify(constructGridLayout(2, [[0,1]])));
console.log(JSON.stringify(constructGridLayout(6, [[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[4,5]])));
console.log(JSON.stringify(constructGridLayout(12, [[0,1],[0,3],[0,6],[0,8],[1,5],[1,9],[2,3],[2,10],[2,11],[3,5],[3,7],[4,6],[4,8],[5,10],[6,7],[7,11],[8,9]])));
console.log(JSON.stringify(constructGridLayout(12, [[0,2],[0,6],[0,7],[1,2],[1,7],[1,9],[1,11],[2,4],[3,7],[3,9],[3,10],[4,11],[5,6],[5,7],[5,10],[8,9],[8,11]])));
