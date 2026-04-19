# [3621] Number of Integers With Popcount-Depth Equal to K I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-i/description/)

* algorithms
* Hard (22.49%)
* Likes:    53
* Dislikes: 5
* Testcase Example:  '4\n1'

```md
You are given two integers n and k.
For any positive integer x, define the following sequence:

p0 = x
pi+1 = popcount(pi) for all i >= 0, where popcount(y) is the number of set bits (1&#39;s) in the binary representation of y.

This sequence will eventually reach the value 1.
The popcount-depth of x is defined as the smallest integer d >= 0 such that pd = 1.
For example, if x = 7 (binary representation '111'). Then, the sequence is: 7 &rarr; 3 &rarr; 2 &rarr; 1, so the popcount-depth of 7 is 3.
Your task is to determine the number of integers in the range [1, n] whose popcount-depth is exactly equal to k.
Return the number of such integers.

Example 1:

Input: n = 4, k = 1
Output: 2
Explanation:
The following integers in the range [1, 4] have popcount-depth exactly equal to 1:



x
Binary
Sequence




2
'10'
2 &rarr; 1


4
'100'
4 &rarr; 1



Thus, the answer is 2.

Example 2:

Input: n = 7, k = 2
Output: 3
Explanation:
The following integers in the range [1, 7] have popcount-depth exactly equal to 2:



x
Binary
Sequence




3
'11'
3 &rarr; 2 &rarr; 1


5
'101'
5 &rarr; 2 &rarr; 1


6
'110'
6 &rarr; 2 &rarr; 1



Thus, the answer is 3.


Constraints:

1 <= n <= 1015
0 <= k <= 5


```

## 题目翻译

给定 n 和 k，统计 [1, n] 中 popcount-depth 恰好为 k 的整数个数。popcount-depth 是对 x 反复取 popcount 到达 1 的步数。

## 解题思路

**组合计数 + Digit DP**

关键观察：depth(x) = 1 + depth(popcount(x))（x > 1），popcount(x) ∈ [1, 50]。预处理 depth[1..50]，找所有 depth(v) = k-1 的目标值 v，然后对每个 v 用组合数统计 [2, n] 中 popcount 恰好为 v 的数（按二进制位逐位计数）。k=0 时只有 x=1。O(50 * log(n)) 时间。

## Solution

[SourceCode](./solution.js)
