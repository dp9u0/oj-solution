# [2354] Number of Excellent Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-excellent-pairs/description/)

* algorithms
* Hard (49.09%)
* Likes:    620
* Dislikes: 25
* Testcase Example:  '[1,2,3,1]\n3'

```md
You are given a 0-indexed positive integer array nums and a positive integer k.
A pair of numbers (num1, num2) is called excellent if the following conditions are satisfied:

Both the numbers num1 and num2 exist in the array nums.
The sum of the number of set bits in num1 OR num2 and num1 AND num2 is greater than or equal to k, where OR is the bitwise OR operation and AND is the bitwise AND operation.

Return the number of distinct excellent pairs.
Two pairs (a, b) and (c, d) are considered distinct if either a != c or b != d. For example, (1, 2) and (2, 1) are distinct.
Note that a pair (num1, num2) such that num1 == num2 can also be excellent if you have at least one occurrence of num1 in the array.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: 5
Explanation: The excellent pairs are the following:
- (3, 3). (3 AND 3) and (3 OR 3) are both equal to (11) in binary. The total number of set bits is 2 + 2 = 4, which is greater than or equal to k = 3.
- (2, 3) and (3, 2). (2 AND 3) is equal to (10) in binary, and (2 OR 3) is equal to (11) in binary. The total number of set bits is 1 + 2 = 3.
- (1, 3) and (3, 1). (1 AND 3) is equal to (01) in binary, and (1 OR 3) is equal to (11) in binary. The total number of set bits is 1 + 2 = 3.
So the number of excellent pairs is 5.
Example 2:

Input: nums = [5,1,1], k = 10
Output: 0
Explanation: There are no excellent pairs for this array.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 60


```

## 翻译

给定正整数数组 nums 和正整数 k。一对数 (num1, num2) 是"优秀的"如果 popcount(num1 OR num2) + popcount(num1 AND num2) >= k。返回不同优秀对的数量（(a,b) 和 (b,a) 算不同的对）。

## Approach

关键性质：popcount(a OR b) + popcount(a AND b) = popcount(a) + popcount(b)（集合的并+交 = 各自之和）。

因此条件简化为 popcount(num1) + popcount(num2) >= k。

1. 去重 nums
2. 计算每个唯一值的 popcount，排序
3. 双指针：对每个 i，找最小的 j 使得 bits[i] + bits[j] >= k，计数 n - j
4. 总和即为答案

时间复杂度 O(n log n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
