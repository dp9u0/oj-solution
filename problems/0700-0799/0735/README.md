# [735] Asteroid Collision

## Description

[LeetCode Problem Description](https://leetcode.com/problems/asteroid-collision/description/)

* algorithms
* Medium (47.58%)
* Likes:    9374
* Dislikes: 1303
* Testcase Example:  '[5,10,-5]'

```md
We are given an array asteroids of integers representing asteroids in a row. The indices of the asteroid in the array represent their relative position in space.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

Example 4:

Input: asteroids = [3,5,-6,2,-1,4]​​​​​​​
Output: [-6,2,4]
Explanation: The asteroid -6 makes the asteroid 3 and 5 explode, and then continues going left. On the other side, the asteroid 2 makes the asteroid -1 explode and then continues going right, without reaching asteroid 4.


Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0


```

## 翻译

给定一个整数数组 `asteroids`，表示一行小行星。绝对值表示大小，符号表示方向（正数向右，负数向左）。每个小行星速度相同。

两个小行星碰撞时，小的爆炸；大小相同则都爆炸。同方向的小行星不会碰撞。返回所有碰撞后的状态。

## Approach

**栈模拟。** 遍历每个小行星：
- 正数直接入栈
- 负数与栈顶正数比较：栈顶较小则弹出继续比较；相等则都消失；栈顶较大则当前消失
- 负数遇到负数或空栈则入栈

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
