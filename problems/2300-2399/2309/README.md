# [2309] Greatest English Letter in Upper and Lower Case

## Description

[LeetCode Problem Description](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/description/)

* algorithms
* Easy (71.99%)
* Likes:    527
* Dislikes: 33
* Testcase Example:  '"lEeTcOdE"'

```md
Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.
An English letter b is greater than another letter a if b appears after a in the English alphabet.

Example 1:

Input: s = 'lEeTcOdE'
Output: 'E'
Explanation:
The letter &#39;E&#39; is the only letter to appear in both lower and upper case.

Example 2:

Input: s = 'arRAzFif'
Output: 'R'
Explanation:
The letter &#39;R&#39; is the greatest letter to appear in both lower and upper case.
Note that &#39;A&#39; and &#39;F&#39; also appear in both lower and upper case, but &#39;R&#39; is greater than &#39;F&#39; or &#39;A&#39;.

Example 3:

Input: s = 'AbCdEfGhIjK'
Output: ''
Explanation:
There is no letter that appears in both lower and upper case.


Constraints:

1 <= s.length <= 1000
s consists of lowercase and uppercase English letters.


```

## 题目翻译

给定字符串 s，找到同时在大小写中出现的最大字母（返回大写），不存在则返回空串。

## 解题思路

**集合 + 逆序扫描**

用 Set 记录所有字符，从 'Z' 到 'A' 扫描，第一个同时出现大小写的字母即为答案。O(n)。

## Solution

[SourceCode](./solution.js)
