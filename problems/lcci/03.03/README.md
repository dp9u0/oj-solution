# [面试题 03.03] 堆盘子

## Description


```md
https://leetcode.cn/problems/stack-of-plates-lcci/description/
* lcci
* Medium (39.40%)
* Likes:    66
* Dislikes: -
* Testcase Example:  '["StackOfPlates", "push", "push", "popAt", "pop", "pop"]\n' +
'[[1], [1], [2], [1], [], []]'
堆盘子。设想有一堆盘子，堆太高可能会倒下来。因此，在现实生活中，盘子堆到一定高度时，我们就会另外堆一堆盘子。请实现数据结构SetOfStacks，模拟这种行为。SetOfStacks应该由多个栈组成，并且在前一个栈填满时新建一个栈。此外，SetOfStacks.push()和SetOfStacks.pop()应该与普通栈的操作方法相同（也就是说，pop()返回的值，应该跟只有一个栈时的情况一样）。 进阶：实现一个popAt(int index)方法，根据指定的子栈，执行pop操作。
当某个栈为空时，应当删除该栈。当栈中没有元素或不存在该栈时，pop，popAt 应返回 -1.
示例 1：
输入：
["StackOfPlates", "push", "push", "popAt", "pop", "pop"]
[[1], [1], [2], [1], [], []]
输出：
[null, null, null, 2, 1, -1]
示例 2：
输入：
["StackOfPlates", "push", "push", "push", "popAt", "popAt", "popAt"]
[[2], [1], [2], [3], [0], [0], [0]]
输出：
[null, null, null, null, 2, 1, 3]
Hint 1: 你需要追踪每个子栈的大小。当一个栈已满时，你可能需要创建一个新栈。
Hint 2: 在一个特定的子栈中弹出一个元素意味着一些栈没有满。这是个问题吗？没有正确的答案，但你应该考虑如何处理这个问题。

```

## Description (English)

Stack of Plates. Imagine a pile of plates that might topple if too high — in real life we start a new pile when one gets tall. Implement SetOfStacks simulating this: composed of several stacks, creating a new one when the previous is full. push and pop behave like a normal single stack. Also implement popAt(index) which pops from the specified sub-stack. When a sub-stack becomes empty it should be removed. pop/popAt return -1 when there are no elements or the stack doesn't exist.

Example 1:
["StackOfPlates","push","push","popAt","pop","pop"], [[1],[1],[2],[1],[],[]] → [null,null,null,2,1,-1]

Example 2:
["StackOfPlates","push","push","push","popAt","popAt","popAt"], [[2],[1],[2],[3],[0],[0],[0]] → [null,null,null,null,2,1,3]

## 思路

子栈数组 + 尾指针语义：push 落入最后一个子栈（满则新建）；pop = popAt(最后)；popAt 空了 splice 删除该子栈（中间子栈被掏空不回填——按题意仅删除）。cap ≤ 0 时 push 直接丢弃。

## Solution

[SourceCode](./solution.js)
