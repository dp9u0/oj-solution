# [1520] 最多的不重叠子字符串

## Description


```md
https://leetcode.cn/problems/maximum-number-of-non-overlapping-substrings/description/
* algorithms
* Hard (40.50%)
* Likes:    95
* Dislikes: -
* Testcase Example:  '"adefaddaccc"'
给你一个只包含小写字母的字符串 s ，你需要找到 s 中最多数目的非空子字符串，满足如下条件：
这些字符串之间互不重叠，也就是说对于任意两个子字符串 s[i..j] 和 s[x..y] ，要么 j < x 要么 i > y 。
如果一个子字符串包含字符 char ，那么 s 中所有 char 字符都应该在这个子字符串中。
请你找到满足上述条件的最多子字符串数目。如果有多个解法有相同的子字符串数目，请返回这些子字符串总长度最小的一个解。可以证明最小总长度解是唯一的。
请注意，你可以以 任意 顺序返回最优解的子字符串。

示例 1：
输入：s = "adefaddaccc"
输出：["e","f","ccc"]
解释：下面为所有满足第二个条件的子字符串：
[
"adefaddaccc"
"adefadda",
"ef",
"e",
"f",
"ccc",
]
如果我们选择第一个字符串，那么我们无法再选择其他任何字符串，所以答案为 1 。如果我们选择 "adefadda" ，剩下子字符串中我们只可以选择 "ccc" ，它是唯一不重叠的子字符串，所以答案为 2 。同时我们可以发现，选择 "ef" 不是最优的，因为它可以被拆分成 2 个子字符串。所以最优解是选择 ["e","f","ccc"] ，答案为 3 。不存在别的相同数目子字符串解。
示例 2：
输入：s = "abbaccd"
输出：["d","bb","cc"]
解释：注意到解 ["d","abba","cc"] 答案也为 3 ，但它不是最优解，因为它的总长度更长。

提示：
1 <= s.length <= 10^5
s 只包含小写英文字母。
Hint 1: Notice that it's impossible for any two valid substrings to overlap unless one is inside another.
Hint 2: We can start by finding the starting and ending index for each character.
Hint 3: From these indices, we can form the substrings by expanding each character's range if necessary (if another character exists in the range with smaller/larger starting/ending index).
Hint 4: Sort the valid substrings by length and greedily take those with the smallest length, discarding the ones that overlap those we took.

```

## English Translation

Given a string `s` containing only lowercase English letters, find the maximum number of non-empty substrings of `s` that satisfy all of the following conditions:

1. The substrings do not overlap with each other: for any two substrings `s[i..j]` and `s[x..y]`, either `j < x` or `i > y`.
2. If a substring contains a character `char`, then every occurrence of `char` in `s` must be inside that substring.

Return the maximum number of substrings satisfying the above conditions. If there are multiple solutions with the same number of substrings, return the one with the minimum total length. It can be proven that the minimum-total-length solution is unique.

Note that you may return the optimal substrings in any order.

Example 1:
Input: s = "adefaddaccc"
Output: ["e","f","ccc"]
Explanation: The following are all the substrings satisfying condition 2: "adefaddaccc", "adefadda", "ef", "e", "f", "ccc". If we choose the first string, we cannot choose anything else (answer 1). If we choose "adefadda", we can only additionally choose "ccc" (answer 2). Choosing "ef" is not optimal since it can be split into 2 substrings. The optimal solution is ["e","f","ccc"] with answer 3.

Example 2:
Input: s = "abbaccd"
Output: ["d","bb","cc"]
Explanation: Note that the solution ["d","abba","cc"] also has 3 substrings, but it is not optimal since its total length is larger.

Constraints:
1 <= s.length <= 10^5
s consists of lowercase English letters.

## Approach

关键词：字符出现区间 + 合法子串闭包 + 区间调度贪心。

思路（最小合法区间 + 按右端点贪心，O(26n + n log n)）：

1. 预处理每个字符的首次出现位置 `first[c]` 与最后一次出现位置 `last[c]`。
2. 合法子串的两个关键性质：
   - 任意两个合法子串若相交，则必然一个包含另一个（层叠/laminar 关系），不会部分交叉。
   - 对每个起点 `i`，以它为起点的最小合法子串是唯一的：从 `r = last[s[i]]` 出发，扫描 `[i, r]` 内每个字符并扩张 `r = max(r, last[c])`；若某字符 `first[c] < i`（需要向左扩张），则 `i` 不可能是任何合法子串的起点。
3. 枚举所有起点，收集全部最小合法区间 `[i, r]`。任意两个这样的区间要么不相交，要么嵌套；嵌套时右端点必不相同（若右端点相同，外层区间向右扩张需要某字符同时出现在内外两层，与内层合法性矛盾），因此可按右端点排序。
4. 按右端点升序做区间调度贪心：`i > end` 则选中并更新 `end = r`，否则跳过。
   - 选中数目：标准 earliest-end 贪心保证最大化不相交区间数。
   - 总长度最小：对层叠区间族，取全局右端点最早且被某最优解包含的区间做交换论证——任何与它相交的最优解区间只能是严格包含它的区间，替换后数目不变、总长度变小，故贪心解同时数目最多且总长度最小（嵌套时天然先选中更短的内层区间，如 "abba" → ["bb"] 而非 ["abba"]）。
5. 复杂度：内层扩张的总步数受字母表大小限制（每层嵌套至少消耗新字符，深度 ≤ 26），为 O(26n)；排序 O(n log n)。n ≤ 10^5 可通过。

复杂度：时间 O(26n + n log n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
