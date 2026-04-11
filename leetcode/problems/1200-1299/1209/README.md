# [1209] Remove All Adjacent Duplicates in String II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/description/)

* algorithms
* Medium (61.16%)
* Likes:    6096
* Dislikes: 124
* Testcase Example:  '"abcd"\n2'

```md
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.
We repeatedly make k duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Example 1:

Input: s = 'abcd', k = 2
Output: 'abcd'
Explanation: There&#39;s nothing to delete.
Example 2:

Input: s = 'deeedbbcccbdaa', k = 3
Output: 'aa'
Explanation:
First delete 'eee' and 'ccc', get 'ddbbbdaa'
Then delete 'bbb', get 'dddaa'
Finally delete 'ddd', get 'aa'
Example 3:

Input: s = 'pbbcggttciiippooaais', k = 2
Output: 'ps'


Constraints:

1 <= s.length <= 105
2 <= k <= 104
s only contains lowercase English letters.


```

## 翻译

给定字符串 `s` 和整数 `k`，重复删除 k 个相邻相同字符直到无法删除。返回最终字符串。

## Approach

**栈 + 计数。** 用栈存储 `[字符, 连续计数]`。遍历字符串，若当前字符与栈顶相同则计数 +1，达到 k 则弹出；否则压入新元素 `[字符, 1]`。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
