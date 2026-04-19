# [3671] Sum of Beautiful Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-beautiful-subsequences/description/)

* algorithms
* Hard (31.51%)
* Likes:    36
* Dislikes: 5
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums of length n.
For every positive integer g, we define the beauty of g as the product of g and the number of strictly increasing subsequences of nums whose greatest common divisor (GCD) is exactly g.
Return the sum of beauty values for all positive integers g.
Since the answer could be very large, return it modulo 109 + 7.

Example 1:

Input: nums = [1,2,3]
Output: 10
Explanation:
All strictly increasing subsequences and their GCDs are:



Subsequence
GCD




[1]
1


[2]
2


[3]
3


[1,2]
1


[1,3]
1


[2,3]
1


[1,2,3]
1



Calculating beauty for each GCD:



GCD
Count of subsequences
Beauty (GCD &times; Count)




1
5
1 &times; 5 = 5


2
1
2 &times; 1 = 2


3
1
3 &times; 1 = 3



Total beauty is 5 + 2 + 3 = 10.

Example 2:

Input: nums = [4,6]
Output: 12
Explanation:
All strictly increasing subsequences and their GCDs are:



Subsequence
GCD




[4]
4


[6]
6


[4,6]
2



Calculating beauty for each GCD:



GCD
Count of subsequences
Beauty (GCD &times; Count)




2
1
2 &times; 1 = 2


4
1
4 &times; 1 = 4


6
1
6 &times; 1 = 6



Total beauty is 2 + 4 + 6 = 12.


Constraints:

1 <= n == nums.length <= 104
1 <= nums[i] <= 7 * 104


```

## 中文翻译

给定数组 nums，对每个正整数 g，定义 beauty(g) = g * (GCD 恰好为 g 的严格递增子序列个数)。返回所有 beauty 之和 mod 10^9+7。

约束：n <= 10^4, nums[i] <= 70000

## 解题思路

**GCD 倍数容斥 + BIT 计数**

1. f[g] = 所有元素都可被 g 整除的严格递增子序列数（即 GCD 是 g 的倍数的子序列数）。
2. 对每个 g，筛选 nums 中可被 g 整除的元素，用 BIT 按值域维护递增子序列计数。
3. 莫比乌斯容斥：exact[g] = f[g] - sum_{m > g, g|m} exact[m]，从大到小计算。
4. 答案 = sum of g * exact[g]。
5. 预处理：对每个元素枚举其所有因子，分入对应 g 的列表。总元素数 O(n * d(maxVal)) ≈ 300K。

## Solution

[SourceCode](./solution.js)
