# [2029] Stone Game IX

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stone-game-ix/description/)

* algorithms
* Medium (30.20%)
* Likes:    261
* Dislikes: 280
* Testcase Example:  '[2,1]'

```md
Alice and Bob continue their games with stones. There is a row of n stones, and each stone has an associated value. You are given an integer array stones, where stones[i] is the value of the ith stone.
Alice and Bob take turns, with Alice starting first. On each turn, the player may remove any stone from stones. The player who removes a stone loses if the sum of the values of all removed stones is divisible by 3. Bob will win automatically if there are no remaining stones (even if it is Alice&#39;s turn).
Assuming both players play optimally, return true if Alice wins and false if Bob wins.

Example 1:

Input: stones = [2,1]
Output: true
Explanation:The game will be played as follows:
- Turn 1: Alice can remove either stone.
- Turn 2: Bob removes the remaining stone.
The sum of the removed stones is 1 + 2 = 3 and is divisible by 3. Therefore, Bob loses and Alice wins the game.

Example 2:

Input: stones = [2]
Output: false
Explanation:Alice will remove the only stone, and the sum of the values on the removed stones is 2.
Since all the stones are removed and the sum of values is not divisible by 3, Bob wins the game.

Example 3:

Input: stones = [5,1,2,4,3]
Output: false
Explanation: Bob will always win. One possible way for Bob to win is shown below:
- Turn 1: Alice can remove the second stone with value 1. Sum of removed stones = 1.
- Turn 2: Bob removes the fifth stone with value 3. Sum of removed stones = 1 + 3 = 4.
- Turn 3: Alices removes the fourth stone with value 4. Sum of removed stones = 1 + 3 + 4 = 8.
- Turn 4: Bob removes the third stone with value 2. Sum of removed stones = 1 + 3 + 4 + 2 = 10.
- Turn 5: Alice removes the first stone with value 5. Sum of removed stones = 1 + 3 + 4 + 2 + 5 = 15.
Alice loses the game because the sum of the removed stones (15) is divisible by 3. Bob wins the game.


Constraints:

1 <= stones.length <= 105
1 <= stones[i] <= 104


```

## 中文翻译

Alice 和 Bob 轮流移除石头，移除后若总和是 3 的倍数则该玩家输。石头用完 Bob 赢。双方最优策略下 Alice 是否赢？

## 解题思路

只关心石头值 mod 3 的余数。统计 c0, c1, c2。分析博弈：Alice 第一手必须选余 1 或余 2 的石头（不能选余 0，因为对方可以消耗余 0 来跳过轮次）。分别模拟 Alice 先选余 1 和先选余 2 的情况，通过贪心策略判断。

## Solution

[SourceCode](./solution.js)
