# [1569] 将子数组重新排序得到同一个二叉搜索树的方案数

## Description


```md
https://leetcode.cn/problems/number-of-ways-to-reorder-array-to-get-same-bst/description/
* algorithms
* Hard (50.99%)
* Likes:    82
* Dislikes: -
* Testcase Example:  '[2,1,3]'
给你一个数组 nums 表示 1 到 n 的一个排列。我们按照元素在 nums 中的顺序依次插入一个初始为空的二叉搜索树（BST）。请你统计将 nums 重新排序后，统计满足如下条件的方案数：重排后得到的二叉搜索树与 nums 原本数字顺序得到的二叉搜索树相同。
比方说，给你 nums = [2,1,3]，我们得到一棵 2 为根，1 为左孩子，3 为右孩子的树。数组 [2,3,1] 也能得到相同的 BST，但 [3,2,1] 会得到一棵不同的 BST 。
请你返回重排 nums 后，与原数组 nums 得到相同二叉搜索树的方案数。
由于答案可能会很大，请将结果对 109 + 7 取余数。

示例 1：
输入：nums = [2,1,3]
输出：1
解释：我们将 nums 重排， [2,3,1] 能得到相同的 BST 。没有其他得到相同 BST 的方案了。
示例 2：
输入：nums = [3,4,5,1,2]
输出：5
解释：下面 5 个数组会得到相同的 BST：
[3,1,2,4,5]
[3,1,4,2,5]
[3,1,4,5,2]
[3,4,1,2,5]
[3,4,1,5,2]
示例 3：
输入：nums = [1,2,3]
输出：0
解释：没有别的排列顺序能得到相同的 BST 。

提示：
1 <= nums.length <= 1000
1 <= nums[i] <= nums.length
nums 中所有数 互不相同 。
Hint 1: Use a divide and conquer strategy.
Hint 2: The first number will always be the root. Consider the numbers smaller and larger than the root separately. When merging the results together, how many ways can you order x elements in x+y positions?

```

## Description (English)

Given an array `nums` that represents a permutation of integers from `1` to `n`. We build a binary search tree (BST) by inserting the elements of `nums` in order into an initially empty BST. Return the number of different ways to reorder `nums` such that the resulting BST is identical to the original BST formed from `nums`.

For example, given `nums = [2,1,3]`, we get a tree with `2` as the root, `1` as the left child, and `3` as the right child. The array `[2,3,1]` also yields the same BST, but `[3,2,1]` yields a different one.

Return the number of ways to reorder `nums` such that it yields the same BST, modulo `10^9 + 7`.

Example 1: nums = [2,1,3] → 1 (only [2,3,1] works).
Example 2: nums = [3,4,5,1,2] → 5.
Example 3: nums = [1,2,3] → 0.

Constraints:
- 1 <= nums.length <= 1000
- 1 <= nums[i] <= nums.length
- All integers in nums are distinct.

## Approach

分治 + 组合计数。

关键观察：根必须是插入序列的第一个元素。序列中比根小的元素全部落入左子树、比根大的全部落入右子树，且各自内部的相对顺序决定了左右子树的结构。因此两个序列产生相同 BST，当且仅当：根相同，且去掉根后的左/右子序列（保持相对顺序）分别产生相同的 BST。

设某子树的序列长度为 n，左子序列有 x 个元素、右子序列有 y 个元素（x+y=n-1）。左右子树内部的插入顺序可以任意交错，只要各自内部相对顺序不变即可，方案数为组合数 C(x+y, x)。于是：

    ways(arr) = C(|left|+|right|, |left|) * ways(left) * ways(right)

其中 ways 对长度 <= 2 的序列返回 1（只有一种顺序）。

组合数用杨辉三角递推预处理（mod 1e9+7）：C[i][j] = C[i-1][j-1] + C[i-1][j]。

最终答案为 ways(nums) - 1，需要减去原排列本身这一种。

复杂度：预处理 O(n^2)；分治每层用一次划分 O(n)，最坏（链状 BST）共 O(n^2)；递归深度最坏 O(n)。

## Solution

[SourceCode](./solution.js)
