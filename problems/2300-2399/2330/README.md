# [2330] 验证回文串 IV

## Description


```md
https://leetcode.cn/problems/valid-palindrome-iv/description/
* algorithms
* Medium (71.27%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '"abcdba"'
给你一个下标从 0 开始、仅由小写英文字母组成的字符串 s 。在一步操作中，你可以将 s 中的任一字符更改为其他任何字符。
如果你能在 恰 执行一到两步操作后使 s 变成一个回文，则返回 true ，否则返回 false 。

示例 1：
输入: s = "abcdba"
输出: true
解释: 能让 s 变成回文，且只用了一步操作的方案如下:
- 将 s[2] 变成 'd' ，得到 s = "abddba" 。
执行一步操作让 s 变成一个回文，所以返回 true 。
示例 2：
输入: s = "aa"
输出: true
解释: 能让 s 变成回文，且只用了两步操作的方案如下:
- 将 s[0] 变成 'b' ，得到 s = "ba" 。
- 将 s[1] 变成 'b' ，得到s = "bb" 。
执行两步操作让 s 变成一个回文，所以返回 true 。
示例 3：
输入: s = "abcdef"
输出: false
解释: 不存在能在两步操作以内将 s 变成回文的办法，所以返回 false 。

提示：
1 <= s.length <= 105
s 仅由小写英文字母组成
Hint 1: Count the number of pairs of characters that should be equal if s were a palindrome, but are not equal.
Hint 2: If the number of pairs is 0, then s is already palindrome. You can pick any pair of characters and change them both to a different character and s will stay a palindrome.

```

## Solution

[SourceCode](./solution.js)

## English Translation

In one operation you may change any character of s to any other character. Return true if you can make s a palindrome with EXACTLY one or two operations.

Example 1:
Input: s = "abcdba"
Output: true

Example 2:
Input: s = "aa"
Output: true

Example 3:
Input: s = "abcdef"
Output: false

Constraints: 1 <= s.length <= 10^5.

## Approach

Count mismatched pairs m (two pointers). m = 1 -> one op fixes it. m = 2 -> two ops. m = 0 (already a palindrome) -> still true: for n >= 2 change both ends of some pair to a new letter in two ops; for n = 1, flip the single char away and back (a->b, b->a) in two ops. So the answer is simply m <= 2.
