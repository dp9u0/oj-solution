# [946] Validate Stack Sequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/validate-stack-sequences/description/)

* algorithms
* Medium (70.30%)
* Likes:    6113
* Dislikes: 132
* Testcase Example:  '[1,2,3,4,5]\n[4,5,3,2,1]'

```md
Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.


Constraints:

1 <= pushed.length <= 1000
0 <= pushed[i] <= 1000
All the elements of pushed are unique.
popped.length == pushed.length
popped is a permutation of pushed.


```

## 翻译

给定两个元素互不相同的数组 `pushed` 和 `popped`，模拟栈的 push/pop 操作。判断 `popped` 是否可能是一个空栈经过若干 push 和 pop 操作后的弹出序列。

## Approach

模拟栈操作。用一个栈模拟，遍历 pushed 数组依次入栈，每次入栈后检查栈顶是否等于 popped 当前位置元素，若相等则弹出并移动 popped 指针。最终若栈为空则序列合法。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
