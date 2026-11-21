# [2313] 二叉树中得到结果所需的最少翻转次数

## Description


```md
https://leetcode.cn/problems/minimum-flips-in-binary-tree-to-get-result/description/
* algorithms
* Hard (57.60%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[3,5,4,2,null,1,1,1,0]\ntrue'
给定二叉树的根 root，具有以下属性:
叶节点 的值为 0 或 1，分别表示 false 和 true。
非叶节点的值为 2、3、4、5，分别表示布尔运算 OR, AND, XOR, NOT。
您还将得到一个布尔型 result，这是 root 节点的期望 评价 结果。
对节点的评价计算如下:
如果节点是叶节点，则评价是节点的 值，即 true 或 false.
否则, 将其值的布尔运算应用于子节点的 评价，该节点的 评价 即为布尔运算后的结果。
在一个操作中，您可以 翻转 一个叶节点，这将导致一个 false 节点变为 true 节点，一个 true 节点变为 false 节点。
返回需要执行的最小操作数，以使 root 的评价得到 result。可以证明，总有办法达到 result。
叶节点 是没有子节点的节点。
注意: NOT 节点只有左孩子或只有右孩子，但其他非叶节点同时拥有左孩子和右孩子。

示例 1:
输入: root = [3,5,4,2,null,1,1,1,0], result = true
输出: 2
解释:
可以证明，至少需要翻转 2 个节点才能使树的 root 评价为 true。上面的图显示了实现这一目标的一种方法。
示例 2:
输入: root = [0], result = false
输出: 0
解释:
树的 root 的评价已经为 false，所以 0 个节点必须翻转。

提示:
树中的节点数在 [1, 105] 范围内。
0 <= Node.val <= 5
OR, AND, XOR 节点有 2 个子节点。
NOT 只有一个 1 子节点。
叶节点的值为 0 或 1.
非叶节点的值为2, 3, 4, 5.
Hint 1: Try using tree DP to solve this problem.
Hint 2: Find the minimum operations to change each subtree to true and to false separately.
Hint 3: For nodes representing boolean operations, find the minimum operations by trying all combinations of values to which the child nodes can evaluate.

```

## Solution

[SourceCode](./solution.js)

## English Translation

A binary tree evaluates leaves (0/1) directly and internal nodes via ops: 2=OR, 3=AND, 4=XOR, 5=NOT (one child). One operation flips a leaf. Return the minimum flips making the root evaluate to `result`.

Example 1:
Input: root = [3,5,4,2,null,1,1,1,0], result = true
Output: 2

Example 2:
Input: root = [0], result = false
Output: 0

Constraints: 1 <= nodes <= 10^5.

## Approach

Tree DP returning per subtree the minimal flips to reach false and true. Leaves cost (0, 1) or (1, 0). Combining children: OR's true = min(L1+R0, L0+R1, L1+R1), false = L0+R0; AND mirrors it; XOR true = min(L0+R1, L1+R0) (false symmetric); NOT swaps the child's costs. Iterative post-order traversal (stack) avoids recursion depth issues. Answer = cost[result] at the root.
