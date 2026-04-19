# [1358] Number of Substrings Containing All Three Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/)

* algorithms
* Medium (73.62%)
* Likes:    4447
* Dislikes: 82
* Testcase Example:  '"abcabc"'

```md
Given a string sconsisting only of characters a, b and c.
Return the number of substrings containing at leastone occurrence of all these characters a, b and c.

Example 1:

Input: s = 'abcabc'
Output: 10
Explanation: The substrings containingat leastone occurrence of the charactersa,bandc are 'abc', 'abca', 'abcab', 'abcabc', 'bca', 'bcab', 'bcabc', 'cab', 'cabc' and 'abc' (again).

Example 2:

Input: s = 'aaacb'
Output: 3
Explanation: The substrings containingat leastone occurrence of the charactersa,bandc are 'aaacb', 'aacb' and 'acb'.

Example 3:

Input: s = 'abc'
Output: 1


Constraints:

3 <= s.length <= 5 x 10^4
sonly consists ofa, b or ccharacters.


```

## 翻译

给定仅包含 a、b、c 的字符串 `s`，返回至少包含 a、b、c 各一个的子串数量。

## Approach

**滑动窗口。** 右指针扩展窗口，当窗口内 a、b、c 都存在时，以右指针为结尾的所有合法子串数量 = left + 1（即从 0 到 left 的任何位置开始都可以）。

具体地：维护 count[a/bc] 和 left 指针，当三个字符都 >= 1 时，累加 `left + 1` 到结果，然后收缩左指针。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
