/*
 * @lc app=leetcode id=3590 lang=javascript
 *
 * [3590] Kth Smallest Path XOR Sum
 */

// @lc code=start
/**
 * @param {number[]} par
 * @param {number[]} vals
 * @param {number[][]} queries
 * @return {number[]}
 */
var kthSmallest = function(par, vals, queries) {
    const n = vals.length;
    const children = Array.from({length: n}, () => []);
    for (let i = 1; i < n; i++) children[par[i]].push(i);

    const pathXor = new Array(n);
    pathXor[0] = vals[0];
    const order = [0];
    for (let i = 0; i < n; i++) {
        const u = order[i];
        for (const v of children[u]) {
            pathXor[v] = pathXor[u] ^ vals[v];
            order.push(v);
        }
    }

    // Coordinate compression
    const allVals = [...new Set(pathXor)].sort((a, b) => a - b);
    const valToIdx = new Map();
    for (let i = 0; i < allVals.length; i++) valToIdx.set(allVals[i], i);
    const m = allVals.length;

    const queryMap = new Map();
    for (let i = 0; i < queries.length; i++) {
        const [u, k] = queries[i];
        if (!queryMap.has(u)) queryMap.set(u, []);
        queryMap.get(u).push([k, i]);
    }

    // Use bitmap for each node. Each compressed value gets a bit.
    // m values -> ceil(m/32) uint32s per bitmap.
    const W = Math.ceil(m / 32);
    const sets = new Array(n);
    const sizes = new Int32Array(n);
    const result = new Array(queries.length).fill(-1);

    const setBit = (arr, bit) => {
        const w = bit >> 5;
        const mask = 1 << (bit & 31);
        if (!(arr[w] & mask)) {
            arr[w] |= mask;
            return 1;
        }
        return 0;
    };

    const mergeInto = (big, small) => {
        for (let i = 0; i < W; i++) {
            const diff = small[i] & ~big[i];
            if (diff) {
                big[i] |= small[i];
            }
        }
    };

    const countBits = (arr) => {
        let c = 0;
        for (let i = 0; i < W; i++) c += popcount32(arr[i]);
        return c;
    };

    const popcount32 = (x) => {
        x = x >>> 0;
        x = x - ((x >> 1) & 0x55555555);
        x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
        x = (x + (x >> 4)) & 0x0F0F0F0F;
        return (x * 0x01010101) >> 24;
    };

    const findKth = (arr, k) => {
        let remaining = k;
        for (let i = 0; i < W; i++) {
            const bits = arr[i] >>> 0;
            const cnt = popcount32(bits);
            if (remaining <= cnt) {
                let b = bits;
                for (let j = 0; j < remaining - 1; j++) b &= b - 1;
                const lsb = (b & -b) >>> 0;
                let bitPos = 31 - Math.clz32(lsb);
                return i * 32 + bitPos;
            }
            remaining -= cnt;
        }
        return -1;
    };

    for (let i = n - 1; i >= 0; i--) {
        const u = order[i];
        let bmp = new Uint32Array(W);
        setBit(bmp, valToIdx.get(pathXor[u]));
        let sz = 1;

        for (const v of children[u]) {
            if (sizes[v] > sz) {
                mergeInto(sets[v], bmp);
                bmp = sets[v];
            } else {
                mergeInto(bmp, sets[v]);
            }
            sets[v] = null;
            sz += sizes[v];
        }

        if (queryMap.has(u)) {
            const total = countBits(bmp);
            for (const [k, idx] of queryMap.get(u)) {
                if (k <= total) {
                    const valIdx = findKth(bmp, k);
                    result[idx] = allVals[valIdx];
                }
            }
        }

        sets[u] = bmp;
        sizes[u] = sz;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(kthSmallest([-1,0,0], [1,1,1], [[0,1],[0,2],[0,3]])) === JSON.stringify([0,1,-1]));
console.log(JSON.stringify(kthSmallest([-1,0,1], [5,2,7], [[0,1],[1,2],[1,3],[2,1]])) === JSON.stringify([0,7,-1,0]));
console.log(JSON.stringify(kthSmallest([-1,0], [1,2], [[0,1],[1,1]])) === JSON.stringify([1,3]));
console.log(JSON.stringify(kthSmallest([-1,0,0,1,1], [1,2,3,4,5], [[0,1],[0,2],[1,1],[2,1]])) === JSON.stringify([1,2,3,2]));
console.log(JSON.stringify(kthSmallest([-1], [0], [[0,1],[0,2]])) === JSON.stringify([0,-1]));
