# [1330] Reverse Subarray To Maximize Array Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/description/)

* algorithms
* Hard (44.08%)
* Likes:    494
* Dislikes: 61
* Testcase Example:  '[2,3,1,5,4]'

```md
You are given an integer array nums. The value of this array is defined as the sum of
nums[i] - nums[i + 1]
for all 0 <= i < nums.length - 1.
You are allowed to select any subarray of the given array and reverse it. You can perform this operation only once.
Find maximum possible value of the final array.

Example 1:

Input: nums = [2,3,1,5,4]
Output: 10
Explanation: By reversing the subarray [3,1,5] the array becomes [2,5,1,3,4] whose value is 10.

Example 2:

Input: nums = [2,4,9,24,2,1,10]
Output: 68


Constraints:

2 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
The answer is guaranteed to fit in a 32-bit integer.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，定义其"值"为所有相邻元素之差的绝对值之和：V = Σ|nums[i] - nums[i+1]|。你可以选择任意一个子数组并翻转它（只能操作一次）。求最终数组的最大可能值。

## 解题思路

**分类讨论 + 前缀极值优化**

翻转子数组 [l, r] 时，内部相邻对的绝对值不变（|a-b| = |b-a|），只有边界处的两个相邻对会改变。

设 x1=a[l-1], x2=a[l], y1=a[r], y2=a[r+1]，则变化量：
delta = |x1-y1| + |x2-y2| - |x1-x2| - |y1-y2|

通过对绝对值展开的四种情况分析，只有两种情况可能产生正增量：
- Case A: 2·min(x1,x2) - 2·max(y1,y2) = 2·h[l-1] - 2·k[r]
- Case D: 2·min(y1,y2) - 2·max(x1,x2) = 2·h[r] - 2·k[l-1]

其中 h[i]=min(a[i],a[i+1]), k[i]=max(a[i],a[i+1])。

还需考虑边界情况（l=0 或 r=n-1），这些用 O(n) 直接遍历。

对 Case A 和 D，利用前缀最大值/最小值将 O(n²) 降为 O(n)。总复杂度 O(n)。
