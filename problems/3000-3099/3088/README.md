# [3088] 使字符串反回文

## Description


```md
https://leetcode.cn/problems/make-string-anti-palindrome/description/
* algorithms
* Hard (24.72%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '"abca"'
我们称一个长度为偶数的字符串 s 为 反回文 的，如果对于每一个下标 0 <= i < n ，s[i] != s[n - i - 1]。
给定一个字符串 s，你需要进行 任意 次（包括 0）操作使 s 成为 反回文。
在一次操作中，你可以选择 s 中的两个字符并且交换它们。
返回结果字符串。如果有多个字符串符合条件，返回 字典序最小 的那个。如果它不能成为一个反回文，返回 "-1"。

示例 1：
输入：s = "abca"
输出："aabc"
解释：
"aabc" 是一个反回文字符串，因为 s[0] != s[3] 并且 s[1] != s[2]。同时，它也是 "abca" 的一个重排。
示例 2:
输入：s = "abba"
输出："aabb"
解释：
"aabb" 是一个反回文字符串，因为 s[0] != s[3] 并且 s[1] != s[2]。同时，它也是 "abba" 的一个重排。
示例 3:
输入：s = "cccd"
输出："-1"
解释：
你可以发现无论你如何重排 "cccd" 的字符，都有 s[0] == s[3] 或 s[1] == s[2]。所以它不能形成一个反回文字符串。

提示：
2 <= s.length <= 105
s.length % 2 == 0
s 只包含小写英文字母。
Hint 1: Sort the string.
Hint 2: Check if there are equivalent characters in the middle, if there are, shift the ones from the right side more to the right until they don't overlap.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Rearrange an even-length string so s[i] != s[n-1-i] for all i; return the lexicographically smallest such rearrangement or "-1".

Approach: sort the string; if any char appears more than n/2 times return -1. Otherwise the sorted string IS an anti-palindrome and clearly the lexicographically smallest: with halves L (sorted, smallest n/2) and R (sorted, largest n/2), R[i] >= L[i], and R[i] == L[i] for char c would require c's sorted span [p, p+k) to contain both i and n/2+i, i.e. k > n/2 — excluded by feasibility. O(n log n).

Verified: "abca" -> "aabc"; "abba" -> "aabb"; "cccd" -> "-1".

## 思路 (Approach) (修正)

Problem (EN): Rearrange an even-length string so s[i] != s[n-1-i]; lexicographically smallest, or -1.

Approach: sort. If any char count > n/2 -> -1. Pairing is (i, n-1-i): with halves A = t[0..h-1] and B = t[h..n-1] (sorted), the pair is A[i] <-> B[h-1-i] (B reversed). At most ONE char c straddles the middle (occurs in both halves). Fix: move all copies of c from B to the END of B: B' = (non-c part of B, ascending) + (c x rightCount). Correctness: non-c chars of B are all > c while A chars are <= c, so those pairs are safe; c-pairs hit A[i] for i < rightCount, and A[i] = c iff i >= p (c's first position), with rightCount = k - (h - p) so rightCount > p iff k > h — excluded by feasibility. A stays the sorted smallest half (optimal prefix). O(n log n).

Verified: "abca"->"aabc"; "abba"->"aabb"; "cccd"->"-1"; "lmmn"->"lmnm".

## 思路 (Approach) (终版)

Problem (EN): Rearrange an even-length string so s[i] != s[n-1-i]; lexicographically smallest, or -1.

Approach: sort; if any char count > n/2 -> -1. Keep A = sorted first half (optimal prefix). Build B = second half position by position (j = 0..h-1): forbidden[j] = A[h-1-j] (pair is (i, n-1-i)); greedily place the smallest remaining char != forbidden[j] whose placement keeps Hall feasibility: for every value v, remaining[v] <= (positions left) - (positions whose forbidden == v). 26 values make each check O(26); total O(676 * h). Simple swap/shift repairs fail (e.g. "uunivwwb" -> "binuvuww" needs the greedy).

Verified: "abca"->"aabc"; "abba"->"aabb"; "cccd"->"-1"; "lmmn"->"lmnm"; "uunivwwb"->"binuvuww".
