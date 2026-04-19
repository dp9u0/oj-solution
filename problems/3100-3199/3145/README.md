# [3145] Find Products of Elements of Big Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-products-of-elements-of-big-array/description/)

* algorithms
* Hard (24.60%)
* Likes:    62
* Dislikes: 18
* Testcase Example:  '[[1,3,7]]'

```md
The powerful array of a non-negative integer x is defined as the shortest sorted array of powers of two that sum up to x. The table below illustrates examples of how the powerful array is determined. It can be proven that the powerful array of x is unique.



num
Binary Representation
powerful array


1
00001
[1]


8
01000
[8]


10
01010
[2, 8]


13
01101
[1, 4, 8]


23
10111
[1, 2, 4, 16]



The array big_nums is created by concatenating the powerful arrays for every positive integer i in ascending order: 1, 2, 3, and so on. Thus, big_nums begins as [1, 2, 1, 2, 4, 1, 4, 2, 4, 1, 2, 4, 8, ...].
You are given a 2D integer matrix queries, where for queries[i] = [fromi, toi, modi] you should calculate (big_nums[fromi] * big_nums[fromi + 1] * ... * big_nums[toi]) % modi.
Return an integer array answer such that answer[i] is the answer to the ith query.

Example 1:

Input: queries = [[1,3,7]]
Output: [4]
Explanation:
There is one query.
big_nums[1..3] = [2,1,2]. The product of them is 4. The result is 4 % 7 = 4.

Example 2:

Input: queries = [[2,5,3],[7,7,4]]
Output: [2,2]
Explanation:
There are two queries.
First query: big_nums[2..5] = [1,2,4,1]. The product of them is 8. The result is 8 % 3 = 2.
Second query: big_nums[7] = 2. The result is 2 % 4 = 2.


Constraints:

1 <= queries.length <= 500
queries[i].length == 3
0 <= queries[i][0] <= queries[i][1] <= 1015
1 <= queries[i][2] <= 105


```

## 题目翻译

定义 "powerful array" 为整数 x 的二进制表示中所有为 1 的位对应的 2 的幂（按升序排列）。将所有正整数的 powerful array 拼接成 big_nums。对每个查询 [from, to, mod]，求 big_nums[from..to] 的乘积对 mod 取模。

## 解题思路

**位计数 + 二分查找 + 快速幂**

由于 big_nums 中的元素都是 2 的幂，乘积 = 2^(指数之和)。关键是高效计算前缀指数和 S(k)。

1. countBit(n, b)：计算 [1..n] 中第 b 位为 1 的个数（经典位计数公式）
2. totalCount(n) = 所有位的 countBit 之和 = [1..n] 的总置位数
3. totalSumExp(n) = Σ b * countBit(n, b) = [1..n] 所有置位的位位置之和
4. 对 S(k)：二分查找 n 使 totalCount(n) <= k，加上 n+1 的部分贡献
5. 答案 = 2^(S(to+1) - S(from)) % mod

时间 O(Q * log(k) * 60)，k <= 10^15。

## Solution

[SourceCode](./solution.js)
