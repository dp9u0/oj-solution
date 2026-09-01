# [LCP 06] 拿硬币

## Description


```md
https://leetcode.cn/problems/na-ying-bi/description/
* algorithms
* Easy (84.30%)
* Likes:    134
* Dislikes: -
* Testcase Example:  '[4,2,1]'
桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。
示例 1：
输入：[4,2,1]
输出：4
解释：第一堆力扣币最少需要拿 2 次，第二堆最少需要拿 1 次，第三堆最少需要拿 1 次，总共 4 次即可拿完。
示例 2：
输入：[2,3,10]
输出：8
限制：
1 <= n <= 4
1 <= coins[i] <= 10

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

There are `n` piles of LeetCode coins on the table, and the number of coins in each pile is stored in the array `coins`. Each time we may pick any pile and take one or two coins from it. Return the minimum number of moves needed to take all coins.

Example 1:
```
Input: coins = [4,2,1]
Output: 4
Explanation: The first pile takes 2 moves at minimum, the second takes 1, and the third takes 1, for a total of 4 moves.
```

Example 2:
```
Input: coins = [2,3,10]
Output: 8
```

Constraints:
- `1 <= n <= 4`
- `1 <= coins[i] <= 10`

---

## Approach

For a pile with `c` coins, since each move removes at most 2 coins, the minimum number of moves to empty it is `Math.ceil(c / 2)`.

Since each pile is independent, the answer is simply the sum of `Math.ceil(coins[i] / 2)` over all piles.

Time: O(n), Space: O(1).
