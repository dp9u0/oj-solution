# [2163] Minimum Difference in Sums After Removal of Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/description/)

* algorithms
* Hard (69.73%)
* Likes:    1138
* Dislikes: 43
* Testcase Example:  '[3,1,2]'

```md
You are given a 0-indexed integer array nums consisting of 3 * n elements.
You are allowed to remove any subsequence of elements of size exactly n from nums. The remaining 2 * n elements will be divided into two equal parts:

The first n elements belonging to the first part and their sum is sumfirst.
The next n elements belonging to the second part and their sum is sumsecond.

The difference in sums of the two parts is denoted as sumfirst - sumsecond.

For example, if sumfirst = 3 and sumsecond = 2, their difference is 1.
Similarly, if sumfirst = 2 and sumsecond = 3, their difference is -1.

Return the minimum difference possible between the sums of the two parts after the removal of n elements.

Example 1:

Input: nums = [3,1,2]
Output: -1
Explanation: Here, nums has 3 elements, so n = 1.
Thus we have to remove 1 element from nums and divide the array into two equal parts.
- If we remove nums[0] = 3, the array will be [1,2]. The difference in sums of the two parts will be 1 - 2 = -1.
- If we remove nums[1] = 1, the array will be [3,2]. The difference in sums of the two parts will be 3 - 2 = 1.
- If we remove nums[2] = 2, the array will be [3,1]. The difference in sums of the two parts will be 3 - 1 = 2.
The minimum difference between sums of the two parts is min(-1,1,2) = -1.

Example 2:

Input: nums = [7,9,5,8,1,3]
Output: 1
Explanation: Here n = 2. So we must remove 2 elements and divide the remaining array into two parts containing two elements each.
If we remove nums[2] = 5 and nums[3] = 8, the resultant array will be [7,9,1,3]. The difference in sums will be (7+9) - (1+3) = 12.
To obtain the minimum difference, we should remove nums[1] = 9 and nums[4] = 1. The resultant array becomes [7,5,8,3]. The difference in sums of the two parts is (7+5) - (8+3) = 1.
It can be shown that it is not possible to obtain a difference smaller than 1.


Constraints:

nums.length == 3 * n
1 <= n <= 105
1 <= nums[i] <= 105


```

## 题目翻译

给定长度为 3n 的数组，删除一个长度为 n 的子序列，将剩余 2n 个元素分为前 n 个（sumFirst）和后 n 个（sumSecond），求 sumFirst - sumSecond 的最小值。

## 解题思路

**前后缀分解 + 堆**

枚举分割点 k（n-1 ≤ k ≤ 2n-1），前半部分从 nums[0..k] 中选 n 个，后半部分从 nums[k+1..3n-1] 中选 n 个。为使差值最小，前半部分选 n 个最小的（用大顶堆维护），后半部分选 n 个最大的（用小顶堆维护）。

前向扫描：维护大顶堆（容量 n），保存当前 n 个最小元素之和 leftMin[k]。
后向扫描：维护小顶堆（容量 n），保存当前 n 个最大元素之和 rightMax[k]。
答案 = min(leftMin[k] - rightMax[k+1])。

## Solution

[SourceCode](./solution.js)
