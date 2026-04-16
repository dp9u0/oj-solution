/*
 * @lc app=leetcode id=2092 lang=javascript
 *
 * [2092] Find All People With Secret
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
    const secret = new Uint8Array(n);
    secret[0] = 1;
    secret[firstPerson] = 1;

    meetings.sort((a, b) => a[2] - b[2]);

    let i = 0;
    while (i < meetings.length) {
        const time = meetings[i][2];
        const edges = [];
        const people = new Set();
        while (i < meetings.length && meetings[i][2] === time) {
            edges.push([meetings[i][0], meetings[i][1]]);
            people.add(meetings[i][0]);
            people.add(meetings[i][1]);
            i++;
        }

        const adj = new Map();
        for (const [x, y] of edges) {
            if (!adj.has(x)) adj.set(x, []);
            if (!adj.has(y)) adj.set(y, []);
            adj.get(x).push(y);
            adj.get(y).push(x);
        }

        const queue = [];
        for (const p of people) {
            if (secret[p]) queue.push(p);
        }
        let head = 0;
        while (head < queue.length) {
            const u = queue[head++];
            for (const v of (adj.get(u) || [])) {
                if (!secret[v]) {
                    secret[v] = 1;
                    queue.push(v);
                }
            }
        }
    }

    const result = [];
    for (let j = 0; j < n; j++) {
        if (secret[j]) result.push(j);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findAllPeople(6, [[1,2,5],[2,3,8],[1,5,10]], 1))); // [0,1,2,3,5]
console.log(JSON.stringify(findAllPeople(4, [[3,1,3],[1,2,2],[0,3,3]], 3))); // [0,1,3]
console.log(JSON.stringify(findAllPeople(5, [[3,4,2],[1,2,1],[2,3,1]], 1))); // [0,1,2,3,4]
console.log(JSON.stringify(findAllPeople(3, [[1,2,1],[2,0,2]], 1))); // [0,1,2]
console.log(JSON.stringify(findAllPeople(4, [[0,2,1],[1,2,2],[2,3,3]], 2))); // [0,1,2,3]
