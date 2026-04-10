# [2211] Count Collisions on a Road

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-collisions-on-a-road/description/)

* algorithms
* Medium (58.07%)
* Likes:    1113
* Dislikes: 277
* Testcase Example:  '"RLRSLL"'

```md
There are n cars on an infinitely long road. The cars are numbered from 0 to n - 1 from left to right and each car is present at a unique point.
You are given a 0-indexed string directions of length n. directions[i] can be either &#39;L&#39;, &#39;R&#39;, or &#39;S&#39; denoting whether the ith car is moving towards the left, towards the right, or staying at its current point respectively. Each moving car has the same speed.
The number of collisions can be calculated as follows:

When two cars moving in opposite directions collide with each other, the number of collisions increases by 2.
When a moving car collides with a stationary car, the number of collisions increases by 1.

After a collision, the cars involved can no longer move and will stay at the point where they collided. Other than that, cars cannot change their state or direction of motion.
Return the total number of collisions that will happen on the road.

Example 1:

Input: directions = 'RLRSLL'
Output: 5
Explanation:
The collisions that will happen on the road are:
- Cars 0 and 1 will collide with each other. Since they are moving in opposite directions, the number of collisions becomes 0 + 2 = 2.
- Cars 2 and 3 will collide with each other. Since car 3 is stationary, the number of collisions becomes 2 + 1 = 3.
- Cars 3 and 4 will collide with each other. Since car 3 is stationary, the number of collisions becomes 3 + 1 = 4.
- Cars 4 and 5 will collide with each other. After car 4 collides with car 3, it will stay at the point of collision and get hit by car 5. The number of collisions becomes 4 + 1 = 5.
Thus, the total number of collisions that will happen on the road is 5.

Example 2:

Input: directions = 'LLRR'
Output: 0
Explanation:
No cars will collide with each other. Thus, the total number of collisions that will happen on the road is 0.

Constraints:

1 <= directions.length <= 105
directions[i] is either &#39;L&#39;, &#39;R&#39;, or &#39;S&#39;.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

有 n 辆车在一条无限长的路上，从左到右编号 0 到 n-1。给定字符串 `directions`，`directions[i]` 为 'L'（左行）、'R'（右行）或 'S'（静止）。所有移动车辆速度相同。

碰撞规则：
- 两辆相向而行的车碰撞 → 碰撞数 +2
- 移动的车撞上静止的车 → 碰撞数 +1
- 碰撞后车辆停留在碰撞点，无法再移动

**示例 1：** directions = "RLRSLL" → 5
**示例 2：** directions = "LLRR" → 0

**约束：** 1 <= directions.length <= 10^5

## Approach

用栈模拟。关键观察：碰撞只发生在 R 后面跟 S 或 L，以及 S 后面跟 L 的情况。

- 遍历每个字符，用栈维护处理过的车辆状态
- 如果当前是 'L'：
  - 栈顶是 'R' → 相向碰撞 +2，弹出 R，当前位置变为 'S'（碰撞后静止），继续检查栈顶是否为 'R'
  - 栈顶是 'S' → 同向碰撞 +1
- 如果当前是 'S'：
  - 栈顶是 'R' → 碰撞 +1，弹出 R，S 留下继续检查

时间复杂度 O(n)，空间复杂度 O(n)。
