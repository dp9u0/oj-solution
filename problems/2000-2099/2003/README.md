# [2003] Smallest Missing Genetic Value in Each Subtree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/description/)

* algorithms
* Hard (47.76%)
* Likes:    485
* Dislikes: 23
* Testcase Example:  '[-1,0,0,2]\n[1,2,3,4]'

```md
There is a family tree rooted at 0 consisting of n nodes numbered 0 to n - 1. You are given a 0-indexed integer array parents, where parents[i] is the parent for node i. Since node 0 is the root, parents[0] == -1.
There are 105 genetic values, each represented by an integer in the inclusive range [1, 105]. You are given a 0-indexed integer array nums, where nums[i] is a distinct genetic value for node i.
Return an array ans of length n where ans[i] is the smallest genetic value that is missing from the subtree rooted at node i.
The subtree rooted at a node x contains node x and all of its descendant nodes.

Example 1:


Input: parents = [-1,0,0,2], nums = [1,2,3,4]
Output: [5,1,1,1]
Explanation: The answer for each subtree is calculated as follows:
- 0: The subtree contains nodes [0,1,2,3] with values [1,2,3,4]. 5 is the smallest missing value.
- 1: The subtree contains only node 1 with value 2. 1 is the smallest missing value.
- 2: The subtree contains nodes [2,3] with values [3,4]. 1 is the smallest missing value.
- 3: The subtree contains only node 3 with value 4. 1 is the smallest missing value.

Example 2:


Input: parents = [-1,0,1,0,3,3], nums = [5,4,6,2,1,3]
Output: [7,1,1,4,2,1]
Explanation: The answer for each subtree is calculated as follows:
- 0: The subtree contains nodes [0,1,2,3,4,5] with values [5,4,6,2,1,3]. 7 is the smallest missing value.
- 1: The subtree contains nodes [1,2] with values [4,6]. 1 is the smallest missing value.
- 2: The subtree contains only node 2 with value 6. 1 is the smallest missing value.
- 3: The subtree contains nodes [3,4,5] with values [2,1,3]. 4 is the smallest missing value.
- 4: The subtree contains only node 4 with value 1. 2 is the smallest missing value.
- 5: The subtree contains only node 5 with value 3. 1 is the smallest missing value.

Example 3:

Input: parents = [-1,2,3,0,2,4,1], nums = [2,3,4,5,6,7,8]
Output: [1,1,1,1,1,1,1]
Explanation: The value 1 is missing from all the subtrees.


Constraints:

n == parents.length == nums.length
2 <= n <= 105
0 <= parents[i] <= n - 1 for i != 0
parents[0] == -1
parents represents a valid tree.
1 <= nums[i] <= 105
Each nums[i] is distinct.


```

## 翻译

给定一棵以节点 0 为根的树（parents 数组），每个节点有唯一基因值 nums[i]。对每个节点，求其子树中最小的缺失正整数。

## 解题思路

值 1 只出现在一个节点上。不在该节点到根路径上的所有节点，答案均为 1。沿着路径从含 1 的节点向上处理，用 DFS 收集离路径子树的基因值到集合中，逐步维护 MEX。每个节点只访问一次，MEX 只增不减，总复杂度 O(n + maxVal)。

## Solution

[SourceCode](./solution.js)
