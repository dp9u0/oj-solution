# [248] 中心对称数 III

## Description


```md
https://leetcode.cn/problems/strobogrammatic-number-iii/description/
* algorithms
* Hard (50.25%)
* Likes:    75
* Dislikes: -
* Testcase Example:  '"50"\n"100"'
给定两个字符串 low 和 high 表示两个整数 low 和 high ，其中 low <= high ，返回 范围 [low, high] 内的 「中心对称数」总数  。
中心对称数 是一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。

示例 1:
输入: low = "50", high = "100"
输出: 3
示例 2:
输入: low = "0", high = "0"
输出: 1

提示:
1 <= low.length, high.length <= 15
low 和 high 只包含数字
low <= high
low and high 不包含任何前导零，除了零本身。

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given two numeric strings `low` and `high`, return the count of strobogrammatic numbers in the range [low, high] inclusive.

**Example:**
low = "50", high = "100" → 3 (69, 88, 96)

**Constraints:**
- len(low) == len(high), 1 <= len <= 15, no leading zeros, low <= high

## Approach

复用 247 的递归包裹生成器,按长度 len ∈ [len(low), len(high)] 生成全部无前导零的中心对称数,逐个与 low/high 做字符串数值比较(同长时字典序即数值序;异长按位数)计数。

时间 O(5^(n/2) × n),n = len(high);生成量最大约 6 万(15 位),可行。
