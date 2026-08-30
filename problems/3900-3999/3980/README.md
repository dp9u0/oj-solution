# [3980] Minimum Operations to Transform Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-transform-binary-string/description/)

* algorithms
* Medium (36.75%)
* Likes:    60
* Dislikes: 4
* Testcase Example:  '"11"\n"00"'

```md
You are given two binary strings s1 and s2 of the same length n.
You can perform the following operations on s1 any number of times, in any order:
Choose an index i such that s1[i] == '0', and change it to '1'.
Choose an index i such that 0
Return the minimum number of operations required to make s1 equal to s2. If it is impossible, return -1.

Example 1:
Input: s1 = "11", s2 = "00"
Output: 1
Explanation:
Change indices 0 and 1 from '1' to '0' in one operation, so "11" becomes "00". Thus, the answer is 1.
Example 2:
Input: s1 = "01", s2 = "10"
Output: 3
Explanation:
Change index 0 from '0' to '1', so "01" becomes "11".
Change indices 0 and 1 from '1' to '0', so "11" becomes "00".
Change index 0 from '0' to '1', so "00" becomes "10".
Thus, the answer is 3.
Example 3:
Input: s1 = "1", s2 = "0"
Output: -1
Explanation:
The first operation cannot change '1' to '0', and the second operation requires two adjacent characters. Therefore, it is impossible.

Constraints:
1
s1 and s2 consist only of '0' and '1'.
Hint 1: The first operation is the only way to change a '0' into a '1'.
Hint 2: The second operation is the only way to change a '1' into a '0', but it affects two adjacent positions at once.
Hint 3: Use dynamic programming from left to right. When processing position i, keep enough information to know whether position i has already been affected by an operation involving position i - 1.
Hint 4: For each position, either make it match directly, or use the second operation on the pair (i, i + 1) after making both characters '1' if necessary.
Hint 5: Handle the case n == 1 separately, since the second operation cannot be used.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你两个长度相同的二进制字符串 s1 和 s2（长度为 n）。

你可以对 s1 执行以下操作任意次、顺序任意：

1. 选择一个下标 i 满足 s1[i] == '0'，将其变成 '1'。
2. 选择一个下标 i 满足 0 <= i < n-1 且 s1[i] 和 s1[i+1] 都是 '1'，将这两个字符同时变成 '0'。

返回使 s1 等于 s2 的最少操作次数；如果不可能，返回 -1。

示例 1：s1 = "11", s2 = "00" → 输出 1（一次操作 2 把相邻两个 '1' 同时变 '0'）。
示例 2：s1 = "01", s2 = "10" → 输出 3。
示例 3：s1 = "1", s2 = "0" → 输出 -1（操作 1 无法把 '1' 变 '0'，操作 2 需要两个相邻字符）。

## 解题思路

从左到右 DP。关键观察（对应提示）：

- 操作 1 是把 '0' 变 '1' 的唯一手段（单点）；操作 2 是把 '1' 变 '0' 的唯一手段（一次影响相邻两位）。
- 处理到位置 i 时，唯一可能与"已定区域"产生关联的操作是作用在 pair (i-1, i) 上的操作 2，它会顺带把位置 i 置 '0'。因此只需记录状态 b：位置 i 是否已被左边的操作 2 置 '0'（即"当前值" cur = 0，否则 cur = s1[i]）。

设 dp0 = 未被左边操作 2 影响的最小代价，dp1 = 已被置 '0' 的最小代价。在位置 i（目标 t = s2[i]）有两种转移：

1. 不使用涉及 (i, i+1) 的操作 2：
   - cur == t：直接匹配，代价不变；
   - cur == 0 且 t == 1：用一次操作 1（A）补成 '1'，代价 +1；
   - cur == 1 且 t == 0：单点无法把 '1' 变 '0'，只能走转移 2。
2. 使用操作 2 于 (i, i+1)（要求 i+1 < n）：执行前两位都必须是 '1'，即 cur==0 时先对 i 补一次操作 1，s1[i+1]=='0' 时先对 i+1 补一次操作 1；执行后两位都变 '0'，若 t == 1 还要再对 i 补一次操作 1。代价 = (cur=='0') + (s1[i+1]=='0') + 1 + (t=='1')，并把状态 b=1 传给 i+1。

即使 cur == t，转移 2 也要考虑（例如尾部要把最后一位置 '0' 只能靠左边的操作 2 顺带完成）。最终答案取 dp0（dp1 在末位自然为不可行），若为无穷大返回 -1。时间复杂度 O(n)。
