# [2068] Check Whether Two Strings are Almost Equivalent

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/)

* algorithms
* Easy (64.25%)
* Likes:    577
* Dislikes: 24
* Testcase Example:  '"aaaa"\n"bccb"'

```md
Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from &#39;a&#39; to &#39;z&#39; between word1 and word2 is at most 3.
Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.
The frequency of a letter x is the number of times it occurs in the string.

Example 1:

Input: word1 = 'aaaa', word2 = 'bccb'
Output: false
Explanation: There are 4 &#39;a&#39;s in 'aaaa' but 0 &#39;a&#39;s in 'bccb'.
The difference is 4, which is more than the allowed 3.

Example 2:

Input: word1 = 'abcdeef', word2 = 'abaaacc'
Output: true
Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
- &#39;a&#39; appears 1 time in word1 and 4 times in word2. The difference is 3.
- &#39;b&#39; appears 1 time in word1 and 1 time in word2. The difference is 0.
- &#39;c&#39; appears 1 time in word1 and 2 times in word2. The difference is 1.
- &#39;d&#39; appears 1 time in word1 and 0 times in word2. The difference is 1.
- &#39;e&#39; appears 2 times in word1 and 0 times in word2. The difference is 2.
- &#39;f&#39; appears 1 time in word1 and 0 times in word2. The difference is 1.

Example 3:

Input: word1 = 'cccddabba', word2 = 'babababab'
Output: true
Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
- &#39;a&#39; appears 2 times in word1 and 4 times in word2. The difference is 2.
- &#39;b&#39; appears 2 times in word1 and 5 times in word2. The difference is 3.
- &#39;c&#39; appears 3 times in word1 and 0 times in word2. The difference is 3.
- &#39;d&#39; appears 2 times in word1 and 0 times in word2. The difference is 2.


Constraints:

n == word1.length == word2.length
1 <= n <= 100
word1 and word2 consist only of lowercase English letters.


```

## 翻译

两个字符串word1和word2，如果每个字母a-z在两个字符串中出现次数之差都不超过3，则称它们几乎等价。返回是否几乎等价。

## 解题思路

用长度26的数组统计两个字符串各字母频率，检查差值是否都不超过3。

## Solution

[SourceCode](./solution.js)
