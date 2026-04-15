/*
 * @lc app=leetcode id=1916 lang=javascript
 *
 * [1916] Count Ways to Build Rooms in an Ant Colony
 */

// @lc code=start
/**
 * @param {number[]} prevRoom
 * @return {number}
 */
var waysToBuildRooms = function(prevRoom) {
    const MOD = 1e9 + 7;
    const BMOD = BigInt(MOD);
    const n = prevRoom.length;

    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        children[prevRoom[i]].push(i);
    }

    // Precompute factorials and inverse factorials
    const fact = new Array(n + 1);
    const invFact = new Array(n + 1);
    fact[0] = 1;
    for (let i = 1; i <= n; i++) {
        fact[i] = Number(BigInt(fact[i - 1]) * BigInt(i) % BMOD);
    }

    const modPow = (base, exp) => {
        let result = 1n;
        let b = BigInt(base);
        let e = BigInt(exp);
        while (e > 0n) {
            if (e & 1n) result = result * b % BMOD;
            b = b * b % BMOD;
            e >>= 1n;
        }
        return Number(result);
    };
    invFact[n] = modPow(fact[n], MOD - 2);
    for (let i = n - 1; i >= 0; i--) {
        invFact[i] = Number(BigInt(invFact[i + 1]) * BigInt(i + 1) % BMOD);
    }

    const sz = new Int32Array(n);
    const ways = new Array(n).fill(1);

    // Iterative post-order DFS
    const stack = [0];
    const order = [];
    while (stack.length) {
        const u = stack.pop();
        order.push(u);
        for (const v of children[u]) stack.push(v);
    }

    // Process in reverse (post-order)
    for (let i = order.length - 1; i >= 0; i--) {
        const u = order[i];
        sz[u] = 1;
        let res = 1;
        for (const v of children[u]) {
            sz[u] += sz[v];
            res = Number(BigInt(res) * BigInt(invFact[sz[v]]) % BMOD * BigInt(ways[v]) % BMOD);
        }
        ways[u] = Number(BigInt(fact[sz[u] - 1]) * BigInt(res) % BMOD);
    }

    return ways[0];
};
// @lc code=end

// TEST:
console.log(waysToBuildRooms([-1,0,1])); // 1
console.log(waysToBuildRooms([-1,0,0,1,2])); // 6
