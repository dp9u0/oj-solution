# [2834] Find the Minimum Possible Sum of a Beautiful Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/description/)

* algorithms
* Medium (35.08%)
* Likes:    316
* Dislikes: 59
* Testcase Example:  '2\n3'

```md
You are given positive integers n and target.
An array nums is beautiful if it meets the following conditions:

nums.length == n.
nums consists of pairwise distinct positive integers.
There doesn&#39;t exist two distinct indices, i and j, in the range [0, n - 1], such that nums[i] + nums[j] == target.

Return the minimum possible sum that a beautiful array could have modulo 109 + 7.

Example 1:

Input: n = 2, target = 3
Output: 4
Explanation: We can see that nums = [1,3] is beautiful.
- The array nums has length n = 2.
- The array nums consists of pairwise distinct positive integers.
- There doesn&#39;t exist two distinct indices, i and j, with nums[i] + nums[j] == 3.
It can be proven that 4 is the minimum possible sum that a beautiful array could have.

Example 2:

Input: n = 3, target = 3
Output: 8
Explanation: We can see that nums = [1,3,4] is beautiful.
- The array nums has length n = 3.
- The array nums consists of pairwise distinct positive integers.
- There doesn&#39;t exist two distinct indices, i and j, with nums[i] + nums[j] == 3.
It can be proven that 8 is the minimum possible sum that a beautiful array could have.

Example 3:

Input: n = 1, target = 1
Output: 1
Explanation: We can see, that nums = [1] is beautiful.


Constraints:

1 <= n <= 109
1 <= target <= 109


```

## 中文翻译

给定 n 和 target，构造长度为 n 的互不相同正整数数组，使得不存在两个不同下标的元素之和等于 target。求最小可能的元素之和，对 10^9+7 取模。

## 解题思路

贪心 + 数学。集合 {1, 2, ..., floor(target/2)} 内部无冲突（任意两数之和 < target）。先用这些数，剩余的数从 target 开始递增（这些数之间也不会冲突，因为和 > 2*target）。

用等差数列求和公式计算，BigInt 避免溢出。

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
