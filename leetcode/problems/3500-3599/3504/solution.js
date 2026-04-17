/*
 * @lc app=leetcode id=3504 lang=javascript
 *
 * [3504] Longest Palindrome After Substring Concatenation II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var longestPalindrome = function(s, t) {
    const n = s.length, m = t.length;
    const rt = t.split('').reverse().join('');

    // lcp[i][j] = LCP of s[i..] and rt[j..]
    const lcp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            lcp[i][j] = s[i] === rt[j] ? lcp[i + 1][j + 1] + 1 : 0;
        }
    }

    // Longest palindrome in s alone
    let best = 1;
    for (let c = 0; c < n; c++) {
        let l = c, r = c;
        while (l >= 0 && r < n && s[l] === s[r]) { best = Math.max(best, r - l + 1); l--; r++; }
        l = c; r = c + 1;
        while (l >= 0 && r < n && s[l] === s[r]) { best = Math.max(best, r - l + 1); l--; r++; }
    }
    // Longest palindrome in t alone
    for (let c = 0; c < m; c++) {
        let l = c, r = c;
        while (l >= 0 && r < m && t[l] === t[r]) { best = Math.max(best, r - l + 1); l--; r++; }
        l = c; r = c + 1;
        while (l >= 0 && r < m && t[l] === t[r]) { best = Math.max(best, r - l + 1); l--; r++; }
    }

    // Concatenation: s_sub + t_sub
    // t_sub reversed = rt_sub. We need s_sub to match reversed(t_sub).
    // Enumerate center in s and center in rt
    // Odd length total: s[i-L..i-1] + s[i..i] + ... but s part is prefix, t part is suffix
    // Better: enumerate all split points. For the s-part ending at si, the t-part starts from some tj in reversed(t).
    // Actually: enumerate center expansion.

    // For each possible matching length L between s[i..i+L-1] and rt[j..j+L-1]:
    // s contributes s[i..i+L-1], t contributes t[m-1-j..m-1-(j+L-1)] (reversed segment of t)
    // This gives a prefix-suffix match of length L. We can add a palindromic middle in s or t.

    // Enumerate center between s and rt parts
    // Center in s: odd palindrome centered at sc, extending into rt
    for (let sc = 0; sc < n; sc++) {
        for (let rj = 0; rj < m; rj++) {
            // Expand from center sc in s to left, and match rt[rj..] going right
            let L = lcp[sc + 1][rj]; // s[sc+1..] matches rt[rj..]
            if (L === undefined) L = lcp[sc + 1] ? lcp[sc + 1][rj] : 0;
            if (sc + 1 > n) L = 0;
            const actualL = Math.min(L, sc + 1); // can only use up to sc+1 chars from s left side... no
            // Actually: s_sub = s[sc-L+1..sc] (matched), center = s[sc], t_sub from rt[rj..rj+L-1]
            // Hmm, let me rethink.
            // Total palindrome = left_s + center + right_t
            // where left_s is reversed of right_t.
            // left_s comes from s (prefix), right_t comes from t (suffix).
            // If center is in s: palin_s centered at sc, then left of sc in s + matched suffix in t
            // palin in s centered at sc with radius r means s[sc-r..sc+r] is palindrome
            // then s[sc-r..sc-1] must match some suffix of t reversed.
            // So we match s[sc-r..sc-1] with rt[j..] for some j.
            // But this gets complex. Let me use a simpler approach.
        }
    }

    // Simpler O(n^2) approach: enumerate all possible palindromes
    // For concatenation s_sub + t_sub to be palindrome:
    // s_sub = reverse(t_sub)
    // OR s_sub = reverse(t_sub_prefix) + some_palindrome_suffix_in_s
    // OR some_palindrome_prefix_in_t + reverse(t_sub_suffix)

    // Actually the cleanest: enumerate the "gap" between s and t contributions.
    // The palindrome = A + B where A from s, B from t.
    // Case 1: |A| = |B|, A = reverse(B). Match s ending at si with rt starting at rj.
    // Case 2: |A| > |B|, A = reverse(B) + middle_palindrome_in_s.
    // Case 3: |B| > |A|, middle_palindrome_in_t + A = reverse(B).

    // Let's just enumerate: for each pair (si, rj), lcp[si][rj] gives matched length.
    // Then try to extend with palindrome center in s or t.

    // Center in s after matching:
    // s[si..si+L-1] matches rt[rj..rj+L-1]. s_sub = s[si..si+L-1].
    // Then we can add a palindromic extension in s going left from si-1.
    // For each si, find max palindrome centered at si-0.5 (even) or si-1 (odd) extending left, plus lcp[si][rj].

    // Let me just do O(n^2 * 2) enumeration:
    // For center in s (palindromic part entirely in s, plus matched t suffix):
    // palinRad[si] = max palindrome radius centered at position between si-1 and si (or at si)
    // Then total = 2 * lcp[si][rj] + palinRad

    // Precompute for s: for each gap position (including before 0 and after n),
    // the max palindrome that extends from that gap going leftward (into s).

    // OK this is getting complicated. Let me just do the O(n^2) brute for n,m <= 1000.
    // Enumerate all substrings of s and all substrings of t, check if concat is palindrome.
    // That's O(n^2 * m^2 * (n+m)) which is too slow.

    // Better O(n^2): precompute LCP table, then for each center type, expand.
    // Let me implement the standard solution for this problem.

    // The key insight: the concatenated palindrome has the form:
    // matched_prefix_from_s + middle_palindrome + matched_suffix_from_t_reversed
    // where matched parts have equal length.

    // For each position in s and each position in rt, lcp[i][j] tells us how much they match.
    // The "middle" palindrome can be:
    // 1. In s: centered after position si+lcp_length-1
    // 2. In t: centered before position rj+lcp_length-1 (in reversed t)
    // 3. Empty (si + rj perfectly match)

    // Precompute palindrome radii for s and t
    // sRad[i] = max odd palindrome radius at center i
    // sRadEven[i] = max even palindrome radius between i-1 and i

    // For each (si, rj) pair with lcp = L:
    // Palindrome = s[si..si+L-1] + middle_in_s + reverse(rt[rj..rj+L-1])
    // where middle_in_s is a palindrome in s starting at si+L
    // OR middle_in_t is a palindrome in t ending at m-1-rj

    // Total length = 2*L + max_palindrome_starting_at(si+L) or max_palindrome_ending_at(m-1-(rj+L-1)-1)

    // Precompute: maxPalFrom[i] = longest palindrome starting at position i in s
    // maxPalTo[j] = longest palindrome ending at position j in t (in original t)

    // Precompute max palindrome starting at each position in s
    const maxPalStartS = new Uint16Array(n + 1);
    for (let i = n - 1; i >= 0; i--) {
        maxPalStartS[i] = 1; // single char
        if (i + 1 < n && s[i] === s[i + 1]) maxPalStartS[i] = Math.max(maxPalStartS[i], 2);
        // extend odd
        for (let r = 1; i - r >= 0 && i + r < n && s[i - r] === s[i + r]; r++) {
            // palindrome s[i-r..i+r], starts at i-r
        }
        // We need: for each start position, what's the longest palindrome starting there?
        maxPalStartS[i] = 1;
    }
    for (let c = 0; c < n; c++) {
        let l = c, r = c;
        while (l >= 0 && r < n && s[l] === s[r]) {
            maxPalStartS[l] = Math.max(maxPalStartS[l], r - l + 1);
            l--; r++;
        }
        l = c; r = c + 1;
        while (l >= 0 && r < n && s[l] === s[r]) {
            maxPalStartS[l] = Math.max(maxPalStartS[l], r - l + 1);
            l--; r++;
        }
    }

    // Precompute max palindrome ending at each position in t
    const maxPalEndT = new Uint16Array(m + 1);
    for (let c = 0; c < m; c++) {
        let l = c, r = c;
        while (l >= 0 && r < m && t[l] === t[r]) {
            maxPalEndT[r] = Math.max(maxPalEndT[r], r - l + 1);
            l--; r++;
        }
        l = c; r = c + 1;
        while (l >= 0 && r < m && t[l] === t[r]) {
            maxPalEndT[r] = Math.max(maxPalEndT[r], r - l + 1);
            l--; r++;
        }
    }

    // Now enumerate all (si, rj)
    for (let si = 0; si < n; si++) {
        for (let rj = 0; rj < m; rj++) {
            const L = lcp[si][rj];
            if (L === 0) continue;
            // s contributes s[si..si+L-1], t contributes t[m-1-rj-L+1..m-1-rj]
            // Middle palindrome in s starting at si+L:
            const midS = maxPalStartS[si + L] || 0;
            // Middle palindrome in t ending at m-1-rj-L:
            const tEnd = m - 1 - rj - L;
            const midT = tEnd >= 0 ? maxPalEndT[tEnd] : 0;

            best = Math.max(best, 2 * L + midS, 2 * L + midT);
        }
    }

    return best;
};
// @lc code=end

// TEST:
console.log(longestPalindrome("a", "a")); // 2
console.log(longestPalindrome("abc", "def")); // 1
console.log(longestPalindrome("b", "aaaa")); // 4
console.log(longestPalindrome("abcde", "ecdba")); // 5
console.log(longestPalindrome("a", "b")); // 1
console.log(longestPalindrome("aa", "aa")); // 4
