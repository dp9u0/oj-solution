# [2532] Time to Cross a Bridge

## Description

[LeetCode Problem Description](https://leetcode.com/problems/time-to-cross-a-bridge/description/)

* algorithms
* Hard (44.26%)
* Likes:    125
* Dislikes: 226
* Testcase Example:  '1\n3\n[[1,1,2,1],[1,1,3,1],[1,1,4,1]]'

```md
There are k workers who want to move n boxes from the right (old) warehouse to the left (new) warehouse. You are given the two integers n and k, and a 2D integer array time of size k x 4 where time[i] = [righti, picki, lefti, puti].
The warehouses are separated by a river and connected by a bridge. Initially, all k workers are waiting on the left side of the bridge. To move the boxes, the ith worker can do the following:

Cross the bridge to the right side in righti minutes.
Pick a box from the right warehouse in picki minutes.
Cross the bridge to the left side in lefti minutes.
Put the box into the left warehouse in puti minutes.

The ith worker is less efficient than the jth worker if either condition is met:

lefti + righti > leftj + rightj
lefti + righti == leftj + rightj and i > j

The following rules regulate the movement of the workers through the bridge:

Only one worker can use the bridge at a time.
When the bridge is unused prioritize the least efficient worker (who have picked up the box) on the right side to cross. If not,prioritize the least efficient worker on the left side to cross.
If enough workers have already been dispatched from the left side to pick up all the remaining boxes, no more workers will be sent from the left side.

Return the elapsed minutes at which the last box reaches the left side of the bridge.

Example 1:

Input: n = 1, k = 3, time = [[1,1,2,1],[1,1,3,1],[1,1,4,1]]
Output: 6
Explanation:

From 0 to 1 minutes: worker 2 crosses the bridge to the right.
From 1 to 2 minutes: worker 2 picks up a box from the right warehouse.
From 2 to 6 minutes: worker 2 crosses the bridge to the left.
From 6 to 7 minutes: worker 2 puts a box at the left warehouse.
The whole process ends after 7 minutes. We return 6 because the problem asks for the instance of time at which the last worker reaches the left side of the bridge.


Example 2:

Input: n = 3, k = 2, time = [[1,5,1,8],[10,10,10,10]]
Output: 37
Explanation:



The last box reaches the left side at 37 seconds. Notice, how we do not put the last boxes down, as that would take more time, and they are already on the left with the workers.


Constraints:

1 <= n, k <= 104
time.length == k
time[i].length == 4
1 <= lefti, picki, righti, puti <= 1000


```

## 中文翻译

k 个工人要把 n 个箱子从右边仓库搬到左边。time[i] = [right_i, pick_i, left_i, put_i]。效率定义：left+right 越大越低效，相等时 index 越大越低效。桥规则：一次只能一人过桥；优先右侧（已搬箱的工人）过桥，其次左侧；若已派出足够工人搬剩余箱子则不再从左侧派。求最后一个箱子到达左岸的时间。

## 解题思路

事件驱动模拟。维护四个优先队列：
- leftWait/rightWait：两侧等待过桥的工人（最大堆，低效优先）
- rightWork/leftWork：正在搬箱/放箱的工人（最小堆，按完成时间）

每步：处理当前时间所有完成事件 → 尝试过桥（右侧优先）→ 若无人可过则快进到下一个事件时间。

时间 O((n+k) log k)。

## Solution

[SourceCode](./solution.js)
