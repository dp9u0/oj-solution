# [3913] Sort Vowels by Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sort-vowels-by-frequency/description/)

* algorithms
* Medium (62.89%)
* Likes:    53
* Dislikes: 4
* Testcase Example:  '"leetcode"'

```md
You are given a string s consisting of lowercase English characters.
Rearrange only the vowels in the string so that they appear in non-increasing order of their frequency.
If multiple vowels have the same frequency, order them by the position of their first occurrence in s.
Return the modified string.
Vowels are &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;.
The frequency of a letter is the number of times it occurs in the string.

Example 1:

Input: s = 'leetcode'
Output: 'leetcedo'
Explanation:​​​​​​​

Vowels in the string are [&#39;e&#39;, &#39;e&#39;, &#39;o&#39;, &#39;e&#39;] with frequencies: e = 3, o = 1.
Sorting in non-increasing order of frequency and placing them back into the vowel positions results in 'leetcedo'.


Example 2:

Input: s = 'aeiaaioooa'
Output: 'aaaaoooiie'
Explanation:​​​​​​​

Vowels in the string are [&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;a&#39;, &#39;a&#39;, &#39;i&#39;, &#39;o&#39;, &#39;o&#39;, &#39;o&#39;, &#39;a&#39;] with frequencies: a = 4, o = 3, i = 2, e = 1.
Sorting them in non-increasing order of frequency and placing them back into the vowel positions results in 'aaaaoooiie'.


Example 3:

Input: s = 'baeiou'
Output: 'baeiou'
Explanation:

Each vowel appears exactly once, so all have the same frequency.
Thus, they retain their relative order based on first occurrence, and the string remains unchanged.



Constraints:

1 <= s.length <= 105
s consists of lowercase English letters


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

只重排字符串中的元音（aeiou），使元音按**出现频次非升序**排列；频次相同时按**首次出现位置**排序。辅音位置不动。

示例 1：`'leetcode'` → `'leetcedo'`；示例 2：`'aeiaaioooa'` → `'aaaaoooiie'`；示例 3：`'baeiou'` → 不变

## 解题思路

统计元音频次与首现顺序，排序生成目标元音序列，按顺序回填到原元音位置。O(n)。
