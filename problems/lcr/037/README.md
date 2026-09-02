# [LCR 037] 行星碰撞

## Description


```md
https://leetcode.cn/problems/XagZNi/description/
* algorithms
* Medium (46.91%)
* Likes:    77
* Dislikes: -
* Testcase Example:  '[5,10,-5]'
给定一个整数数组 asteroids，表示在同一行的小行星。
对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。每一颗小行星以相同的速度移动。
找出碰撞后剩下的所有小行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

示例 1：
输入：asteroids = [5,10,-5]
输出：[5,10]
解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
示例 2：
输入：asteroids = [8,-8]
输出：[]
解释：8 和 -8 碰撞后，两者都发生爆炸。
示例 3：
输入：asteroids = [10,2,-5]
输出：[10]
解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
示例 4：
输入：asteroids = [-2,-1,1,2]
输出：[-2,-1,1,2]
解释：-2 和 -1 向左移动，而 1 和 2 向右移动。 由于移动方向相同的行星不会发生碰撞，所以最终没有行星发生碰撞。

提示：
2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0

注意：本题与主站 735 题相同： https://leetcode.cn/problems/asteroid-collision/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an array `asteroids` of integers representing asteroids in a row. For each element, the absolute value is its size and the sign is its direction (positive = moving right, negative = moving left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. Rules: when two asteroids collide, the smaller explodes; if equal size, both explode; asteroids moving the same direction never collide.

**Example 1:** `[5,10,-5]` → `[5,10]`
**Example 2:** `[8,-8]` → `[]`
**Example 3:** `[10,2,-5]` → `[10]`
**Example 4:** `[-2,-1,1,2]` → `[-2,-1,1,2]`

**Constraints:** `2 <= asteroids.length <= 10^4`, `-1000 <= asteroids[i] <= 1000`, no zero.

Note: same as LeetCode 735.

---

## Approach

**Stack simulation.** A collision only happens when a right-moving asteroid is immediately followed (in the surviving sequence) by a left-moving one.

- For each new asteroid, if it moves right (positive), push it.
- If it moves left (negative), repeatedly compare with the top of the stack: while the stack top is positive and smaller, the top explodes (pop). After popping all smaller positives, if the top is positive and larger, the new asteroid explodes (skip). If equal and positive, both explode (pop top, skip). If the stack top is non-positive, push the new asteroid (no collision).

Complexity: `O(n)` time, `O(n)` space.
