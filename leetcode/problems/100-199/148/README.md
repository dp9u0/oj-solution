# [148] Sort List

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sort-list/description/)

* algorithms
* Medium (33.73%)
* Testcase Example:  '[4,2,1,3]'

```md
Sort a linked list in O(n log n) time using constant space complexity.
Example 1:
Input: 4->2->1->3
Output: 1->2->3->4
Example 2:
Input: -1->5->3->4->0
Output: -1->0->3->4->5

```

## Solution

merge sort,但是不能使用递归,因为要求 O(1) space

[SourceCode](./solution.js)