# [1846] Maximum Element After Decreasing and Rearranging

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/description/)

* algorithms
* Medium (65.73%)
* Likes:    1136
* Dislikes: 278
* Testcase Example:  '[2,2,1,2,1]'

```md
You are given an array of positive integers arr. Perform some operations (possibly none) on arr so that it satisfies these conditions:

The value of the first element in arr must be 1.
The absolute difference between any 2 adjacent elements must be less than or equal to 1. In other words, abs(arr[i] - arr[i - 1]) <= 1 for each i where 1 <= i < arr.length (0-indexed). abs(x) is the absolute value of x.

There are 2 types of operations that you can perform any number of times:

Decrease the value of any element of arr to a smaller positive integer.
Rearrange the elements of arr to be in any order.

Return the maximum possible value of an element in arr after performing the operations to satisfy the conditions.

Example 1:

Input: arr = [2,2,1,2,1]
Output: 2
Explanation:
We can satisfy the conditions by rearranging arr so it becomes [1,2,2,2,1].
The largest element in arr is 2.

Example 2:

Input: arr = [100,1,1000]
Output: 3
Explanation:
One possible way to satisfy the conditions is by doing the following:
1. Rearrange arr so it becomes [1,100,1000].
2. Decrease the value of the second element to 2.
3. Decrease the value of the third element to 3.
Now arr = [1,2,3], which satisfies the conditions.
The largest element in arr is 3.

Example 3:

Input: arr = [1,2,3,4,5]
Output: 5
Explanation: The array already satisfies the conditions, and the largest element is 5.


Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 109


```

## 中文翻译

给定正整数数组 arr，可以执行两种操作（任意次数）：减小任意元素、重排数组。使得 arr[0]=1 且相邻元素差不超过 1。返回满足条件后数组中元素的最大可能值。

## 解题思路

排序 + 贪心。排序后，arr[0] 必须为 1，之后每个位置 arr[i] 最多为 arr[i-1]+1。贪心地让每个位置尽可能大：arr[i] = min(arr[i], arr[i-1]+1)。最终答案为 arr[n-1]。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
