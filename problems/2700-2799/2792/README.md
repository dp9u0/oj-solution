# [2792] 计算足够大的节点数

## Description


```md
https://leetcode.cn/problems/count-nodes-that-are-great-enough/description/
* algorithms
* Hard (23.32%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[7,6,5,4,3,2,1]\n2'
给定一棵二叉树的根节点 root 和一个整数 k 。如果一个节点满足以下条件，则称其为 足够大 ：
它的子树中 至少 有 k 个节点。
它的值 大于 其子树中 至少 k 个节点的值。
返回足够大的节点数。
如果 u == v 或者 v 是 u 的祖先，则节点 u 在节点 v 的 子树 中。

示例 1：
输入：root = [7,6,5,4,3,2,1], k = 2
输出：3
解释：节点编号从 1 到 7。
节点 1 的子树中的值：{1,2,3,4,5,6,7}。由于节点的值等于 7，有 6 个节点的值小于它的值，因此它是“足够大”的。
节点 2 的子树中的值：{3,4,6}。由于节点的值等于 6，有 2 个节点的值小于它的值，因此它是“足够大”的。
节点 3 的子树中的值：{1,2,5}。由于节点的值等于 5，有 2 个节点的值小于它的值，因此它是“足够大”的。
其他节点不满足条件。
参考下面的图片可以帮助你得到更好的理解。
示例 2：
输入：root = [1,2,3], k = 1
输出：0
解释：节点编号从 1 到 3。
节点 1 的子树中的值：{1,2,3}。由于节点的值等于 1，没有节点的值小于它的值，因此它不是“足够大”的。
节点 2 的子树中的值：{2}。由于节点的值等于 2，没有节点的值小于它的值，因此它不是“足够大”的。
节点 3 的子树中的值：{3}。由于节点的值等于 3，没有节点的值小于它的值，因此它不是“足够大”的。
参考下面的图片可以帮助你得到更好的理解。
示例 3：
输入：root = [3,2,2], k = 2
输出：1
解释：节点编号从 1 到 3。
节点 1 的子树中的值：{2,2,3}。
由于节点的值等于 3，有 2 个节点的值小于它的值，因此它是“足够大”的。
节点 2 的子树中的值：{2}。由于节点的值等于 2，没有节点的值小于它的值，因此它不是“足够大”的。
节点 3 的子树中的值：{2}。由于节点的值等于 2，没有节点的值小于它的值，因此它不是“足够大”的。
参考下面的图片可以帮助你得到更好的理解。

提示：
树中的节点数在范围 [1, 104] 内。
1 <= Node.val <= 104
1 <= k <= 10
Hint 1: For each node, calculate a list of k values representing k smallest values in the subtree of that node.
Hint 2: To check if a node is great enough, get the described list in the first hint for its children and merge them. Since the resulting list may contain more than k elements, pick k smallest values and discard the extra ones.
Hint 3: Now check if the merged list has exactly k elements, and the current node's value is greater than the greatest element in the list, then that node is great enough.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): A node is "great enough" if its subtree (including itself) has at least k nodes AND its value is strictly greater than at least k of them. Count such nodes. n <= 1e4, k <= 10.

Approach: post-order DP. Each node returns the sorted list of the k smallest values in its subtree (including itself). Merge the two children lists (already sorted, each length <= k), keep the k smallest; if the merged list has exactly k elements and its max < node.val, the node is great enough (subtree size >= k and >= k strictly smaller values). Then insert node.val, re-sort, truncate to k.

Iterative post-order with an explicit stack (done-flag) avoids recursion-depth risk on skewed trees with n = 1e4.

Complexity: O(n * k) time (k <= 10), O(n * k) space for the returned lists.
