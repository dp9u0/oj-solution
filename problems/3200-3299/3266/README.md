# [3266] Final Array State After K Multiplication Operations II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/description/)

* algorithms
* Hard (13.16%)
* Likes:    179
* Dislikes: 24
* Testcase Example:  '[2,1,3,5,6]\n5\n2'

```md
You are given an integer array nums, an integer k, and an integer multiplier.
You need to perform k operations on nums. In each operation:

Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
Replace the selected minimum value x with x * multiplier.

After the k operations, apply modulo 109 + 7 to every value in nums.
Return an integer array denoting the final state of nums after performing all k operations and then applying the modulo.

Example 1:

Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
Output: [8,4,6,5,6]
Explanation:



Operation
Result


After operation 1
[2, 2, 3, 5, 6]


After operation 2
[4, 2, 3, 5, 6]


After operation 3
[4, 4, 3, 5, 6]


After operation 4
[4, 4, 6, 5, 6]


After operation 5
[8, 4, 6, 5, 6]


After applying modulo
[8, 4, 6, 5, 6]




Example 2:

Input: nums = [100000,2000], k = 2, multiplier = 1000000
Output: [999999307,999999993]
Explanation:



Operation
Result


After operation 1
[100000, 2000000000]


After operation 2
[100000000000, 2000000000]


After applying modulo
[999999307, 999999993]





Constraints:

1 <= nums.length <= 104
1 <= nums[i] <= 109
1 <= k <= 109
1 <= multiplier <= 106


```

## 翻译

给定数组 nums、整数 k 和 multiplier。执行 k 次操作：每次找最小值（相同取最前），替换为 x * multiplier。最后对所有值取模 10^9+7，返回最终数组。

## 解题思路

k 可达 10^9，不能逐次模拟。用最小堆模拟直到每个元素至少被乘一次（最多 n 轮），之后所有元素被轮流乘，按循环均匀分配剩余次数。最后用快速幂计算每个元素的最终值。

1. 用最小堆模拟前 min(k, n*log(maxVal)) 次操作，直到最小值乘过后不再是最小（或 k 用完）。
2. 剩余 k 次均匀分配：每个元素分到 k/n 次，前 k%n 个多分一次。
3. 用 powMod 计算最终值并取模。

## Solution

[SourceCode](./solution.js)
