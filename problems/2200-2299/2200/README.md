# [2200] Find All K-Distant Indices in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/description/)

* algorithms
* Easy (77.37%)
* Likes:    811
* Dislikes: 137
* Testcase Example:  '[3,4,9,1,3,9,5]\n9\n1'

```md
You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that
i - j
<= k and nums[j] == key.
Return a list of all k-distant indices sorted in increasing order.

Example 1:

Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
Output: [1,2,3,4,5,6]
Explanation: Here, nums[2] == key and nums[5] == key.
- For index 0,
0 - 2
> k and
0 - 5
> k, so there is no j where
0 - j
<= k and nums[j] == key. Thus, 0 is not a k-distant index.
- For index 1,
1 - 2
<= k and nums[2] == key, so 1 is a k-distant index.
- For index 2,
2 - 2
<= k and nums[2] == key, so 2 is a k-distant index.
- For index 3,
3 - 2
<= k and nums[2] == key, so 3 is a k-distant index.
- For index 4,
4 - 5
<= k and nums[5] == key, so 4 is a k-distant index.
- For index 5,
5 - 5
<= k and nums[5] == key, so 5 is a k-distant index.
- For index 6,
6 - 5
<= k and nums[5] == key, so 6 is a k-distant index.
Thus, we return [1,2,3,4,5,6] which is sorted in increasing order.

Example 2:

Input: nums = [2,2,2,2,2], key = 2, k = 2
Output: [0,1,2,3,4]
Explanation: For all indices i in nums, there exists some index j such that
i - j
<= k and nums[j] == key, so every index is a k-distant index.
Hence, we return [0,1,2,3,4].


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000
key is an integer from the array nums.
1 <= k <= nums.length


```

## 中文翻译

给定数组 nums、整数 key 和 k，找出所有满足条件的索引 i：存在某个索引 j 使得 |i-j| <= k 且 nums[j] == key。按递增顺序返回。

## 解题思路

先收集所有 nums[j]==key 的索引 j，然后对每个 j 将 [j-k, j+k] 范围内的索引标记为 k-distant，最后收集所有被标记的索引。

## Solution

[SourceCode](./solution.js)
