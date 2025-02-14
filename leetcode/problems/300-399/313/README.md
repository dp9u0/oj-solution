# [313] Super Ugly Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/super-ugly-number/description/)

* algorithms
* Medium (45.39%)
* Likes:    2215
* Dislikes: 399
* Testcase Example:  '12\n[2,7,13,19]'

```md
A super ugly number is a positive integer whose prime factors are in the array primes.
Given an integer n and an array of integers primes, return the nth super ugly number.
The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

Example 1:

Input: n = 12, primes = [2,7,13,19]
Output: 32
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].

Example 2:

Input: n = 1, primes = [2,3,5]
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].


Constraints:

1 <= n <= 105
1 <= primes.length <= 100
2 <= primes[i] <= 1000
primes[i] is guaranteed to be a prime number.
All the values of primes are unique and sorted in ascending order.


```

## 中文题目描述

超级丑数是一个正整数，它的所有质因数都出现在数组 primes 中。
给你一个整数 n 和一个整数数组 primes ，返回第 n 个超级丑数。
题目保证第 n 个超级丑数在 32 位有符号整数范围内。

示例 1：

输入：n = 12, primes = [2,7,13,19]
输出：32
解释：给定长度为 4 的质数数组 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32]

示例 2：

输入：n = 1, primes = [2,3,5]
输出：1
解释：1 没有质因数，因此它的所有质因数都在质数数组 primes = [2,3,5] 中。

提示：

1 <= n <= 105
1 <= primes.length <= 100
2 <= primes[i] <= 1000
题目保证 primes[i] 是一个质数
primes 中的所有值都 互不相同 ，且按 递增顺序 排列


## 解题思路

这道题可以使用动态规划的思想来解决。关键点如下：

1. 初始化：
   - 第一个超级丑数一定是1
   - 需要为每个质数维护一个指针，指向当前质数下一个要相乘的丑数的位置

2. 生成过程：
   - 对于每个质数p，下一个可能的丑数是 dp[pointer[p]] * p
   - 在所有可能的丑数中选择最小的作为下一个丑数
   - 更新产生最小丑数的质数对应的指针

3. 具体步骤：
   - 创建一个数组dp来存储丑数，dp[0] = 1
   - 创建一个指针数组pointer，长度为primes.length，初始值都为0
   - 循环n-1次，每次：
     1. 计算每个质数与其指针指向的丑数的乘积
     2. 选择最小的乘积作为新的丑数
     3. 将产生最小乘积的质数的指针加1

4. 时间复杂度分析：
   - 总共需要生成n个丑数
   - 每次生成需要遍历primes数组找最小值
   - 总时间复杂度：O(n * k)，其中k是primes数组的长度

5. 空间复杂度：
   - dp数组：O(n)
   - pointer数组：O(k)
   - 总空间复杂度：O(n + k)

示例演示（以primes=[2,7,13,19]为例）：
```
初始：dp[0] = 1
第1次：2*1=2, 7*1=7, 13*1=13, 19*1=19 => dp[1] = 2
第2次：2*2=4, 7*1=7, 13*1=13, 19*1=19 => dp[2] = 4
第3次：2*4=8, 7*1=7, 13*1=13, 19*1=19 => dp[3] = 7
...以此类推
```

这种方法的优势是可以有效避免重复计算和排序，直接按顺序生成所需的超级丑数。

## Solution

[SourceCode](./solution.js)