# [259] 较小的三数之和

## Description


```md
https://leetcode.cn/problems/3sum-smaller/description/
* algorithms
* Medium (55.77%)
* Likes:    177
* Dislikes: -
* Testcase Example:  '[-2,0,1,3]\n2'
给定一个长度为 n 的整数数组和一个目标值 target ，寻找能够使条件 nums[i] + nums[j] + nums[k] < target 成立的三元组  i, j, k 个数（0 <= i < j < k < n）。

示例 1：
输入: nums = [-2,0,1,3], target = 2
输出: 2
解释: 因为一共有两个三元组满足累加和小于 2:
[-2,0,1]
[-2,0,3]
示例 2：
输入: nums = [], target = 0
输出: 0
示例 3：
输入: nums = [0], target = 0
输出: 0

提示:
n == nums.length
0 <= n <= 3500
-100 <= nums[i] <= 100
-100 <= target <= 100
输入保证答案小于或等于 109。

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array `nums` of n integers and a `target`, count the number of index triplets (i, j, k) with i < j < k and nums[i] + nums[j] + nums[k] < target.

**Example:**
[-2,0,1,3], target = 2 → 2 ((-2,0,1), (-2,0,3))

**Constraints:**
- 0 <= nums.length <= 100

## Approach

排序 + 双指针:固定 i,lo/hi 对撞;若 `nums[i]+nums[lo]+nums[hi] < target`,则 (lo, hi] 区间内每个 k 都成立,一次性计数 `hi - lo` 并右移 lo;否则左移 hi。

时间 O(n²),空间 O(log n)(排序)。
