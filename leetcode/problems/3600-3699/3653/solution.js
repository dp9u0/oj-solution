/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    const MOD = 1000000007n;
    const MOD_NUM = 1000000007;
    const n = nums.length;
    
    // Choose block size B. sqrt(100000) ~ 316. 
    // Using B = 320 is safe.
    const B = 320;
    
    const M = new Uint32Array(n);
    M.fill(1);
    
    // Flatten diff array for performance
    // diff[k][i] will be stored at k * n + i
    const diff = new Uint32Array(B * n);
    diff.fill(1);
    
    const power = function(base, exp) {
        let res = 1n;
        let b = BigInt(base) % MOD;
        let e = BigInt(exp);
        while (e > 0n) {
            if (e & 1n) res = (res * b) % MOD;
            b = (b * b) % MOD;
            e >>= 1n;
        }
        return Number(res);
    };
    
    for (let i = 0; i < queries.length; i++) {
        const l = queries[i][0];
        const r = queries[i][1];
        const k = queries[i][2];
        const v = queries[i][3];
        
        if (k >= B) {
            for (let j = l; j <= r; j += k) {
                M[j] = Number((BigInt(M[j]) * BigInt(v)) % MOD);
            }
        } else {
            const offset = k * n;
            diff[offset + l] = Number((BigInt(diff[offset + l]) * BigInt(v)) % MOD);
            
            const last = l + Math.floor((r - l) / k) * k;
            const next = last + k;
            if (next < n) {
                const inv_v = power(v, MOD_NUM - 2);
                diff[offset + next] = Number((BigInt(diff[offset + next]) * BigInt(inv_v)) % MOD);
            }
        }
    }
    
    for (let k = 1; k < B; k++) {
        const offset = k * n;
        for (let i = k; i < n; i++) {
            diff[offset + i] = Number((BigInt(diff[offset + i]) * BigInt(diff[offset + i - k])) % MOD);
        }
    }
    
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let factor = BigInt(M[i]);
        for (let k = 1; k < B; k++) {
            const offset = k * n;
            const dk = diff[offset + i];
            if (dk !== 1) {
                factor = (factor * BigInt(dk)) % MOD;
            }
        }
        
        const finalVal = Number((BigInt(nums[i]) * factor) % MOD);
        ans ^= finalVal;
    }
    
    return ans;
};

module.exports = xorAfterQueries;

// TEST:
console.log(xorAfterQueries([1,1,1], [[0,2,1,4]])); // 4
console.log(xorAfterQueries([2,3,1,5,4], [[1,4,2,3],[0,2,1,2]])); // 31
