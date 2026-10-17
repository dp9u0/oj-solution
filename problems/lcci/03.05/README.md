# [面试题 03.05] 栈排序

## Description


```md
https://leetcode.cn/problems/sort-of-stacks-lcci/description/
* lcci
* Medium (54.21%)
* Likes:    114
* Dislikes: -
* Testcase Example:  '["SortedStack", "push", "push", "peek", "pop", "peek"]\n' +
'[[], [1], [2], [], [], []]'
栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。
示例 1：
输入：
["SortedStack", "push", "push", "peek", "pop", "peek"]
[[], [1], [2], [], [], []]
输出：
[null,null,null,1,null,2]
示例 2：
输入：
["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
[[], [], [], [1], [], []]
输出：
[null,null,null,null,null,true]
提示：
栈中的元素数目在[0, 5000]范围内。
Hint 1: 排序数组的一种方法是遍历数组，并将每个元素按排序顺序插入到一个新数组中。你可以用一个栈实现吗？
Hint 2: 假设二级栈已排序。你能按顺序插入元素吗？你可能需要一些额外的存储空间。你可以使用什么额外的存储？
Hint 3: 保持二级栈的排序顺序，最大的元素在顶部。使用主栈进行额外的存储。

```

## Description (English)

Sort of Stacks. Write a program to sort a stack so that the smallest element is on top. You may use at most one additional temporary stack, and may not copy elements into another data structure (such as an array). The stack supports push, pop, peek and isEmpty. When empty, peek returns -1.

Example 1:
["SortedStack","push","push","peek","pop","peek"], [[],[1],[2],[],[],[]] → [null,null,null,1,null,2]

Example 2:
["SortedStack","pop","pop","push","pop","isEmpty"], [[],[],[],[1],[],[]] → [null,null,null,null,null,true]

Note: at most 5000 elements.

## 思路

主栈保持"栈顶最小"：push 时把栈顶比 val 小的元素依次弹入唯一的临时栈，压入 val 后再倒回来，主栈始终有序。push 均摊 O(n)（最坏倒腾全栈），其余 O(1)。

## Solution

[SourceCode](./solution.js)
