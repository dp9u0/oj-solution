# [219] Contains Duplicate II

## Description

* algorithms
* Easy (34.14%)
* Total Accepted:    173.4K
* Total Submissions: 508K
* Testcase Example:  '[1,2,3,1]\n3'

```md
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

```

## Solution

这个问题是在说 `nums[i]===nums[j] && i - j <= k`

[SourceCode](./solution.js)