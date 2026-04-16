# [1574] Shortest Subarray to be Removed to Make Array Sorted

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/description/)

* algorithms
* Medium (51.27%)
* Likes:    2463
* Dislikes: 164
* Testcase Example:  '[1,2,3,10,4,2,3,5]'

```md
Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.
Return the length of the shortest subarray to remove.
A subarray is a contiguous subsequence of the array.

Example 1:

Input: arr = [1,2,3,10,4,2,3,5]
Output: 3
Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
Another correct solution is to remove the subarray [3,10,4].

Example 2:

Input: arr = [5,4,3,2,1]
Output: 4
Explanation: Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].

Example 3:

Input: arr = [1,2,3]
Output: 0
Explanation: The array is already non-decreasing. We do not need to remove any elements.


Constraints:

1 <= arr.length <= 105
0 <= arr[i] <= 109


```

## 中文翻译

给定数组 arr，删除一个连续子数组使剩余元素非递减。求最短删除长度。

## 解题思路

双指针。找最长非递减前缀 arr[0..l] 和后缀 arr[r..n-1]。初始答案为删后缀或前缀。然后用双指针尝试合并：对每个前缀位置 i，在后缀中找最小 j 使得 arr[j] >= arr[i]，更新 ans = min(ans, j-i-1)。

## Solution

[SourceCode](./solution.js)
