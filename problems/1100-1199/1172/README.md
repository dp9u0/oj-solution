# [1172] Dinner Plate Stacks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/dinner-plate-stacks/description/)

* algorithms
* Hard (33.65%)
* Likes:    517
* Dislikes: 69
* Testcase Example:  '["DinnerPlates","push","push","push","push","push","popAtStack","push","push","popAtStack","popAtStack","pop","pop","pop","pop","pop"]\n' +

```md
'[[2],[1],[2],[3],[4],[5],[0],[20],[21],[0],[2],[],[],[],[],[]]'
You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum capacity.
Implement the DinnerPlates class:

DinnerPlates(int capacity) Initializes the object with the maximum capacity of the stacks capacity.
void push(int val) Pushes the given integer val into the leftmost stack with a size less than capacity.
int pop() Returns the value at the top of the rightmost non-empty stack and removes it from that stack, and returns -1 if all the stacks are empty.
int popAtStack(int index) Returns the value at the top of the stack with the given index index and removes it from that stack or returns -1 if the stack with that given index is empty.


Example 1:

Input
['DinnerPlates', 'push', 'push', 'push', 'push', 'push', 'popAtStack', 'push', 'push', 'popAtStack', 'popAtStack', 'pop', 'pop', 'pop', 'pop', 'pop']
[[2], [1], [2], [3], [4], [5], [0], [20], [21], [0], [2], [], [], [], [], []]
Output
[null, null, null, null, null, null, 2, null, null, 20, 21, 5, 4, 3, 1, -1]
Explanation:
DinnerPlates D = DinnerPlates(2);  // Initialize with capacity = 2
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5);         // The stacks are now:  2  4
1  3  5
﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 2.  The stacks are now:     4
1  3  5
﹈ ﹈ ﹈
D.push(20);        // The stacks are now: 20  4
1  3  5
﹈ ﹈ ﹈
D.push(21);        // The stacks are now: 20  4 21
1  3  5
﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 20.  The stacks are now:     4 21
1  3  5
﹈ ﹈ ﹈
D.popAtStack(2);   // Returns 21.  The stacks are now:     4
1  3  5
﹈ ﹈ ﹈
D.pop()            // Returns 5.  The stacks are now:      4
1  3
﹈ ﹈
D.pop()            // Returns 4.  The stacks are now:   1  3
﹈ ﹈
D.pop()            // Returns 3.  The stacks are now:   1
﹈
D.pop()            // Returns 1.  There are no stacks.
D.pop()            // Returns -1.  There are still no stacks.


Constraints:

1 <= capacity <= 2 * 104
1 <= val <= 2 * 104
0 <= index <= 105
At most 2 * 105 calls will be made to push, pop, and popAtStack.


```

## 中文翻译

有无限个栈排成一行，每个栈容量相同。实现 DinnerPlates 类：push(val) 放入最左边未满的栈；pop() 弹出最右边非空栈的栈顶；popAtStack(index) 弹出指定栈的栈顶。

## 解题思路

用数组维护所有栈，用最小堆（SortedSet）跟踪未满栈的索引用于 push，用变量跟踪最右非空栈的索引用于 pop。push 时从堆顶取最小未满索引，pop 时从右往左找非空栈。

## Solution

[SourceCode](./solution.js)
