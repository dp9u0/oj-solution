# [1220] Count Vowels Permutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-vowels-permutation/description/)

* algorithms
* Hard (61.34%)
* Likes:    3302
* Dislikes: 220
* Testcase Example:  '1'

```md
Given an integer n, your task is to count how many strings of length n can be formed under the following rules:

Each character is a lower case vowel(&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;)
Each vowel&#39;a&#39; may only be followed by an &#39;e&#39;.
Each vowel&#39;e&#39; may only be followed by an &#39;a&#39;or an &#39;i&#39;.
Each vowel&#39;i&#39; may not be followed by another &#39;i&#39;.
Each vowel&#39;o&#39; may only be followed by an &#39;i&#39; or a&#39;u&#39;.
Each vowel&#39;u&#39; may only be followed by an &#39;a&#39;.

Since the answermay be too large,return it modulo10^9 + 7.

Example 1:

Input: n = 1
Output: 5
Explanation: All possible strings are: 'a', 'e', 'i' , 'o' and 'u'.

Example 2:

Input: n = 2
Output: 10
Explanation: All possible strings are: 'ae', 'ea', 'ei', 'ia', 'ie', 'io', 'iu', 'oi', 'ou' and 'ua'.

Example 3:

Input: n = 5
Output: 68

Constraints:

1 <= n <= 2 * 10^4


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定整数 n，统计长度为 n 的字符串个数，满足：每个字符是小写元音字母，且遵循后继规则（a→e, e→a/i, i→非i, o→i/u, u→a）。结果 mod 10^9+7。

### 解题思路

**线性 DP**

用 5 个变量 a, e, i, o, u 记录以各元音结尾的当前字符串数。每轮按规则转移：
- a' = e + i + u（e, i, u 后可接 a）
- e' = a + i（a, i 后可接 e）
- i' = e + o（e, o 后可接 i）
- o' = i（i 后可接 o）
- u' = i + o（i, o 后可接 u）
