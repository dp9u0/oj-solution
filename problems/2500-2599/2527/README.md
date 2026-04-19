# [2527] Find Xor-Beauty of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-xor-beauty-of-array/description/)

* algorithms
* Medium (70.64%)
* Likes:    394
* Dislikes: 58
* Testcase Example:  '[1,4]'

```md
You are given a 0-indexed integer array nums.
The effective value of three indices i, j, and k is defined as ((nums[i]
nums[j]) &amp; nums[k]).
The xor-beauty of the array is the XORing of the effective values of all the possible triplets of indices (i, j, k) where 0 <= i, j, k < n.
Return the xor-beauty of nums.
Note that:

val1
val2 is bitwise OR of val1 and val2.
val1 &amp; val2 is bitwise AND of val1 and val2.


Example 1:

Input: nums = [1,4]
Output: 5
Explanation:
The triplets and their corresponding effective values are listed below:
- (0,0,0) with effective value ((1
1) &amp; 1) = 1
- (0,0,1) with effective value ((1
1) &amp; 4) = 0
- (0,1,0) with effective value ((1
4) &amp; 1) = 1
- (0,1,1) with effective value ((1
4) &amp; 4) = 4
- (1,0,0) with effective value ((4
1) &amp; 1) = 1
- (1,0,1) with effective value ((4
1) &amp; 4) = 4
- (1,1,0) with effective value ((4
4) &amp; 1) = 0
- (1,1,1) with effective value ((4
4) &amp; 4) = 4
Xor-beauty of array will be bitwise XOR of all beauties = 1 ^ 0 ^ 1 ^ 4 ^ 1 ^ 4 ^ 0 ^ 4 = 5.
Example 2:

Input: nums = [15,45,20,2,34,35,5,44,32,30]
Output: 34
Explanation: The xor-beauty of the given array is 34.


Constraints:

1 <= nums.length<= 105
1 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个 0-indexed 整数数组 `nums`，三个索引 i, j, k 的有效值定义为 `((nums[i] | nums[j]) & nums[k])`。数组的 xor-beauty 是所有可能的三元组 (i, j, k) 的有效值的 XOR 结果。返回数组的 xor-beauty。

**示例 1：** nums = [1,4] → 5
**示例 2：** nums = [15,45,20,2,34,35,5,44,32,30] → 34

**约束：** 1 <= nums.length <= 10^5, 1 <= nums[i] <= 10^9

## Approach

数学推导：展开所有三元组的有效值 XOR 后，可以证明结果等于所有元素的 XOR。

推导：对于最终结果的每个 bit 位 b：
- ((nums[i] | nums[j]) & nums[k]) 的 bit b 为 1 当且仅当 nums[k] 的 bit b 为 1 且 (nums[i] | nums[j]) 的 bit b 为 1
- 经过 XOR 求和后，(i,j) 对有 n^2 个，当 n 为偶数时 XOR 抵消为 0
- 最终化简为：每个 bit 位的结果等于所有 nums[k] 该位的 XOR
- 因此答案 = nums[0] ^ nums[1] ^ ... ^ nums[n-1]

时间复杂度 O(n)，空间复杂度 O(1)。
