# [3485] Longest Common Prefix of K Strings After Removal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-common-prefix-of-k-strings-after-removal/description/)

* algorithms
* Hard (23.76%)
* Likes:    63
* Dislikes: 5
* Testcase Example:  '["jump","run","run","jump","run"]\n2'

```md
You are given an array of strings words and an integer k.
For each index i in the range [0, words.length - 1], find the length of the longest common prefix among any k strings (selected at distinct indices) from the remaining array after removing the ith element.
Return an array answer, where answer[i] is the answer for ith element. If removing the ith element leaves the array with fewer than k strings, answer[i] is 0.

Example 1:

Input: words = ['jump','run','run','jump','run'], k = 2
Output: [3,4,4,3,4]
Explanation:

Removing index 0 ('jump'):

words becomes: ['run', 'run', 'jump', 'run']. 'run' occurs 3 times. Choosing any two gives the longest common prefix 'run' (length 3).


Removing index 1 ('run'):

words becomes: ['jump', 'run', 'jump', 'run']. 'jump' occurs twice. Choosing these two gives the longest common prefix 'jump' (length 4).


Removing index 2 ('run'):

words becomes: ['jump', 'run', 'jump', 'run']. 'jump' occurs twice. Choosing these two gives the longest common prefix 'jump' (length 4).


Removing index 3 ('jump'):

words becomes: ['jump', 'run', 'run', 'run']. 'run' occurs 3 times. Choosing any two gives the longest common prefix 'run' (length 3).


Removing index 4 ('run'):

words becomes: ['jump', 'run', 'run', 'jump']. 'jump' occurs twice. Choosing these two gives the longest common prefix 'jump' (length 4).




Example 2:

Input: words = ['dog','racer','car'], k = 2
Output: [0,0,0]
Explanation:

Removing any index results in an answer of 0.



Constraints:

1 <= k <= words.length <= 105
1 <= words[i].length <= 104
words[i] consists of lowercase English letters.
The sum of words[i].length is smaller than or equal 105.


```

## 翻译

给定字符串数组 words 和整数 k。对每个下标 i，移除 words[i] 后，从剩余数组中选 k 个字符串，求它们最长公共前缀的最大长度。若剩余不足 k 个则返回 0。

## 解题思路

Trie + top1/top2 统计。

1. 将所有词插入 Trie，每个节点记录 cnt（经过该节点的词数）。
2. 对每层深度 d，记录 cnt 最高的两个节点 top1[d] 和 top2[d]。
3. 可达深度 ach = 所有满足 top1_cnt >= k 的深度（降序排列）。
4. 对每个词 i，从最大可达深度开始检查：若该深度 top1 节点不在词 i 路径上，则可达；若在路径上，检查移除后 max(top1_cnt-1, top2_cnt) >= k。
5. 总复杂度 O(sum(word_lengths))，因为每个词最多检查其路径上的 top1 节点。

## Solution

[SourceCode](./solution.js)
