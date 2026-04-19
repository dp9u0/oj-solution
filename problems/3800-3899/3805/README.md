# [3805] Count Caesar Cipher Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-caesar-cipher-pairs/description/)

* algorithms
* Medium (51.10%)
* Likes:    110
* Dislikes: 2
* Testcase Example:  '["fusion","layout"]'

```md
You are given an array words of n strings. Each string has length m and contains only lowercase English letters.
Two strings s and t are similar if we can apply the following operation any number of times (possibly zero times) so that s and t become equal.

Choose either s or t.
Replace every letter in the chosen string with the next letter in the alphabet cyclically. The next letter after &#39;z&#39; is &#39;a&#39;.

Count the number of pairs of indices (i, j) such that:

i < j
words[i] and words[j] are similar.

Return an integer denoting the number of such pairs.

Example 1:

Input: words = ['fusion','layout']
Output: 1
Explanation:
words[0] = 'fusion' and words[1] = 'layout' are similar because we can apply the operation to 'fusion' 6 times. The string 'fusion' changes as follows.

'fusion'
'gvtjpo'
'hwukqp'
'ixvlrq'
'jywmsr'
'kzxnts'
'layout'


Example 2:

Input: words = ['ab','aa','za','aa']
Output: 2
Explanation:
words[0] = 'ab' and words[2] = 'za' are similar. words[1] = 'aa' and words[3] = 'aa' are similar.


Constraints:

1 <= n == words.length <= 105
1 <= m == words[i].length <= 105
1 <= n * m <= 105
words[i] consists only of lowercase English letters.


```

## 翻译

两个字符串相似当且仅当可以通过循环移位（每个字符同时+1，z→a）使它们相等。统计相似对数。

## 解题思路

两串相似当且仅当对应位置差值恒定(mod 26)。将每个串归一化为相对首字符的偏移序列作为key，用Map计数同组内C(n,2)之和。

## Solution

[SourceCode](./solution.js)
