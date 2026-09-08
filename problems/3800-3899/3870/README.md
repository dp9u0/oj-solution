# [3870] 统计范围内的逗号

## Description


```md
https://leetcode.cn/problems/count-commas-in-range/description/
* algorithms
* Easy (69.94%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '1002'
给你一个整数 n。
返回将所有从 [1, n]（包含两端）范围内的整数以 标准 数字格式书写时所用到的 逗号总数。
在 标准 格式中：
从右边开始，每 三位 数字后插入一个逗号。
位数 少于四位 的数字不包含逗号。

示例 1：
输入： n = 1002
输出： 3
解释：
数字 "1,000"、"1,001" 和 "1,002" 每个都包含一个逗号，总计 3 个逗号。
示例 2：
输入： n = 998
输出： 0
解释：
从 1 到 998 的所有数字位数都少于四位，因此没有使用逗号。

提示：
1 <= n <= 105
Hint 1: Numbers in the range [1000, 100000] have one comma.

```

## Solution

[SourceCode](./solution.js)

## English Translation

**3870. Count Commas in Range**

Given an integer `n`, return the total number of commas used when writing all integers in the range `[1, n]` (inclusive) in **standard** number format.

In standard format:

- A comma is inserted every three digits, starting from the right.
- Numbers with fewer than four digits contain no commas.

Example 1:

- Input: `n = 1002`
- Output: `3`
- Explanation: The numbers `"1,000"`, `"1,001"`, and `"1,002"` each contain one comma, for a total of 3 commas.

Example 2:

- Input: `n = 998`
- Output: `0`
- Explanation: All numbers from 1 to 998 have fewer than four digits, so no commas are used.

Constraints: `1 <= n <= 10^5`

## Approach

Since `n <= 10^5 = 100000` (6 digits at most):

- Numbers with fewer than 4 digits (`1..999`) contribute 0 commas.
- Numbers with 4, 5, or 6 digits (`1000..100000`) each contain exactly one comma, because `floor((d-1)/3)` equals 1 for `d = 4, 5, 6` (e.g. `"9,999"`, `"99,999"`, `"100,000"`).

So the answer is simply the count of integers in `[1000, n]`, i.e. `max(0, n - 999)`.

Time: O(1), Space: O(1).
