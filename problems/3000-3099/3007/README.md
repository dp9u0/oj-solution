# [3007] Maximum Number That Sum of the Prices Is Less Than or Equal to K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/description/)

* algorithms
* Medium (38.56%)
* Likes:    348
* Dislikes: 131
* Testcase Example:  '9\n1'

```md
You are given an integer k and an integer x. The price of a numbernum is calculated by the count of set bits at positions x, 2x, 3x, etc., in its binary representation, starting from the least significant bit. The following table contains examples of how price is calculated.



x
num
Binary Representation
Price


1
13
000001101
3


2
13
000001101
1


2
233
011101001
3


3
13
000001101
1


3
362
101101010
2



Theaccumulated priceofnumis the totalprice ofnumbers from 1 to num. numis consideredcheapif its accumulated priceis less than or equal to k.
Return the greatestcheap number.

Example 1:

Input: k = 9, x = 1
Output: 6
Explanation:
As shown in the table below, 6 is the greatest cheap number.



x
num
Binary Representation
Price
Accumulated Price


1
1
001
1
1


1
2
010
1
2


1
3
011
2
4


1
4
100
1
5


1
5
101
2
7


1
6
110
2
9


1
7
111
3
12




Example 2:

Input: k = 7, x = 2
Output: 9
Explanation:
As shown in the table below, 9 is the greatest cheap number.



x
num
Binary Representation
Price
Accumulated Price


2
1
0001
0
0


2
2
0010
1
1


2
3
0011
1
2


2
4
0100
0
2


2
5
0101
0
2


2
6
0110
1
3


2
7
0111
1
4


2
8
1000
1
5


2
9
1001
1
6


2
10
1010
2
8





Constraints:

1 <= k <= 1015
1 <= x <= 8


```

## 中文翻译

给定 k 和 x。数字 num 的"价格"为其二进制中第 x, 2x, 3x, ... 位（从 LSB 起 1-indexed）为 1 的个数。"累积价格"为 1 到 num 所有数字价格之和。求最大的 num 使得累积价格 ≤ k。

## 解题思路

二分查找 + 按位统计。对于每个相关位位置 p，统计 1 到 num 中该位为 1 的个数：完整周期贡献 + 余数贡献。用 BigInt 避免溢出。

时间复杂度：O((60/x) * log(maxVal))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
