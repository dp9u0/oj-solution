# [368] Largest Divisible Subset

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-divisible-subset/description/)

* algorithms
* Medium (49.54%)
* Testcase Example:  '[1,2,3]'

```md
Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.

Example 1:
Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.
Example 2:
Input: nums = [1,2,4,8]
Output: [1,2,4,8]

Constraints:
1
1
All the integers in nums are unique.

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
给定一个由不同正整数组成的集合 `nums`，返回最大的子集 `answer`，使得该子集中的任何一对元素 `(answer[i], answer[j])` 满足：
`answer[i] % answer[j] == 0` 或 `answer[j] % answer[i] == 0`
如果有多个解决方案，返回其中任何一个即可。

示例 1:
输入: nums = [1,2,3]
输出: [1,2]
解释: [1,3] 也可以接受。

示例 2:
输入: nums = [1,2,4,8]
输出: [1,2,4,8]

约束：
1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 10^9
`nums` 中的所有整数都是唯一的。

### 解题思路 (Approach)
这是一个最长递增子序列 (LIS) 的变种问题，适合用动态规划 (DP) 来解决。
由于要求子集中任意两个元素之间都能存在整除关系，我们可以先对 `nums` 进行升序排序。
排序后，如果 `b % a == 0` 且 `c % b == 0`，那么必然有 `c % a == 0`。
所以，只需要保证每次加入新元素时，它能被当前子集中最大的元素整除即可。

定义 `dp[i]` 为以 `nums[i]` 为最大元素的最大整除子集的长度。
定义 `prev[i]` 为在以 `nums[i]` 结尾的最大整除子集中，`nums[i]` 的前一个元素的下标。
状态转移：
对于每个 `i` (0 到 n-1)，遍历所有的 `j` (0 到 i-1)，
如果 `nums[i] % nums[j] == 0` 并且 `dp[j] + 1 > dp[i]`，则：
`dp[i] = dp[j] + 1`
`prev[i] = j`

最后，找出 `dp` 数组中的最大值及其对应的下标 `maxIdx`。从 `maxIdx` 开始，根据 `prev` 数组回溯，就可以构建出最大整除子集。
