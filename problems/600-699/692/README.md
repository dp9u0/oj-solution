# [692] Top K Frequent Words

## Description

[LeetCode Problem Description](https://leetcode.com/problems/top-k-frequent-words/description/)

* algorithms
* Medium (60.09%)
* Likes:    8036
* Dislikes: 375
* Testcase Example:  '["i","love","leetcode","i","love","coding"]\n2'

```md
Given an array of strings words and an integer k, return the k most frequent strings.
Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

Example 1:

Input: words = ['i','love','leetcode','i','love','coding'], k = 2
Output: ['i','love']
Explanation: 'i' and 'love' are the two most frequent words.
Note that 'i' comes before 'love' due to a lower alphabetical order.

Example 2:

Input: words = ['the','day','is','sunny','the','the','the','sunny','is','is'], k = 4
Output: ['the','is','sunny','day']
Explanation: 'the', 'is', 'sunny' and 'day' are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.


Constraints:

1 <= words.length <= 500
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
k is in the range [1, The number of unique words[i]]


Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个字符串数组 words 和一个整数 k，返回出现频率最高的前 k 个字符串。结果按频率从高到低排序，频率相同的按字典序排列。

## 解题思路

**哈希表计数 + 排序**

1. 用 Map 统计每个单词的出现频率
2. 将所有单词按频率降序排序，频率相同的按字典序升序排序
3. 返回前 k 个

时间复杂度 O(n log n)，空间复杂度 O(n)。
