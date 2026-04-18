# [1717] Maximum Score From Removing Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-from-removing-substrings/description/)

* algorithms
* Medium (66.54%)
* Likes:    1927
* Dislikes: 137
* Testcase Example:  '"cdbcbbaaabab"\n4\n5'

```md
You are given a string s and two integers x and y. You can perform two types of operations any number of times.

Remove substring 'ab' and gain x points.

For example, when removing 'ab' from 'cabxbae' it becomes 'cxbae'.


Remove substring 'ba' and gain y points.

For example, when removing 'ba' from 'cabxbae' it becomes 'cabxe'.



Return the maximum points you can gain after applying the above operations on s.

Example 1:

Input: s = 'cdbcbbaaabab', x = 4, y = 5
Output: 19
Explanation:
- Remove the 'ba' underlined in 'cdbcbbaaabab'. Now, s = 'cdbcbbaaab' and 5 points are added to the score.
- Remove the 'ab' underlined in 'cdbcbbaaab'. Now, s = 'cdbcbbaa' and 4 points are added to the score.
- Remove the 'ba' underlined in 'cdbcbbaa'. Now, s = 'cdbcba' and 5 points are added to the score.
- Remove the 'ba' underlined in 'cdbcba'. Now, s = 'cdbc' and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.
Example 2:

Input: s = 'aabbaaxybbaabb', x = 5, y = 4
Output: 20


Constraints:

1 <= s.length <= 105
1 <= x, y <= 104
s consists of lowercase English letters.


```

## 题目翻译

给定字符串 s 和两个整数 x、y。可以执行两种操作任意次数：
- 删除子串 "ab" 获得 x 分
- 删除子串 "ba" 获得 y 分

返回应用操作后能获得的最大分数。

## 解题思路

**贪心 + 栈**

优先移除分值高的子串。用栈模拟删除过程：
1. 若 x >= y，先贪心移除所有 "ab"，再在剩余字符串中移除 "ba"
2. 若 y > x，先贪心移除所有 "ba"，再在剩余字符串中移除 "ab"

每轮扫描：字符入栈，若当前字符与栈顶构成目标子串则弹出并计分。

## Solution

[SourceCode](./solution.js)
