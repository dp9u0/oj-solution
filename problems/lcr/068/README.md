# [LCR 068] 搜索插入位置

## Description


```md
https://leetcode.cn/problems/N6YdxV/description/
* algorithms
* Easy (49.89%)
* Likes:    60
* Dislikes: -
* Testcase Example:  '[1,3,5,6]\n5'
给定一个排序的整数数组 nums 和一个整数目标值 target ，请在数组中找到 target ，并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。

示例 1：
输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2：
输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3：
输入: nums = [1,3,5,6], target = 7
输出: 4
示例 4：
输入: nums = [1,3,5,6], target = 0
输出: 0
示例 5：
输入: nums = [1], target = 0
输出: 0

提示：
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为无重复元素的升序排列数组
-104 <= target <= 104

注意：本题与主站 35 题相同： https://leetcode.cn/problems/search-insert-position/

```

## Solution

[SourceCode](./solution.js)

---

## English Description

Given a sorted array of distinct integers `nums` and a target value `target`, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**
> Input: `nums = [1,3,5,6]`, `target = 5`
> Output: `2`

**Example 2:**
> Input: `nums = [1,3,5,6]`, `target = 2`
> Output: `1`

**Example 3:**
> Input: `nums = [1,3,5,6]`, `target = 7`
> Output: `4`

**Example 4:**
> Input: `nums = [1,3,5,6]`, `target = 0`
> Output: `0`

**Example 5:**
> Input: `nums = [1]`, `target = 0`
> Output: `0`

**Constraints:**
- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` contains distinct values sorted in ascending order
- `-10^4 <= target <= 10^4`

**Note:** This problem is identical to LeetCode main 35: https://leetcode.cn/problems/search-insert-position/

---

## 思路 Approach

经典**二分查找第一个不小于 target 的下界**问题(lower_bound)。

目标位置是数组中第一个满足 `nums[i] >= target` 的下标。若 target 大于数组中所有元素,则插入位置为 `nums.length`。

二分模板,维护左闭右闭区间 `[left, right]`:
- 取 `mid = (left + right) >> 1`;
- 若 `nums[mid] >= target`,说明答案在左侧(含 mid),收缩 `right = mid`;
- 否则 `nums[mid] < target`,答案在右侧,收缩 `left = mid + 1`。

循环结束后 `left` 即为插入位置,直接返回。

时间复杂度 O(log n),空间复杂度 O(1)。
