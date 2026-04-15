# [3081] Replace Question Marks in String to Minimize Its Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/description/)

* algorithms
* Medium (29.03%)
* Likes:    205
* Dislikes: 33
* Testcase Example:  '"???"'

```md
You are given a string s. s[i] is either a lowercase English letter or &#39;?&#39;.
For a string t having length m containing only lowercase English letters, we define the function cost(i) for an index ias the number of characters equal to t[i]that appeared before it, i.e. in the range [0, i - 1].
The value of t is the sum of cost(i) for all indices i.
For example, for the string t = 'aab':

cost(0) = 0
cost(1) = 1
cost(2) = 0
Hence, the value of 'aab' is 0 + 1 + 0 = 1.

Your task is to replace all occurrences of &#39;?&#39; in s with any lowercase English letter so that the value of s is minimized.
Return a string denoting the modified string with replaced occurrences of &#39;?&#39;. If there are multiple strings resulting in the minimum value, return the lexicographically smallest one.

Example 1:

Input:   s = '???'
Output:   'abc'
Explanation:  In this example, we can replace the occurrences of &#39;?&#39; to make s equal to 'abc'.
For 'abc', cost(0) = 0, cost(1) = 0, and cost(2) = 0.
The value of 'abc' is 0.
Some other modifications of s that have a value of 0 are 'cba', 'abz', and, 'hey'.
Among all of them, we choose the lexicographically smallest.

Example 2:

Input:  s = 'a?a?'
Output:  'abac'
Explanation:  In this example, the occurrences of &#39;?&#39; can be replaced to make s equal to 'abac'.
For 'abac', cost(0) = 0, cost(1) = 0, cost(2) = 1, and cost(3) = 0.
The value of 'abac' is1.


Constraints:

1 <= s.length <= 105
s[i] is either a lowercase English letter or &#39;?&#39;.


```

## 中文翻译

给定含小写字母和 '?' 的字符串 s。value 定义为每个位置前面相同字符的出现次数之和。将所有 '?' 替换为小写字母使 value 最小，若多种方案则返回字典序最小的。

## 解题思路

要最小化 value，每个 '?' 应替换为当前出现次数最少的字母。贪心策略：统计每个字母的频率，对于每个 '?'，选择频率最小的字母（频率相同选字典序最小的）。先收集所有 '?' 需要填的字母（排序后），再按顺序填入 '?' 位置。

时间复杂度：O(n * 26)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
