# [2838] 英雄可以获得的最大金币数

## Description


```md
https://leetcode.cn/problems/maximum-coins-heroes-can-collect/description/
* algorithms
* Medium (42.19%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[1,4,2]\n[1,1,5,2,3]\n[2,3,4,5,6]'
在一场战斗中，n 位英雄正在试图击败 m 个怪物。你将得到两个下标从 1 开始的 正整数 数组 heroes 和 monsters，长度分别为 n 和 m。数组 heroes[i] 代表第 i 位英雄的力量，而 monsters[i] 代表第 i 个怪物的力量。
如果 monsters[j] <= heroes[i]，则第 i 位英雄可以击败第 j 个怪物。
你还将获得一个下标从 1 开始的 正整数 数组 coins，长度为 m 。数组 coins[i] 表示每位英雄在击败第 i 个怪物后可以获得的金币数。
返回一个长度为 n 的数组 ans，其中 ans[i] 是第 i 位英雄从这场战斗中能收集到的 最大 金币数。
注意
击败怪物后，英雄的生命值不会减少。
多位英雄可以击败同一个怪物，但每个怪物只能被同一位英雄击败一次。

示例 1：
输入：heroes = [1,4,2], monsters = [1,1,5,2,3], coins = [2,3,4,5,6]
输出：[5,16,10]
解释：对于每位英雄，我们列出了所有他可以击败的怪物的下标：
第 1 位英雄：[1,2]，因为这位英雄的力量为 1，且 monsters[1], monsters[2] <= 1。因此这位英雄收集的金币为 coins[1] + coins[2] = 5 金币。
第 2 位英雄：[1,2,4,5]，因为这位英雄的力量为 4，且 monsters[1], monsters[2], monsters[4], monsters[5] <= 4。因此这位英雄收集的金币为 coins[1] + coins[2] + coins[4] + coins[5] = 16 金币。
第 3 位英雄：[1,2,4]，因为这位英雄的力量为 2，且 monsters[1], monsters[2], monsters[4] <= 2。因此这位英雄收集的金币为 coins[1] + coins[2] + coins[4] = 10 金币。
因此答案为 [5,16,10]。
示例 2：
输入：heroes = [5], monsters = [2,3,1,2], coins = [10,6,5,2]
输出：[23]
解释：这位英雄可以击败所有怪物，因为 monsters[i] <= 5。所以他收集了所有的金币：coins[1] + coins[2] + coins[3] + coins[4] = 23，因此答案为 [23]。
示例 3：
输入：heroes = [4,4], monsters = [5,7,8], coins = [1,1,1]
输出：[0,0]
解释：在这个例子中，没有英雄可以击败怪物。因此答案为 [0,0] 。

提示：
1 <= n == heroes.length <= 105
1 <= m == monsters.length <= 105
coins.length == m
1 <= heroes[i], monsters[i], coins[i] <= 109
Hint 1: If a hero can defeat the ith monster, then he defeats all the monsters having a power less than monster[i].
Hint 2: Sort monsters by their powers. Also change the order of the coins array according to this sort.
Hint 3: Construct a prefix sum array for the updated coins array.
Hint 4: For each hero, do a binary search and find the last position of the most powerful monster that this hero can defeat.
Hint 5: If said monster has index i, then the ith element of the partial sum array would be the answer.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Hero i defeats every monster j with monsters[j] <= heroes[i] and gains coins[j] from each. Return max coins per hero.

Approach: sort monsters by power (carrying coins), build prefix sums of coins (<= 1e14 < 2^53, exact in doubles). For each hero, binary search the count of monsters with power <= hero, answer = prefix[count].

Complexity: O((n + m) log m).
