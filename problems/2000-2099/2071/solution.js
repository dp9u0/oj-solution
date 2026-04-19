/*
 * @lc app=leetcode id=2071 lang=javascript
 *
 * [2071] Maximum Number of Tasks You Can Assign
 */

// @lc code=start
/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function(tasks, workers, pills, strength) {
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => a - b);
    const n = tasks.length, m = workers.length;

    // Check if we can complete k tasks
    const canDo = (k) => {
        if (k === 0) return true;
        if (k > m) return false;
        // Take k easiest tasks and k strongest workers
        const t = tasks.slice(0, k);
        const w = workers.slice(m - k);
        let remaining = pills;
        // Greedy: process tasks from hardest to easiest
        // Use a sorted list approach - for each task, try to assign without pill first
        // If not possible, use pill on the weakest worker who can handle it with pill
        const ws = []; // sorted available workers
        for (const worker of w) ws.push(worker);
        ws.sort((a, b) => a - b);

        for (let i = k - 1; i >= 0; i--) {
            const task = t[i];
            // Try without pill: strongest available worker
            if (ws[ws.length - 1] >= task) {
                ws.pop();
            } else {
                // Need pill: find weakest worker who can do it with pill
                if (remaining <= 0) return false;
                // Binary search for smallest worker >= task - strength
                const need = task - strength;
                let lo = 0, hi = ws.length;
                while (lo < hi) {
                    const mid = (lo + hi) >> 1;
                    if (ws[mid] >= need) hi = mid;
                    else lo = mid + 1;
                }
                if (lo === ws.length) return false;
                ws.splice(lo, 1);
                remaining--;
            }
        }
        return true;
    };

    let lo = 0, hi = Math.min(n, m);
    while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (canDo(mid)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(maxTaskAssign([3,2,1], [0,3,3], 1, 1));           // 3
console.log(maxTaskAssign([5,4], [0,0,0], 1, 5));             // 1
console.log(maxTaskAssign([10,15,30], [0,10,10,10,10], 3, 10)); // 2
console.log(maxTaskAssign([1], [1], 0, 1));                    // 1
