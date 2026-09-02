/*
 * @lc app=leetcode.cn id=LCR 155 lang=javascript
 *
 * [LCR 155] 将二叉搜索树转化为排序的双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (!root) return null;

    let head = null;
    let prev = null;

    function inorder(cur) {
        if (!cur) return;
        inorder(cur.left);
        if (prev) {
            prev.right = cur;
            cur.left = prev;
        } else {
            head = cur; // 第一个(最小)节点
        }
        prev = cur;
        inorder(cur.right);
    }

    inorder(root);
    // 首尾相连形成循环双向链表
    head.left = prev;
    prev.right = head;
    return head;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

// 将树数组转为 Node 定义(带 left/right)
// arrayToTree 用普通对象,含 val/left/right,即可兼容
function toListArray(head) {
  if (!head) return [];
  const res = [];
  let cur = head;
  do {
    res.push(cur.val);
    cur = cur.right;
  } while (cur !== head);
  return res;
}

// 同时校验双向与循环性
function verifyDoubleCircular(head, n) {
  // 正向收集并验证节点数与是否回环
  const arr = [];
  let cur = head;
  let seen = 0;
  while (seen <= n) {
    arr.push(cur.val);
    cur = cur.right;
    seen++;
    if (cur === head) break;
  }
  if (seen !== n || cur !== head) return false;
  // 反向: 从 head.left 出发向左遍历应同样得到逆序且回到 head
  const back = [];
  cur = head.left;
  let seenB = 0;
  while (seenB <= n) {
    back.push(cur.val);
    cur = cur.left;
    seenB++;
    if (cur === head.left) break;
  }
  return seenB === n && cur === head.left;
}

// 示例 1: [4,2,5,1,3] -> 1,2,3,4,5
const h1 = treeToDoublyList(arrayToTree([4,2,5,1,3]));
console.log(JSON.stringify(toListArray(h1)) === JSON.stringify([1,2,3,4,5]));
console.log(verifyDoubleCircular(h1, 5));

// 示例 2: [2,1,3] -> 1,2,3
const h2 = treeToDoublyList(arrayToTree([2,1,3]));
console.log(JSON.stringify(toListArray(h2)) === JSON.stringify([1,2,3]));
console.log(verifyDoubleCircular(h2, 3));

// 示例 3: 空树 -> null
console.log(treeToDoublyList(arrayToTree([])) === null);

// 示例 4: 单节点 [1]
const h4 = treeToDoublyList(arrayToTree([1]));
console.log(JSON.stringify(toListArray(h4)) === JSON.stringify([1]));
console.log(h4.left === h4 && h4.right === h4); // 自循环

// 已完全左偏链: [3,2,null,1] 即 3-2-1 左链 -> 1,2,3
const h5 = treeToDoublyList(arrayToTree([3,2,null,1]));
console.log(JSON.stringify(toListArray(h5)) === JSON.stringify([1,2,3]));
console.log(verifyDoubleCircular(h5, 3));

// 负值+较大树: [-10,-3,0,5,9] 建为 BST? 直接给升序树需按 BST 构造。
// 用链表顺序输入有歧义;改用自建平衡树节点验证顺序。
function makeNode(val, left, right) { return { val, left: left || null, right: right || null }; }
// 构造 BST: 根0, 左子-10右子10(右子树再含5) -> 中序 -10,0,5,10
const root6 = makeNode(0,
  makeNode(-10),
  makeNode(10, makeNode(5), null)
);
const h6 = treeToDoublyList(root6);
console.log(JSON.stringify(toListArray(h6)) === JSON.stringify([-10,0,5,10]));
console.log(verifyDoubleCircular(h6, 4));
