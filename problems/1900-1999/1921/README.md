# [1921] Eliminate Maximum Number of Monsters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/description/)

* algorithms
* Medium (51.07%)
* Likes:    1582
* Dislikes: 238
* Testcase Example:  '[1,3,4]\n[1,1,1]'

```md
You are playing a video game where you are defending your city from a group of n monsters. You are given a 0-indexed integer array dist of size n, where dist[i] is the initial distance in kilometers of the ith monster from the city.
The monsters walk toward the city at a constant speed. The speed of each monster is given to you in an integer array speed of size n, where speed[i] is the speed of the ith monster in kilometers per minute.
You have a weapon that, once fully charged, can eliminate a single monster. However, the weapon takes one minute to charge. The weapon is fully charged at the very start.
You lose when any monster reaches your city. If a monster reaches the city at the exact moment the weapon is fully charged, it counts as a loss, and the game ends before you can use your weapon.
Return the maximum number of monsters that you can eliminate before you lose, or n if you can eliminate all the monsters before they reach the city.

Example 1:

Input: dist = [1,3,4], speed = [1,1,1]
Output: 3
Explanation:
In the beginning, the distances of the monsters are [1,3,4]. You eliminate the first monster.
After a minute, the distances of the monsters are [X,2,3]. You eliminate the second monster.
After a minute, the distances of the monsters are [X,X,2]. You eliminate the third monster.
All 3 monsters can be eliminated.
Example 2:

Input: dist = [1,1,2,3], speed = [1,1,1,1]
Output: 1
Explanation:
In the beginning, the distances of the monsters are [1,1,2,3]. You eliminate the first monster.
After a minute, the distances of the monsters are [X,0,1,2], so you lose.
You can only eliminate 1 monster.

Example 3:

Input: dist = [3,2,4], speed = [5,3,2]
Output: 1
Explanation:
In the beginning, the distances of the monsters are [3,2,4]. You eliminate the first monster.
After a minute, the distances of the monsters are [X,0,2], so you lose.
You can only eliminate 1 monster.


Constraints:

n == dist.length == speed.length
1 <= n <= 105
1 <= dist[i], speed[i] <= 105


```

## 翻译

防守城市抵御 n 个怪物。怪物 i 初始距离 dist[i]，速度 speed[i] km/min。武器每分钟充能一次，初始已充满，每次消灭一个怪物。如果有怪物到达城市（到达时刻与充能时刻相同也算失败），游戏结束。返回最多能消灭的怪物数。

## Approach

计算每个怪物的到达时间 arrival[i] = dist[i] / speed[i]，向上取整。按到达时间排序后，第 i 次消灭（时间 i）时需满足 arrival[i] > i（怪物还未到达）。统计满足条件的最长前缀。

时间复杂度 O(n log n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
