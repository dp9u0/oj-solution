# [3839] Number of Prefix Connected Groups

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-prefix-connected-groups/description/)

* algorithms
* Medium (60.60%)
* Likes:    49
* Dislikes: 4
* Testcase Example:  '["apple","apply","banana","bandit"]\n2'

```md
You are given an array of strings words and an integer k.
Two words a and b at distinct indices are prefix-connected if a[0..k-1] == b[0..k-1].
A connected group is a set of words such that each pair of words is prefix-connected.
Return the number of connected groups that contain at least two words, formed from the given words.
Note:

Words with length less than k cannot join any group and are ignored.
Duplicate strings are treated as separate words.


Example 1:

Input: words = ['apple','apply','banana','bandit'], k = 2
Output: 2
Explanation:
Words sharing the same first k = 2 letters are grouped together:

words[0] = 'apple' and words[1] = 'apply' share prefix 'ap'.
words[2] = 'banana' and words[3] = 'bandit' share prefix 'ba'.

Thus, there are 2 connected groups, each containing at least two words.

Example 2:

Input: words = ['car','cat','cartoon'], k = 3
Output: 1
Explanation:
Words are evaluated for a prefix of length k = 3:

words[0] = 'car' and words[2] = 'cartoon' share prefix 'car'.
words[1] = 'cat' does not share a 3-length prefix with any other word.

Thus, there is 1 connected group.

Example 3:

Input: words = ['bat','dog','dog','doggy','bat'], k = 3
Output: 2
Explanation:
Words are evaluated for a prefix of length k = 3:

words[0] = 'bat' and words[4] = 'bat' form a group.
words[1] = 'dog', words[2] = 'dog' and words[3] = 'doggy' share prefix 'dog'.

Thus, there are 2 connected groups, each containing at least two words.


Constraints:

1 <= words.length <= 5000
1 <= words[i].length <= 100
1 <= k <= 100
All strings in words consist of lowercase English letters.


```

## 题目翻译

给定字符串数组 words 和整数 k。两个词前 k 个字符相同则为 prefix-connected。连通组是所有词两两 prefix-connected 的集合。返回包含至少两个词的连通组数量。

## 解题思路

所有共享相同前缀（前 k 字符）的词属于同一组。用 Map 统计每个前缀出现次数，计数 ≥2 的前缀数量即为答案。

## Solution

[SourceCode](./solution.js)
