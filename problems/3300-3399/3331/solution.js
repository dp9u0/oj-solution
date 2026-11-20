/*
 * @lc app=leetcode.cn id=3331 lang=javascript
 *
 * [3331] 修改后子树的大小
 */

// @lc code=start
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function(parent, s) {
    const n = parent.length;
    const children = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) children[parent[i]].push(i);

    const newParent = parent.slice();
    const last = new Int32Array(26).fill(-1); // 每个字符在当前祖先链上最近出现的节点
    const preorder = [];

    // 迭代 DFS：栈元素 [node, isLeave, savedVal]
    const stack = [[0, 0, -1]];
    while (stack.length) {
        const [x, leave, saved] = stack.pop();
        const c = s.charCodeAt(x) - 97;
        if (leave) {
            last[c] = saved;
            continue;
        }
        preorder.push(x);
        const anc = last[c]; // 最近同字符祖先（基于原树）
        if (anc !== -1) newParent[x] = anc;
        stack.push([x, 1, last[c]]);
        last[c] = x;
        for (const child of children[x]) stack.push([child, 0, -1]);
    }

    // 新父亲是原树上的祖先，必在 preorder 中先出现，逆序累加子树大小
    const size = new Array(n).fill(1);
    for (let i = n - 1; i >= 1; i--) {
        const x = preorder[i];
        size[newParent[x]] += size[x];
    }
    return size;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 0, 1, 1, 1], "abaabc"))); // [6,3,1,1,1,1]
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 4, 0, 1], "abbba"))); // [5,2,1,1,1]
console.log(JSON.stringify(findSubtreeSizes([-1], "a"))); // [1]
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 1, 2], "aaaa"))); // [4,3,2,1]
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 1, 2], "abab"))); // [4,2,1,1]
console.log(JSON.stringify(findSubtreeSizes([-1, 0, 1, 2, 3], "abcda"))); // [5,3,2,1,1]
