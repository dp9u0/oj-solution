# [2707] Extra Characters in a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/extra-characters-in-a-string/description/)

* algorithms
* Medium (57.32%)
* Likes:    2636
* Dislikes: 138
* Testcase Example:  '"leetscode"\n["leet","code","leetcode"]'

```md
You are given a 0-indexed string s and a dictionary of words dictionary. You have to break s into one or more non-overlapping substrings such that each substring is present in dictionary. There may be some extra characters in s which are not present in any of the substrings.
Return the minimum number of extra characters left over if you break up s optimally.

Example 1:

Input: s = 'leetscode', dictionary = ['leet','code','leetcode']
Output: 1
Explanation: We can break s in two substrings: 'leet' from index 0 to 3 and 'code' from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.

Example 2:

Input: s = 'sayhelloworld', dictionary = ['hello','world']
Output: 3
Explanation: We can break s in two substrings: 'hello' from index 3 to 7 and 'world' from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.


Constraints:

1 <= s.length <= 50
1 <= dictionary.length <= 50
1 <= dictionary[i].length <= 50
dictionary[i]and s consists of only lowercase English letters
dictionary contains distinct words


```

## 翻译

给定字符串 s 和字典 dictionary，将 s 分割为若干子串使得尽可能多的子串在字典中，求最少剩余（未匹配）字符数。

## Approach

DP。dp[i] 表示 s[0..i-1] 的最少多余字符数。转移：dp[i] = min(dp[i-1]+1, dp[j]) 其中 s[j..i-1] 在字典中。用 Set 存字典加速查找。

## Solution

[SourceCode](./solution.js)
