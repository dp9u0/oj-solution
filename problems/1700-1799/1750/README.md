# [1750] Minimum Length of String After Deleting Similar Ends

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/)

* algorithms
* Medium (56.05%)
* Testcase Example:  '"ca"'

```md
Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times:
Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
The prefix and the suffix should not intersect at any index.
The characters from the prefix and suffix must be the same.
Delete both the prefix and the suffix.
Return the minimum length of s after performing the above operation any number of times (possibly zero times).

Example 1:
Input: s = "ca"
Output: 2
Explanation: You can't remove any characters, so the string stays as is.
Example 2:
Input: s = "cabaabac"
Output: 0
Explanation: An optimal sequence of operations is:
- Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".
- Take prefix = "a" and suffix = "a" and remove them, s = "baab".
- Take prefix = "b" and suffix = "b" and remove them, s = "aa".
- Take prefix = "a" and suffix = "a" and remove them, s = "".
Example 3:
Input: s = "aabccabba"
Output: 3
Explanation: An optimal sequence of operations is:
- Take prefix = "aa" and suffix = "a" and remove them, s = "bccabb".
- Take prefix = "b" and suffix = "bb" and remove them, s = "cca".

Constraints:
1
s only consists of characters 'a', 'b', and 'c'.

```

## 中文翻译

给定一个仅由字符 'a'、'b' 和 'c' 组成的字符串 s。你需要对字符串执行以下算法任意次数：
1. 从字符串 s 中选取一个非空前缀，其中所有字符都相同。
2. 从字符串 s 中选取一个非空后缀，其中所有字符都相同。
3. 前缀和后缀不能在任何索引处重叠。
4. 前缀和后缀的字符必须相同。
5. 删除前缀和后缀。
返回执行上述操作任意次数（可以为零）后 s 的最小长度。

## Approach

使用双指针法。左指针从头部开始，右指针从尾部开始。当左右指针指向的字符相同时，分别向中间移动删除相同字符的前缀和后缀。当左右字符不同，或左右指针相遇时停止，返回剩余长度。
