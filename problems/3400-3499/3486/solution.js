/*
 * @lc app=leetcode id=3486 lang=javascript
 *
 * [3486] Longest Special Path II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} nums
 * @return {number[]}
 */
var longestSpecialPath = function(edges, nums) {
    const n = nums.length;
    const adj = Array.from({length: n}, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    let maxLen = 0, minNodes = n + 1;
    const occ = new Map();
    const pathDist = [0];
    let left = 0, dupVal = -1;

    const stk = [{ u: 0, p: -1, ci: 0, sL: 0, sD: -1, done: false }];

    while (stk.length) {
        const f = stk[stk.length - 1];

        if (!f.done) {
            f.done = true;
            f.sL = left;
            f.sD = dupVal;

            const d = pathDist.length - 1;
            const v = nums[f.u];
            if (!occ.has(v)) occ.set(v, []);
            const a = occ.get(v);
            a.push(d);

            if (a.length >= 3) left = Math.max(left, a[a.length - 3] + 1);
            if (a.length >= 2 && a[a.length - 2] >= left) {
                if (dupVal !== -1 && dupVal !== v) {
                    const da = occ.get(dupVal);
                    const dupFirst = da[da.length - 2];
                    const newFirst = a[a.length - 2];
                    if (newFirst < dupFirst) {
                        left = Math.max(left, newFirst + 1);
                    } else {
                        left = Math.max(left, dupFirst + 1);
                        dupVal = v;
                    }
                } else {
                    dupVal = v;
                }
            }
            if (dupVal !== -1) {
                const da = occ.get(dupVal);
                if (da.length < 2 || da[da.length - 2] < left) dupVal = -1;
            }

            const dist = pathDist[d] - pathDist[left];
            const cnt = d - left + 1;
            if (dist > maxLen || (dist === maxLen && cnt < minNodes)) {
                maxLen = dist;
                minNodes = cnt;
            }
        }

        let found = false;
        while (f.ci < adj[f.u].length) {
            const [ch, w] = adj[f.u][f.ci++];
            if (ch !== f.p) {
                pathDist.push(pathDist[pathDist.length - 1] + w);
                stk.push({ u: ch, p: f.u, ci: 0, sL: 0, sD: -1, done: false });
                found = true;
                break;
            }
        }

        if (!found) {
            occ.get(nums[f.u]).pop();
            pathDist.pop();
            left = f.sL;
            dupVal = f.sD;
            stk.pop();
        }
    }

    return [maxLen, minNodes];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(longestSpecialPath([[0,1,1],[1,2,3],[1,3,1],[2,4,6],[4,7,2],[3,5,2],[3,6,5],[6,8,3]],[1,1,0,3,1,2,1,1,0]))); // [9,3]
console.log(JSON.stringify(longestSpecialPath([[1,0,3],[0,2,4],[0,3,5]],[1,1,0,2]))); // [5,2]
console.log(JSON.stringify(longestSpecialPath([[0,1,2],[1,2,3]],[1,2,3]))); // [5,3]
console.log(JSON.stringify(longestSpecialPath([[0,1,1],[1,2,1]],[1,1,1]))); // [1,2]
console.log(JSON.stringify(longestSpecialPath([[0,1,1]],[1,2]))); // [1,2]
console.log(JSON.stringify(longestSpecialPath([[0,1,5],[0,2,3]],[1,2,1]))); // [5,2] or [3,2]
console.log(JSON.stringify(longestSpecialPath([[2,1,7],[0,3,10],[4,0,3],[1,5,5],[4,1,5],[4,6,1]],[2,4,2,2,4,4,1]))); // [12,3]
