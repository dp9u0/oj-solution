# [2944] Minimum Number of Coins for Fruits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/description/)

* algorithms
* Medium (48.99%)
* Likes:    318
* Dislikes: 85
* Testcase Example:  '[3,1,2]'

```md
You are given an 0-indexed integer array prices where prices[i] denotes the number of coins needed to purchase the (i + 1)th fruit.
The fruit market has the following reward for each fruit:

If you purchase the (i + 1)th fruit at prices[i] coins, you can get any number of the next i fruits for free.

Note that even if you can take fruit j for free, you can still purchase it for prices[j - 1] coins to receive its reward.
Return the minimum number of coins needed to acquire all the fruits.

Example 1:

Input: prices = [3,1,2]
Output: 4
Explanation:

Purchase the 1st fruit with prices[0] = 3 coins, you are allowed to take the 2nd fruit for free.
Purchase the 2nd fruit with prices[1] = 1 coin, you are allowed to take the 3rd fruit for free.
Take the 3rd fruit for free.

Note that even though you could take the 2nd fruit for free as a reward of buying 1st fruit, you purchase it to receive its reward, which is more optimal.

Example 2:

Input: prices = [1,10,1,1]
Output: 2
Explanation:

Purchase the 1st fruit with prices[0] = 1 coin, you are allowed to take the 2nd fruit for free.
Take the 2nd fruit for free.
Purchase the 3rd fruit for prices[2] = 1 coin, you are allowed to take the 4th fruit for free.
Take the 4th fruit for free.


Example 3:

Input: prices = [26,18,6,12,49,7,45,45]
Output: 39
Explanation:

Purchase the 1st fruit with prices[0] = 26 coin, you are allowed to take the 2nd fruit for free.
Take the 2nd fruit for free.
Purchase the 3rd fruit for prices[2] = 6 coin, you are allowed to take the 4th, 5th and 6th (the next three) fruits for free.
Take the 4th fruit for free.
Take the 5th fruit for free.
Purchase the 6th fruit with prices[5] = 7 coin, you are allowed to take the 8th and 9th fruit for free.
Take the 7th fruit for free.
Take the 8th fruit for free.

Note that even though you could take the 6th fruit for free as a reward of buying 3rd fruit, you purchase it to receive its reward, which is more optimal.


Constraints:

1 <= prices.length <= 1000
1 <= prices[i] <= 105


```

## 中文翻译

给定水果价格数组 prices，购买第 i+1 个水果花 prices[i] 个硬币，可获得接下来 i 个水果免费。返回获得所有水果的最少硬币数。

## 解题思路

**动态规划：**

1. dp[i] = 获得前 i 个水果的最小花费（1-indexed）
2. 对于第 i 个水果，两种选择：
   - 自己花钱买：dp[i] = prices[i-1] + min(dp[j] for j in [ceil(i/2), i-1])
   - 被之前的购买免费覆盖
3. 关键观察：第 i 个水果只有被第 ceil(i/2) 到 i-1 个水果的购买覆盖
4. 简化：dp[i] = prices[i-1] + min(dp[j]) where j from ceil(i/2) to i-1
5. 用前缀最小值优化到 O(n)

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
