# [LCR 177] 撞色搭配

## Description


```md
https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/description/
* algorithms
* Medium (68.91%)
* Likes:    894
* Dislikes: -
* Testcase Example:  '[4,5,2,4,6,6]'
整数数组 sockets 记录了一个袜子礼盒的颜色分布情况，其中 sockets[i] 表示该袜子的颜色编号。礼盒中除了一款撞色搭配的袜子，每种颜色的袜子均有两只。请设计一个程序，在时间复杂度 O(n)，空间复杂度O(1) 内找到这双撞色搭配袜子的两个颜色编号。

示例 1：
输入：sockets = [4, 5, 2, 4, 6, 6]
输出：[2,5] 或 [5,2]
示例 2：
输入：sockets = [1, 2, 4, 1, 4, 3, 12, 3]
输出：[2,12] 或 [12,2]

提示：
2 <= sockets.length <= 10000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The integer array `sockets` records the color distribution of a sock gift box, where `sockets[i]` is the color number of the i-th sock. In the box, every color appears exactly **twice**, except one "clashing" pair — two socks of different colors that each appear once. Design a program to find the two color numbers of this clashing pair, in `O(n)` time and `O(1)` space.

**Example 1:** Input `sockets = [4,5,2,4,6,6]` → Output `[2,5]` (order irrelevant)
**Example 2:** Input `sockets = [1,2,4,1,4,3,12,3]` → Output `[2,12]` (order irrelevant)

**Constraints:** `2 <= sockets.length <= 10^4`.

---

## Approach

Two numbers `a`, `b` appear once; all others appear twice. Standard bit trick:

1. `x = XOR of all numbers` → since pairs cancel, `x = a ^ b`, and `x != 0`.
2. Pick any set bit of `x` (e.g. lowest set bit). `a` and `b` differ at this bit, so partition the array into those with the bit set vs not. Within each partition every duplicate stays together, and each partition contains exactly one of `a`/`b`.
3. XOR each partition separately to recover `a` and `b`.

Complexity: `O(n)` time, `O(1)` space.
