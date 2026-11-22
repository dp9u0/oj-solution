# [2638] 统计 K-Free 子集的总数

## Description


```md
https://leetcode.cn/problems/count-the-number-of-k-free-subsets/description/
* algorithms
* Medium (25.00%)
* Likes:    6
* Dislikes: -
* Testcase Example:  '[5,4,6]\n1'
给定一个包含 无重复 元素的整数数组 nums 和一个整数 k 。
如果一个子集中 不 存在两个差的绝对值等于 k 的元素，则称其为 k-Free 子集。注意，空集是一个 k-Free 子集。
返回 nums 中 k-Free 子集的数量。
一个数组的 子集 是该数组中的元素的选择（可能为零个）。

示例 1 ：
输入：nums = [5,4,6], k = 1
输出：5
解释：有 5 个合法子集：{}, {5}, {4}, {6} 和 {4, 6} 。
示例 2 ：
输入：nums = [2,3,5,8], k = 5
输出：12
解释：有12个合法子集：{}, {2}, {3}, {5}, {8}, {2, 3}, {2, 3, 5}, {2, 5}, {2, 5, 8}, {2, 8}, {3, 5} 和 {5, 8} 。
示例 3 ：
输入：nums = [10,5,9,11], k = 20
输出：16
解释：所有的子集都是有效的。由于子集的总数为 2^4 = 16，因此答案为 16 。

提示：
1 <= nums.length <= 50
1 <= nums[i] <= 1000
1 <= k <= 1000
Hint 1: Split all numbers into several groups, with each group being an arithmetic sequence with a common difference of k.
Hint 2: How many K-free subsets are there for each group? This can be solved by dp: dp[i] = dp[i-1] + dp[i-2], meaning if we choose ith element, we cannot choose (i-1)th; otherwise we can choose (i-1)th element.
Hint 3: After solving the problem for every group, the final result is just the product of the sub-problems.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given distinct nums and k, count subsets (possibly empty) with no two elements differing by exactly k.

Example 1:
Input: nums = [5,4,6], k = 1
Output: 5

Example 2:
Input: nums = [2,3,5,8], k = 5
Output: 12

Constraints: n <= 50, values <= 1000, k <= 1000.

## Approach

Follow arithmetic chains x, x+k, x+2k, ... via a value set (start at x with x-k absent; chain members may be interleaved with other values in sorted order - walking sorted positions directly is wrong). Within a chain, k-free subsets follow the house-robber recurrence F(L) = F(L-1) + F(L-2), F(0)=1, F(1)=2. Chains are independent -> multiply F(len) across chains. Product fits in double (F(50) < 2^31, n <= 50 -> product < 2^31 total? F(50) ~ 2^29 and product over chains bounded by 2^n <= 2^50 - safe).
