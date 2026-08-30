# [3816] Lexicographically Smallest String After Deleting Duplicate Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-string-after-deleting-duplicate-characters/description/)

* algorithms
* Hard (21.42%)
* Likes:    47
* Dislikes: 4
* Testcase Example:  '"aaccb"'

```md
You are given a string s that consists of lowercase English letters.
You can perform the following operation any number of times (possibly zero times):
Choose any letter that appears at least twice in the current string s and delete any one occurrence.
Return the lexicographically smallest resulting string that can be formed this way.

Example 1:
Input: s = "aaccb"
Output: "aacb"
Explanation:
We can form the strings "acb", "aacb", "accb", and "aaccb". "aacb" is the lexicographically smallest one.
For example, we can obtain "aacb" by choosing 'c' and deleting its first occurrence.
Example 2:
Input: s = "z"
Output: "z"
Explanation:
We cannot perform any operations. The only string we can form is "z".

Constraints:
1 <= s.length <= 105
s contains lowercase English letters only.
Hint 1: Solve greedily.
Hint 2: Each distinct letter must appear at least once in the final string.
Hint 3: For each letter, maintain a deque of its positions.
Hint 4: At each step, try letters from 'a' to 'z' and pick the smallest letter whose earliest position lies within a safe window.
Hint 5: Do not pick an occurrence if choosing it would make some other letter impossible to keep.
Hint 6: Mark positions as used and repeat, always minimizing the next chosen character.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个仅由小写英文字母组成的字符串 `s`。

你可以执行以下操作任意多次（也可以不执行）：

- 选择当前字符串 `s` 中**至少出现两次**的任意字母，删除其任意一个出现位置。

返回通过上述操作能得到的最小字典序字符串。

**示例 1：**
输入：`s = "aaccb"`
输出：`"aacb"`
解释：可以构成 `"acb"`、`"aacb"`、`"accb"`、`"aaccb"`，其中 `"aacb"` 字典序最小。
例如选择 `'c'` 并删除其第一次出现即可得到 `"aacb"`。

**示例 2：**
输入：`s = "z"`
输出：`"z"`
解释：无法执行任何操作，唯一能得到的字符串就是 `"z"`。

**约束：**
- `1 <= s.length <= 10^5`
- `s` 仅包含小写英文字母

## 解题思路

**第一步：刻画可达的最终串。**

- 操作只能删除"当前出现 ≥ 2 次"的字母的一个出现，因此任何字母的最后一次出现永远删不掉 → 最终串必须包含 `s` 中每个**不同字母至少一次**。
- 反过来，任何一个"包含所有不同字母至少一次"的子序列都可达到：按任意顺序删除不在子序列中的出现，删除时该字母在最终串中的那个出现仍在，故当时出现次数 ≥ 2，操作合法。

所以问题转化为：**在 `s` 的所有"包含每个不同字母至少一次"的子序列中，求字典序最小者**（允许保留重复字母，保留重复有时更优，如 `"aab" → "aab"`）。

**第二步：逐位贪心。**

从左到右构造答案，维护 `last`（上一个选中位置）：

- 已进入答案的字母不再必需；"必需集合 R" = 尚未出现在答案中的字母。
- 若 `R` 为空，可以停止（答案本身就是合法最终串，且任何续写只会更大），算法结束。
- 否则从 `'a'` 到 `'z'` 依次尝试字母 `c`：取 `c` 的**最早的、位置 > last 的未使用出现** `j`（选最早的不会比选更晚的差，因为留给后续的位置集合是超集）。选 `j` 可行 ⟺ 其余每个必需字母 `x ≠ c` 在 `j` 之后仍有出现。
- 关键观察：必需字母 `x` 从未被消耗过出现位置（只要 `x` 还必需，之前的每次选择都保证 `x` 的最后出现 `lastPos[x]` 在选中位置之后），所以可行性判定只需比较 `j < min{ lastPos[x] : x ∈ R, x ≠ c }`。对 R 维护 `lastPos` 的最小值 `m1`（及其字母）和次小值 `m2`，则该下界为 `l1 === c ? m2 : m1`（并列时 `m2` 仍正确）。
- 每轮选到第一个可行的 `c`，标记该位置已使用，更新 `last`，重复。可以证明 `lastPos` 最小的必需字母总是可行的，贪心不会卡死。

**复杂度：** 每轮 O(26)，指针只前进，总复杂度 O(26·n)。
