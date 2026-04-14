# [2680] Maximum OR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-or/description/)

* algorithms
* Medium (42.90%)
* Likes:    423
* Dislikes: 50
* Testcase Example:  '[12,9]\n1'

```md
You are given a 0-indexed integer array nums of length n and an integer k. In an operation, you can choose an element and multiply it by 2.
Return the maximum possible value of nums[0]
nums[1]
...
nums[n - 1] that can be obtained after applying the operation on nums at most k times.
Note that a
b denotes the bitwise or between two integers a and b.

Example 1:

Input: nums = [12,9], k = 1
Output: 30
Explanation: If we apply the operation to index 1, our new array nums will be equal to [12,18]. Thus, we return the bitwise or of 12 and 18, which is 30.

Example 2:

Input: nums = [8,1,2], k = 2
Output: 35
Explanation: If we apply the operation twice on index 0, we yield a new array of [32,1,2]. Thus, we return 32
1
2 = 35.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 15


```

## 翻译

给定数组 nums 和整数 k。最多 k 次操作，每次选一个元素乘以 2（左移 1 位）。返回操作后所有元素按位或的最大值。

## Approach

前缀/后缀 OR + 枚举。最优策略是将所有 k 次操作集中在同一个元素上（因为 OR 操作中，将一个数左移 k 位比分散操作更有利于产生新的高位 1）。

1. 计算前缀 OR 数组 prefix[i] = nums[0] | ... | nums[i-1]
2. 计算后缀 OR 数组 suffix[i] = nums[i+1] | ... | nums[n-1]
3. 枚举每个元素 i 作为被操作的目标：结果 = prefix[i] | (nums[i] << k) | suffix[i]
4. 取最大值

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
