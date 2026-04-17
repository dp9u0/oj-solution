# [3093] Longest Common Suffix Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-common-suffix-queries/description/)

* algorithms
* Hard (35.75%)
* Likes:    192
* Dislikes: 21
* Testcase Example:  '["abcd","bcd","xbcd"]\n["cd","bcd","xyz"]'

```md
You are given two arrays of strings wordsContainer and wordsQuery.
For each wordsQuery[i], you need to find a string from wordsContainer that has the longest common suffix with wordsQuery[i]. If there are two or more strings in wordsContainer that share the longest common suffix, find the string that is the smallest in length. If there are two or more such strings that have the same smallest length, find the one that occurred earlier in wordsContainer.
Return an array of integers ans, where ans[i] is the index of the string in wordsContainer that has the longest common suffix with wordsQuery[i].

Example 1:

Input: wordsContainer = ['abcd','bcd','xbcd'], wordsQuery = ['cd','bcd','xyz']
Output: [1,1,1]
Explanation:
Let&#39;s look at each wordsQuery[i] separately:

For wordsQuery[0] = 'cd', strings from wordsContainer that share the longest common suffix 'cd' are at indices 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.
For wordsQuery[1] = 'bcd', strings from wordsContainer that share the longest common suffix 'bcd' are at indices 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.
For wordsQuery[2] = 'xyz', there is no string from wordsContainer that shares a common suffix. Hence the longest common suffix is '', that is shared with strings at index 0, 1, and 2. Among these, the answer is the string at index 1 because it has the shortest length of 3.


Example 2:

Input: wordsContainer = ['abcdefgh','poiuygh','ghghgh'], wordsQuery = ['gh','acbfgh','acbfegh']
Output: [2,0,2]
Explanation:
Let&#39;s look at each wordsQuery[i] separately:

For wordsQuery[0] = 'gh', strings from wordsContainer that share the longest common suffix 'gh' are at indices 0, 1, and 2. Among these, the answer is the string at index 2 because it has the shortest length of 6.
For wordsQuery[1] = 'acbfgh', only the string at index 0 shares the longest common suffix 'fgh'. Hence it is the answer, even though the string at index 2 is shorter.
For wordsQuery[2] = 'acbfegh', strings from wordsContainer that share the longest common suffix 'gh' are at indices 0, 1, and 2. Among these, the answer is the string at index 2 because it has the shortest length of 6.



Constraints:

1 <= wordsContainer.length, wordsQuery.length <= 104
1 <= wordsContainer[i].length <= 5 * 103
1 <= wordsQuery[i].length <= 5 * 103
wordsContainer[i] consists only of lowercase English letters.
wordsQuery[i] consists only of lowercase English letters.
Sum of wordsContainer[i].length is at most 5 * 105.
Sum of wordsQuery[i].length is at most 5 * 105.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定两个字符串数组 wordsContainer 和 wordsQuery。对每个查询字符串，找到 wordsContainer 中与它有最长公共后缀的字符串。若有多个，选最短的；若仍相同，选下标最小的。返回每个查询对应的容器下标数组。

## 解题思路

将 wordsContainer 中的每个单词反转后插入字典树(Trie)。每个节点存储经过该节点的最优下标（最短、最早）。查询时反转查询字符串，沿 Trie 尽量深走，最深可达节点的 bestIdx 即为答案。时间复杂度 O(总字符数)。
