# [3954] Sum of Compatible Numbers in Range I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-compatible-numbers-in-range-i/description/)

* algorithms
* Easy (59.00%)
* Likes:    37
* Dislikes: 2
* Testcase Example:  '2\n3'

```md
You are given two integers n and k.
A positive integer x is called compatible if it satisfies both of the following conditions:

abs(n - x) <= k
(n &amp; x) == 0

Return the sum of all compatible integers x.
Note:

Here, &amp; denotes the bitwise AND operator.
The absolute difference between integers i and j is defined as abs(i - j).


Example 1:

Input: n = 2, k = 3
Output: 10
Explanation:
The compatible integers are:

x = 1, since abs(2 - 1) = 1 and 2 &amp; 1 = 0.
x = 4, since abs(2 - 4) = 2 and 2 &amp; 4 = 0.
x = 5, since abs(2 - 5) = 3 and 2 &amp; 5 = 0.

Thus, the answer is 1 + 4 + 5 = 10.

Example 2:

Input: n = 5, k = 1
Output: 0
Explanation:
There are no compatible integers in the range [4, 6]. Thus, the answer is 0.


Constraints:

1 <= n <= 100
1 <= k <= 100


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你两个整数 n 和 k。

如果一个正整数 x 同时满足以下两个条件，则称它是「兼容的」：

- abs(n - x) <= k
- (n & x) == 0

返回所有兼容整数 x 的和。

说明：

- 这里 & 表示按位与运算符。
- 整数 i 和 j 之间的绝对差定义为 abs(i - j)。

示例 1：

输入：n = 2, k = 3
输出：10
解释：兼容的整数有：
- x = 1，因为 abs(2 - 1) = 1 且 2 & 1 = 0。
- x = 4，因为 abs(2 - 4) = 2 且 2 & 4 = 0。
- x = 5，因为 abs(2 - 5) = 3 且 2 & 5 = 0。
因此答案为 1 + 4 + 5 = 10。

示例 2：

输入：n = 5, k = 1
输出：0
解释：区间 [4, 6] 中没有兼容的整数，因此答案为 0。

约束：

- 1 <= n <= 100
- 1 <= k <= 100

## 解题思路

由条件 `abs(n - x) <= k` 可知 x 只能落在区间 `[n - k, n + k]` 内（且 x 为正整数，下界取 max(1, n - k)）。

由于 n, k <= 100，候选 x 至多 200 个，直接遍历该区间，逐个检查 `(n & x) == 0`，累加满足条件的 x 即可。

- 时间复杂度：O(k)
- 空间复杂度：O(1)
