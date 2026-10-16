# [面试题 02.06] 回文链表

## Description


```md
https://leetcode.cn/problems/palindrome-linked-list-lcci/description/
* lcci
* Easy (49.53%)
* Likes:    156
* Dislikes: -
* Testcase Example:  '[1,2]'
编写一个函数，检查输入的链表是否是回文的。

示例 1：
输入： 1->2
输出： false
示例 2：
输入： 1->2->2->1
输出： true

进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
Hint 1: 回文数在向前写和向后写时是相同的。如果你颠倒链表会怎样？
Hint 2: 用栈试试。
Hint 3: 假设你有链表的长度。你可以实现这个递归吗？
Hint 4: 在递归方法中（我们有链表的长度），中点是基线条件，即isPalindrome(middle)是true。节点x是紧挨着middle的左侧的一个节点：该如何检查x -> middle -> y是否形成回文？现在假设检查通过。前一个节点a又该如何检查？如果x -> middle -> y是回文，怎么检查a -> x -> middle -> y -> b是回文？
Hint 5: 回到前面的提示。记住：返回多个值的方法有很多。你可以用一个新类来实现。

```

## Description (English)

Write a function to check whether a linked list is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true

Follow-up: can you do it in O(n) time and O(1) space?

## 思路

快慢指针找中点（slow 停在前半段末尾），反转后半段，前半段与反转后的后半段逐值比较，O(n)/O(1)。无需恢复链表（判题不要求）。奇数长度时中点归前半段，后半段较短，比较以短的一侧为准。

## Solution

[SourceCode](./solution.js)
