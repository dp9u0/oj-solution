# [955] Delete Columns to Make Sorted II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/description/)

* algorithms
* Medium (49.66%)
* Likes:    1045
* Dislikes: 136
* Testcase Example:  '["ca","bb","ac"]'

```md
You are given an array of n strings strs, all of the same length.
We may choose any deletion indices, and we delete all the characters in those indices for each string.
For example, if we have strs = ['abcdef','uvwxyz'] and deletion indices {0, 2, 3}, then the final array after deletions is ['bef', 'vyz'].
Suppose we chose a set of deletion indices answer such that after deletions, the final array has its elements in lexicographic order (i.e., strs[0] <= strs[1] <= strs[2] <= ... <= strs[n - 1]). Return the minimum possible value of answer.length.

Example 1:

Input: strs = ['ca','bb','ac']
Output: 1
Explanation:
After deleting the first column, strs = ['a', 'b', 'c'].
Now strs is in lexicographic order (ie. strs[0] <= strs[1] <= strs[2]).
We require at least 1 deletion since initially strs was not in lexicographic order, so the answer is 1.

Example 2:

Input: strs = ['xc','yb','za']
Output: 0
Explanation:
strs is already in lexicographic order, so we do not need to delete anything.
Note that the rows of strs are not necessarily in lexicographic order:
i.e., it is NOT necessarily true that (strs[0][0] <= strs[0][1] <= ...)

Example 3:

Input: strs = ['zyx','wvu','tsr']
Output: 3
Explanation: We have to delete every column.


Constraints:

n == strs.length
1 <= n <= 100
1 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.


```

## 中文翻译

给定 n 个等长字符串，可以选择删除某些列（所有字符串同位置字符），使删除后数组按字典序排列。求最少删除列数。

## 解题思路

逐列扫描，维护 `sorted[i]` 标记相邻行 strs[i] 和 strs[i+1] 是否已确定顺序。
对每列 j：
- 若所有相邻行已 sorted，直接返回当前删除数。
- 检查该列中未 sorted 的相邻行：若 strs[i][j] > strs[i+1][j]，必须删除该列。
- 若 strs[i][j] < strs[i+1][j]，标记 sorted[i] = true（该对已确定顺序）。
- 若相等则不确定。

## Solution

[SourceCode](./solution.js)
