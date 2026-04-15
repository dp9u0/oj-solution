# [2012] Sum of Beauty in the Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-beauty-in-the-array/description/)

* algorithms
* Medium (51.26%)
* Likes:    686
* Dislikes: 79
* Testcase Example:  '[1,2,3]'

```md
You are given a 0-indexed integer array nums. For each index i (1 <= i <= nums.length - 2) the beauty of nums[i] equals:

2, if nums[j] < nums[i] < nums[k], for all 0 <= j < i and for all i < k <= nums.length - 1.
1, if nums[i - 1] < nums[i] < nums[i + 1], and the previous condition is not satisfied.
0, if none of the previous conditions holds.

Return the sum of beauty of all nums[i] where 1 <= i <= nums.length - 2.

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation: For each index i in the range 1 <= i <= 1:
- The beauty of nums[1] equals 2.

Example 2:

Input: nums = [2,4,6,4]
Output: 1
Explanation: For each index i in the range 1 <= i <= 2:
- The beauty of nums[1] equals 1.
- The beauty of nums[2] equals 0.

Example 3:

Input: nums = [3,2,1]
Output: 0
Explanation: For each index i in the range 1 <= i <= 1:
- The beauty of nums[1] equals 0.


Constraints:

3 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 题目翻译

给定数组 nums，对每个 i（1 <= i <= n-2），beauty 值为：
- 2：nums[i] 大于左边所有元素且小于右边所有元素
- 1：不满足上述条件但满足 nums[i-1] < nums[i] < nums[i+1]
- 0：其他情况
求所有 beauty 值之和。

## 解题思路

预处理前缀最大值和后缀最小值数组。对每个 i，如果 prefixMax[i-1] < nums[i] < suffixMin[i+1] 则 beauty=2，否则如果 nums[i-1] < nums[i] < nums[i+1] 则 beauty=1。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
