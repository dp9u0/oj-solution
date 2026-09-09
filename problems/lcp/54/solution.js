/*
 * @lc app=leetcode.cn id=LCP 54 lang=javascript
 *
 * [LCP 54] 夺回据点
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @param {number[][]} roads
 * @return {number}
 */
var minimumCost = function(cost, roads) {
    const n = cost.length;
    if (n === 1) return cost[0];
    const adj = Array.from({ length: n }, () => []);
    for (const [x, y] of roads) { adj[x].push(y); adj[y].push(x); }
    // iterative Tarjan: articulation points + biconnected components (edge stack)
    const disc = new Int32Array(n).fill(-1), low = new Int32Array(n);
    const isArt = new Uint8Array(n);
    const blocks = [];
    const edgeStack = [];
    let timer = 0;
    const stack = [];
    for (let root = 0; root < n; root++) {
        if (disc[root] !== -1) continue;
        let rootChildren = 0;
        disc[root] = low[root] = timer++;
        stack.push([root, -1, 0]);
        while (stack.length) {
            const fr = stack[stack.length - 1];
            const v = fr[0], parent = fr[1];
            if (fr[2] < adj[v].length) {
                const w = adj[v][fr[2]++];
                if (w === parent) continue;
                if (disc[w] === -1) {
                    edgeStack.push([v, w]);
                    disc[w] = low[w] = timer++;
                    if (v === root) rootChildren++;
                    stack.push([w, v, 0]);
                } else if (disc[w] < disc[v]) {
                    edgeStack.push([v, w]);
                    if (disc[w] < low[v]) low[v] = disc[w];
                }
            } else {
                stack.pop();
                if (parent !== -1) {
                    if (low[v] < low[parent]) low[parent] = low[v];
                    if (low[v] >= disc[parent]) {
                        if (parent !== root) isArt[parent] = 1;
                        const vs = new Set();
                        while (true) {
                            const e = edgeStack.pop();
                            vs.add(e[0]);
                            vs.add(e[1]);
                            if (e[0] === parent && e[1] === v) break;
                        }
                        blocks.push([...vs]);
                    }
                }
            }
        }
        if (rootChildren >= 2) isArt[root] = 1;
    }
    if (blocks.length === 1) {
        let mn = Infinity;
        for (let i = 0; i < n; i++) mn = Math.min(mn, cost[i]);
        return mn;
    }
    let total = 0, exempt = 0; // exempt: the leaf block dismantled last, largest minimum
    for (const blk of blocks) {
        let artCount = 0, mn = Infinity;
        for (const u of blk) {
            if (isArt[u]) artCount++;
            else mn = Math.min(mn, cost[u]);
        }
        if (artCount !== 1) continue; // only leaf blocks pay
        total += mn;
        if (mn > exempt) exempt = mn;
    }
    return total - exempt;
};
// @lc code=end

// TEST:
// exact brute force: subset of paid vertices + DFS peel over all orders
const bruteCost = (cost, roads) => {
    const n = cost.length;
    const adj = Array(n).fill(0);
    for (const [x, y] of roads) { adj[x] |= 1 << y; adj[y] |= 1 << x; }
    const connected = (mask) => {
        if (mask === 0) return true;
        let start = 0;
        while (!(mask >> start & 1)) start++;
        let seen = 1 << start;
        const st = [start];
        while (st.length) {
            const cand = adj[st.pop()] & mask & ~seen;
            for (let i = 0; i < n; i++) if (cand >> i & 1) { seen |= 1 << i; st.push(i); }
        }
        return seen === mask;
    };
    const canPeel = (removed, remaining) => {
        if (remaining === 0) return true;
        for (let v = 0; v < n; v++) {
            if (!(remaining >> v & 1) || !(adj[v] & removed)) continue;
            const rem2 = remaining & ~(1 << v);
            if (connected(rem2) && canPeel(removed | (1 << v), rem2)) return true;
        }
        return false;
    };
    let best = Infinity;
    for (let s0 = 1; s0 < (1 << n); s0++) {
        const rest = ~s0 & ((1 << n) - 1);
        if (!connected(rest)) continue;
        let c = 0;
        for (let i = 0; i < n; i++) if (s0 >> i & 1) c += cost[i];
        if (c >= best) continue;
        if (canPeel(s0, rest)) best = c;
    }
    return best;
};
console.log(minimumCost([1, 2, 3, 4, 5, 6], [[0, 1], [0, 2], [1, 3], [2, 3], [1, 2], [2, 4], [2, 5]]) === 6);
console.log(minimumCost([3, 2, 1, 4], [[0, 2], [2, 3], [3, 1]]) === 2);
console.log(minimumCost([5], []) === 5);
console.log(minimumCost([7, 3], [[0, 1]]) === 3);
console.log(minimumCost([1, 2, 3], [[0, 1], [1, 2]]) === 1); // path: pendant pendants, exempt larger
// randomized cross-check on connected simple graphs
let seed = 4242;
const rnd = (n) => { seed = (seed * 16807) % 2147483647; return seed % n; };
let allOk = true;
for (let t = 0; t < 200; t++) {
    const n = 1 + rnd(6);
    const edges = [];
    const seen = new Set();
    for (let i = 1; i < n; i++) { // random spanning tree
        const j = rnd(i);
        edges.push([j, i]);
        seen.add(j + ',' + i);
    }
    const extra = n < 3 ? 0 : rnd(4);
    for (let e = 0; e < extra; e++) { // random extra edges
        let x, y, tries = 0;
        do { x = rnd(n); y = rnd(n); } while ((x === y || seen.has(Math.min(x, y) + ',' + Math.max(x, y))) && ++tries < 50);
        if (tries >= 50) break;
        seen.add(Math.min(x, y) + ',' + Math.max(x, y));
        edges.push([Math.min(x, y), Math.max(x, y)]);
    }
    const cost = Array.from({ length: n }, () => 1 + rnd(9));
    const a = minimumCost(cost, edges), b = bruteCost(cost, edges);
    if (a !== b) { allOk = false; console.log('MISMATCH', JSON.stringify(cost), JSON.stringify(edges), a, b); }
}
console.log(allOk);
