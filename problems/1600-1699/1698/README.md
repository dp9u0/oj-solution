# [1698] 字符串的不同子字符串个数

## Description


```md
https://leetcode.cn/problems/number-of-distinct-substrings-in-a-string/description/
* algorithms
* Medium (55.91%)
* Likes:    21
* Dislikes: -
* Testcase Example:  '"aabbaba"'
给定一个字符串 s，返回 s 的不同子字符串的个数。
字符串的 子字符串 是由原字符串删除开头若干个字符（可能是 0 个）并删除结尾若干个字符（可能是 0 个）形成的字符串。

示例 1：
输入：s = "aabbaba"
输出：21
解释：不同子字符串的集合是 ["a","b","aa","bb","ab","ba","aab","abb","bab","bba","aba","aabb","abba","bbab","baba","aabba","abbab","bbaba","aabbab","abbaba","aabbaba"]
示例 2：
输入：s = "abcdefg"
输出：28

提示：
1 <= s.length <= 500
s 由小写英文字母组成。
进阶：你可以以 O(n) 时间复杂度解决此问题吗？
Hint 1: Calculate the prefix hashing array for s.
Hint 2: Use the prefix hashing array to calculate the hashing value of each substring.
Hint 3: Compare the hashing values to determine the unique substrings.
Hint 4: There could be collisions if you use hashing, what about double hashing.

```

## Solution

[SourceCode](./solution.js)

## Translation

Count distinct substrings of s (n ≤ 500).

## Approach

**双哈希枚举**。前缀哈希 O(1) 取任意子串指纹,全部 n²/2 ≈ 12.5 万个子串(长度,h1,h2)入 Set 计数;双模碰撞概率可忽略。O(n²)。
