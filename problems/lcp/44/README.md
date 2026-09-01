# [LCP 44] 开幕式焰火

## Description


```md
https://leetcode.cn/problems/sZ59z6/description/
* algorithms
* Easy (81.40%)
* Likes:    51
* Dislikes: -
* Testcase Example:  '[1,3,2,1,null,2]'
「力扣挑战赛」开幕式开始了，空中绽放了一颗二叉树形的巨型焰火。
给定一棵二叉树 `root` 代表焰火，节点值表示巨型焰火这一位置的颜色种类。请帮小扣计算巨型焰火有多少种不同的颜色。
**示例 1：**
>输入：`root = [1,3,2,1,null,2]`
>
>输出：`3`
>
>解释：焰火中有 3 个不同的颜色，值分别为 1、2、3
**示例 2：**
>输入：`root = [3,3,3]`
>
>输出：`1`
>
>解释：焰火中仅出现 1 个颜色，值为 3
**提示：**
- `1 <= 节点个数 <= 1000`
- `1 <= Node.val <= 1000`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The "LeetCode Challenge" opening ceremony has begun, and a giant binary-tree-shaped firework blooms in the sky.

Given a binary tree `root` representing the firework, where each node value represents the color type at that position of the giant firework. Please help calculate how many different colors the giant firework has.

Example 1:
```
Input: root = [1,3,2,1,null,2]
Output: 3
Explanation: There are 3 different colors in the firework: 1, 2, and 3.
```

Example 2:
```
Input: root = [3,3,3]
Output: 1
Explanation: Only 1 color appears, value 3.
```

Constraints:
- `1 <= number of nodes <= 1000`
- `1 <= Node.val <= 1000`

---

## Approach

This is a straightforward tree traversal problem: count the number of distinct node values in the binary tree.

Use a `Set` to collect every node value while doing a DFS traversal. The answer is the size of the set.

Time: O(n), Space: O(n).
