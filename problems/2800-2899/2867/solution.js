/*
 * @lc app=leetcode id=2867 lang=javascript
 *
 * [2867] Count Valid Paths in a Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPaths = function(n, edges) {
    // Sieve of Eratosthenes
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Build adjacency list
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // Find connected components of non-prime nodes
    const comp = new Array(n + 1).fill(-1);
    const compSizes = [];
    const compPrimes = [];

    for (let i = 1; i <= n; i++) {
        if (!isPrime[i] && comp[i] === -1) {
            const cid = compSizes.length;
            const queue = [i];
            comp[i] = cid;
            const primes = new Set();
            let size = 0;
            let front = 0;
            while (front < queue.length) {
                const node = queue[front++];
                size++;
                for (const nb of adj[node]) {
                    if (isPrime[nb]) {
                        primes.add(nb);
                    } else if (comp[nb] === -1) {
                        comp[nb] = cid;
                        queue.push(nb);
                    }
                }
            }
            compSizes.push(size);
            compPrimes.push(primes);
        }
    }

    // Map prime -> list of adjacent component ids
    const primeComps = Array.from({ length: n + 1 }, () => []);
    for (let cid = 0; cid < compSizes.length; cid++) {
        for (const p of compPrimes[cid]) {
            primeComps[p].push(cid);
        }
    }

    // For each prime, compute contribution
    let result = 0;
    for (let p = 2; p <= n; p++) {
        if (!isPrime[p]) continue;
        const comps = primeComps[p];
        let S = 0, sumSq = 0;
        for (const cid of comps) {
            const d = compSizes[cid];
            S += d;
            sumSq += d * d;
        }
        result += S + (S * S - sumSq) / 2;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countPaths(5, [[1,2],[1,3],[2,4],[2,5]])); // 4
console.log(countPaths(6, [[1,2],[1,3],[2,4],[3,5],[3,6]])); // 6
console.log(countPaths(1, [])); // 0
console.log(countPaths(2, [[1,2]])); // 1
console.log(countPaths(7, [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]])); // 6
