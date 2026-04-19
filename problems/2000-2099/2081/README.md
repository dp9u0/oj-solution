# [2081] Sum of k-Mirror Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-k-mirror-numbers/description/)

* algorithms
* Hard (63.69%)
* Likes:    430
* Dislikes: 210
* Testcase Example:  '2\n5'

```md
A k-mirror number is a positive integer without leading zeros that reads the same both forward and backward in base-10 as well as in base-k.

For example, 9 is a 2-mirror number. The representation of 9 in base-10 and base-2 are 9 and 1001 respectively, which read the same both forward and backward.
On the contrary, 4 is not a 2-mirror number. The representation of 4 in base-2 is 100, which does not read the same both forward and backward.

Given the base k and the number n, return the sum of the n smallest k-mirror numbers.

Example 1:

Input: k = 2, n = 5
Output: 25
Explanation:
The 5 smallest 2-mirror numbers and their representations in base-2 are listed as follows:
base-10    base-2
1          1
3          11
5          101
7          111
9          1001
Their sum = 1 + 3 + 5 + 7 + 9 = 25.

Example 2:

Input: k = 3, n = 7
Output: 499
Explanation:
The 7 smallest 3-mirror numbers are and their representations in base-3 are listed as follows:
base-10    base-3
1          1
2          2
4          11
8          22
121        11111
151        12121
212        21212
Their sum = 1 + 2 + 4 + 8 + 121 + 151 + 212 = 499.

Example 3:

Input: k = 7, n = 17
Output: 20379000
Explanation: The 17 smallest 7-mirror numbers are:
1, 2, 3, 4, 5, 6, 8, 121, 171, 242, 292, 16561, 65656, 2137312, 4602064, 6597956, 6958596


Constraints:

2 <= k <= 9
1 <= n <= 30


```

## 中文翻译

k-mirror 数是指在十进制和 k 进制下都是回文数的正整数（无前导零）。
例如 9 是 2-mirror 数，因为 9 在十进制是 9，二进制是 1001，都是回文。
给定基数 k 和数字 n，返回最小的 n 个 k-mirror 数之和。

约束：2 <= k <= 9，1 <= n <= 30

## 解题思路

**生成十进制回文数 + k 进制回文校验**

1. 按长度从小到大生成十进制回文数：先枚举奇数长度，再枚举偶数长度。
2. 对每个十进制回文数，检查其 k 进制表示是否也是回文。
3. 收集到 n 个为止，求和。

生成方法：对于长度 L，枚举前半部分数字，镜像生成回文数。按数字大小顺序生成即可保证有序。

## Solution

[SourceCode](./solution.js)
