# [3799] Word Squares II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/word-squares-ii/description/)

* algorithms
* Medium (54.98%)
* Likes:    57
* Dislikes: 27
* Testcase Example:  '["able","area","echo","also"]'

```md
You are given a string array words, consisting of distinct 4-letter strings, each containing lowercase English letters.
A word square consists of 4 distinct words: top, left, right and bottom, arranged as follows:

top forms the top row.
bottom forms the bottom row.
left forms the left column (top to bottom).
right forms the right column (top to bottom).

It must satisfy:

top[0] == left[0], top[3] == right[0]
bottom[0] == left[3], bottom[3] == right[3]

Return all valid distinct word squares, sorted in ascending lexicographic order by the 4-tuple (top, left, right, bottom)​​​​​​​.

Example 1:

Input: words = ['able','area','echo','also']
Output: [['able','area','echo','also'],['area','able','also','echo']]
Explanation:
There are exactly two valid 4-word squares that satisfy all corner constraints:

'able' (top), 'area' (left), 'echo' (right), 'also' (bottom)

top[0] == left[0] == &#39;a&#39;
top[3] == right[0] == &#39;e&#39;
bottom[0] == left[3] == &#39;a&#39;
bottom[3] == right[3] == &#39;o&#39;


'area' (top), 'able' (left), 'also' (right), 'echo' (bottom)

All corner constraints are satisfied.



Thus, the answer is [['able','area','echo','also'],['area','able','also','echo']].

Example 2:

Input: words = ['code','cafe','eden','edge']
Output: []
Explanation:
No combination of four words satisfies all four corner constraints. Thus, the answer is empty array [].


Constraints:

4 <= words.length <= 15
words[i].length == 4
words[i] consists of only lowercase English letters.
All words[i] are distinct.


```

## 题目翻译

给定一个由互不相同的4字母小写字符串组成的数组 words。一个词方由4个不同的词组成：top、left、right、bottom，满足以下角落约束：
- top[0] == left[0]，top[3] == right[0]
- bottom[0] == left[3]，bottom[3] == right[3]

返回所有有效的词方，按 (top, left, right, bottom) 的字典序升序排列。

## 解题思路

枚举所有4个不同单词的排列组合 (top, left, right, bottom)，检查4个角落约束。由于 n <= 15，四重循环最多 15^4 = 50625 次，加上提前剪枝（不满足约束直接跳过），实际远小于此。最后按字典序排序输出。

## Solution

[SourceCode](./solution.js)
