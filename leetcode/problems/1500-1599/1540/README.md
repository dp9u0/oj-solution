# [1540] Can Convert String in K Moves

## Description

[LeetCode Problem Description](https://leetcode.com/problems/can-convert-string-in-k-moves/description/)

* algorithms
* Medium (37.62%)
* Likes:    427
* Dislikes: 335
* Testcase Example:  '"input"\n"ouput"\n9'

```md
Given two stringssandt, your goal is to convertsintotinkmoves or less.
During theith(1 <= i <= k)move you can:

Choose any indexj(1-indexed) froms, such that1 <= j <= s.lengthand jhas not been chosen in any previous move,and shift the character at that indexitimes.
Do nothing.

Shifting a character means replacing it by the next letter in the alphabet(wrapping around so that&#39;z&#39;becomes&#39;a&#39;). Shifting a character byimeans applying the shift operationsitimes.
Remember that any indexjcan be picked at most once.
Returntrueif it&#39;s possible to convertsintotin no more thankmoves, otherwise returnfalse.

Example 1:

Input: s = 'input', t = 'ouput', k = 9
Output: true
Explanation: In the 6th move, we shift &#39;i&#39; 6 times to get &#39;o&#39;. And in the 7th move we shift &#39;n&#39; to get &#39;u&#39;.

Example 2:

Input: s = 'abc', t = 'bcd', k = 10
Output: false
Explanation: We need to shift each character in s one time to convert it into t. We can shift &#39;a&#39; to &#39;b&#39; during the 1st move. However, there is no way to shift the other characters in the remaining moves to obtain t from s.

Example 3:

Input: s = 'aab', t = 'bbb', k = 27
Output: true
Explanation: In the 1st move, we shift the first &#39;a&#39; 1 time to get &#39;b&#39;. In the 27th move, we shift the second &#39;a&#39; 27 times to get &#39;b&#39;.


Constraints:

1 <= s.length, t.length <= 10^5
0 <= k <= 10^9
s, t containonly lowercase English letters.


```

## 题目翻译

给定两个字符串 s 和 t，目标是在不超过 k 次移动内将 s 转换为 t。

在第 i 次移动 (1 <= i <= k) 时，你可以：
- 选择 s 中一个之前未被选过的索引 j，将该位置的字符移动 i 次（即向后移 i 个字母，z 之后回到 a）
- 或者什么都不做

每个索引最多只能被选择一次。判断是否能在 k 次移动内完成转换。

## 解题思路

**贪心 + 计数**

1. 首先计算每个位置需要的移动量 `diff = (t[i] - s[i] + 26) % 26`，diff=0 不需要操作
2. 对于每个移动量 d (1-25)，统计需要该移动量的位置数 count[d]
3. 移动量 d 可以使用的操作编号为 d, d+26, d+52, ..., 即最多 `floor((k-d)/26) + 1` 个
4. 如果任一 d 的 count[d] 超过可用操作数，则返回 false

时间复杂度 O(n + 26)，空间复杂度 O(26)。

## Solution

[SourceCode](./solution.js)
