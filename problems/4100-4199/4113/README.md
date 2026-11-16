# [4113] 整除和博弈

## Description


```md
https://leetcode.cn/problems/game-of-divisible-sums/description/
* algorithms
* Medium (57.31%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[3,6,4]'
Alice 和 Bob 正在用一个整数数组 nums 玩游戏。Alice 先手。
每个回合，当前玩家可以取走并移除 最左边的一个元素 ，或者在至少还剩两个元素时，取走并移除 最左边的两个元素。
本回合取走的元素之 和 决定接下来由谁行动：
如果该总和能被 3 整除，则接下来由另一位玩家行动。
否则，当前玩家继续行动。
一位玩家的 得分 是其取走的所有元素的值之和。
两位玩家都采用最优策略，各自力求 最大化 自己的得分。
当所有元素都被取走时，游戏结束。
返回 Alice 的得分 减去 Bob 的得分。

示例 1：
输入： nums = [3,6,4]
输出： 5
解释：
一种最优的回合序列如下：
Alice 取走最左边的两个元素。它们的总和为 3 + 6 = 9，能被 3 整除，因此接下来由 Bob 行动。此时 Alice 的得分为 9，剩余数组为 [4]。
Bob 取走唯一剩余的元素。他的得分为 4，游戏结束。
Alice 的得分减去 Bob 的得分为 9 - 4 = 5，因此答案为 5。
示例 2：
输入： nums = [6,1,2,1,2]
输出： 12
解释：
一种最优的回合序列如下：
Alice 取走最左边的两个元素。它们的总和为 6 + 1 = 7，不能被 3 整除，因此 Alice 继续行动。此时她的得分为 7，剩余数组为 [2, 1, 2]。
Alice 取走最左边的一个元素。它的值为 2，不能被 3 整除，因此 Alice 继续行动。此时她的得分为 7 + 2 = 9，剩余数组为 [1, 2]。
Alice 取走剩余的两个元素。此时她的得分为 9 + 1 + 2 = 12，游戏结束。
Bob 没有取走任何元素，因此他的得分为 0。Alice 的得分减去 Bob 的得分为 12 - 0 = 12，因此答案为 12。
示例 3：
输入： nums = [3,3,4,5]
输出： -3
解释：
一种最优的回合序列如下：
Alice 取走最左边的两个元素。它们的总和为 3 + 3 = 6，能被 3 整除，因此接下来由 Bob 行动。此时 Alice 的得分为 6，剩余数组为 [4, 5]。
Bob 取走剩余的两个元素。他的得分为 4 + 5 = 9，游戏结束。
Alice 的得分减去 Bob 的得分为 6 - 9 = -3，因此答案为 -3。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 109
Hint 1: The sum of the remaining elements is fixed, so maximizing your own score also maximizes your lead. Let dp[i] be the largest lead the player about to move can achieve from the suffix starting at i.
Hint 2: Suppose a move earns s points and leaves a suffix starting at j. Whose lead does dp[j] represent if s is divisible by 3? Whose lead does it represent otherwise?
Hint 3: Try each legal move and take the maximum: s - dp[j] if the turn passes, or s + dp[j] if the same player moves again. Work backward from dp[n] = 0 using 64-bit integers.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Alice and Bob play a game with an integer array `nums`; Alice moves first. On each turn the current player removes either the leftmost element, or (if at least two remain) the two leftmost elements. If the sum of the taken elements is divisible by 3, the other player takes the next turn; otherwise the same player continues. A player's score is the sum of all elements they took. Both play optimally to maximize their own score. Return Alice's score minus Bob's score. Constraints: `n <= 1e5`, `nums[i] <= 1e9`.

## Approach

剩余元素总和固定,最大化自己的得分等价于最大化「自己 − 对手」的领先差。定义 `dp[i]`:轮到行动的玩家从后缀 `i` 开始能取得的最大领先(其得分 − 对手得分),`dp[n] = 0`。

从 `dp[n]` 倒推,枚举两种走法(取 1 个 `s=nums[i]` 留 `i+1`;或取 2 个 `s=nums[i]+nums[i+1]` 留 `i+2`):

- `s % 3 == 0` → 换对手行动,我的净领先为 `s - dp[j]`;
- 否则 → 我继续行动,`dp[j]` 仍是我的领先,净领先为 `s + dp[j]`。

`dp[i]` 取两种走法的最大值,答案为 `dp[0]`。总和 ≤ 1e14,在 JS 安全整数范围内,O(n) 时间。

## Solution

[SourceCode](./solution.js)
