# [2901] Longest Unequal Adjacent Groups Subsequence II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/description/)

* algorithms
* Medium (51.43%)
* Likes:    574
* Dislikes: 169
* Testcase Example:  '["bab","dab","cab"]\n[1,2,2]'

```md
You are given a string array words, and an array groups, both arrays having length n.
The hamming distance between two strings of equal length is the number of positions at which the corresponding characters are different.
You need to select the longest subsequence from an array of indices [0, 1, ..., n - 1], such that for the subsequence denoted as [i0, i1, ..., ik-1] having length k, the following holds:

For adjacent indices in the subsequence, their corresponding groups are unequal, i.e., groups[ij] != groups[ij+1], for each j where 0 < j + 1 < k.
words[ij] and words[ij+1] are equal in length, and the hamming distance between them is 1, where 0 < j + 1 < k, for all indices in the subsequence.

Return a string array containing the words corresponding to the indices (in order) in the selected subsequence. If there are multiple answers, return any of them.
Note: strings in words may be unequal in length.

Example 1:

Input: words = ['bab','dab','cab'], groups = [1,2,2]
Output: ['bab','cab']
Explanation: A subsequence that can be selected is [0,2].

groups[0] != groups[2]
words[0].length == words[2].length, and the hamming distance between them is 1.

So, a valid answer is [words[0],words[2]] = ['bab','cab'].
Another subsequence that can be selected is [0,1].

groups[0] != groups[1]
words[0].length == words[1].length, and the hamming distance between them is 1.

So, another valid answer is [words[0],words[1]] = ['bab','dab'].
It can be shown that the length of the longest subsequence of indices that satisfies the conditions is 2.

Example 2:

Input: words = ['a','b','c','d'], groups = [1,2,3,4]
Output: ['a','b','c','d']
Explanation: We can select the subsequence [0,1,2,3].
It satisfies both conditions.
Hence, the answer is [words[0],words[1],words[2],words[3]] = ['a','b','c','d'].
It has the longest length among all subsequences of indices that satisfy the conditions.
Hence, it is the only answer.


Constraints:

1 <= n == words.length == groups.length <= 1000
1 <= words[i].length <= 10
1 <= groups[i] <= n
words consists of distinct strings.
words[i] consists of lowercase English letters.


```

## 题目翻译

给定 words 和 groups 数组，选最长下标子序列使得：相邻 groups 不同，相邻 words 等长且汉明距离为 1。返回对应 words。

## 解题思路

**DP**

dp[i] = 以 i 结尾的最长子序列长度。转移：dp[i] = max(dp[j]+1)，其中 j<i，groups[j]≠groups[i]，words[j] 与 words[i] 等长且汉明距离为 1。

用 prev[i] 记录前驱以重建路径。n ≤ 1000，词长 ≤ 10，O(n²) 可过。

## Solution

[SourceCode](./solution.js)
