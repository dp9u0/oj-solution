# [385] Mini Parser

## Description

[LeetCode Problem Description](https://leetcode.com/problems/mini-parser/description/)

* algorithms
* Medium (42.29%)
* Likes:    502
* Dislikes: 1502
* Testcase Example:  '"324"'

```md
Given a string s represents the serialization of a nested list, implement a parser to deserialize it and return the deserialized NestedInteger.
Each element is either an integer or a list whose elements may also be integers or other lists.

Example 1:

Input: s = '324'
Output: 324
Explanation: You should return a NestedInteger object which contains a single integer 324.

Example 2:

Input: s = '[123,[456,[789]]]'
Output: [123,[456,[789]]]
Explanation: Return a NestedInteger object containing a nested list with 2 elements:
1. An integer containing value 123.
2. A nested list containing two elements:
i.  An integer containing value 456.
ii. A nested list with one element:
a. An integer containing value 789


Constraints:

1 <= s.length <= 5 * 104
s consists of digits, square brackets '[]', negative sign &#39;-&#39;, and commas &#39;,&#39;.
s is the serialization of valid NestedInteger.
All the values in the input are in the range [-106, 106].


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串 s 表示嵌套列表的序列化，实现一个解析器将其反序列化为 NestedInteger。每个元素要么是整数，要么是列表（元素也可以是整数或列表）。

## 解题思路

用栈模拟。遍历字符串，遇到 '[' 创建新 NestedInteger 压栈；遇到数字解析完整数值；遇到 ',' 或 ']' 时将当前数字加入栈顶元素，若 ']' 则弹栈并加入新的栈顶。纯数字情况直接返回。
