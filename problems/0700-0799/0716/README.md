# [716] 最大栈

## Description


```md
https://leetcode.cn/problems/max-stack/description/
* algorithms
* Hard (42.33%)
* Likes:    177
* Dislikes: -
* Testcase Example:  '["MaxStack","push","push","push","top","popMax","top","peekMax","pop","top"]\n' +
'[[],[5],[1],[5],[],[],[],[],[],[]]'
设计一个最大栈数据结构，既支持栈操作，又支持查找栈中最大元素。
实现 MaxStack 类：
MaxStack() 初始化栈对象
void push(int x) 将元素 x 压入栈中。
int pop() 移除栈顶元素并返回这个元素。
int top() 返回栈顶元素，无需移除。
int peekMax() 检索并返回栈中最大元素，无需移除。
int popMax() 检索并返回栈中最大元素，并将其移除。如果有多个最大元素，只要移除 最靠近栈顶 的那个。

示例：
输入
["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
[[], [5], [1], [5], [], [], [], [], [], []]
输出
[null, null, null, null, 5, 5, 1, 5, 1, 5]
解释
MaxStack stk = new MaxStack();
stk.push(5);   // [5] - 5 既是栈顶元素，也是最大元素
stk.push(1);   // [5, 1] - 栈顶元素是 1，最大元素是 5
stk.push(5);   // [5, 1, 5] - 5 既是栈顶元素，也是最大元素
stk.top();     // 返回 5，[5, 1, 5] - 栈没有改变
stk.popMax();  // 返回 5，[5, 1] - 栈发生改变，栈顶元素不再是最大元素
stk.top();     // 返回 1，[5, 1] - 栈没有改变
stk.peekMax(); // 返回 5，[5, 1] - 栈没有改变
stk.pop();     // 返回 1，[5] - 此操作后，5 既是栈顶元素，也是最大元素
stk.top();     // 返回 5，[5] - 栈没有改变

提示：
-107 <= x <= 107
最多调用 104 次 push、pop、top、peekMax 和 popMax
调用 pop、top、peekMax 或 popMax 时，栈中 至少存在一个元素

进阶：
试着设计解决方案：调用 top 方法的时间复杂度为 O(1) ，调用其他方法的时间复杂度为 O(logn) 。

```

## Solution

[SourceCode](./solution.js)

## Translation

Max stack: push(x), pop() (top), top(), peekMax(), popMax() (remove the topmost maximum). Up to 10^4 calls.

- Example: push 5,1,5 → top=5; popMax=5 (leaves [5,1]); top=1; peekMax=5; pop=1; top=5

## Approach

**栈数组 + 有序值数组**(规模 10^4 无需红黑树):

- `stack` 保存元素;`sorted` 升序维护所有值(二分查找 + splice 插入/删除)。
- popMax:最大值 = sorted 末尾,直接 pop 移除一个实例;再从 stack **尾部向前**找第一个等于最大值的位置(最靠近栈顶)splice。
- top/peekMax O(1),其余 O(n)。
