/*
 * @lc app=leetcode id=3213 lang=javascript
 *
 * [3213] Construct String with Minimum Cost
 */

// @lc code=start
/**
 * @param {string} target
 * @param {string[]} words
 * @param {number[]} costs
 * @return {number}
 */
var minimumCost = function(target, words, costs) {
    const n = target.length;

    // Compute total word length for trie sizing
    let totalLen = 0;
    for (const w of words) totalLen += w.length;
    const maxNodes = totalLen + 1;

    // Flat trie: next[node * 26 + c]
    const next = new Int32Array(maxNodes * 26).fill(-1);
    const fail = new Int32Array(maxNodes);
    const ol = new Int32Array(maxNodes).fill(-1); // output link
    const wCost = new Int32Array(maxNodes).fill(100000001);
    const wLen = new Int32Array(maxNodes);
    let nc = 1; // node count, node 0 = root

    // Insert words into trie
    for (let i = 0; i < words.length; i++) {
        let node = 0;
        for (let j = 0; j < words[i].length; j++) {
            const c = words[i].charCodeAt(j) - 97;
            const idx = node * 26 + c;
            if (next[idx] === -1) next[idx] = nc++;
            node = next[idx];
        }
        if (costs[i] < wCost[node]) {
            wCost[node] = costs[i];
            wLen[node] = words[i].length;
        }
    }

    // BFS: build fail links and output links
    const queue = new Int32Array(nc);
    let head = 0, tail = 0;

    for (let c = 0; c < 26; c++) {
        const idx = c;
        if (next[idx] !== -1) {
            fail[next[idx]] = 0;
            queue[tail++] = next[idx];
        } else {
            next[idx] = 0;
        }
    }

    while (head < tail) {
        const u = queue[head++];
        for (let c = 0; c < 26; c++) {
            const idx = u * 26 + c;
            const v = next[idx];
            if (v !== -1) {
                fail[v] = next[fail[u] * 26 + c];
                ol[v] = wCost[fail[v]] < 100000001 ? fail[v] : ol[fail[v]];
                queue[tail++] = v;
            } else {
                next[idx] = next[fail[u] * 26 + c];
            }
        }
    }

    // DP
    const dp = new Int32Array(n + 1).fill(1000000001);
    dp[0] = 0;

    let state = 0;
    for (let i = 0; i < n; i++) {
        state = next[state * 26 + (target.charCodeAt(i) - 97)];

        let node = state;
        while (node > 0) {
            if (wCost[node] < 100000001) {
                const L = wLen[node];
                dp[i + 1] = Math.min(dp[i + 1], dp[i + 1 - L] + wCost[node]);
            }
            node = ol[node];
            if (node <= 0) break;
        }
    }

    return dp[n] >= 1000000001 ? -1 : dp[n];
};
// @lc code=end

// TEST:
console.log(minimumCost("abcdef", ["abdef","abc","d","def","ef"], [100,1,1,10,5])); // 7
console.log(minimumCost("aaaa", ["z","zz","zzz"], [1,10,100])); // -1
console.log(minimumCost("abc", ["a","b","c"], [1,2,3])); // 6
console.log(minimumCost("a", ["a"], [5])); // 5
console.log(minimumCost("abcd", ["ab","cd","abcd"], [3,4,10])); // 7
