# [855] Exam Room

## Description

[LeetCode Problem Description](https://leetcode.com/problems/exam-room/description/)

* algorithms
* Medium (43.34%)
* Likes:    1427
* Dislikes: 528
* Testcase Example:  '["ExamRoom","seat","seat","seat","seat","leave","seat"]\n' +

```md
'[[10],[],[],[],[],[4],[]]'
There is an exam room with n seats in a single row labeled from 0 to n - 1.
When a student enters the room, they must sit in the seat that maximizes the distance to the closest person. If there are multiple such seats, they sit in the seat with the lowest number. If no one is in the room, then the student sits at seat number 0.
Design a class that simulates the mentioned exam room.
Implement the ExamRoom class:

ExamRoom(int n) Initializes the object of the exam room with the number of the seats n.
int seat() Returns the label of the seat at which the next student will set.
void leave(int p) Indicates that the student sitting at seat p will leave the room. It is guaranteed that there will be a student sitting at seat p.


Example 1:

Input
['ExamRoom', 'seat', 'seat', 'seat', 'seat', 'leave', 'seat']
[[10], [], [], [], [], [4], []]
Output
[null, 0, 9, 4, 2, null, 5]
Explanation
ExamRoom examRoom = new ExamRoom(10);
examRoom.seat(); // return 0, no one is in the room, then the student sits at seat number 0.
examRoom.seat(); // return 9, the student sits at the last seat number 9.
examRoom.seat(); // return 4, the student sits at the last seat number 4.
examRoom.seat(); // return 2, the student sits at the last seat number 2.
examRoom.leave(4);
examRoom.seat(); // return 5, the student sits at the last seat number 5.


Constraints:

1 <= n <= 109
It is guaranteed that there is a student sitting at seat p.
At most 104 calls will be made to seat and leave.


```

## 题目翻译

考试室有一排 n 个座位（编号 0 到 n-1）。学生进入时必须坐在离最近的人距离最大的座位上；如果多个座位满足条件，选编号最小的。如果没人，坐 0 号。实现 ExamRoom 类，支持 seat() 和 leave(p) 操作。

## 解题思路

**有序集合 + 优先队列（最大堆）**。

- 用有序数组维护已坐的座位列表 `seats`。
- `seat()`：遍历相邻座位对，计算每段中间的最佳位置和距离。特殊处理首段（到 0 的距离）和末段（到 n-1 的距离）。选最大距离的最低编号位置。
- `leave(p)`：从 seats 中删除 p。

由于调用次数 <= 10^4，直接用有序数组线性操作即可。

## Solution

[SourceCode](./solution.js)
