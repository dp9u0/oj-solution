# [2537] Count the Number of Good Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-good-subarrays/description/)

* algorithms
* Medium (65.94%)
* Likes:    1572
* Dislikes: 59
* Testcase Example:  '[1,1,1,1,1]\n10'

```md
Given an integer array nums and an integer k, return the number of good subarrays of nums.
A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1,1,1], k = 10
Output: 1
Explanation: The only good subarray is the array nums itself.

Example 2:

Input: nums = [3,1,4,3,2,2,4], k = 2
Output: 4
Explanation: There are 4 different good subarrays:
- [3,1,4,3,2,2] that has 2 pairs.
- [3,1,4,3,2,2,4] that has 3 pairs.
- [1,4,3,2,2,4] that has 2 pairs.
- [4,3,2,2,4] that has 2 pairs.


Constraints:

1 <= nums.length <= 105
1 <= nums[i], k <= 109


```

## 翻译

统计有多少个子数组满足：其中至少有 k 对 (i,j) 满足 i<j 且 arr[i]==arr[j]。

## 解题思路

滑动窗口。固定右端 r，找最小的左端 l 使得 [l..r] 中相同元素对数 >= k。则以 r 为右端的好子数组有 l+1 个（左端可以取 0..l）。用 cnt map 跟踪每个值出现次数，pairs = sum of C(cnt[v], 2)。O(n)。

## Solution

[SourceCode](./solution.js)
