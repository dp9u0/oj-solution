# [面试题 17.12] BiNode

## Description


```md
https://leetcode.cn/problems/binode-lcci/description/
* lcci
* Easy (64.17%)
* Likes:    155
* Dislikes: -
* Testcase Example:  '[4,2,5,1,3,null,6,0]'
二叉树数据结构TreeNode可用来表示单向链表（其中left置空，right为下一个链表节点）。实现一个方法，把二叉搜索树转换为单向链表，要求依然符合二叉搜索树的性质，转换操作应是原址的，也就是在原始的二叉搜索树上直接修改。
返回转换后的单向链表的头节点。
注意：本题相对原题稍作改动

示例：
输入： [4,2,5,1,3,null,6,0]
输出： [0,null,1,null,2,null,3,null,4,null,5,null,6]
提示：
节点数量不会超过 100000。
Hint 1: 尝试递归解法。
Hint 2: 这样想：如果你有convertLeft和convertRight方法（它们可以把左右子树转换成双链表），你能使用它们把整个树转换成双链表吗？
Hint 3: 一旦你对递归算法有了一个基本的概念，就可能会陷入这种情况：有时你的递归算法需要返回链表的头部，有时它需要返回链表的尾部。解决这个问题有多种方法，想想不同的方法。
Hint 4: 要处理递归算法是返回链表的头节点还是尾节点，可以尝试传递一个参数作为标志。但这不会很好。问题是，当调用convert(current.left)时，你希望得到left链表的尾节点。这样就可以将链表的末尾与current连接。但是，如果current是其他节点的右子树，那么convert(current)需要返回链表的头节点（其实是current.left的头节点）。实际上，链表的头节点和尾节点你都需要。
Hint 5: 许多人在这一点上左右为难，不知道该怎么办。有时他们需要链表的头部，有时他们需要链表的尾部。给定的节点通常不知道它在convert调用中应返回什么。有时候，最简单的解决方案就是：总是同时返回这两个值。有什么方法可以做到这一点？
Hint 6: 可以通过多种方式返回链表的头部和尾部。可以返回一个双元素数组，可以定义一个新的数据结构来保存头节点和尾节点，还可以重用BiNode数据结构。如果你使用的语言（如Python）支持返回多个值，你就可以使用此功能。可以将这个问题作为一个循环链表来解决，即头节点的前一个指针指向尾部，然后在外部的函数中拆开循环链表。试试这些解决方案。你最喜欢哪个？为什么？

```

## Description (English)

The binary tree data structure TreeNode can also represent a singly linked list (left set to null, right pointing to the next node). Implement a method to convert a binary search tree into a singly linked list in-place, preserving the BST ordering. Return the head of the converted list.

Example:
Input: [4,2,5,1,3,null,6,0]
Output: [0,null,1,null,2,null,3,null,4,null,5,null,6]

Note: no more than 100000 nodes.

## 思路

中序遍历就地改链：哑结点 + 显式栈（节点数达 1e5，递归在退化链形树上会爆栈）。每个节点出栈时置 `left = null`、挂到 prev.right，最后返回 dummy.right。O(n) 时间、O(h) 栈空间。

## Solution

[SourceCode](./solution.js)
