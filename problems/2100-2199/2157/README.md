# [2157] Groups of Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/groups-of-strings/description/)

* algorithms
* Hard (27.63%)
* Likes:    510
* Dislikes: 62
* Testcase Example:  '["a","b","ab","cde"]'

```md
You are given a 0-indexed array of strings words. Each string consists of lowercase English letters only. No letter occurs more than once in any string of words.
Two strings s1 and s2 are said to be connected if the set of letters of s2 can be obtained from the set of letters of s1 by any one of the following operations:

Adding exactly one letter to the set of the letters of s1.
Deleting exactly one letter from the set of the letters of s1.
Replacing exactly one letter from the set of the letters of s1 with any letter, including itself.

The array words can be divided into one or more non-intersecting groups. A string belongs to a group if any one of the following is true:

It is connected to at least one other string of the group.
It is the only string present in the group.

Note that the strings in words should be grouped in such a manner that a string belonging to a group cannot be connected to a string present in any other group. It can be proved that such an arrangement is always unique.
Return an array ans of size 2 where:

ans[0] is the maximum number of groups words can be divided into, and
ans[1] is the size of the largest group.


Example 1:

Input: words = ['a','b','ab','cde']
Output: [2,3]
Explanation:
- words[0] can be used to obtain words[1] (by replacing &#39;a&#39; with &#39;b&#39;), and words[2] (by adding &#39;b&#39;). So words[0] is connected to words[1] and words[2].
- words[1] can be used to obtain words[0] (by replacing &#39;b&#39; with &#39;a&#39;), and words[2] (by adding &#39;a&#39;). So words[1] is connected to words[0] and words[2].
- words[2] can be used to obtain words[0] (by deleting &#39;b&#39;), and words[1] (by deleting &#39;a&#39;). So words[2] is connected to words[0] and words[1].
- words[3] is not connected to any string in words.
Thus, words can be divided into 2 groups ['a','b','ab'] and ['cde']. The size of the largest group is 3.

Example 2:

Input: words = ['a','ab','abc']
Output: [1,3]
Explanation:
- words[0] is connected to words[1].
- words[1] is connected to words[0] and words[2].
- words[2] is connected to words[1].
Since all strings are connected to each other, they should be grouped together.
Thus, the size of the largest group is 3.


Constraints:

1 <= words.length <= 2 * 104
1 <= words[i].length <= 26
words[i] consists of lowercase English letters only.
No letter occurs more than once in words[i].


```

## 题目翻译

给定字符串数组 words，每个字符串中的字母不重复。两个字符串"连通"如果其中一个可以通过以下操作之一变为另一个：增加一个字母、删除一个字母、替换一个字母。求 words 能分成多少个连通分量，以及最大连通分量的大小。

## 解题思路

**位掩码 + 并查集**

1. 每个字符串用 26 位掩码表示。
2. 对每个掩码生成所有邻居：删除一位（26 种）和替换一位（26×25 种），共约 676 个候选。
3. 若邻居掩码存在于 words 中，用并查集 union。
4. 统计连通分量数和最大分量大小。

去重处理：相同掩码的多个 word 先 union 到一起。

时间复杂度 O(n × 26² × α(n))。

## Solution

[SourceCode](./solution.js)
