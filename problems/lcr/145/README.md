# [LCR 145] 判断对称二叉树

## Description


```md
https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/description/
* algorithms
* Easy (57.57%)
* Likes:    486
* Dislikes: -
* Testcase Example:  '[6,7,7,8,9,9,8]'
请设计一个函数判断一棵二叉树是否 轴对称 。

示例 1：
输入：root = [6,7,7,8,9,9,8]
输出：true
解释：从图中可看出树是轴对称的。
示例 2：
输入：root = [1,2,2,null,3,null,3]
输出：false
解释：从图中可看出最后一层的节点不对称。

提示：
0 <= 节点个数 <= 1000
注意：本题与主站 101 题相同：https://leetcode.cn/problems/symmetric-tree/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Determine whether a binary tree is **symmetric** around its center (mirror).

**Example:** `[6,7,7,8,9,9,8]` → true.

**Constraints:** ≤ 1000 nodes. Note: same as LeetCode 101.

---

## Approach

`mirror(a,b)`: both null → true; one null → false; values equal and `mirror(a.left,b.right)` && `mirror(a.right,b.left)`. Answer mirror(root.left, root.right).

Complexity: `O(n)`.
