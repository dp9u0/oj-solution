# [3598] Longest Common Prefix Between Adjacent Strings After Removals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-common-prefix-between-adjacent-strings-after-removals/description/)

* algorithms
* Medium (32.45%)
* Likes:    85
* Dislikes: 5
* Testcase Example:  '["jump","run","run","jump","run"]'

```md
You are given an array of strings words. For each index i in the range [0, words.length - 1], perform the following steps:

Remove the element at index i from the words array.
Compute the length of the longest common prefix among all adjacent pairs in the modified array.

Return an array answer, where answer[i] is the length of the longest common prefix between the adjacent pairs after removing the element at index i. If no adjacent pairs remain or if none share a common prefix, then answer[i] should be 0.

Example 1:

Input: words = ['jump','run','run','jump','run']
Output: [3,0,0,3,3]
Explanation:

Removing index 0:

words becomes ['run', 'run', 'jump', 'run']
Longest adjacent pair is ['run', 'run'] having a common prefix 'run' (length 3)


Removing index 1:

words becomes ['jump', 'run', 'jump', 'run']
No adjacent pairs share a common prefix (length 0)


Removing index 2:

words becomes ['jump', 'run', 'jump', 'run']
No adjacent pairs share a common prefix (length 0)


Removing index 3:

words becomes ['jump', 'run', 'run', 'run']
Longest adjacent pair is ['run', 'run'] having a common prefix 'run' (length 3)


Removing index 4:

words becomes ['jump', 'run', 'run', 'jump']
Longest adjacent pair is ['run', 'run'] having a common prefix 'run' (length 3)




Example 2:

Input: words = ['dog','racer','car']
Output: [0,0,0]
Explanation:

Removing any index results in an answer of 0.



Constraints:

1 <= words.length <= 105
1 <= words[i].length <= 104
words[i] consists of lowercase English letters.
The sum of words[i].length is smaller than or equal 105.


```

## 中文翻译

给定字符串数组 words，对每个下标 i，移除 words[i] 后，求剩余数组中所有相邻对的 LCP（最长公共前缀）的最大值。返回答案数组。

## 解题思路

n 达 10^5，不能逐个暴力。先用 O(n) 预处理所有相邻对的 LCP 值 lcp[i] = LCP(words[i], words[i+1])，同时用数组维护 top2 最大值。对于移除 i，只有 lcp[i-1] 和 lcp[i] 两个值被移除、lcp[i-1,i] 合并为 LCP(words[i-1], words[i+1])。所以对每个 i，从 top2 中排除被影响的 LCP 值，加入新的合并值，取最大即可。关键：维护前缀/后缀最大值数组，可以 O(1) 查询任意区间外的最大 LCP。

更简洁的做法：预处理 lcp[i]，对每个移除 i，需要考虑的相邻对是：原 lcp[0..i-2]、LCP(words[i-1], words[i+1])、原 lcp[i+1..n-2]。用前缀最大和后缀最大数组即可 O(1) 求解。

## Solution

[SourceCode](./solution.js)
