# [2784] Check if Array is Good

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-array-is-good/description/)

* algorithms
* Easy (48.80%)
* Likes:    316
* Dislikes: 54
* Testcase Example:  '[2, 1, 3]'

```md
You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].
base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].
Return true if the given array is good, otherwise return false.
Note: A permutation of integers represents an arrangement of these numbers.

Example 1:

Input: nums = [2, 1, 3]
Output: false
Explanation: Since the maximum element of the array is 3, the only candidate n for which this array could be a permutation of base[n], is n = 3. However, base[3] has four elements but array nums has three. Therefore, it can not be a permutation of base[3] = [1, 2, 3, 3]. So the answer is false.

Example 2:

Input: nums = [1, 3, 3, 2]
Output: true
Explanation: Since the maximum element of the array is 3, the only candidate n for which this array could be a permutation of base[n], is n = 3. It can be seen that nums is a permutation of base[3] = [1, 2, 3, 3] (by swapping the second and fourth elements in nums, we reach base[3]). Therefore, the answer is true.
Example 3:

Input: nums = [1, 1]
Output: true
Explanation: Since the maximum element of the array is 1, the only candidate n for which this array could be a permutation of base[n], is n = 1. It can be seen that nums is a permutation of base[1] = [1, 1]. Therefore, the answer is true.
Example 4:

Input: nums = [3, 4, 4, 1, 2, 1]
Output: false
Explanation: Since the maximum element of the array is 4, the only candidate n for which this array could be a permutation of base[n], is n = 4. However, base[4] has five elements but array nums has six. Therefore, it can not be a permutation of base[4] = [1, 2, 3, 4, 4]. So the answer is false.


Constraints:

1 <= nums.length <= 100
1 <= num[i] <= 200


```

## 中文翻译

给定整数数组 nums，判断它是否是 base[n] 的排列。base[n] = [1, 2, ..., n-1, n, n]，即长度为 n+1，包含 1 到 n-1 各一次，n 出现两次。

## 解题思路

找到最大值 n，检查：数组长度是否为 n+1，每个 1 到 n-1 恰好出现一次，n 恰好出现两次。

## Solution

[SourceCode](./solution.js)
