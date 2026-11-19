# [1062] 最长重复子串的长度

## Description


```md
https://leetcode.cn/problems/longest-repeating-substring/description/
* algorithms
* Medium (58.39%)
* Likes:    119
* Dislikes: -
* Testcase Example:  '"abcd"'
给你一个字符串 s，找出并返回 最长重复子串 的长度。如果不存在重复子串，返回 0。

示例 1：
输入：s = "abcd"
输出：0
解释：没有重复子串。
示例 2：
输入：s = "abbaba"
输出：2
解释：最长的重复子串为 "ab" 和 "ba"，每个出现 2 次。
示例 3：
输入：s = "aabcaabdaab"
输出：3
解释：最长的重复子串为 "aab"，出现 3 次。

提示：
1 <= s.length <= 2000
字符串 s 仅包含从 'a' 到 'z' 的小写英文字母。
Hint 1: Generate all substrings in O(N^2) time with hashing.
Hint 2: Choose those hashing of strings with the largest length.

```

## Solution

[SourceCode](./solution.js)

## Translation

Return the length of the longest substring that occurs at least twice in s (occurrences may overlap); 0 if none.

- Example: s = "aabcaabdaab" → `3` ("aab")

## Approach

**二分长度 + 滚动哈希**。存在长为 L 的重复子串 ⟺ 存在长 L−1 的(取其前缀),谓词对 L 单调,可二分。检查 hasDup(L):Rabin-Karp 滚动哈希把所有 n−L+1 个子串哈希入 Map(哈希 → 起点列表),命中后逐个真串比对——假阳性被消除,判定确定性。O(n log n) 次 O(L) 乘加。
