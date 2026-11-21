# [2393] 严格递增的子数组个数

## Description


```md
https://leetcode.cn/problems/count-strictly-increasing-subarrays/description/
* algorithms
* Medium (64.28%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '[1,3,5,4,4,6]'
给定一个由 正整数 组成的数组 nums 。
返回 严格递增 顺序的 nums 子数组 的数目。
子数组 是数组的一部分，且是 连续 的。

示例 1:
输入: nums = [1,3,5,4,4,6]
输出: 10
解释: 严格递增的子数组如下:
- 长度为 1 的子数组: [1], [3], [5], [4], [4], [6]。
- 长度为 2 的子数组: [1,3], [3,5], [4,6]。
- 长度为 3 的子数组: [1,3,5]。
子数组的总数是 6 + 3 + 1 = 10。
示例 2:
输入: nums = [1,2,3,4,5]
输出: 15
解释: 每个子数组都严格递增。我们可以取 15 个子数组。

提示:
1 <= nums.length <= 105
1 <= nums[i] <= 106
Hint 1: Find the number of strictly increasing subarrays that end at a specific index. Can you calculate that for each index from 0 to n - 1?
Hint 2: The answer will be the sum of the number of subarrays that end at each index.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Count subarrays of nums that are strictly increasing.

Example 1:
Input: nums = [1,3,5,4,4,6]
Output: 10

Example 2:
Input: nums = [1,2,3,4,5]
Output: 15

Constraints: 1 <= nums.length <= 10^5.

## Approach

Every maximal strictly increasing run of length L contributes L*(L+1)/2 subarrays (all its contiguous pieces). Sweep once tracking the current run length: extend when nums[i] > nums[i-1], otherwise close the run and add its contribution.

O(n) time, O(1) space.
