# [3298] Count Substrings That Can Be Rearranged to Contain a String II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii/description/)

* algorithms
* Hard (55.24%)
* Likes:    92
* Dislikes: 7
* Testcase Example:  '"bcca"\n"abc"'

```md
You are given two strings word1 and word2.
A string x is called valid if x can be rearranged to have word2 as a prefix.
Return the total number of valid substrings of word1.
Note that the memory limits in this problem are smaller than usual, so you must implement a solution with a linear runtime complexity.

Example 1:

Input: word1 = 'bcca', word2 = 'abc'
Output: 1
Explanation:
The only valid substring is 'bcca' which can be rearranged to 'abcc' having 'abc' as a prefix.

Example 2:

Input: word1 = 'abcabc', word2 = 'abc'
Output: 10
Explanation:
All the substrings except substrings of size 1 and size 2 are valid.

Example 3:

Input: word1 = 'abcabc', word2 = 'aaabc'
Output: 0


Constraints:

1 <= word1.length <= 106
1 <= word2.length <= 104
word1 and word2 consist only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 `word1` 和 `word2`。字符串 `x` **合法**当且仅当 x 重排后能以 `word2` 作为前缀（即 x 的字符多重集包含 word2 的多重集）。返回 `word1` 的合法子串总数。要求线性时间（内存限制更小）。

示例 1：`word1='bcca', word2='abc'` → `1`
示例 2：`word1='abcabc', word2='abc'` → `10`
示例 3：`word1='abcabc', word2='aaabc'` → `0`

约束：`1 <= |word1| <= 10^6`，`1 <= |word2| <= 10^4`

## 解题思路

合法性只依赖子串的**字符计数**是否覆盖 `need`（word2 的计数）。固定左端 l，合法的最小右端 r(l) 随 l 单调不减 → **双指针滑窗**：

- `missing` = 计数尚未达标的不同字母数；进窗 `cnt[c]++` 恰好到 `need[c]` 时 missing−−，出窗从恰好达标降下时 missing++（`need[c] = 0` 的字母不参与）；
- 对每个 l：右指针推进到窗口首次合法（missing = 0），则 `[l, r-1]` 及其所有延长共 `n - r + 1` 个子串合法，累加；随后左端出窗。

**边界**：右指针落后于 l（空窗口）时钳制 `r = l`；空窗口时跳过出窗防止计数为负。

计数 ≤ n(n+1)/2 ≈ 5×10^11 < 2^53 安全。复杂度 O(n + |word2|)。

验证示例 2：各 l 的最小右端 r = 3,4,5,6，贡献 4+3+2+1 = 10 ✓
