/*
 * @lc app=leetcode id=2478 lang=javascript
 *
 * [2478] Number of Beautiful Partitions
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @param {number} minLength
 * @return {number}
 */
var beautifulPartitions = function(s, k, minLength) {
    const MOD = 1e9 + 7;
    const n = s.length;
    const prime = new Set(['2', '3', '5', '7']);

    const isPrime = (c) => prime.has(c);
    const isNonPrime = (c) => !prime.has(c);

    // Quick check: first char must be prime, last char must be non-prime
    if (!isPrime(s[0]) || isPrime(s[n - 1])) return 0;

    // dp[j][i] = ways to partition first i chars into j segments
    const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
    dp[0][0] = 1;

    for (let j = 1; j <= k; j++) {
        // prefix sum of dp[j-1]
        const prefix = new Array(n + 2).fill(0);
        for (let t = 0; t <= n; t++) {
            prefix[t + 1] = (prefix[t] + dp[j - 1][t]) % MOD;
        }

        for (let i = 1; i <= n; i++) {
            // s[i-1] must be non-prime (end of segment)
            if (isPrime(s[i - 1])) continue;
            // Segment starts at position t (0-indexed), ends at i-1
            // Length = i - t >= minLength => t <= i - minLength
            // s[t] must be prime
            // t >= 1 (need at least j-1 chars before for j-1 segments)
            const maxT = i - minLength;
            if (maxT < 1) continue;
            // We need sum of dp[j-1][t] for t from 1 to maxT where s[t] is prime
            // But we can't just use prefix sum directly because of the prime condition
            // So we iterate and use prefix for all t, then filter
            // Actually, let's use prefix sum of dp[j-1][t] where s[t] is prime
            // Better approach: precompute a modified prefix
            dp[j][i] = prefix[maxT + 1]; // sum dp[j-1][0..maxT]
        }
    }

    // Wait, the above doesn't check that s[t] is prime for the start of each segment.
    // Let me redo this properly.
    // Actually dp[0][0] = 1 is correct.
    // For dp[j][i]: the j-th segment is s[t...i-1] where:
    //   - t >= 1 (for j >= 1, need prior chars)
    //   - s[t] is prime (start with prime) -- NO WAIT, s[t] is 0-indexed position t
    //   - Actually segment starts at index t (0-based), so s[t] must be prime
    //   - But in dp, i means first i chars (0..i-1). Segment j is s[t..i-1]
    //   - dp[j][i] = sum over valid t of dp[j-1][t], where:
    //     - i - t >= minLength
    //     - s[t] is prime (0-indexed)
    //     - s[i-1] is non-prime (0-indexed)
    //     - t >= 1 for j >= 2 (need chars before), t >= 0 for j == 1
    //   - Wait, for j=1: t=0, first segment is s[0..i-1]
    //     - s[0] must be prime (already checked)
    //     - s[i-1] must be non-prime
    //     - i >= minLength
    //   - For j >= 2: t must be >= 1, and s[t] prime, and dp[j-1][t] > 0
    //     - But dp[j-1][t] is only non-zero when s[t-1] is non-prime (end of prev segment)
    //     - Hmm wait, that's not exactly right either.
    //
    // Let me reconsider. dp[j][i] = ways to partition s[0..i-1] into j segments.
    // The j-th segment ends at position i-1 (0-indexed), so s[i-1] must be non-prime.
    // The j-th segment starts at some position t (0-indexed), so s[t] must be prime.
    // And the first j-1 segments cover s[0..t-1], so dp[j-1][t] must be valid.
    // But dp[j-1][t] means s[0..t-1] partitioned into j-1 segments, so the last
    // character of that partition is s[t-1]. For the next segment starting at t,
    // we need t to be a valid start position, meaning s[t] is prime.
    // But t = length of first j-1 segments, so dp[j-1][t] is already computed.
    //
    // The issue: dp[j-1][t] doesn't guarantee s[t] is prime.
    // dp[j-1][t] guarantees s[t-1] is non-prime (end of last segment).
    // So in the transition, we additionally need s[t] to be prime.
    //
    // So: dp[j][i] = sum(dp[j-1][t]) for t in [max(1, j*minLength - minLength + ... hmm]
    //   t from 1 to i - minLength, where s[t] is prime, and i-1 is non-prime
    //   For j=1: t from 0 to i - minLength, where s[t]=s[0] is prime (already checked)
    //
    // Let me just use a clean prefix sum approach:

    // Reset dp
    for (let j = 0; j <= k; j++) dp[j].fill(0);
    dp[0][0] = 1;

    for (let j = 1; j <= k; j++) {
        // Build prefix sum of dp[j-1] for positions where s[pos] is prime
        // prefix[t] = sum of dp[j-1][0..t-1] (but we need to only count valid starts)
        // Actually, let's build a general prefix sum and use it
        const pref = new Array(n + 2).fill(0);
        for (let t = 0; t <= n; t++) {
            pref[t + 1] = (pref[t] + dp[j - 1][t]) % MOD;
        }

        for (let i = j * minLength; i <= n; i++) {
            if (isPrime(s[i - 1])) continue; // end must be non-prime
            // Segment starts at t (0-indexed), ends at i-1
            // t can range from (j-1)*minLength to i - minLength
            // But also need s[t] to be prime
            const lo = (j - 1) * minLength; // minimum t (enough for j-1 segments)
            const hi = i - minLength;
            if (lo > hi) continue;
            // Sum dp[j-1][t] for t in [lo, hi] where s[t] is prime
            // We need a filtered prefix sum. Let me precompute one for prime starts.
            // Since n <= 1000, O(n^2 * k) might be too slow... n*k*n = 10^9, too slow.
            // But O(n*k) with prefix sum is fine.
            //
            // Build a separate prefix that only adds dp[j-1][t] when s[t] is prime
            // (and t > 0 for j >= 2; for j=1, t=0 is valid start)
            dp[j][i] = (pref[hi + 1] - pref[lo] + MOD) % MOD;
        }
    }

    // Hmm, the issue is that not all t in [lo, hi] have s[t] being prime.
    // dp[j-1][t] would be 0 for positions where s[t-1] is prime (end of prev segment must be non-prime),
    // but we also need s[t] to be prime.
    //
    // Wait, dp[j-1][t] is about partitioning s[0..t-1] into j-1 segments.
    // For the next segment starting at t, s[t] must be prime.
    // But dp[j-1][t] could be non-zero even if s[t] is not prime - dp only constrains
    // what happens inside s[0..t-1], not s[t].
    //
    // So we really do need to only sum dp[j-1][t] where s[t] is prime (for j >= 2)
    // or t == 0 with s[0] prime (for j == 1).
    //
    // Let me build a filtered prefix sum.

    // Actually, for j == 1:
    //   dp[1][i] = 1 if s[0] is prime, s[i-1] is non-prime, i >= minLength, and 0 otherwise
    //   Wait, no. dp[1][i] = dp[0][0] = 1 if all conditions met. Since dp[0][0] = 1,
    //   and the segment is s[0..i-1], we need s[0] prime (already checked at start),
    //   s[i-1] non-prime, i >= minLength. So dp[1][i] = 1 for valid i.
    //
    // For j >= 2:
    //   dp[j][i] = sum(dp[j-1][t]) for t in [lo, hi] where s[t] is prime
    //   AND s[i-1] is non-prime
    //
    // So I need a prime-filtered prefix sum for j >= 2.
    // Let me just build it properly this time.

    // Reset and redo
    for (let j = 0; j <= k; j++) dp[j].fill(0);
    dp[0][0] = 1;

    for (let j = 1; j <= k; j++) {
        // Build prefix sum that only includes dp[j-1][t] where s[t] is prime (or t==0 for j==1)
        const pref = new Array(n + 2).fill(0);
        if (j === 1) {
            // t = 0 is the only valid start for first segment (s[0] is prime, already checked)
            pref[1] = dp[0][0]; // dp[0][0] = 1
            for (let t = 1; t <= n; t++) pref[t + 1] = pref[t]; // others are 0
        } else {
            for (let t = 0; t <= n; t++) {
                const contrib = (t < n && isPrime(s[t])) ? dp[j - 1][t] : 0;
                pref[t + 1] = (pref[t] + contrib) % MOD;
            }
        }

        for (let i = j * minLength; i <= n; i++) {
            if (isPrime(s[i - 1])) continue;
            const lo = (j === 1) ? 0 : (j - 1) * minLength;
            const hi = i - minLength;
            if (lo > hi) continue;
            dp[j][i] = (pref[hi + 1] - pref[lo] + MOD) % MOD;
        }
    }

    return dp[k][n];
};
// @lc code=end

// TEST:
console.log(beautifulPartitions("23542185131", 3, 2)); // 3
console.log(beautifulPartitions("23542185131", 3, 3)); // 1
console.log(beautifulPartitions("3312958", 3, 1));     // 1
