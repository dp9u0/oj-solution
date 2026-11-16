# [3667] 按绝对值排序数组

## Description


```md
https://leetcode.cn/problems/sort-array-by-absolute-value/description/
* algorithms
* Easy (86.34%)
* Dislikes: -
* Testcase Example:  '[3,-1,-4,1,5]'
给定一个整数数组 nums。
将 nums 中的元素按照它们的绝对值 非递减 顺序排列。
返回 任何 满足此条件的重新排列数组。
注意：整数 x 的绝对值定义为：
x 若 x >= 0
-x 若 x < 0

示例 1：
输入：nums = [3,-1,-4,1,5]
输出：[-1,1,3,-4,5]
解释：
nums 中元素的绝对值分别是 3，1，4，1，5。
将它们按升序排序，得到 1，1，3，4，5。
这对应于 [-1, 1, 3, -4, 5]。另一种可能的排序是 [1, -1, 3, -4, 5]。
示例 2：
输入：nums = [-100,100]
输出：[-100,100]
解释：
nums 中元素的绝对值分别是 100，100。
将它们按升序排列，得到 100，100。
这对应于 [-100, 100]。另一种可能的排序是 [100, -100]。

提示：
1 <= nums.length <= 100
-100 <= nums[i] <= 100
Hint 1: Sort the values in nums by their absolute values.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given an integer array `nums`. Rearrange its elements in **non-decreasing** order of their absolute values. Return *any* rearrangement that satisfies this condition.

**Example 1:**
Input: nums = [3,-1,-4,1,5]
Output: [-1,1,3,-4,5]
Explanation: Absolute values are 3,1,4,1,5; sorted they are 1,1,3,4,5.

**Constraints:**
- 1 <= nums.length <= 100
- -100 <= nums[i] <= 100

## Approach

直接按绝对值比较排序:`nums.sort((a,b) => Math.abs(a) - Math.abs(b))`,JS sort 为稳定排序,同绝对值保持原相对顺序。

时间 O(n log n),空间 O(log n)(原地排序)。
