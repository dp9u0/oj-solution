# [975] Odd Even Jump

## Description

[LeetCode Problem Description](https://leetcode.com/problems/odd-even-jump/description/)

* algorithms
* Hard (41.51%)
* Likes:    2128
* Dislikes: 534
* Testcase Example:  '[10,13,12,14,15]'

```md
You are given an integer array arr. From some starting index, you can make a series of jumps. The (1st, 3rd, 5th, ...) jumps in the series are called odd-numbered jumps, and the (2nd, 4th, 6th, ...) jumps in the series are called even-numbered jumps. Note that the jumps are numbered, not the indices.
You may jump forward from index i to index j (with i < j) in the following way:
During odd-numbered jumps (i.e., jumps 1, 3, 5, ...), you jump to the index j such that arr[i] <= arr[j] and arr[j] is the smallest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
During even-numbered jumps (i.e., jumps 2, 4, 6, ...), you jump to the index j such that arr[i] >= arr[j] and arr[j] is the largest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
It may be the case that for some index i, there are no legal jumps.
A starting index is good if, starting from that index, you can reach the end of the array (index arr.length - 1) by jumping some number of times (possibly 0 or more than once).
Return the number of good starting indices.

Example 1:
Input: arr = [10,13,12,14,15]
Output: 2
Explanation:
From starting index i = 0, we can make our 1st jump to i = 2 (since arr[2] is the smallest among arr[1], arr[2], arr[3], arr[4] that is greater or equal to arr[0]), then we cannot jump any more.
From starting index i = 1 and i = 2, we can make our 1st jump to i = 3, then we cannot jump any more.
From starting index i = 3, we can make our 1st jump to i = 4, so we have reached the end.
From starting index i = 4, we have reached the end already.
In total, there are 2 different starting indices i = 3 and i = 4, where we can reach the end with some number of
jumps.
Example 2:
Input: arr = [2,3,1,1,4]
Output: 3
Explanation:
From starting index i = 0, we make jumps to i = 1, i = 2, i = 3:
During our 1st jump (odd-numbered), we first jump to i = 1 because arr[1] is the smallest value in [arr[1], arr[2], arr[3], arr[4]] that is greater than or equal to arr[0].
During our 2nd jump (even-numbered), we jump from i = 1 to i = 2 because arr[2] is the largest value in [arr[2], arr[3], arr[4]] that is less than or equal to arr[1]. arr[3] is also the largest value, but 2 is a smaller index, so we can only jump to i = 2 and not i = 3
During our 3rd jump (odd-numbered), we jump from i = 2 to i = 3 because arr[3] is the smallest value in [arr[3], arr[4]] that is greater than or equal to arr[2].
We can't jump from i = 3 to i = 4, so the starting index i = 0 is not good.
In a similar manner, we can deduce that:
From starting index i = 1, we jump to i = 4, so we reach the end.
From starting index i = 2, we jump to i = 3, and then we can't jump anymore.
From starting index i = 3, we jump to i = 4, so we reach the end.
From starting index i = 4, we are already at the end.
In total, there are 3 different starting indices i = 1, i = 3, and i = 4, where we can reach the end with some
number of jumps.
Example 3:
Input: arr = [5,1,3,4,2]
Output: 3
Explanation: We can reach the end from starting indices 1, 2, and 4.

Constraints:
1 <= arr.length <= 2 * 104
0 <= arr[i] < 105

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个整数数组 `arr`。从某个起始索引出发，可以进行一系列跳跃。系列中的第 1、3、5、… 次跳跃称为「奇数跳跃」，第 2、4、6、… 次跳跃称为「偶数跳跃」。注意：跳跃的编号指的是第几次跳，不是索引的奇偶。

从索引 `i` 向前跳到索引 `j`（`i < j`）的规则如下：

- **奇数跳跃**（第 1、3、5、… 次）：跳到满足 `arr[i] <= arr[j]` 且 `arr[j]` 尽可能小的索引 `j`；若有多个这样的 `j`，只能跳到其中索引最小的那个。
- **偶数跳跃**（第 2、4、6、… 次）：跳到满足 `arr[i] >= arr[j]` 且 `arr[j]` 尽可能大的索引 `j`；若有多个这样的 `j`，只能跳到其中索引最小的那个。

某些索引可能不存在合法跳跃。

如果一个起始索引是「好索引」，意味着从该索引出发，可以通过若干次跳跃（可以是 0 次）到达数组末尾（索引 `arr.length - 1`）。

返回好起始索引的数量。

**示例 1**：`arr = [10,13,12,14,15]` → 输出 `2`（只有 i = 3 和 i = 4 可以到达末尾）。

**示例 2**：`arr = [2,3,1,1,4]` → 输出 `3`（i = 1、3、4 可以到达末尾）。

**示例 3**：`arr = [5,1,3,4,2]` → 输出 `3`（i = 1、2、4 可以到达末尾）。

**约束**：`1 <= arr.length <= 2 * 10^4`，`0 <= arr[i] < 10^5`。

## 解题思路

从每个起点出发，跳跃序列是**完全确定**的（奇数跳和偶数跳的目标唯一），所以问题可以拆成两部分：

### 1. 预处理每个位置 i 的两个跳转目标

- `oddNext[i]`：从 i 做奇数跳到达的索引（值 >= arr[i] 的最小值，同值取最小索引），不存在为 -1。
- `evenNext[i]`：从 i 做偶数跳到达的索引（值 <= arr[i] 的最大值，同值取最小索引），不存在为 -1。

用「排序 + 单调栈」在 O(n log n) 内求出：

- 求 `oddNext`：将所有索引按（值升序，索引升序）排序后依次处理，维护一个索引单调递减的栈。处理新索引 j 时，把栈中所有小于 j 的索引 i 弹出并令 `oddNext[i] = j`（它们值 <= arr[j] 且 j 是当前值最小的合法目标），再压入 j。
- 求 `evenNext`：同理，只是按（值降序，索引升序）排序。

排序时同值按索引升序，恰好满足「同值取最小目标索引」的平局规则。

### 2. 从后往前 DP

- `odd[i]`：位于 i 且下一步是奇数跳时能否到达末尾。
- `even[i]`：位于 i 且下一步是偶数跳时能否到达末尾。

转移：`odd[i] = oddNext[i] !== -1 && even[oddNext[i]]`；`even[i] = evenNext[i] !== -1 && odd[evenNext[i]]`。边界 `odd[n-1] = even[n-1] = true`。

由于从任何起点出发的第一跳都是奇数跳，答案为 `odd[i] === true` 的个数。

复杂度：时间 O(n log n)，空间 O(n)。
