# [2979] 最贵的无法购买的商品

## Description


```md
https://leetcode.cn/problems/most-expensive-item-that-can-not-be-bought/description/
* algorithms
* Medium (31.30%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '2\n5'
给定两个 不同的质数 primeOne 和 primeTwo。
Alice 和 Bob 正在逛市场。该市场有 无数种 商品，对于 任何 正整数 x，都存在一个价格为 x 的物品。Alice 想从市场里买一些东西送给 Bob。她有 无数个 面值为 primeOne 和 primeTwo 的硬币。她想知道她 无法 用她拥有的硬币购买的 最贵 商品的价格。
返回 Alice 无法买给 Bob 的 最贵 商品的价格。

示例 1:
输入：primeOne = 2, primeTwo = 5
输出：3
解释：无法购买的商品的价格有 [1,3]。所有价格大于 3 的商品都可以通过组合使用面额为 2 和 5 的硬币购买。
示例 2:
输入：primeOne = 5, primeTwo = 7
输出：23
解释：无法购买的商品的价格有 [1,2,3,4,6,8,9,11,13,16,18,23]。所有价格大于 23 的商品都可以购买。

提示：
1 < primeOne, primeTwo < 104
primeOne, primeTwo 都是质数。
primeOne * primeTwo < 105
Hint 1: Write out a few cases. It can be seen that all items greater than primeOne * primeTwo can always be bought.
Hint 2: If we can buy items with cost i, we can also buy items with price i + primeOne and i + primeTwo.
Hint 3: Use dynamic programming.
Hint 4: There is an O(1) solution: Use the Chicken McNugget Theorem.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Two coin denominations primeOne, primeTwo (distinct primes). Largest price not representable as a non-negative combination (Frobenius number / Chicken McNugget Theorem).

Approach: for coprime a, b the answer is a*b - a - b. Two distinct primes are coprime, so return primeOne*primeTwo - primeOne - primeTwo. O(1).

Verified: (2,5) -> 3; (5,7) -> 23.
