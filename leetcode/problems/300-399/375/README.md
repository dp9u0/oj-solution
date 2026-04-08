# [375] Guess Number Higher or Lower II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/guess-number-higher-or-lower-ii/description/)

* algorithms
* Medium (52.62%)
* Testcase Example:  '10'

```md
We are playing the Guessing Game. The game will work as follows:
I pick a number between 1 and n.
You guess a number.
If you guess the right number, you win the game.
If you guess the wrong number, then I will tell you whether the number I picked is higher or lower, and you will continue guessing.
Every time you guess a wrong number x, you will pay x dollars. If you run out of money, you lose the game.
Given a particular n, return the minimum amount of money you need to guarantee a win regardless of what number I pick.

Example 1:
Input: n = 10
Output: 16
Explanation: The winning strategy is as follows:
- The range is [1,10]. Guess 7.
- If this is my number, your total is $0. Otherwise, you pay $7.
- If my number is higher, the range is [8,10]. Guess 9.
- If this is my number, your total is $7. Otherwise, you pay $9.
- If my number is higher, it must be 10. Guess 10. Your total is $7 + $9 = $16.
- If my number is lower, it must be 8. Guess 8. Your total is $7 + $9 = $16.
- If my number is lower, the range is [1,6]. Guess 3.
- If this is my number, your total is $7. Otherwise, you pay $3.
- If my number is higher, the range is [4,6]. Guess 5.
- If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $5.
- If my number is higher, it must be 6. Guess 6. Your total is $7 + $3 + $5 = $15.
- If my number is lower, it must be 4. Guess 4. Your total is $7 + $3 + $5 = $15.
- If my number is lower, the range is [1,2]. Guess 1.
- If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $1.
- If my number is higher, it must be 2. Guess 2. Your total is $7 + $3 + $1 = $11.
The worst case in all these scenarios is that you pay $16. Hence, you only need $16 to guarantee a win.
Example 2:
Input: n = 1
Output: 0
Explanation: There is only one possible number, so you can guess 1 and not have to pay anything.
Example 3:
Input: n = 2
Output: 1
Explanation: There are two possible numbers, 1 and 2.
- Guess 1.
- If this is my number, your total is $0. Otherwise, you pay $1.
- If my number is higher, it must be 2. Guess 2. Your total is $1.
The worst case is that you pay $1.

Constraints:
1

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
我们正在玩猜数游戏。游戏规则如下：
我从 `1` 到 `n` 之间选择一个数字。
你来猜一个数字。
如果你猜对了，你就赢了。
如果你猜错了，我会告诉你我选的数字是偏大还是偏小，然后你可以继续猜。
每次你猜错一个数字 `x`，你都需要支付 `x` 美元。如果你没钱了，你就输了游戏。
给定一个特定的 `n`，返回你至少需要多少钱才能 **确保无论我选什么数字你都能赢**。

示例 1:
输入: n = 10
输出: 16
解释: 获胜策略略。

示例 2:
输入: n = 1
输出: 0

示例 3:
输入: n = 2
输出: 1

约束：
1 <= n <= 200

### 解题思路 (Approach)
这是一道极小化极大 (Minimax) 算法题，通常用动态规划来解决。
我们需要找到在最坏情况下的最小花费。
定义 `dp[i][j]` 为在范围 `[i, j]` 内猜中数字所需要的最少钱数。
如果我们猜数字 `k` (`i <= k <= j`)，有两种情况：
1. `k` 就是目标数字，花费为 0。
2. `k` 不是目标数字，我们需要支付 `k`，然后继续在左边 `[i, k-1]` 或右边 `[k+1, j]` 中猜。因为我们必须考虑最坏情况，所以花费为 `k + max(dp[i][k-1], dp[k+1][j])`。

为了使最坏情况下的花费最小，我们要遍历所有的 `k`，选择上述花费的最小值：
`dp[i][j] = min_{i <= k <= j} (k + max(dp[i][k-1], dp[k+1][j]))`

边界条件：
如果 `i >= j`，那么范围内只有一个数或者没有数，不需要猜就能知道答案（或者范围无效），所以 `dp[i][j] = 0`。

对于长度为 `len` (从 2 到 n) 的区间，遍历所有起点 `i`，计算终点 `j = i + len - 1` 的 `dp[i][j]` 值。
最终答案是 `dp[1][n]`。
