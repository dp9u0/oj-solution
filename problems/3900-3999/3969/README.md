# [3969] Valid Subarrays With Matching Sum Digits I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-subarrays-with-matching-sum-digits-i/description/)

* algorithms
* Medium (46.30%)
* Likes:    49
* Dislikes: 4
* Testcase Example:  '[1,100,1]\n1'

```md
You are given an integer array nums and an integer digit x.
A subarray nums[l..r] is considered valid if the sum of its elements satisfies both of the following conditions:

The first digit of the sum is equal to x.
The last digit of the sum is equal to x.

Return the number of valid subarrays.

Example 1:

Input: nums = [1,100,1], x = 1
Output: 4
Explanation:
The valid subarrays are:

nums[0..0]: sum = 1
nums[0..1]: sum = 1 + 100 = 101
nums[1..2]: sum = 100 + 1 = 101
nums[2..2]: sum = 1

Thus, the answer is 4.

Example 2:

Input: nums = [1], x = 2
Output: 0
Explanation:
The only subarray is nums[0..0] with a sum of 1, which does not satisfy the conditions.
Thus, the answer is 0.


Constraints:

1 <= nums.length <= 1500
1 <= nums[i] <= 109
1 <= x <= 9


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个整数数组 nums 和一个整数 x。如果子数组 nums[l..r] 的元素之和同时满足以下两个条件，则称其为有效子数组：

- 和的首位数字等于 x
- 和的末位数字等于 x

返回有效子数组的数量。

示例 1：nums = [1,100,1], x = 1 → 输出 4（子数组 [1]、[101]、[101]、[1]）
示例 2：nums = [1], x = 2 → 输出 0

约束：1 <= nums.length <= 1500；1 <= nums[i] <= 10^9；1 <= x <= 9

## 解题思路

前缀和 + 枚举。

1. 构建前缀和数组 prefix（最大约 1500 * 1e9 = 1.5e12，远小于 2^53，安全，无需 BigInt）。
2. 双重循环枚举所有 O(n²) 个子数组（n=1500 时约 112 万个，可接受）。
3. 对每个子数组和 sum：先检查末位 `sum % 10 !== x` 直接跳过（约 9/10 的候选被快速排除，避免昂贵的首位计算）；末位匹配后再用除 10 循环求首位验证。

复杂度：时间 O(n² · d)（d 为数字位数，仅末位匹配时才计算），空间 O(n)。
