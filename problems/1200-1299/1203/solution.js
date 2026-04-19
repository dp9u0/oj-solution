/*
 * @lc app=leetcode id=1203 lang=javascript
 *
 * [1203] Sort Items by Groups Respecting Dependencies
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
    // Assign unique groups to ungrouped items
    for (let i = 0; i < n; i++) {
        if (group[i] === -1) group[i] = m++;
    }

    const groupItems = Array.from({ length: m }, () => []);
    for (let i = 0; i < n; i++) groupItems[group[i]].push(i);

    // Build item-level and group-level DAGs
    const itemInDeg = new Int32Array(n);
    const itemAdj = Array.from({ length: n }, () => []);
    const groupInDeg = new Int32Array(m);
    const groupAdj = Array.from({ length: m }, () => []);
    const groupEdgeSet = new Set();

    for (let i = 0; i < n; i++) {
        for (const j of beforeItems[i]) {
            if (group[i] === group[j]) {
                itemAdj[j].push(i);
                itemInDeg[i]++;
            } else {
                const key = group[j] * m + group[i];
                if (!groupEdgeSet.has(key)) {
                    groupEdgeSet.add(key);
                    groupAdj[group[j]].push(group[i]);
                    groupInDeg[group[i]]++;
                }
            }
        }
    }

    // Topological sort of groups
    const sortedGroups = [];
    let head = 0;
    for (let g = 0; g < m; g++) {
        if (groupInDeg[g] === 0) sortedGroups.push(g);
    }
    while (head < sortedGroups.length) {
        const g = sortedGroups[head++];
        for (const ng of groupAdj[g]) {
            if (--groupInDeg[ng] === 0) sortedGroups.push(ng);
        }
    }
    if (sortedGroups.length !== m) return [];

    // Topological sort of items within each group
    const result = [];
    for (const g of sortedGroups) {
        const items = groupItems[g];
        const queue = [];
        let qHead = 0;
        for (const i of items) {
            if (itemInDeg[i] === 0) queue.push(i);
        }
        let count = 0;
        while (qHead < queue.length) {
            const i = queue[qHead++];
            result.push(i);
            count++;
            for (const ni of itemAdj[i]) {
                if (--itemInDeg[ni] === 0) queue.push(ni);
            }
        }
        if (count !== items.length) return [];
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sortItems(8, 2, [-1,-1,1,0,0,1,0,-1], [[],[6],[5],[6],[3,6],[],[],[]]))); // [6,3,4,5,2,0,7,1] or similar
console.log(JSON.stringify(sortItems(8, 2, [-1,-1,1,0,0,1,0,-1], [[],[6],[5],[6],[3],[],[4],[]]))); // []
console.log(JSON.stringify(sortItems(2, 1, [-1,-1], [[],[0]]))); // [0,1]
