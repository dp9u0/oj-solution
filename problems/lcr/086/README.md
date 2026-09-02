# [LCR 086] 分割回文串

## Description


```md
https://leetcode.cn/problems/M99OJA/description/
* algorithms
* Medium (75.06%)
* Likes:    86
* Dislikes: -
* Testcase Example:  '"google"'
给定一个字符串 s ，请将 s 分割成一些子串，使每个子串都是 回文串 ，返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。

示例 1：
输入：s = "google"
输出：[["g","o","o","g","l","e"],["g","oo","g","l","e"],["goog","l","e"]]
示例 2：
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 3：
输入：s = "a"
输出：[["a"]]

提示：
1 <= s.length <= 16
s 仅由小写英文字母组成

注意：本题与主站 131 题相同： https://leetcode.cn/problems/palindrome-partitioning/

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return all possible palindrome partitioning of `s`.

A **palindrome** is a string that reads the same forward and backward.

**Example 1:**
```
Input: s = "google"
Output: [["g","o","o","g","l","e"],["g","oo","g","l","e"],["goog","l","e"]]
```
**Example 2:**
```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```
**Example 3:**
```
Input: s = "a"
Output: [["a"]]
```

**Constraints:**
- `1 <= s.length <= 16`
- `s` consists of lowercase English letters only.

## Approach

回溯（Backtracking）+ 记忆化预处理回文判断。

**核心思想：** 在索引 `start` 处枚举下一个回文子串的结束位置 `i`（`start <= i < n`）。若 `s[start..i]` 是回文，则将其加入当前路径，继续从 `i + 1` 递归分割剩余部分；回溯到该层时撤销选择。

**回文判断优化：** `s.length <= 16`，可直接用双指针判断，最坏情况每个子串判断 O(n)，总复杂度约为 O(n·2^n)。也可先用动态规划预处理 `dp[i][j]` 表示 `s[i..j]` 是否为回文（`dp[i][j] = s[i]===s[j] && (j-i<=2 || dp[i+1][j-1])`），让递归中每次回文判断降为 O(1)。由于 n 很小，这里直接用区间 DP 预处理，使回溯分支判断更清晰。

**回溯结构：**
```
def backtrack(start, path):
    if start === n: ans.push([...path]); return
    for i in start..n-1:
        if isPalindrome(start, i):
            path.push(substring); backtrack(i+1, path); path.pop()
```

时间复杂度 O(n·2^n)（最坏切分方案数），空间复杂度 O(n^2)（DP 表）+ O(n)（递归栈）。
