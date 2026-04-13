# [740] Delete and Earn

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-and-earn/description/)

* algorithms
* Medium (57.15%)
* Likes:    7974
* Dislikes: 405
* Testcase Example:  '[3,4,2]'

```md
You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above operation some number of times.

Example 1:

Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.

Example 2:

Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2&#39;s and 4&#39;s are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.

Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，每次选一个数删除并获得其值的分数，同时必须删除所有值为 nums[i]-1 和 nums[i]+1 的元素。求能获得的最大分数。

## 解题思路

**转化为打家劫舍问题**

统计每个值 v 的总收益 points[v] = v * count(v)。选了值 v 就不能选 v-1 和 v+1，等价于不能选相邻元素。

用 dp[i] 表示考虑值 i 时能获得的最大分数：
- dp[i] = max(dp[i-1], dp[i-2] + points[i])

即不选 i（取 dp[i-1]）或选 i（取 dp[i-2] + points[i]）。

时间复杂度 O(max(nums))，空间复杂度 O(max(nums))。
