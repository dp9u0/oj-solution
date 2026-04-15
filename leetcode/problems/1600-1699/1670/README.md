# [1670] Design Front Middle Back Queue

## Description

[LeetCode Problem Description](https://leetcode.com/problems/design-front-middle-back-queue/description/)

* algorithms
* Medium (56.99%)
* Likes:    820
* Dislikes: 115
* Testcase Example:  '["FrontMiddleBackQueue","pushFront","pushBack","pushMiddle","pushMiddle","popFront","popMiddle","popMiddle","popBack","popFront"]\n' +

```md
'[[],[1],[2],[3],[4],[],[],[],[],[]]'
Design a queue that supports push and pop operations in the front, middle, and back.
Implement the FrontMiddleBack class:

FrontMiddleBack() Initializes the queue.
void pushFront(int val) Adds val to the front of the queue.
void pushMiddle(int val) Adds val to the middle of the queue.
void pushBack(int val) Adds val to the back of the queue.
int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.

Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example:

Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].


Example 1:

Input:
['FrontMiddleBackQueue', 'pushFront', 'pushBack', 'pushMiddle', 'pushMiddle', 'popFront', 'popMiddle', 'popMiddle', 'popBack', 'popFront']
[[], [1], [2], [3], [4], [], [], [], [], []]
Output:
[null, null, null, null, null, 1, 3, 4, 2, -1]
Explanation:
FrontMiddleBackQueue q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1, 2]
q.pushMiddle(3);  // [1, 3, 2]
q.pushMiddle(4);  // [1, 4, 3, 2]
q.popFront();     // return 1 -> [4, 3, 2]
q.popMiddle();    // return 3 -> [4, 2]
q.popMiddle();    // return 4 -> [2]
q.popBack();      // return 2 -> []
q.popFront();     // return -1 -> [] (The queue is empty)


Constraints:

1 <= val <= 109
At most1000calls will be made topushFront,pushMiddle,pushBack, popFront, popMiddle, and popBack.


```

## 中文翻译

设计一个支持前、中、后插入和删除的队列。中间位置取前中间位置（偶数长度时取 floor(n/2)）。

## 解题思路

直接用数组模拟。pushFront 用 unshift，pushBack 用 push，pushMiddle 在 floor(n/2) 处 splice 插入。pop 对应 shift/splice/pop。最多 1000 次调用，O(n) 操作足够。

时间复杂度：O(n) 每次操作，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
