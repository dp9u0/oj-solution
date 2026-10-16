# [面试题 03.04] 化栈为队

## Description


```md
https://leetcode.cn/problems/implement-queue-using-stacks-lcci/description/
* lcci
* Easy (71.90%)
* Likes:    85
* Dislikes: -
* Testcase Example:  '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]'
实现一个MyQueue类，该类用两个栈来实现一个队列。示例：MyQueue queue = new MyQueue();queue.push(1);queue.push(2);queue.peek();  // 返回 1queue.pop();   // 返回 1queue.empty(); // 返回 false说明：你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size 和 is empty 操作是合法的。你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
Hint 1: 队列和栈的主要区别是元素的顺序。队列删除最旧的项，栈删除最新的项。如果你只访问最新的项，那么如何从栈中删除最旧的项？
Hint 2: 我们可以通过不断地删除最新的项（将这些项插入临时栈中）来删除栈中最老的项，直到得到一个元素为止。然后，在检索到最新项后，将所有元素返回。与此有关的问题是，每次在一行中做几个弹出操作（pop）将需要O(n)的时间。我们可以优化在一行中连续弹出这一场景吗？

```

## Description (English)

Implement a MyQueue class using two stacks. 

Example:
MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false

Notes:
- You must use only standard stack operations: push to top, peek/pop from top, size, and is empty.
- If your language doesn't support stacks, you may use a list or deque to simulate one, as long as you only use standard stack operations.
- Assume all operations are valid (e.g. no pop or peek on an empty queue).

## 思路

双栈摊还 O(1)：`inStack` 只负责 push；`outStack` 负责 pop/peek，仅当其为空时把 `inStack` 整体倒入（倒序一次，恢复队列顺序）。

关键在"惰性倒腾"——不要每次 pop 都来回倒（那会退化为 O(n)），每个元素一生只进 inStack 一次、进 outStack 一次，均摊每个操作 O(1)。empty 判断需两个栈同时为空。

## Solution

[SourceCode](./solution.js)
