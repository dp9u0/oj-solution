# [1995] Count Special Quadruplets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-special-quadruplets/description/)

* algorithms
* Easy (64.53%)
* Likes:    708
* Dislikes: 244
* Testcase Example:  '[1,2,3,6]'

```md
Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:

nums[a] + nums[b] + nums[c] == nums[d], and
a < b < c < d


Example 1:

Input: nums = [1,2,3,6]
Output: 1
Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.

Example 2:

Input: nums = [3,3,6,4,5]
Output: 0
Explanation: There are no such quadruplets in [3,3,6,4,5].

Example 3:

Input: nums = [1,1,1,3,5]
Output: 4
Explanation: The 4 quadruplets that satisfy the requirement are:
- (0, 1, 2, 3): 1 + 1 + 1 == 3
- (0, 1, 3, 4): 1 + 1 + 3 == 5
- (0, 2, 3, 4): 1 + 1 + 3 == 5
- (1, 2, 3, 4): 1 + 1 + 3 == 5


Constraints:

4 <= nums.length <= 50
1 <= nums[i] <= 100


```

## 中文翻译

给定数组 nums，求满足 nums[a]+nums[b]+nums[c]==nums[d] 且 a < b < c < d 的四元组个数。

## 解题思路

枚举 b 和 d，对于固定的 b，遍历 a < b 的所有 nums[a] 存入频率表，然后遍历 c 在 (b, d) 之间的所有 nums[c]，检查 nums[d]-nums[c] 是否在频率表中。

更简单的做法：n <= 50，直接四重循环 O(n^4) 即可。

时间复杂度：O(n^4)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
