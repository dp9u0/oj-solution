# [1119] 删去字符串中的元音

## Description


```md
https://leetcode.cn/problems/remove-vowels-from-a-string/description/
* algorithms
* Easy (87.18%)
* Likes:    22
* Dislikes: -
* Testcase Example:  '"leetcodeisacommunityforcoders"'
给你一个字符串 s ，请你删去其中的所有元音字母 'a'，'e'，'i'，'o'，'u'，并返回这个新字符串。

示例 1：
输入：s = "leetcodeisacommunityforcoders"
输出："ltcdscmmntyfrcdrs"
示例 2：
输入：s = "aeiou"
输出：""

提示：
1 <= S.length <= 1000
s 仅由小写英文字母组成
Hint 1: How to erase vowels in a string?
Hint 2: Loop over the string and check every character, if it is a vowel ignore it otherwise add it to the answer.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a string `s`, remove all vowels ('a', 'e', 'i', 'o', 'u') and return the new string.

**Example:**
s = "leetcodeisacommunityforcoders" → "ltcdscmmntyfrcdrs"

## Approach

正则替换所有元音。

时间 O(n),空间 O(n)。
