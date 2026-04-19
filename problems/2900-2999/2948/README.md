# [2948] Make Lexicographically Smallest Array by Swapping Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/description/)

* algorithms
* Medium (60.23%)
* Likes:    974
* Dislikes: 79
* Testcase Example:  '[1,5,3,9,8]\n2'

```md
You are given a 0-indexed array of positive integers nums and a positive integer limit.
In one operation, you can choose any two indices i and j and swap nums[i] and nums[j] if
nums[i] - nums[j]
<= limit.
Return the lexicographically smallest array that can be obtained by performing the operation any number of times.
An array a is lexicographically smaller than an array b if in the first position where a and b differ, array a has an element that is less than the corresponding element in b. For example, the array [2,10,3] is lexicographically smaller than the array [10,2,3] because they differ at index 0 and 2 < 10.

Example 1:

Input: nums = [1,5,3,9,8], limit = 2
Output: [1,3,5,8,9]
Explanation: Apply the operation 2 times:
- Swap nums[1] with nums[2]. The array becomes [1,3,5,9,8]
- Swap nums[3] with nums[4]. The array becomes [1,3,5,8,9]
We cannot obtain a lexicographically smaller array by applying any more operations.
Note that it may be possible to get the same result by doing different operations.

Example 2:

Input: nums = [1,7,6,18,2,1], limit = 3
Output: [1,6,7,18,1,2]
Explanation: Apply the operation 3 times:
- Swap nums[1] with nums[2]. The array becomes [1,6,7,18,2,1]
- Swap nums[0] with nums[4]. The array becomes [2,6,7,18,1,1]
- Swap nums[0] with nums[5]. The array becomes [1,6,7,18,1,2]
We cannot obtain a lexicographically smaller array by applying any more operations.

Example 3:

Input: nums = [1,7,28,19,10], limit = 3
Output: [1,7,28,19,10]
Explanation: [1,7,28,19,10] is the lexicographically smallest array we can obtain because we cannot apply the operation on any two indices.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= limit <= 109


```

## 题目翻译

给定数组 nums 和 limit，可交换 |nums[i]-nums[j]| <= limit 的任意两个元素。求操作后字典序最小的数组。

## 解题思路

将元素按值排序，差值连续 <= limit 的归为一组（连通分量）。同一组内的元素可以任意交换，因此将组内元素排序后放回原位置（最小值放到组内最小的位置）。

具体做法：按值排序后，用贪心分组（相邻差 <= limit 的在同一组）。每组记录原始索引和值，组内值排序后按索引从小到大填入。

时间复杂度 O(n log n)

## Solution

[SourceCode](./solution.js)
