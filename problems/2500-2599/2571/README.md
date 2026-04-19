# [2571] Minimum Operations to Reduce an Integer to 0

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/description/)

* algorithms
* Medium (61.88%)
* Likes:    633
* Dislikes: 201
* Testcase Example:  '39'

```md
You are given a positive integer n, you can do the following operation any number of times:

Add or subtract a power of 2 from n.

Return the minimum number of operations to make n equal to 0.
A number x is power of 2 if x == 2iwhere i >= 0.

Example 1:

Input: n = 39
Output: 3
Explanation: We can do the following operations:
- Add 20 = 1 to n, so now n = 40.
- Subtract 23 = 8 from n, so now n = 32.
- Subtract 25 = 32 from n, so now n = 0.
It can be shown that 3 is the minimum number of operations we need to make n equal to 0.

Example 2:

Input: n = 54
Output: 3
Explanation: We can do the following operations:
- Add 21 = 2 to n, so now n = 56.
- Add 23 = 8 to n, so now n = 64.
- Subtract 26 = 64 from n, so now n = 0.
So the minimum number of operations is 3.


Constraints:

1 <= n <= 105


```

## 中文翻译

给定正整数 n，每次操作可以加或减一个 2 的幂。求将 n 变为 0 的最少操作次数。

## 解题思路

**NAF（非相邻形式）贪心：**

1. 从低位到高位处理，看最低两位：
   - `01`（n%4==1）：减 1，操作 +1
   - `11`（n%4==3）：加 1 进位，操作 +1（进位后连续 1 变成更高位的单个 1）
   - `0`：直接右移
2. 本质是求 n 的最小权重有符号二进制表示（NAF）

时间复杂度：O(log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
