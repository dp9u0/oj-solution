# [面试题 16.17] 连续数列

## Description


```md
https://leetcode.cn/problems/contiguous-sequence-lcci/description/
* lcci
* Easy (58.22%)
* Likes:    153
* Dislikes: -
* Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
给定一个整数数组，找出总和最大的连续数列，并返回总和。
示例：
输入： [-2,1,-3,4,-1,2,1,-5,4]
输出： 6
解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶：
如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
Hint 1: 把数字想象成正负交替的数字序列。注意，我们永远不会只包含一个正序列的一部分或者一个负序列的一部分。
Hint 2: 注意，如果你有一个和是负数的数列，那么其一定不是一个数列的开始或结束（如果它们连接了另外两个数列，那么就可以以一个数列的形式出现）。
Hint 3: 从数组的开头开始。当这个子数列增长时，它仍然是最佳子数列。然而，一旦变成负数，它就没有意义了。
Hint 4: 如果跟踪计算中的和，那就应该在子数列为负时立即重置它。我们永远不会在另一个子数列的开头或结尾添加一个和为负数的数列。
Hint 5: 你可以在O(N)时间复杂度和O(1)空间复杂度内解决此问题。

```

## Description (English)

Given an integer array, find the contiguous sequence with the largest total sum and return that sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: the subarray [4,-1,2,1] has the largest sum 6.

Follow-up: if you already have an O(n) solution, try divide and conquer.

## 思路

Kadane O(n)/O(1)：`cur = max(cur + x, x)`——前缀和为负则弃置重启（负前缀对后续只减不增），全负数组退化为最大单元素（子数组须非空）。

## Solution

[SourceCode](./solution.js)
