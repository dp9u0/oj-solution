# [4111] 统计一致子数组数目 I

## Description


```md
https://leetcode.cn/problems/count-consistent-subarrays-i/description/
* algorithms
* Easy (75.26%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[5,3,1,2]\r'
给你一个整数数组 nums。
如果一个子数组中所有元素的 按位与 运算结果等于该子数组的 最小值 ，则称该子数组为 一致子数组 。
返回 nums 中 一致子数组 的个数。
子数组 是数组中一个连续、非空的元素序列。

示例 1：
输入： nums = [5,3,1,2]
输出： 6
解释：
以下子数组是一致子数组：


子数组
包含的值
按位与
最小值


nums[0..0]
[5]
5
5


nums[1..1]
[3]
3
3


nums[2..2]
[1]
1
1


nums[3..3]
[2]
2
2


nums[1..2]
[3, 1]
3 & 1 = 1
1


nums[0..2]
[5, 3, 1]
5 & 3 & 1 = 1
1


因此，一致子数组的个数为 6。
示例 2：
输入： nums = [1,1,1]
输出： 6
解释：
对于每个子数组，其按位与运算结果和最小值均等于 1。因此，答案为 6。
示例 3：
输入： nums = [0]
输出： 1
解释：
唯一的子数组是 [0]，其按位与运算结果和最小值均为 0。因此，答案为 1。

提示：
1 <= nums.length <= 100
0 <= nums[i] <= 100
Hint 1: Fix the left endpoint and extend the subarray one element at a time. Which two values do you need to keep track of?
Hint 2: Initialize the minimum and the bitwise AND to nums[left]. Each time you extend the subarray, update both values using the new element. Count every right endpoint where the two values are equal, including the singleton.

```

## Description (English)

Given an integer array `nums`, a subarray is called **consistent** if the bitwise AND of all its elements equals the minimum value of the subarray. Return the number of consistent subarrays. A subarray is a contiguous, non-empty sequence of elements.

Examples: `nums = [5,3,1,2]` → 6; `nums = [1,1,1]` → 6; `nums = [0]` → 1.

Constraints: `1 <= nums.length <= 100`, `0 <= nums[i] <= 100`.

## Approach

关键性质:按位与的结果不超过任何参与运算的元素,因此子数组的 AND 总是 ≤ 最小值。「一致」即 AND == min。

枚举左端点,向右逐个扩展,同时增量维护当前子数组的按位与 `and` 和最小值 `min`(两者初始都为 `nums[left]`,每加入一个新元素分别更新)。每当 `and === min` 时计数 +1(单元素子数组天然满足)。时间复杂度 O(n²),n ≤ 100 足够。

## Solution

[SourceCode](./solution.js)
