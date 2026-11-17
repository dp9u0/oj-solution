# [250] 统计同值子树

## Description


```md
https://leetcode.cn/problems/count-univalue-subtrees/description/
* algorithms
* Medium (65.69%)
* Likes:    147
* Dislikes: -
* Testcase Example:  '[5,1,5,5,5,null,5]'
给定一个二叉树，统计该二叉树数值相同的 子树 个数。
同值子树是指该子树的所有节点都拥有相同的数值。

示例 1：
输入：root = [5,1,5,5,5,null,5]
输出：4
示例 2：
输入：root = []
输出：0
示例 3：
输入：root = [5,5,5,5,5,null,5]
输出：6

提示：
树中节点的编号在 [0, 1000] 范围内
-1000 <= Node.val <= 1000

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given the `root` of a binary tree, count the number of **univalue subtrees** (subtrees in which all nodes have the same value).

**Example:**
root = [5,1,5,5,5,null,5] → 4

**Constraints:**
- 0 <= number of nodes <= 10^4

## Approach

后序 DFS:每个节点向父级返回"以它为根的子树是否同值";空树视为同值,孩子任一非同值或值不等则该节点向上报 false,否则计数 +1 并上报 true。

时间 O(n),空间 O(h)(递归栈)。
