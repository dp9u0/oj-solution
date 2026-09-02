# [LCR 094] 分割回文串 II

## Description


```md
https://leetcode.cn/problems/omKAoA/description/
* algorithms
* Hard (56.46%)
* Likes:    85
* Dislikes: -
* Testcase Example:  '"aab"'
给定一个字符串 s，请将 s 分割成一些子串，使每个子串都是回文串。
返回符合要求的 最少分割次数 。

示例 1：
输入：s = "aab"
输出：1
解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
示例 2：
输入：s = "a"
输出：0
示例 3：
输入：s = "ab"
输出：1

提示：
1 <= s.length <= 2000
s 仅由小写英文字母组成

注意：本题与主站 132 题相同： https://leetcode.cn/problems/palindrome-partitioning-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given string `s`, partition it so every substring is a palindrome. Return the **minimum number of cuts**.

**Example:** `"aab"` → 1 (["aa","b"]).

**Constraints:** length ≤ 2000. Note: same as LeetCode 132.

---

## Approach

`pal[i][j]` = whether `s[i..j]` is a palindrome (DP: expand or `pal[i][j]=pal[i+1][j-1] && s[i]==s[j]`).

`cut[i]` = min cuts to partition prefix `s[0..i-1]`. `cut[0]=-1`. Transition `cut[i] = min over j<i with pal[j][i-1] of cut[j]+1`.

Answer `cut[n]`.

Complexity: `O(n²)` time/space.
