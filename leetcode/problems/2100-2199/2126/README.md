# [2126] Destroying Asteroids

## Description

[LeetCode Problem Description](https://leetcode.com/problems/destroying-asteroids/description/)

* algorithms
* Medium (53.48%)
* Likes:    597
* Dislikes: 199
* Testcase Example:  '10\n[3,9,19,5,21]'

```md
You are given an integer mass, which represents the original mass of a planet. You are further given an integer array asteroids, where asteroids[i] is the mass of the ith asteroid.
You can arrange for the planet to collide with the asteroids in any arbitrary order. If the mass of the planet is greater than or equal to the mass of the asteroid, the asteroid is destroyed and the planet gains the mass of the asteroid. Otherwise, the planet is destroyed.
Return true if all asteroids can be destroyed. Otherwise, return false.

Example 1:

Input: mass = 10, asteroids = [3,9,19,5,21]
Output: true
Explanation: One way to order the asteroids is [9,19,5,3,21]:
- The planet collides with the asteroid with a mass of 9. New planet mass: 10 + 9 = 19
- The planet collides with the asteroid with a mass of 19. New planet mass: 19 + 19 = 38
- The planet collides with the asteroid with a mass of 5. New planet mass: 38 + 5 = 43
- The planet collides with the asteroid with a mass of 3. New planet mass: 43 + 3 = 46
- The planet collides with the asteroid with a mass of 21. New planet mass: 46 + 21 = 67
All asteroids are destroyed.

Example 2:

Input: mass = 5, asteroids = [4,9,23,4]
Output: false
Explanation:
The planet cannot ever gain enough mass to destroy the asteroid with a mass of 23.
After the planet destroys the other asteroids, it will have a mass of 5 + 4 + 9 + 4 = 22.
This is less than 23, so a collision would not destroy the last asteroid.

Constraints:

1 <= mass <= 105
1 <= asteroids.length <= 105
1 <= asteroids[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定行星初始质量 mass 和小行星质量数组 asteroids，可按任意顺序碰撞。行星质量 ≥ 小行星质量则摧毁并吸收，否则行星被摧毁。判断是否能摧毁所有小行星。

## 解题思路

**Approach: 贪心排序**

1. 贪心策略：按质量从小到大依次碰撞，保证每次碰撞时行星质量尽可能大
2. 将 asteroids 排序后依次检查，若当前 mass < asteroid 则返回 false
3. 否则 mass += asteroid 继续
4. 复杂度 O(n log n)
