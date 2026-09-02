# [LCR 019] 验证回文串 II

## Description


```md
https://leetcode.cn/problems/RQku0D/description/
* algorithms
* Easy (45.75%)
* Likes:    94
* Dislikes: -
* Testcase Example:  '"aba"'
给定一个非空字符串 s，请判断如果 最多 从字符串中删除一个字符能否得到一个回文字符串。

示例 1：
输入: s = "aba"
输出: true
示例 2：
输入: s = "abca"
输出: true
解释: 可以删除 "c" 字符 或者 "b" 字符
示例 3：
输入: s = "abc"
输出: false

提示：
1 <= s.length <= 105
s 由小写英文字母组成

注意：本题与主站 680 题相同： https://leetcode.cn/problems/valid-palindrome-ii/

```

## Description (English)

Given a non-empty string `s`, you may delete **at most** one character. Return `true` if `s` can be made a palindrome by deleting at most one character.

**Example 1:**
```
Input: s = "aba"
Output: true
```

**Example 2:**
```
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c' or 'b'.
```

**Example 3:**
```
Input: s = "abc"
Output: false
```

**Constraints:**
- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.

## 解题思路

**双指针 + 贪心跳过。**

1. 使用左右双指针 `l`、`r` 从两端向中间扫描。
2. 当 `s[l] === s[r]` 时，`l++`、`r--` 继续。
3. 当遇到第一处 `s[l] !== s[r]` 时，只需尝试两种情况之一，并判断剩余子串是否为回文：
   - 删除 `s[l]`，判断 `s[l+1..r]` 是否为回文；
   - 删除 `s[r]`，判断 `s[l..r-1]` 是否为回文。
   - 两者任一成立即返回 `true`。
4. 若全程无冲突，返回 `true`。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
