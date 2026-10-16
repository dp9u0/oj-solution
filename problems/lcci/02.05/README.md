# [面试题 02.05] 链表求和

## Description


```md
https://leetcode.cn/problems/sum-lists-lcci/description/
* lcci
* Medium (47.13%)
* Likes:    206
* Dislikes: -
* Testcase Example:  '[2,4,3]\n[5,6,4]'
给定两个用链表表示的整数，每个节点包含一个数位。
这些数位是反向存放的，也就是个位排在链表首部。
编写函数对这两个整数求和，并用链表形式返回结果。

示例：
输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?
示例：
输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912
Hint 1: 当然，你可以将链表转换为整数，计算总和，然后将其转换回新的链表。如果你在面试中这样做，面试官可能会接受答案，然后看看你在不能将其转换为数字然后返回的情况下，还能否做到这一点。
Hint 2: 尝试递归。假设你有两个链表，A = 1 -> 5 -> 9（代表951）和B = 2 -> 3 -> 6 -> 7（代表7632），以及一个操作链表其余部分的函数（5 -> 9和3 -> 6 -> 7）。你能用这个来创建求和方法吗？sum(1 -> 5 -> 9, 2 -> 3 -> 6 -> 7)和sum(5 -> 9, 3 -> 6 -> 7)之间有何关系？
Hint 3: 确保你考虑到了链表的长度不同的情况。
Hint 4: 你的算法在形如9 -> 7 -> 8和6 -> 8 -> 5的链表上工作吗？仔细检查一下。
Hint 5: 对于后续问题：问题是，当链表的长度不一样时，一个链表的首部可能代表1000的位置，而另一个链表代表10的位置。如果你把它们做的一样长呢？有没有方法修改链表来做到这一点，而不改变它所代表的值？

```

## Description (English)

Given two integers represented as linked lists where each node contains a single digit, with digits stored in reverse order (the ones digit at the head), write a function to add the two numbers and return the sum as a linked list.

Example:
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2), i.e. 617 + 295
Output: 2 -> 1 -> 9, i.e. 912

Follow-up: what if the digits were stored in forward order?
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5), i.e. 617 + 295
Output: 9 -> 1 -> 2, i.e. 912

## 思路

反向存放天然对齐个位：dummy 哨兵 + 逐位相加 + 进位，`(l1 || l2 || carry)` 为循环条件统一处理长度不齐与末尾进位，O(m+n)、O(1) 额外空间。

（进阶正向存放：先反转两链表再用同法，或递归先走到对齐位再回溯携带进位。）

## Solution

[SourceCode](./solution.js)
