# [4039] Sum of Decoded Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-decoded-numbers/description/)

* algorithms
* Medium (43.99%)
* Likes:    16
* Dislikes: 3
* Testcase Example:  '[231]'

```md
You are given an integer array nums.
Each nums[i] is an encoded integer representing two positive integers xi and yi. To decode nums[i], define:
widthi = nums[i] % 10.
di = floor(nums[i] / 10).
xi as the integer formed by the first widthi digits of the decimal representation of di.
yi as the integer formed by all remaining digits of the decimal representation of di.
It is guaranteed that the decimal representation of di contains more than widthi digits. Therefore, both xi and yi contain at least one digit.
The decoded value of nums[i] is xiyi.
Return the sum of the decoded values of all elements in nums, modulo 109 + 7.
The floor() function returns the integer part of the division.

Example 1:
Input: nums = [231]
Output: 8
Explanation:
For 231, we have width = 1, d = 23, x = 2, and y = 3.
The decoded value of 231 is 23 = 8.
Since there is only one element in nums, the sum of the decoded values is 8.
Example 2:
Input: nums = [2522,2101]
Output: 1649
Explanation:
For 2522, we have width = 2, d = 252, x = 25, and y = 2.
The decoded value of 2522 is 252 = 625.
For 2101, we have width = 1, d = 210, x = 2, and y = 10.
The decoded value of 2101 is 210 = 1024.
The sum of the decoded values is 625 + 1024 = 1649.
Example 3:
Input: nums = [2301]
Output: 73741817
Explanation:
For 2301, we have width = 1, d = 230, x = 2, and y = 30.
The decoded value is 230 = 1073741824.
Therefore, the answer is 1073741824 modulo (109 + 7) = 73741817.

Constraints:
1 <= nums.length <= 105
100 < nums[i] < 1015
1 <= widthi <= 9
1 <= xi, yi < 109
The digit sequences used to form xi and yi do not have leading zeros.
It is guaranteed that every element in nums is a valid encoded integer.
Hint 1: After removing the final digit widthi, determine the power of 10 that separates the first widthi decimal digits of di from the remaining digits.
Hint 2: Once xi and yi are decoded, use binary exponentiation to compute xiyi modulo 109 + 7.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个整数数组 `nums`。

每个 `nums[i]` 是一个编码后的整数，代表两个正整数 `xi` 和 `yi`。解码 `nums[i]` 的定义如下：

- `widthi = nums[i] % 10`
- `di = floor(nums[i] / 10)`
- `xi` 是 `di` 的十进制表示的前 `widthi` 位数字所组成的整数
- `yi` 是 `di` 的十进制表示中其余所有数字所组成的整数

保证 `di` 的十进制表示的位数多于 `widthi`，因此 `xi` 和 `yi` 都至少包含一位数字。

`nums[i]` 的解码值为 `xi^yi`（x 的 y 次方）。

返回所有元素解码值之和，并对 `10^9 + 7` 取模。

`floor()` 函数返回除法的整数部分。

**示例 1：**
输入：`nums = [231]`
输出：`8`
解释：对于 231，width = 1，d = 23，x = 2，y = 3。解码值为 2^3 = 8。数组只有一个元素，所以总和为 8。

**示例 2：**
输入：`nums = [2522, 2101]`
输出：`1649`
解释：对于 2522，width = 2，d = 252，x = 25，y = 2，解码值为 25^2 = 625。对于 2101，width = 1，d = 210，x = 2，y = 10，解码值为 2^10 = 1024。总和为 625 + 1024 = 1649。

**示例 3：**
输入：`nums = [2301]`
输出：`73741817`
解释：对于 2301，width = 1，d = 230，x = 2，y = 30。解码值为 2^30 = 1073741824。对 10^9 + 7 取模后得到 73741817。

**约束：**
- `1 <= nums.length <= 10^5`
- `100 < nums[i] < 10^15`
- `1 <= widthi <= 9`
- `1 <= xi, yi < 10^9`
- 组成 `xi` 和 `yi` 的数字序列没有前导零
- 保证 `nums` 中每个元素都是合法的编码整数

## 解题思路

1. **拆分编码**：对每个 `num`，`width = num % 10`，`d = floor(num / 10)`。设 `len` 为 `d` 的十进制位数，则分隔幂次 `p = 10^(len - width)`，于是 `x = floor(d / p)`（前 `width` 位），`y = d % p`（剩余位）。
2. **快速幂取模**：解码值为 `x^y mod (10^9 + 7)`。由于 `x, y` 可达 `10^9` 量级，直接乘法会溢出 `Number` 的安全整数范围（乘积约 `10^18 > 2^53`），因此用 BigInt 实现迭代式二进制快速幂（每轮平方 + 按需乘底数，约 30 轮）。
3. **求和取模**：把每个解码值累加到结果上，最终对 `10^9 + 7` 取模返回。

复杂度：时间 `O(n · log y)`（每个元素约 30 次大数乘法），空间 `O(1)`。
