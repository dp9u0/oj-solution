# [2911] 得到 K 个半回文串的最少修改次数

## Description


```md
https://leetcode.cn/problems/minimum-changes-to-make-k-semi-palindromes/description/
* algorithms
* Hard (50.28%)
* Likes:    27
* Dislikes: -
* Testcase Example:  '"abcac"\n2'
给你一个字符串 s 和一个整数 k，请将 s 划分为 k 个 非空子串 ，使得将每个子串变为 半回文串 所需的字符修改次数之和最小。
返回所需的 最少 字符修改次数。
半回文串 是一类特殊的字符串：它可以按照某种重复模式拆分后，使每一组都成为 回文串 。判断一个字符串是否为半回文串的方法如下：
选择该字符串长度的一个正因数 d。其中，d 的取值范围是从 1 到严格小于字符串长度的所有正因数。对于长度为 1 的字符串，根据这一定义，它不存在合法的因数，因为唯一的因数就是其长度本身，而这是不允许的。
对于给定的因数 d，将字符串按长度为 d 的重复模式分组。具体来说，第 1 组由位置 1、1 + d、1 + 2d、…… 上的字符组成；第 2 组由位置 2、2 + d、2 + 2d、…… 上的字符组成；以此类推。
如果这些分组中的每一组都是回文串，则该字符串被视为半回文串。
以字符串 "abcabc" 为例：
"abcabc" 的长度为 6。合法的因数有 1、2 和 3。
当 d = 1 时：整个字符串 "abcabc" 构成一组。它不是回文串。
当 d = 2 时：

第 1 组（位置 1, 3, 5）："acb"
第 2 组（位置 2, 4, 6）："bac"
这两组都不是回文串。


当 d = 3 时：

第 1 组（位置 1, 4）："aa"
第 2 组（位置 2, 5）："bb"
第 3 组（位置 3, 6）："cc"
所有分组都是回文串。因此，"abcabc" 是一个半回文串。



示例 1：
输入：  s = "abcac", k = 2
输出：  1
解释： 将 s 划分为 "ab" 和 "cac"。"cac" 本身已经是半回文串。将 "ab" 改为 "aa" 后，它在 d = 1 时成为半回文串。
示例 2：
输入：  s = "abcdef", k = 2
输出：  2
解释： 将其划分为子串 "abc" 和 "def"。这两个子串各自都需要修改 1 个字符才能变成半回文串。
示例 3：
输入：  s = "aabbaa", k = 3
输出：  0
解释： 将其划分为子串 "aa"、"bb" 和 "aa"。它们都已经是半回文串。

提示：
2 <= s.length <= 200
1 <= k <= s.length / 2
s 仅由小写英文字母组成。
Hint 1: Define dp[i][j] as the minimum count of letter changes needed to split the suffix of string s starting from s[i] into j valid parts.
Hint 2: We have dp[i][j] = min(dp[x + 1][j - 1] + v[i][x]). Here v[i][x] is the minimum number of letter changes to change substring s[i..x] into semi-palindrome.
Hint 3: v[i][j] can be calculated separately by brute-force. We can create a table of v[i][j] independently to improve the complexity. Also note that semi-palindrome’s length is at least 2.

```

## Description (English)

You are given a string `s` and an integer `k`. Partition `s` into `k` non-empty substrings such that the total number of character changes needed to turn each substring into a **semi-palindrome** is minimized.

Return the **minimum** number of character changes required.

A **semi-palindrome** is a special kind of string: it can be split into groups following some repeating pattern such that each group is a palindrome. To check whether a string is a semi-palindrome:

- Choose a positive divisor `d` of the string's length, where `d` ranges over all positive divisors **strictly less than** the length. (A string of length 1 has no valid divisor under this definition, since its only divisor is its own length.)
- For a given divisor `d`, group the string by a repeating pattern of length `d`: group 1 consists of the characters at positions 1, 1 + d, 1 + 2d, ...; group 2 consists of positions 2, 2 + d, 2 + 2d, ...; and so on.
- The string is a semi-palindrome if **every** group is a palindrome.

For example, with `"abcabc"` (length 6), the valid divisors are 1, 2, 3:

- `d = 1`: the whole string `"abcabc"` forms one group — not a palindrome.
- `d = 2`: group 1 (positions 1, 3, 5) = `"acb"`, group 2 (positions 2, 4, 6) = `"bac"` — neither is a palindrome.
- `d = 3`: group 1 (positions 1, 4) = `"aa"`, group 2 = `"bb"`, group 3 = `"cc"` — all groups are palindromes, so `"abcabc"` is a semi-palindrome.

**Example 1:**

```
Input: s = "abcac", k = 2
Output: 1
Explanation: Split s into "ab" and "cac". "cac" is already a semi-palindrome. Changing "ab" to "aa" makes it a semi-palindrome (d = 1).
```

**Example 2:**

```
Input: s = "abcdef", k = 2
Output: 2
Explanation: Split into "abc" and "def". Each needs 1 change to become a semi-palindrome.
```

**Example 3:**

```
Input: s = "aabbaa", k = 3
Output: 0
Explanation: Split into "aa", "bb", "aa". They are all already semi-palindromes.
```

**Constraints:**

- 2 <= s.length <= 200
- 1 <= k <= s.length / 2
- s consists of only lowercase English letters.

## 思路

1. **预处理修改代价 `cost[i][L]`**：`cost[i][L]` 表示把子串 `s[i..i+L-1]` 变为半回文串的最少修改次数。对每个长度 `L >= 2`，枚举它的每个真因子 `d`（`d < L`），把子串按位置对 `d` 取模分成 `d` 组，每组内部变成回文串的代价 = 组内首尾对称位置的不匹配对数；该 `d` 下的总代价为各组之和，`cost[i][L]` 取所有 `d` 中的最小值。长度为 1 的子串没有合法因子，永远不是半回文，代价记为无穷（划分中不允许出现长度 1 的段）。
2. **划分 DP**：`dp[t][j]` 表示把前缀 `s[0..j-1]` 划分成 `t` 段的最少修改次数，`dp[0][0] = 0`。转移 `dp[t][j] = min{ dp[t-1][i] + cost[i][j-i] }`，其中段长 `j - i >= 2`。答案为 `dp[k][n]`。
3. **复杂度**：预处理约 `O(n^2 * d(n))`（n=200 时约百万级常数比较），划分 DP 为 `O(k * n^2)`，完全可接受。

## Solution

[SourceCode](./solution.js)
