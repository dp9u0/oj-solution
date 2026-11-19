# [727] 最小窗口子序列

## Description


```md
https://leetcode.cn/problems/minimum-window-subsequence/description/
* algorithms
* Hard (43.72%)
* Likes:    185
* Dislikes: -
* Testcase Example:  '"abcdebdde"\n"bde"'
给定字符串 s1 和 s2，找出 s1 中最短的连续 子串，使得 s2 是该子串的 子序列 。
如果 s1 中没有窗口可以包含 s2 中的所有字符，返回空字符串 ""。如果有不止一个最短长度的窗口，返回 开始位置最靠左 的那个。
示例 1：
输入：
s1 = "abcdebdde", s2 = "bde"
输出："bcde"
解释：
"bcde" 是答案，因为它在相同长度的字符串 "bdde" 出现之前。
"deb" 不是一个更短的答案，因为在窗口中必须按顺序出现 T 中的元素。
示例 2：
输入：s1 = "jmeqksfrsdcmsiwvaovztaqenprpvnbstl", s2 = "u"
输出：""

提示：
1 <= s1.length <= 2 * 104
1 <= s2.length <= 100
s1 和 s2 只包含小写英文字母。
Hint 1: Let dp[j][e] = s be the largest index for which S[s:e+1] has T[:j] as a substring.

```

## Solution

[SourceCode](./solution.js)

## Translation

Find the shortest contiguous substring of s1 that contains s2 as a subsequence; leftmost on ties; "" if none.

- Example 1: s1 = "abcdebdde", s2 = "bde" → `"bcde"`
- Example 2: s2 = "u" not in s1 → `""`

Constraints: |s1| ≤ 2·10^4; |s2| ≤ 100.

## Approach

**后继跳表 + 定起点匹配**。预处理 `next[i][c]` = 位置 i 之后字符 c 的最近下标(O(26n));每个 `s1[i]==s2[0]` 的起点用跳表逐字符跳跃匹配 s2(每起点 O(m)),首次完成即该起点最短窗口。朴素双指针在 s2 匹配不完时每起点扫到串尾,2·10⁴×2·10⁴ = 4×10⁸ 会 TLE;跳表版总 O(26n + n·m)。相等长度保持最左,len==m 提前退出。
