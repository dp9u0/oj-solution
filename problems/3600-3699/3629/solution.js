/*
 * @lc app=leetcode id=3629 lang=javascript
 *
 * [3629] Minimum Jumps to Reach End via Prime Teleportation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {
    const n = nums.length;
    if (n === 1) return 0;

    let maxVal = 0;
    for (const v of nums) if (v > maxVal) maxVal = v;

    // SPF sieve
    const spf = new Int32Array(maxVal + 1);
    for (let i = 0; i <= maxVal; i++) spf[i] = i;
    for (let i = 2; i * i <= maxVal; i++) {
        if (spf[i] === i) {
            for (let j = i * i; j <= maxVal; j += i) {
                if (spf[j] === j) spf[j] = i;
            }
        }
    }

    // Build prime groups: prime -> list of indices
    const primeGroups = new Map();
    for (let j = 0; j < n; j++) {
        let x = nums[j];
        const seen = new Set();
        while (x > 1) {
            const p = spf[x];
            if (!seen.has(p)) {
                seen.add(p);
                if (!primeGroups.has(p)) primeGroups.set(p, []);
                primeGroups.get(p).push(j);
            }
            x /= p;
        }
    }

    // BFS
    const dist = new Int32Array(n).fill(-1);
    dist[0] = 0;
    const queue = [0];
    let head = 0;

    while (head < queue.length) {
        const i = queue[head++];

        for (const ni of [i - 1, i + 1]) {
            if (ni >= 0 && ni < n && dist[ni] === -1) {
                dist[ni] = dist[i] + 1;
                queue.push(ni);
            }
        }

        const val = nums[i];
        if (val >= 2 && spf[val] === val) {
            const group = primeGroups.get(val);
            if (group && group.length > 0) {
                for (const j of group) {
                    if (dist[j] === -1) {
                        dist[j] = dist[i] + 1;
                        queue.push(j);
                    }
                }
                group.length = 0;
            }
        }
    }

    return dist[n - 1];
};
// @lc code=end

// TEST:
console.log(minJumps([1,2,4,6]));          // 2
console.log(minJumps([2,3,4,7,9]));        // 2
console.log(minJumps([4,6,5,8]));          // 3
console.log(minJumps([1]));                 // 0
console.log(minJumps([7,7,7,7]));          // 1
console.log(minJumps([2,4,6,8,10]));       // 1 (prime 2 at index 0, teleport to index 4)
