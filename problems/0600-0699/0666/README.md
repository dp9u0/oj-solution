# [666] 路径总和 IV

## Description


```md
https://leetcode.cn/problems/path-sum-iv/description/
* algorithms
* Medium (58.84%)
* Likes:    76
* Dislikes: -
* Testcase Example:  '[113,215,221]'
对于一棵深度小于 5 的树，可以用一组三位十进制整数来表示。给定一个由三位数组成的 递增 的数组 nums 表示一棵深度小于 5 的二叉树，对于每个整数：
百位上的数字表示这个节点的深度 d，1 <= d <= 4。
十位上的数字表示这个节点在当前层所在的位置 p， 1 <= p <= 8。位置编号与一棵 满二叉树 的位置编号相同。
个位上的数字表示这个节点的权值 v，0 <= v <= 9。
返回从 根 到所有 叶子结点 的 路径 之 和。
保证 给定的数组表示一个有效的连接二叉树。

示例 1：
输入: nums = [113, 215, 221]
输出: 12
解释: 列表所表示的树如上所示。
路径和 = (3 + 5) + (3 + 1) = 12。
示例 2：
输入: nums = [113, 221]
输出: 4
解释: 列表所表示的树如上所示。
路径和 = (3 + 1) = 4。

提示:
1 <= nums.length <= 15
110 <= nums[i] <= 489
nums 表示深度小于 5 的有效二叉树
nums 以升序排序。

```

## Solution

[SourceCode](./solution.js)

## Translation

A tree of depth < 5 is encoded as 3-digit numbers: hundreds = depth d (1–4), tens = position p in level (full-binary-tree numbering, 1–8), units = node value v. Return the total of all root-to-leaf path sums.

- Example 1: [113,215,221] → `12` ((3+5) + (3+1))
- Example 2: [113,221] → `4`

Constraints: ≤ 15 nodes.

## Approach

**解码 + DFS**。把 (d,p) → v 存入 Map(键 d*8+p)。节点 (d,p) 的孩子是 (d+1, 2p−1) 与 (d+1, 2p);从 (1,1) 出发累加路径和,两孩子都不存在即为叶子,累加进答案。O(n)。
