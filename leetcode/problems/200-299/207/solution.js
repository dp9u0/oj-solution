/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const adjs = Array.from({ length: numCourses }, () => []);
    for (const [u, v] of prerequisites) {
        adjs[v].push(u);
    }
    const seen = new Set();
    const seeing = new Set();
    const dfs = (v) => {
        if (seen.has(v)) { return true; }
        if (seeing.has(v)) { return false; } // 环
        seeing.add(v);
        for (const u of adjs[v]) {
            if (!dfs(u)) { return false; } // 环
        }
        seeing.delete(v);
        seen.add(v); // canFinish
        return true;
    }
    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) { return false; }
    }
    return true;
};

// TEST:
console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))
