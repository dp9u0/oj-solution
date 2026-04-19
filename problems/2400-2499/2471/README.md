# [2471] Minimum Number of Operations to Sort a Binary Tree by Level

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/description/)

* algorithms
* Medium (74.23%)
* Likes:    1252
* Dislikes: 45
* Testcase Example:  '[1,4,3,7,6,8,5,null,null,null,null,9,null,10]'

```md
You are given the root of a binary tree with unique values.
In one operation, you can choose any two nodes at the same level and swap their values.
Return the minimum number of operations needed to make the values at each level sorted in a strictly increasing order.
The level of a node is the number of edges along the path between it and the root node.

Example 1:


Input: root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]
Output: 3
Explanation:
- Swap 4 and 3. The 2nd level becomes [3,4].
- Swap 7 and 5. The 3rd level becomes [5,6,8,7].
- Swap 8 and 7. The 3rd level becomes [5,6,7,8].
We used 3 operations so return 3.
It can be proven that 3 is the minimum number of operations needed.

Example 2:


Input: root = [1,3,2,7,6,5,4]
Output: 3
Explanation:
- Swap 3 and 2. The 2nd level becomes [2,3].
- Swap 7 and 4. The 3rd level becomes [4,6,5,7].
- Swap 6 and 5. The 3rd level becomes [4,5,6,7].
We used 3 operations so return 3.
It can be proven that 3 is the minimum number of operations needed.

Example 3:


Input: root = [1,2,3,4,5,6]
Output: 0
Explanation: Each level is already sorted in increasing order so return 0.


Constraints:

The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 105
All the values of the tree are unique.


```

## 中文翻译

给定二叉树（节点值唯一），每次操作可交换同一层两个节点的值。求使每层值严格递增的最少操作数。

## 解题思路

BFS 收集每层节点值。对每层，求排序所需最少交换次数 = 元素数 - 置换环数。用排序后的索引构建置换，找环计数。

## Solution

[SourceCode](./solution.js)
