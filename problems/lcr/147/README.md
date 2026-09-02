# [LCR 147] 最小栈

## Description


```md
https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/description/
* algorithms
* Easy (55.43%)
* Likes:    549
* Dislikes: -
* Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
'[[],[-2],[0],[-3],[],[],[],[]]'
请你设计一个 最小栈 。它提供 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:
MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。

示例 1：
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
输出：
[null,null,null,null,-3,null,0,-2]
解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.


提示：
-231 <= val <= 231 - 1
pop、top 和 getMin 操作总是在 非空栈 上调用
push、pop、top 和 getMin 最多被调用 3 * 104 次

注意：本题与主站 155 题相同：https://leetcode.cn/problems/min-stack/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Design a min-stack supporting `push`, `pop`, `top`, and `getMin` (retrieve the stack minimum) in constant time.

**Example:** push -2, 0, -3 → getMin -3; pop → top 0; getMin -2.

**Constraints:** up to 3*10^4 calls, ops only on non-empty stacks. Note: same as LeetCode 155.

---

## Approach

Maintain a main stack and a **parallel stack of the running minimums**. On `push`, push `min(x, currentMin)` onto the min stack; on `pop`, pop both; `getMin` returns the min stack top.

Complexity: `O(1)` each.
