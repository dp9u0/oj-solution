# [LCR 126] 斐波那契数

## Description


```md
https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/description/
* algorithms
* Easy (35.52%)
* Likes:    559
* Dislikes: -
* Testcase Example:  '2'
斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给定 n ，请计算 F(n) 。
答案需要取模 1e9+7(1000000007) ，如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：
输入：n = 3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：
输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3

提示：
0 <= n <= 100

```

## Description (English)

The Fibonacci numbers, commonly denoted `F(n)`, form a sequence called the Fibonacci sequence. The sequence starts with `0` and `1`, and each subsequent number is the sum of the previous two numbers. That is:

```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1
```

Given `n`, calculate `F(n)`.

The answer must be taken modulo `1e9+7 (1000000007)`. For example, if the initial result is `1000000008`, return `1`.

**Example 1:**
```
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
```

**Example 2:**
```
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2
```

**Example 3:**
```
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
```

**Constraints:**
```
0 <= n <= 100
```

## Solution Approach

- 采用**迭代法**计算斐波那契数列，时间复杂度 O(n)，空间复杂度 O(1)。
- 用两个变量 `a`、`b` 分别记录 `F(i-2)` 和 `F(i-1)`，从 `i = 2` 迭代到 `n`，每次 `F(i) = (a + b) % MOD`，再滚动更新 `a = b`、`b = F(i)`。
- 每次加法后取模 `1e9+7`，避免结果溢出，并满足题意。

## Solution

[SourceCode](./solution.js)
