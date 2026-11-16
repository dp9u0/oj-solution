# [1150] 检查一个数是否在数组中占绝大多数

## Description


```md
https://leetcode.cn/problems/check-if-a-number-is-majority-element-in-a-sorted-array/description/
* algorithms
* Easy (60.73%)
* Likes:    54
* Dislikes: -
* Testcase Example:  '[2,4,5,5,5,5,5,6,6]\n5'
给出一个按 非递减 顺序排列的数组 nums，和一个目标数值 target。假如数组 nums 中绝大多数元素的数值都等于 target，则返回 True，否则请返回 False。
所谓占绝大多数，是指在长度为 N 的数组中出现必须 超过 N/2 次。

示例 1：
输入：nums = [2,4,5,5,5,5,5,6,6], target = 5
输出：true
解释：
数字 5 出现了 5 次，而数组的长度为 9。
所以，5 在数组中占绝大多数，因为 5 次 > 9/2。
示例 2：
输入：nums = [10,100,101,101], target = 101
输出：false
解释：
数字 101 出现了 2 次，而数组的长度是 4。
所以，101 不是 数组占绝大多数的元素，因为 2 次 = 4/2。

提示：
1 <= nums.length <= 1000
1 <= nums[i] <= 10^9
1 <= target <= 10^9
Hint 1: How to check if a given number target is a majority element?.
Hint 2: Find the frequency of target and compare it to the length of the array.
Hint 3: You can find the frequency of an element using Binary Search since the array is sorted.
Hint 4: Using Binary Search, find the first and last occurrences of A. Then just calculate the difference between the indexes of these occurrences.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array `nums` sorted in non-decreasing order and a `target`, return `true` if `target` is a majority element (occurs more than n/2 times), otherwise `false`.

**Example 1:**
nums = [2,4,5,5,5,5,5,6,6], target = 5 → true (5 occurrences > 9/2)

**Constraints:**
- 1 <= nums.length <= 1000
- array sorted non-decreasing

## Approach

二分:lower_bound 找首个 ≥ target 的下标,upper_bound 找首个 > target 的下标,出现次数 (upper - lower) 满足 `2 × count > n` 即为绝大多数。

时间 O(log n),空间 O(1)。
