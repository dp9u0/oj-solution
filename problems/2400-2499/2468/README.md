# [2468] Split Message Based on Limit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-message-based-on-limit/description/)

* algorithms
* Hard (42.15%)
* Likes:    198
* Dislikes: 202
* Testcase Example:  '"this is really a very awesome message"\n9'

```md
You are given a string, message, and a positive integer, limit.
You must split message into one or more parts based on limit. Each resulting part should have the suffix '<a/b>', where 'b' is to be replaced with the total number of parts and 'a' is to be replaced with the index of the part, starting from 1 and going up to b. Additionally, the length of each resulting part (including its suffix) should be equal to limit, except for the last part whose length can be at most limit.
The resulting parts should be formed such that when their suffixes are removed and they are all concatenated in order, they should be equal to message. Also, the result should contain as few parts as possible.
Return the parts message would be split into as an array of strings. If it is impossible to split message as required, return an empty array.

Example 1:

Input: message = 'this is really a very awesome message', limit = 9
Output: ['thi<1/14>','s i<2/14>','s r<3/14>','eal<4/14>','ly <5/14>','a v<6/14>','ery<7/14>',' aw<8/14>','eso<9/14>','me<10/14>',' m<11/14>','es<12/14>','sa<13/14>','ge<14/14>']
Explanation:
The first 9 parts take 3 characters each from the beginning of message.
The next 5 parts take 2 characters each to finish splitting message.
In this example, each part, including the last, has length 9.
It can be shown it is not possible to split message into less than 14 parts.

Example 2:

Input: message = 'short message', limit = 15
Output: ['short mess<1/2>','age<2/2>']
Explanation:
Under the given constraints, the string can be split into two parts:
- The first part comprises of the first 10 characters, and has a length 15.
- The next part comprises of the last 3 characters, and has a length 8.


Constraints:

1 <= message.length <= 104
message consists only of lowercase English letters and &#39; &#39;.
1 <= limit <= 104


```

## 题目翻译

给定字符串 message 和整数 limit，将 message 分成最少的若干部分，每部分附加后缀 `<a/b>`，总长度不超过 limit。不可能则返回空数组。

## 解题思路

**枚举分组数 b + 按位数分组计算容量**

对每个可能的分组数 b（1 到 n），后缀 `<a/b>` 长度为 3 + digits(a) + digits(b)。按 digits(a) 分组计算总内容容量：capacity = sum over d of count(d) * (limit - 3 - d - digits(b))。若 capacity >= n 则构造答案。O(n * log n)。

## Solution

[SourceCode](./solution.js)
