# [1950] 所有子数组最小值中的最大值

## Description


```md
https://leetcode.cn/problems/maximum-of-minimum-values-in-all-subarrays/description/
* algorithms
* Medium (43.33%)
* Likes:    20
* Dislikes: -
* Testcase Example:  '[0,1,2,4]'
给你一个长度为 n 的整数数组 nums ，你需要处理 n 个查询。
对于第 i （0 <= i < n）个查询：
你需要先找出 nums 的所有长度为 i + 1 的子数组中的 最小值 。
在这些最小值中找出 最大值 作为答案。
返回一个 下标从 0 开始 的长度为 n 的整数数组 ans ，ans[i] 代表第 i 个查询的答案。

示例 1：
输入: nums = [0,1,2,4]
输出: [4,2,1,0]
解释:
i = 0:
- 大小为 1 的子数组为 [0], [1], [2], [4]
- 有最大的最小值的子数组是 [4], 它的最小值是 4
i = 1:
- 大小为 2 的子数组为 [0,1], [1,2], [2,4]
- 有最大的最小值的子数组是 [2,4], 它的最小值是 2
i = 2:
- 大小为 3 的子数组为 [0,1,2], [1,2,4]
- 有最大的最小值的子数组是 [1,2,4], 它的最小值是 1
i = 3:
- 大小为 4 的子数组为 [0,1,2,4]
- 有最大的最小值的子数组是 [0,1,2,4], 它的最小值是 0
示例 2：
输入: nums = [10,20,50,10]
输出: [50,20,10,10]
解释:
i = 0:
- 大小为 1 的子数组为 [10], [20], [50], [10]
- 有最大的最小值的子数组是 [50], 它的最小值是 50
i = 1:
- 大小为 2 的子数组为 [10,20], [20,50], [50,10]
- 有最大的最小值的子数组是 [20,50], 它的最小值是 20
i = 2:
- 大小为 3 的子数组为 [10,20,50], [20,50,10]
- 有最大的最小值的子数组是 [10,20,50], 它的最小值是 10
i = 3:
- 大小为 4 的子数组为 [10,20,50,10]
- 有最大的最小值的子数组是 [10,20,50,10], 它的最小值是 10

提示：
n == nums.length
1 <= n <= 105
0 <= nums[i] <= 109
Hint 1: Imagine the array is empty, and each element is coming to its index one by one, starting with the smallest element.
Hint 2: For each coming element nums[i], calculate L and R, the indices of the first smallest elements on the left and the right respectively.
Hint 3: The answer of the queries from 1 to R-L+1 will be at least this element.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an integer array `nums` of length `n`, answer `n` queries. For query `i` (0 <= i < n): find the minimum values of all subarrays of length `i + 1`, and report the maximum of those minimums.

Return the 0-indexed array `ans` of length `n` with the answers.

Example 1:
Input: nums = [0,1,2,4]
Output: [4,2,1,0]

Example 2:
Input: nums = [10,20,50,10]
Output: [50,20,10,10]

Constraints: n == nums.length, 1 <= n <= 10^5, 0 <= nums[i] <= 10^9.

## Approach

For each element, find with a monotonic stack the widest window in which it is the minimum: `left[i]` = previous strictly smaller index, `right[i]` = next smaller-or-equal index (any consistent split handles duplicates). The element can serve as the minimum for every window length up to `span = right[i] - left[i] - 1`, so record `best[span] = max(best[span], nums[i])`.

Then propagate `best[len-1] = max(best[len-1], best[len])` from long to short, since a minimum of a longer window bounds all shorter ones. Answer for query i is `best[i+1]`.

Time O(n), space O(n).
