# [3906] Count Good Integers on a Grid Path

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-good-integers-on-a-grid-path/description/)

* algorithms
* Hard (49.42%)
* Likes:    60
* Dislikes: 4
* Testcase Example:  '8\n10\n"DDDRRR"'

```md
You are given two integers l and r, and a string directions consisting of exactly three &#39;D&#39; characters and three &#39;R&#39; characters.
For each integer x in the range [l, r] (inclusive), perform the following steps:

If x has fewer than 16 digits, pad it on the left with leading zeros to obtain a 16-digit string.
Place the 16 digits into a 4 &times; 4 grid in row-major order (the first 4 digits form the first row from left to right, the next 4 digits form the second row, and so on).
Starting at the top-left cell (row = 0, column = 0), apply the 6 characters of directions in order:

&#39;D&#39; increments the row by 1.
&#39;R&#39; increments the column by 1.


Record the sequence of digits visited along the path (including the starting cell), producing a sequence of length 7.

The integer x is considered good if the recorded sequence is non-decreasing.
Return an integer representing the number of good integers in the range [l, r].

Example 1:

Input: l = 8, r = 10, directions = 'DDDRRR'
Output: 2
Explanation:
The grid for x = 8:



0
0
0
0


0
0
0
0


0
0
0
0


0
0
0
8




Path: (0,0) &rarr; (1,0) &rarr; (2,0) &rarr; (3,0) &rarr; (3,1) &rarr; (3,2) &rarr; (3,3)
The sequence of digits visited is [0, 0, 0, 0, 0, 0, 8].
As the sequence of digits visited is non-decreasing, 8 is a good integer.

The grid for x = 9:



0
0
0
0


0
0
0
0


0
0
0
0


0
0
0
9




The sequence of digits visited is [0, 0, 0, 0, 0, 0, 9].
As the sequence of digits visited is non-decreasing, 9 is a good integer.

The grid for x = 10:



0
0
0
0


0
0
0
0


0
0
0
0


0
0
1
0




The sequence of digits visited is [0, 0, 0, 0, 0, 1, 0].
As the sequence of digits visited is not non-decreasing, 10 is not a good integer.
Hence, only 8 and 9 are good, giving a total of 2 good integers in the range.


Example 2:

Input: l = 123456789, r = 123456790, directions = 'DDRRDR'
Output: 1
Explanation:
The grid for x = 123456789:



0
0
0
0


0
0
0
1


2
3
4
5


6
7
8
9




Path: (0,0) &rarr; (1,0) &rarr; (2,0) &rarr; (2,1) &rarr; (2,2) &rarr; (3,2) &rarr; (3,3)
The sequence of digits visited is [0, 0, 2, 3, 4, 8, 9].
As the sequence of digits visited is non-decreasing, 123456789 is a good integer.

The grid for x = 123456790:



0
0
0
0


0
0
0
1


2
3
4
5


6
7
9
0




The sequence of digits visited is [0, 0, 2, 3, 4, 9, 0].
As the sequence of digits visited is not non-decreasing, 123456790 is not a good integer.
Hence, only 123456789 is good, giving a total of 1 good integer in the range.


Example 3:

Input: l = 1288561398769758, r = 1288561398769758, directions = 'RRRDDD'
Output: 0
Explanation:
The grid for x = 1288561398769758:



1
2
8
8


5
6
1
3


9
8
7
6


9
7
5
8




Path: (0,0) &rarr; (0,1) &rarr; (0,2) &rarr; (0,3) &rarr; (1,3) &rarr; (2,3) &rarr; (3,3)
The sequence of digits visited is [1, 2, 8, 8, 3, 6, 8].
​​​​​​​As the sequence of digits visited is not non-decreasing, 1288561398769758 is not a good integer.
No numbers are good, giving a total of 0 good integers in the range.



Constraints:

1 <= l <= r <= 9 &times; 1015
directions.length == 6
directions consists of exactly three &#39;D&#39; characters and three &#39;R&#39; characters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个整数 l 和 r，以及一个字符串 directions，它恰好由三个 'D' 字符和三个 'R' 字符组成。

对于范围 [l, r]（含端点）内的每个整数 x，执行以下步骤：

- 如果 x 不足 16 位，在左侧补前导零，得到一个 16 位的数字字符串。
- 将这 16 个数字按行优先顺序填入一个 4 × 4 网格（前 4 个数字从左到右构成第一行，接下来的 4 个数字构成第二行，依此类推）。
- 从左上角单元格（row = 0, column = 0）出发，按顺序应用 directions 的 6 个字符：
  - 'D' 使行号加 1。
  - 'R' 使列号加 1。
- 记录路径上访问到的数字序列（包括起始单元格），得到长度为 7 的序列。

如果记录的序列是非递减的，则整数 x 是"好的"。

返回一个整数，表示 [l, r] 范围内"好的"整数的数量。

示例 1：
输入：l = 8, r = 10, directions = 'DDDRRR'
输出：2
解释：x = 8 时路径数字为 [0,0,0,0,0,0,8]（非递减，好）；x = 9 时为 [0,0,0,0,0,0,9]（好）；x = 10 时为 [0,0,0,0,0,1,0]（不好）。答案为 2。

示例 2：
输入：l = 123456789, r = 123456790, directions = 'DDRRDR'
输出：1
解释：x = 123456789 时路径数字为 [0,0,2,3,4,8,9]（好）；x = 123456790 时为 [0,0,2,3,4,9,0]（不好）。答案为 1。

示例 3：
输入：l = 1288561398769758, r = 1288561398769758, directions = 'RRRDDD'
输出：0
解释：路径数字为 [1,2,8,8,3,6,8]，非递减不成立。答案为 0。

提示：
- 1 <= l <= r <= 9 × 10^15
- directions.length == 6
- directions 恰好由三个 'D' 和三个 'R' 字符组成。

## 解题思路

- r 最大 9×10^15，无法逐个枚举，属于典型的**数位 DP** 计数问题。
- 关键观察：路径访问的是 4×4 网格中固定的 7 个单元格，对应 16 位数字字符串中固定的 7 个下标。x 是"好的"当且仅当这 7 个位置上的数字（按路径访问顺序）构成非递减序列，其余 9 个位置上的数字不受任何约束。
- 定义 f(n) = [0, n] 中好的整数个数，则答案 = f(r) - f(l-1)。补前导零后每个 x 的 16 位表示唯一，因此直接对 16 个数位做 DP，无需前导零特判（x=0 即全 0，也是好的）。
- DP 状态：(数位下标 pos, 是否贴上界 tight, 当前路径上已确定的最后一个数字 last)。转移时若 pos 是路径上的第 k 个位置（k > 0），则该位数字 d 必须 >= last，并更新 last = d；非路径位任意。状态数 16 × 2 × 11，每位至多 10 种选择，复杂度极低。
- 计数用 BigInt，避免大数精度问题（r - l 可达 9×10^15）。
