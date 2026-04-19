# [3698] Split Array With Minimum Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-array-with-minimum-difference/description/)

* algorithms
* Medium (33.60%)
* Likes:    103
* Dislikes: 16
* Testcase Example:  '[1,3,2]'

```md
You are given an integer array nums.
Split the array into exactly two subarrays, left and right, such that left is strictly increasing  and right is strictly decreasing.
Return the minimum possible absolute difference between the sums of left and right. If no valid split exists, return -1.

Example 1:

Input: nums = [1,3,2]
Output: 2
Explanation:



i
left
right
Validity
left sum
right sum
Absolute difference




0
[1]
[3, 2]
Yes
1
5

1 - 5
= 4


1
[1, 3]
[2]
Yes
4
2

4 - 2
= 2



Thus, the minimum absolute difference is 2.

Example 2:

Input: nums = [1,2,4,3]
Output: 4
Explanation:



i
left
right
Validity
left sum
right sum
Absolute difference




0
[1]
[2, 4, 3]
No
1
9
-


1
[1, 2]
[4, 3]
Yes
3
7

3 - 7
= 4


2
[1, 2, 4]
[3]
Yes
7
3

7 - 3
= 4



Thus, the minimum absolute difference is 4.

Example 3:

Input: nums = [3,1,2]
Output: -1
Explanation:
No valid split exists, so the answer is -1.


Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 翻译

将数组分成左右两个子数组，left严格递增，right严格递减。求左右子数组和的最小绝对差，不存在则返回-1。

## 解题思路

预处理：leftInc[i]表示nums[0..i]是否严格递增，rightDec[i]表示nums[i..n-1]是否严格递减。同时预处理前缀和prefix。枚举分割点i（left=nums[0..i], right=nums[i+1..n-1]），若leftInc[i]且rightDec[i+1]则有效，更新最小差值。

## Solution

[SourceCode](./solution.js)
