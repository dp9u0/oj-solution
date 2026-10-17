# [面试题 03.01] 三合一

## Description


```md
https://leetcode.cn/problems/three-in-one-lcci/description/
* lcci
* Easy (54.44%)
* Likes:    82
* Dislikes: -
* Testcase Example:  '["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]\n' +
'[[1], [0, 1], [0, 2], [0], [0], [0], [0]]'
三合一。描述如何只用一个数组来实现三个栈。
你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。
构造函数会传入一个stackSize参数，代表每个栈的大小。
示例 1：
输入：
["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
[[1], [0, 1], [0, 2], [0], [0], [0], [0]]
输出：
[null, null, null, 1, -1, -1, true]
说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。
示例 2：
输入：
["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
[[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
输出：
[null, null, null, null, 2, 1, -1, -1]

提示：
0 <= stackNum <= 2
Hint 1: 栈只是一个数据结构，其中最近添加的元素首先被删除。你能用一个数组来模拟单个栈吗？请记住，有很多可能的解法且每个解法都有其利弊。
Hint 2: 我们可以通过将数组的前三分之一分配到第一个栈、第二个三分之一分配到第二个栈、最后的第三个三分之一分配到第三个栈，来模拟数组中的三个栈。然而，实际上某个栈可能比其他的大得多。能更灵活地分配吗？
Hint 3: 如果你想考虑灵活划分，可以移动栈。你能保证使用所有可用的容量吗？
Hint 4: 试着把数组看作是循环的，这样数组的结尾就“环绕”到了数组的开始部分。

```

## Description (English)

Three in One. Describe how to implement three stacks using a single array. Implement push(stackNum, value), pop(stackNum), isEmpty(stackNum), peek(stackNum). The constructor receives stackSize — the size of each stack. pop/peek return -1 when empty; push does nothing when full.

Example 1:
["TripleInOne","push","push","pop","pop","pop","isEmpty"], [[1],[0,1],[0,2],[0],[0],[0],[0]] → [null,null,null,1,-1,-1,true]

Example 2:
["TripleInOne","push","push","push","pop","pop","pop","peek"], [[2],[0,1],[0,2],[0,3],[0],[0],[0],[0]] → [null,null,null,null,2,1,-1,-1]

Note: 0 <= stackNum <= 2.

## 思路

一数组三等分：第 i 个栈占用 [i·size, (i+1)·size)，各记元素个数即可——push 满丢弃、pop/peek 空返 -1，全操作 O(1)。

## Solution

[SourceCode](./solution.js)
