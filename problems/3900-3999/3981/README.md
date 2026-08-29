# [3981] Count Distinct Ways to Form Target from Two Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-distinct-ways-to-form-target-from-two-strings/description/)

* algorithms
* Hard (46.55%)
* Likes:    49
* Dislikes: 3
* Testcase Example:  '"abc"\n"bac"\n"abc"'

```md
You are given three strings word1, word2, and target.
Your task is to count the number of ways to form target by choosing characters from word1 and word2 under the following conditions:

For each character of target, choose one matching character from either word1 or word2.
The chosen indices from word1 must be strictly increasing.
The chosen indices from word2 must be strictly increasing.
At least one character must be chosen from both word1 and word2.

Two ways are considered different if, for at least one position in target, the chosen character comes from a different string or a different index.
Return the number of ways. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: word1 = 'abc', word2 = 'bac', target = 'abc'
Output: 5
Explanation:
There are 5 ways to form target:

word1[0] = &#39;a&#39;, word1[1] = &#39;b&#39;, word2[2] = &#39;c&#39;
word1[0] = &#39;a&#39;, word2[0] = &#39;b&#39;, word1[2] = &#39;c&#39;
word1[0] = &#39;a&#39;, word2[0] = &#39;b&#39;, word2[2] = &#39;c&#39;
word2[1] = &#39;a&#39;, word1[1] = &#39;b&#39;, word1[2] = &#39;c&#39;
word2[1] = &#39;a&#39;, word1[1] = &#39;b&#39;, word2[2] = &#39;c&#39;

All ways preserve the increasing index order inside each string and choose at least one character from each string.

Example 2:

Input: word1 = 'cd', word2 = 'cd', target = 'ccd'
Output: 4
Explanation:
There are 4 ways to form target:

word1[0] = &#39;c&#39;, word2[0] = &#39;c&#39;, word1[1] = &#39;d&#39;
word1[0] = &#39;c&#39;, word2[0] = &#39;c&#39;, word2[1] = &#39;d&#39;
word2[0] = &#39;c&#39;, word1[0] = &#39;c&#39;, word1[1] = &#39;d&#39;
word2[0] = &#39;c&#39;, word1[0] = &#39;c&#39;, word2[1] = &#39;d&#39;

The first two &#39;c&#39; characters in target must come one from each string. The final &#39;d&#39; can be chosen from either string.

Example 3:

Input: word1 = 'xy', word2 = 'xy', target = 'xyxy'
Output: 2
Explanation:
There are 2 ways to form target:

word1[0] = &#39;x&#39;, word1[1] = &#39;y&#39;, word2[0] = &#39;x&#39;, word2[1] = &#39;y&#39;
word2[0] = &#39;x&#39;, word2[1] = &#39;y&#39;, word1[0] = &#39;x&#39;, word1[1] = &#39;y&#39;

Each 'xy' part in target comes entirely from one string.

Example 4:

Input: word1 = 'ab', word2 = 'cde', target = 'ace'
Output: 1
Explanation:
The only way is to choose word1[0] = &#39;a&#39;, word2[0] = &#39;c&#39;, and word2[2] = &#39;e&#39;. Thus, the answer is 1.


Constraints:

1 <= word1.length, word2.length, target.length <= 100
word1, word2, and target consist of lowercase English letters only.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 `word1`、`word2`、`target`。按顺序为 target 的每个字符从 word1 或 word2 中选一个匹配字符；**两串各自被选下标严格递增**；**两串都必须至少被选一次**。两个方案只要某位所选的字符串或下标不同即不同。返回方案数模 1e9+7。

示例 1：`'abc','bac','abc'` → `5`；示例 2：`'cd','cd','ccd'` → `4`；示例 3：`'xy','xy','xyxy'` → `2`；示例 4：`'ab','cde','ace'` → `1`

约束：三串长度 ≤ 100

## 解题思路

**容斥 + 三维 DP**（n ≤ 100，101³ ≈ 10^6 状态可行）：

- `dp[t][i][j]` = 已匹配 target 前 t 位、word1 用到下标 i 起、word2 用到 j 起的方案数。转移：预计算 `next1[c][i]`（word1 中 ≥ i 的字符 c 首次出现位置），取 `dp[t+1][p+1][j] += dp[t][i][j]`，word2 对称。滚动数组。
- **答案 = 总方案 − 只用 word1 − 只用 word2**：只用单串即 target 在该串中的子序列计数（同款 1D DP），二者恰好是"未用另一串"的全部方案。

复杂度 O(26·n + T·n1·n2)。模加法最大 ~2×(1e9+7) < 2^53，无需 BigInt。
