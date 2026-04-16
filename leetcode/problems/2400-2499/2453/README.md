# [2453] Destroy Sequential Targets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/destroy-sequential-targets/description/)

* algorithms
* Medium (41.85%)
* Likes:    611
* Dislikes: 36
* Testcase Example:  '[3,7,8,1,1,5]\n2'

```md
You are given a 0-indexed array nums consisting of positive integers, representing targets on a number line. You are also given an integer space.
You have a machine which can destroy targets. Seeding the machine with some nums[i] allows it to destroy all targets with values that can be represented as nums[i] + c * space, where c is any non-negative integer. You want to destroy the maximum number of targets in nums.
Return the minimum value of nums[i] you can seed the machine with to destroy the maximum number of targets.

Example 1:

Input: nums = [3,7,8,1,1,5], space = 2
Output: 1
Explanation: If we seed the machine with nums[3], then we destroy all targets equal to 1,3,5,7,9,...
In this case, we would destroy 5 total targets (all except for nums[2]).
It is impossible to destroy more than 5 targets, so we return nums[3].

Example 2:

Input: nums = [1,3,5,2,4,6], space = 2
Output: 1
Explanation: Seeding the machine with nums[0], or nums[3] destroys 3 targets.
It is not possible to destroy more than 3 targets.
Since nums[0] is the minimal integer that can destroy 3 targets, we return 1.

Example 3:

Input: nums = [6,2,5], space = 100
Output: 2
Explanation: Whatever initial seed we select, we can only destroy 1 target. The minimal seed is nums[1].


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= space <=109


```

## 中文翻译

给定正整数数组 nums 和整数 space。选择种子 nums[i]，机器能销毁所有形如 nums[i] + c*space 的目标。求能销毁最多目标的最小种子值。

## 解题思路

nums[i] 和 nums[j] 能被同一种子销毁当且仅当 nums[i] % space == nums[j] % space。用 Map 统计每个余数的出现次数，找到出现次数最多的余数，在该余数组中取最小值。

## Solution

[SourceCode](./solution.js)
