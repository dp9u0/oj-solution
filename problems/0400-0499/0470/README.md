# [470] Implement Rand10() Using Rand7()

## Description

[LeetCode Problem Description](https://leetcode.com/problems/implement-rand10-using-rand7/description/)

* algorithms
* Medium (46.66%)
* Likes:    1187
* Dislikes: 389
* Testcase Example:  '1'

```md
Given the API rand7() that generates a uniform random integer in the range [1, 7], write a function rand10() that generates a uniform random integer in the range [1, 10]. You can only call the API rand7(), and you shouldn&#39;t call any other API. Please do not use a language&#39;s built-in random API.
Each test case will have one internal argument n, the number of times that your implemented function rand10() will be called while testing. Note that this is not an argument passed to rand10().

Example 1:
Input: n = 1
Output: [2]
Example 2:
Input: n = 2
Output: [2,8]
Example 3:
Input: n = 3
Output: [3,8,10]


Constraints:

1 <= n <= 105


Follow up:

What is the expected value for the number of calls to rand7() function?
Could you minimize the number of calls to rand7()?


```

## Solution

[SourceCode](./solution.js)

## 题目描述（中文翻译）

给定 API `rand7()`，它可以生成 `[1, 7]` 范围内的均匀随机整数。请编写函数 `rand10()`，生成 `[1, 10]` 范围内的均匀随机整数。

你只能调用 `rand7()` 这个 API，不能调用其他任何 API，也不能使用语言内置的随机 API。

每个测试用例有一个内部参数 `n`，表示测试时 `rand10()` 被调用的次数。注意这不是传给 `rand10()` 的参数。

进阶：
- `rand7()` 调用次数的期望值是多少？
- 你能尽量减少 `rand7()` 的调用次数吗？

## 解题思路

**拒绝采样（Rejection Sampling）+ 拒绝值复用**

核心思想：

1. **两次调用构造均匀分布**：`(rand7() - 1) * 7 + rand7()` 通过"7 进制"组合，得到 `[1, 49]` 上完全均匀的整数分布（49 = 7 × 7 种等概率组合）。

2. **拒绝采样**：`[1, 49]` 中只取 `[1, 40]`（40 是 10 的倍数中不超过 49 的最大值），超出部分拒绝重来。对 `[1, 40]` 的值取 `(r - 1) % 10 + 1`，每个结果恰好对应 4 个原值，概率均匀。

3. **复用被拒绝的值（减少期望调用次数）**：
   - 被拒绝的 `[41, 49]` 共 9 个值本身也是均匀的，写成 `a = r - 41 ∈ [0, 8]`，再拼一次 `a * 7 + rand7()` 得到 `[0, 62]` 均匀分布，取 `[0, 59]`（60 是 10 的倍数），返回 `value % 10 + 1`。
   - 剩下 `[60, 62]` 共 3 个值继续以同样方式复用：`a * 7 + rand7()` 得到 `[0, 20]`，取 `[0, 19]`……循环往复。
   - 这样把"浪费"的熵逐步回收，期望调用次数从朴素版约 2.45 次降到约 2.21 次。

**期望调用次数分析**（进阶问题答案）：设一轮以概率 p 接受、失败时消耗 2 次调用并递归。逐层计算可得总期望约为 **2.21 次**（朴素拒绝采样为 2 / (40/49) = 2.45 次）。
