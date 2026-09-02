# [LCR 162] 数字 1 的个数

## Description


```md
https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/description/
* algorithms
* Hard (50.42%)
* Likes:    479
* Dislikes: -
* Testcase Example:  '0'
给定一个整数 num，计算所有小于等于 num 的非负整数中数字 1 出现的个数。

示例 1：
输入：num = 0
输出：0
示例 2：
输入：num = 13
输出：6

提示：
0 <= num < 109
注意：本题与主站 233 题相同：https://leetcode.cn/problems/number-of-digit-one/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an integer `num`, count the number of digit `1`s appearing in all non-negative integers `<= num`.

**Example 1:** `num = 0` → `0`
**Example 2:** `num = 13` → `6` (1,10,11,12,13 → digit 1s)

**Constraints:** `0 <= num < 10^9`. Note: same as LeetCode 233.

---

## Approach

Count digit by digit by place value. For each `factor = 10^k`:

- `high = floor(num / (factor*10))`, `cur = digit at place k`, `low = num % factor`.
- Number of `1`s in that place over `0..num` = `high * factor + extra`, where `extra` is `0` if `cur < 1`, `low + 1` if `cur == 1`, `factor` if `cur > 1`.

Sum over all place values.

Complexity: `O(digits)`.
