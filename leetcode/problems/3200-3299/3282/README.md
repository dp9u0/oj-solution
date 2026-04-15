# [3282] Reach End of Array With Max Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reach-end-of-array-with-max-score/description/)

* algorithms
* Medium (33.56%)
* Likes:    229
* Dislikes: 16
* Testcase Example:  '[1,3,1,5]'

```md
You are given an integer array nums of length n.
Your goal is to start at index 0 and reach index n - 1. You can only jump to indices greater than your current index.
The score for a jump from index i to index j is calculated as (j - i) * nums[i].
Return the maximum possible total score by the time you reach the last index.

Example 1:

Input: nums = [1,3,1,5]
Output: 7
Explanation:
First, jump to index 1 and then jump to the last index. The final score is 1 * 1 + 2 * 3 = 7.

Example 2:

Input: nums = [4,3,1,3,2]
Output: 16
Explanation:
Jump directly to the last index. The final score is 4 * 4 = 16.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 中文翻译

给定数组 nums，从下标 0 跳到下标 n-1，只能向前跳。跳跃得分 = (j-i) * nums[i]。求最大总得分。

## 解题思路

贪心。将一段跳跃拆分时，若中间位置 j 的值 > 起点值，则拆分更优；否则不拆更优。因此只在遇到严格更大的值时才起跳（或到达终点）。维护当前锚点，扫描到更大值或末尾时结算跳跃得分。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
