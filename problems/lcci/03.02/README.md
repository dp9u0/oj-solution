# [面试题 03.02] 栈的最小值

## Description


```md
https://leetcode.cn/problems/min-stack-lcci/description/
* lcci
* Easy (63.12%)
* Likes:    108
* Dislikes: -
* Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
'[[],[-2],[0],[-3],[],[],[],[]]'
请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。示例：MinStack minStack = new MinStack();minStack.push(-2);minStack.push(0);minStack.push(-3);minStack.getMin();   --> 返回 -3.minStack.pop();minStack.top();      --> 返回 0.minStack.getMin();   --> 返回 -2.
Hint 1: 注意最小的元素不会经常变化。它只在添加更小的元素或最小的元素被弹出时才发生变化。
Hint 2: 如果保持追踪每个栈节点的额外数据会怎么样？什么样的数据可能更容易解决这个问题呢？
Hint 3: 考虑让每个节点知道它“子栈”的最小值（包括它下面的所有元素，以及它本身）。

```

## Description (English)

Design a stack supporting, in addition to push and pop, a min function returning the minimum element. push, pop and min must all be O(1).

Example:
MinStack minStack = new MinStack();
minStack.push(-2); minStack.push(0); minStack.push(-3);
minStack.getMin(); // returns -3
minStack.pop();
minStack.top();    // returns 0
minStack.getMin(); // returns -2

## 思路

每个栈节点随值存"到该节点为止（含自身）的最小值"：push 时取 `min(栈顶 min, x)` 压入；getMin 读栈顶附属值即可随 pop 自动回滚历史最小。全操作 O(1)、无需第二栈。

## Solution

[SourceCode](./solution.js)
