# [1530] Number of Good Leaf Nodes Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/description/)

* algorithms
* Medium (71.77%)
* Likes:    2501
* Dislikes: 111
* Testcase Example:  '[1,2,3,null,4]\n3'

```md
You are given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.
Return the number of good leaf node pairs in the tree.

Example 1:


Input: root = [1,2,3,null,4], distance = 3
Output: 1
Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.

Example 2:


Input: root = [1,2,3,4,5,6,7], distance = 3
Output: 2
Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.

Example 3:

Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
Output: 1
Explanation: The only good pair is [2,5].


Constraints:

The number of nodes in the tree is in the range [1, 210].
1 <= Node.val <= 100
1 <= distance <= 10


```

## 中文翻译

给定二叉树根节点和整数 distance，统计所有叶节点对中，最短路径 <= distance 的对数。

## 解题思路

**DFS 后序遍历 + 距离数组**

每个节点返回一个长度为 distance+1 的数组 cnt，cnt[d] 表示该子树中距当前节点深度为 d 的叶节点数。

- 叶节点：cnt[0] = 1
- 内部节点：合并左右子树，对每个 dl（左）和 dr（右），若 dl + dr + 2 <= distance 则 cnt[dl] * cnt[dr] 贡献给答案
- 合并后的 cnt[d+1] = leftCnt[d] + rightCnt[d]

时间复杂度：O(n * distance^2)，空间复杂度：O(n * distance)

## Solution

[SourceCode](./solution.js)
