# [3885] Design Event Manager

## Description

[LeetCode Problem Description](https://leetcode.com/problems/design-event-manager/description/)

* algorithms
* Medium (50.81%)
* Likes:    71
* Dislikes: 5
* Testcase Example:  '["EventManager","pollHighest","updatePriority","pollHighest","pollHighest"]\n' +

```md
'[[[[5,7],[2,7],[9,4]]],[],[9,7],[],[]]'
You are given an initial list of events, where each event has a unique eventId and a priority.
Implement the EventManager class:

EventManager(int[][] events) Initializes the manager with the given events, where events[i] = [eventIdi, priority​​​​​​​i].
void updatePriority(int eventId, int newPriority) Updates the priority of the active event with id eventId to newPriority.
int pollHighest() Removes and returns the eventId of the active event with the highest priority. If multiple active events have the same priority, return the smallest eventId among them. If there are no active events, return -1.

An event is called active if it has not been removed by pollHighest().

Example 1:

Input:
['EventManager', 'pollHighest', 'updatePriority', 'pollHighest', 'pollHighest']
[[[[5, 7], [2, 7], [9, 4]]], [], [9, 7], [], []]
Output:
[null, 2, null, 5, 9]
Explanation
EventManager eventManager = new EventManager([[5,7], [2,7], [9,4]]); // Initializes the manager with three events
eventManager.pollHighest(); // both events 5 and 2 have priority 7, so return the smaller id 2
eventManager.updatePriority(9, 7); // event 9 now has priority 7
eventManager.pollHighest(); // remaining highest priority events are 5 and 9, return 5
eventManager.pollHighest(); // return 9
Example 2:

Input:
['EventManager', 'pollHighest', 'pollHighest', 'pollHighest']
[[[[4, 1], [7, 2]]], [], [], []]
Output:
[null, 7, 4, -1]
Explanation
EventManager eventManager = new EventManager([[4,1], [7,2]]); // Initializes the manager with two events
eventManager.pollHighest(); // return 7
eventManager.pollHighest(); // return 4
eventManager.pollHighest(); // no events remain, return -1

Constraints:

1 <= events.length <= 105
events[i] = [eventId, priority]
1 <= eventId <= 109
1 <= priority <= 109
All the values of eventId in events are unique.
1 <= newPriority <= 109
For every call to updatePriority, eventId refers to an active event.
At most 105 calls in total will be made to updatePriority and pollHighest.


```

## 题目翻译

实现事件管理器：初始化事件列表(id, priority)，支持更新优先级和弹出最高优先级事件（同优先级取最小id）。

## 解题思路

**最大堆 + 懒删除**：堆存储(id, priority)，更新时直接push新条目。弹出时检查堆顶是否与map中当前优先级一致，不一致则跳过（旧条目）。

## Solution

[SourceCode](./solution.js)
