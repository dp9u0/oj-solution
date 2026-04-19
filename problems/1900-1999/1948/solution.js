/*
 * @lc app=leetcode id=1948 lang=javascript
 *
 * [1948] Delete Duplicate Folders in System
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function(paths) {
    const root = { children: {} };
    for (const path of paths) {
        let node = root;
        for (const name of path) {
            if (!node.children[name]) node.children[name] = { children: {} };
            node = node.children[name];
        }
    }

    // Compute subtree serialization for each node
    const serialMap = new Map();

    const computeSerial = (node) => {
        const keys = Object.keys(node.children).sort();
        if (keys.length === 0) { node.serial = ''; return; }
        for (const key of keys) computeSerial(node.children[key]);
        const parts = [];
        for (const key of keys) {
            parts.push(key + '(' + (node.children[key].serial || '') + ')');
        }
        node.serial = parts.join(',');
        if (!serialMap.has(node.serial)) serialMap.set(node.serial, []);
        serialMap.get(node.serial).push(node);
    };
    computeSerial(root);

    // Find duplicate serials (appear more than once)
    const dupSerials = new Set();
    for (const [s, nodes] of serialMap) if (nodes.length > 1) dupSerials.add(s);

    // Mark duplicate nodes and all descendants
    const markDup = (node) => {
        if (node.serial && dupSerials.has(node.serial)) {
            markAll(node);
        } else {
            for (const child of Object.values(node.children)) markDup(child);
        }
    };

    const markAll = (node) => {
        node.del = true;
        for (const child of Object.values(node.children)) markAll(child);
    };

    markDup(root);

    // Collect remaining paths
    const result = [];
    for (const path of paths) {
        let node = root, ok = true;
        for (const name of path) {
            node = node.children[name];
            if (node.del) { ok = false; break; }
        }
        if (ok) result.push(path);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(deleteDuplicateFolder([["a"],["c"],["d"],["a","b"],["c","b"],["d","a"]]).sort()));
// [["d"],["d","a"]]
console.log(JSON.stringify(deleteDuplicateFolder([["a"],["c"],["a","b"],["c","b"],["a","b","x"],["a","b","x","y"],["w"],["w","y"]]).sort()));
// [["a"],["a","b"],["c"],["c","b"]]
console.log(JSON.stringify(deleteDuplicateFolder([["a","b"],["c","d"],["c"],["a"]]).sort()));
// [["a"],["a","b"],["c"],["c","d"]]
