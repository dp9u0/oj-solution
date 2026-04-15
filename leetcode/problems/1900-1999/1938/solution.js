/*
 * @lc app=leetcode id=1938 lang=javascript
 *
 * [1938] Maximum Genetic Difference Query
 */

// @lc code=start
/**
 * @param {number[]} parents
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxGeneticDifference = function(parents, queries) {
    const n = parents.length;
    const m = queries.length;

    // Build tree
    const children = Array.from({ length: n }, () => []);
    let root = -1;
    for (let i = 0; i < n; i++) {
        if (parents[i] === -1) root = i;
        else children[parents[i]].push(i);
    }

    // Group queries by node
    const queryMap = Array.from({ length: n }, () => []);
    for (let i = 0; i < m; i++) {
        queryMap[queries[i][0]].push([i, queries[i][1]]);
    }

    // 0-1 Trie: each node = [count, child0Idx, child1Idx]
    const trie = [[0, -1, -1]];
    const BITS = 20;

    const insert = (num) => {
        let node = 0;
        trie[node][0]++;
        for (let b = BITS - 1; b >= 0; b--) {
            const bit = (num >> b) & 1;
            if (trie[node][1 + bit] === -1) {
                trie.push([0, -1, -1]);
                trie[node][1 + bit] = trie.length - 1;
            }
            node = trie[node][1 + bit];
            trie[node][0]++;
        }
    };

    const remove = (num) => {
        let node = 0;
        trie[node][0]--;
        for (let b = BITS - 1; b >= 0; b--) {
            const bit = (num >> b) & 1;
            node = trie[node][1 + bit];
            trie[node][0]--;
        }
    };

    const query = (num) => {
        let node = 0;
        let result = 0;
        for (let b = BITS - 1; b >= 0; b--) {
            const bit = (num >> b) & 1;
            const prefer = 1 - bit;
            const child = trie[node][1 + prefer];
            if (child !== -1 && trie[child][0] > 0) {
                result |= (1 << b);
                node = child;
            } else {
                node = trie[node][1 + bit];
            }
        }
        return result;
    };

    const ans = new Array(m);

    // Iterative DFS
    const stack = [[root, false]];
    while (stack.length) {
        const [node, processed] = stack.pop();
        if (processed) {
            remove(node);
            continue;
        }
        insert(node);
        for (const [qi, val] of queryMap[node]) {
            ans[qi] = query(val);
        }
        stack.push([node, true]);
        for (let i = children[node].length - 1; i >= 0; i--) {
            stack.push([children[node][i], false]);
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxGeneticDifference([-1,0,1,1], [[0,2],[3,2],[2,5]])); // [2,3,7]
console.log(maxGeneticDifference([3,7,-1,2,0,7,0,2], [[4,6],[1,15],[0,5]])); // [6,14,7]
