# [454] 4Sum II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/4sum-ii/description/)

* algorithms
* Medium (57.90%)
* Likes:    5083
* Dislikes: 151
* Testcase Example:  '[1,2]\n[-2,-1]\n[-1,2]\n[0,2]'

```md
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0


Example 1:

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

Example 2:

Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1


Constraints:

n == nums1.length
n == nums2.length
n == nums3.length
n == nums4.length
1 <= n <= 200
-228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228


```

## 翻译

给定四个长度均为 n 的整数数组 `nums1`、`nums2`、`nums3`、`nums4`，返回满足以下条件的元组 `(i, j, k, l)` 的个数：

- `0 <= i, j, k, l < n`
- `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`

## Approach

经典分组哈希：将四个数组分成两组（nums1+nums2, nums3+nums4）。先用哈希表统计 nums1[i]+nums2[j] 的所有和及其出现次数，然后遍历 nums3[k]+nums4[l] 的和，查找其相反数在哈希表中的出现次数并累加。

时间复杂度：O(n²)，空间复杂度：O(n²)。

## Solution

[SourceCode](./solution.js)
