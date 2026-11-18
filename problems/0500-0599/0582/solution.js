/*
 * @lc app=leetcode.cn id=582 lang=javascript
 *
 * [582] 杀掉进程
 */

// @lc code=start
/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    const children = new Map();
    for (let i = 0; i < pid.length; i++) {
        if (!children.has(ppid[i])) children.set(ppid[i], []);
        children.get(ppid[i]).push(pid[i]);
    }
    const res = [];
    const stack = [kill];
    while (stack.length) {
        const p = stack.pop();
        res.push(p);
        const kids = children.get(p);
        if (kids) stack.push(...kids);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(killProcess([1, 3, 10, 5], [3, 0, 5, 3], 5))); // [5,10]
console.log(JSON.stringify(killProcess([1, 3, 10, 5], [3, 0, 5, 3], 3).sort((a, b) => a - b))); // [1,3,5,10]
console.log(JSON.stringify(killProcess([1], [0], 1))); // [1]
console.log(JSON.stringify(killProcess([1, 2, 3], [0, 1, 1], 2))); // [2]
console.log(JSON.stringify(killProcess([1, 2, 3, 4, 5], [0, 1, 1, 2, 2], 1))); // [1,2,3,4,5]
