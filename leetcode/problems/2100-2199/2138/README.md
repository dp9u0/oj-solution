# [2138] Divide a String Into Groups of Size k

## Description

[LeetCode Problem Description](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/description/)

* algorithms
* Easy (77.09%)
* Likes:    797
* Dislikes: 32
* Testcase Example:  '"abcdefghi"\n3\n"x"'

```md
A string s can be partitioned into groups of size k using the following procedure:

The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each element can be a part of exactly one group.
For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.

Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.
Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.

Example 1:

Input: s = 'abcdefghi', k = 3, fill = 'x'
Output: ['abc','def','ghi']
Explanation:
The first 3 characters 'abc' form the first group.
The next 3 characters 'def' form the second group.
The last 3 characters 'ghi' form the third group.
Since all groups can be completely filled by characters from the string, we do not need to use fill.
Thus, the groups formed are 'abc', 'def', and 'ghi'.

Example 2:

Input: s = 'abcdefghij', k = 3, fill = 'x'
Output: ['abc','def','ghi','jxx']
Explanation:
Similar to the previous example, we are forming the first three groups 'abc', 'def', and 'ghi'.
For the last group, we can only use the character &#39;j&#39; from the string. To complete this group, we add &#39;x&#39; twice.
Thus, the 4 groups formed are 'abc', 'def', 'ghi', and 'jxx'.


Constraints:

1 <= s.length <= 100
s consists of lowercase English letters only.
1 <= k <= 100
fill is a lowercase English letter.


```

## 中文翻译

将字符串 `s` 按大小 `k` 分组：第一组取前 `k` 个字符，第二组取接下来 `k` 个字符，以此类推。最后一组不足 `k` 个字符时用 `fill` 填充。返回所有分组。

## 解题思路

**模拟**：每 `k` 个字符切一组，最后一组用 `fill.padEnd` 补齐。

时间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
