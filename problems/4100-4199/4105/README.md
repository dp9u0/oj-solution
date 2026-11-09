# [4105] 重复字符串匹配 II

## Description


```md
https://leetcode.cn/problems/repeated-string-match-ii/description/
* algorithms
* Hard (44.46%)
* Dislikes: -
* Testcase Example:  '"ab"\n"abab"\n2\n1'
给你两个由小写英文字母组成的字符串 a 和 b，以及两个整数 x 和 y。
如果将 b 重复恰好 y 次得到的字符串 (b * y) 是将 a 重复恰好 x 次得到的字符串 (a * x) 的 子串 ，返回 true。否则，返回 false。
子串 是字符串内连续的 非空 字符序列。

示例 1：
输入： a = "ab", b = "abab", x = 2, y = 1
输出： true
解释：
a * x = "ab" * 2 = "abab"
b * y = "abab" * 1 = "abab"
它们完全相同，因此 b * y 是 a * x 的子串。所以，答案是 true。
示例 2：
输入： a = "abc", b = "bc", x = 2, y = 3
输出： false
解释：
a * x = "abc" * 2 = "abcabc"
b * y = "bc" * 3 = "bcbcbc"
答案是 false，因为 b * y = "bcbcbc" 不是 a * x = "abcabc" 的子串。
示例 3：
输入： a = "abcd", b = "cdab", x = 2, y = 1
输出： true
解释：
a * x = "abcd" * 2 = "abcdabcd"
b * y = "cdab" 出现在 a * x = "abcdabcd" 的下标 [2..5] 处。因此，答案是 true。

提示：
1 <= a.length <= 100
1 <= b.length <= 100
1 <= x <= 109
1 <= y <= 109
a 和 b 仅由小写英文字母组成。

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given two strings a and b consisting of lowercase English letters, and two integers x and y.
Return true if (b * y), the string b repeated exactly y times, is a substring of (a * x), the string a repeated exactly x times. Otherwise, return false.
A substring is a contiguous non-empty sequence of characters within a string.

Example 1:
Input: a = "ab", b = "abab", x = 2, y = 1
Output: true
Explanation: a * x = "abab", b * y = "abab"; they are identical, so b * y is a substring of a * x.

Example 2:
Input: a = "abc", b = "bc", x = 2, y = 3
Output: false
Explanation: a * x = "abcabc", b * y = "bcbcbc", which is not a substring.

Example 3:
Input: a = "abcd", b = "cdab", x = 2, y = 1
Output: true
Explanation: b * y = "cdab" occurs in a * x = "abcdabcd" at indices [2..5].

Constraints:
1 <= a.length <= 100
1 <= b.length <= 100
1 <= x <= 10^9
1 <= y <= 10^9
a and b consist of lowercase English letters only.

## Approach

a^x has up to 10^11 characters, so nothing is materialized. Key periodicity facts:

1. a^inf[j] depends only on j mod |a|, so b occurs at position q in a^inf iff it occurs at
   q mod |a|. Hence it suffices to check match starts p in [0, |a|): any occurrence at q can
   be shifted down to p = q mod |a| <= q, and p + y*|b| <= q + y*|b| <= |a|*x keeps it valid.
2. b^y matches at p in a^inf iff b matches at each of p, p+|b|, ..., p+(y-1)|b| (block-wise,
   no cross constraints).
3. The residues (p + t*|b|) mod |a| form a cycle of length c = |a| / gcd(|a|, |b|) <= 100,
   so checking t < min(y, c) covers all t.

Algorithm:
- Necessary length check: |b|*y <= |a|*x.
- P = { p in [0,|a|) : b occurs at p in a^inf } via naive matching on a repeated ceil((|a|+|b|-1)/|a|) times.
- For each p in P with p + y*|b| <= |a|*x: verify (p + t*|b|) mod |a| in P for all t < min(y, c).

Complexity O(|a|*|b|), with all arithmetic exact in doubles (<= 10^11 < 2^53).
