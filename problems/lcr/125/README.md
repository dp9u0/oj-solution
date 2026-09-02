# [LCR 125] 图书整理 II

## Description


```md
https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/description/
* algorithms
* Easy (70.41%)
* Likes:    807
* Dislikes: -
* Testcase Example:  '["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]\n' +
'[[],[3],[],[],[]]'
读者来到图书馆排队借还书，图书管理员使用两个书车来完成整理借还书的任务。书车中的书从下往上叠加存放，图书管理员每次只能拿取书车顶部的书。排队的读者会有两种操作：
push(bookID)：把借阅的书籍还到图书馆。
pop()：从图书馆中借出书籍。
为了保持图书的顺序，图书管理员每次取出供读者借阅的书籍是 最早 归还到图书馆的书籍。你需要返回 每次读者借出书的值 。
如果没有归还的书可以取出，返回 -1 。

示例 1：
输入：
["BookQueue", "push", "push", "pop"]
[[], [1], [2], []]
输出：[null,null,null,1]
解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.pop(); // return 1, queue is [2]

提示：
1 <= bookID <= 10000
最多会对 push、pop 进行 10000 次调用

```

## English Description

```md
Readers come to the library to line up to borrow and return books. The librarian uses two book carts (stacks) to finish the sorting task. Books in a cart are stacked from bottom to top, and the librarian can only take the book on top of a cart each time. Readers in the queue perform two kinds of operations:
- push(bookID): return a borrowed book to the library.
- pop(): borrow a book from the library.
To keep the order of the books, the book the librarian takes for a reader to borrow each time is the book that was returned to the library the earliest. You need to return the value of the book each time a reader borrows one.
If there is no book to take, return -1.
```

## Solution / 解题思路

**题目本质**: 用两个栈实现一个先进先出(FIFO)的队列。`appendTail` 入队,`deleteHead` 出队,队空时返回 `-1`。

**思路(经典双栈法)**:
- 维护两个栈(数组):`stackIn`(入队栈)和 `stackOut`(出队栈)。
- `appendTail`: 直接把元素压入 `stackIn`。
- `deleteHead`: 若 `stackOut` 为空,则把 `stackIn` 中所有元素依次弹出并压入 `stackOut`(这样 `stackOut` 栈顶就是最早入队的元素,即队头);随后从 `stackOut` 弹出即可实现出队。若两栈皆空,返回 `-1`。

**复杂度**: 每个元素入栈、出栈各一次(摊销 O(1)),空间 O(n)。

[SourceCode](./solution.js)
