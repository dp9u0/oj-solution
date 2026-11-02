# [4097] 合并整数后的最小值

## Description


```md
https://leetcode.cn/problems/minimum-value-of-merged-integers/description/
* algorithms
* Easy (66.84%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[23,55,42,21]'
给你一个长度为偶数 n 的整数数组 nums。
你需要将 nums 中的元素两两合并：将 nums[0] 与 nums[1] 合并，将 nums[2] 与 nums[3] 合并，依此类推，直到将 nums[n - 2] 与 nums[n - 1] 合并。
返回所有合并后得到的整数中的最小值。
合并两个整数，是指将第二个整数的所有十进制数位拼接在第一个整数的所有十进制数位之后。

示例 1：
输入： nums = [23,55,42,21]
输出： 2355
解释：
将 nums[0] = 23 与 nums[1] = 55 合并，得到 2355。
将 nums[2] = 42 与 nums[3] = 21 合并，得到 4221。
合并后得到的整数中的最小值为 min(2355, 4221) = 2355。
示例 2：
输入： nums = [34,7,11,11]
输出： 347
解释：
将 nums[0] = 34 与 nums[1] = 7 合并，得到 347。
将 nums[2] = 11 与 nums[3] = 11 合并，得到 1111。
合并后得到的整数中的最小值为 min(347, 1111) = 347。
示例 3：
输入： nums = [9,20]
输出： 920
解释：
将 nums[0] = 9 与 nums[1] = 20 合并，得到 920。
合并后只有一个整数，因此最小值为 920。

提示：
2 <= n == nums.length <= 100
n 为偶数
1 <= nums[i] <= 1000
Hint 1: 1a (Strings): For each consecutive pair, concatenate their decimal string representations and convert the result to an integer. Return the smallest result.
Hint 2: 2a (Arithmetic): If the second integer b has d digits, merging it after a gives a * 10d + b. Evaluate this for every required pair.

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given an integer array `nums` of even length `n`. You need to merge the elements of `nums` in pairs: merge `nums[0]` with `nums[1]`, merge `nums[2]` with `nums[3]`, and so on, until merging `nums[n - 2]` with `nums[n - 1]`. Return the minimum among all resulting merged integers.

Merging two integers means appending all decimal digits of the second integer after all decimal digits of the first integer.

Constraints: 2 <= n <= 100 (n is even); 1 <= nums[i] <= 1000.

## Approach

模拟。对每一对 (a, b)：设 b 的十进制位数为 d（即 10^(d-1) ≤ b < 10^d），合并结果为 a * 10^d + b。取所有对的最小值即可。b ≥ 1 无前导零问题。时间复杂度 O(n)。
