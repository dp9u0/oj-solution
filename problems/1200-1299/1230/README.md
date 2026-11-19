# [1230] 抛掷硬币

## Description


```md
https://leetcode.cn/problems/toss-strange-coins/description/
* algorithms
* Medium (55.90%)
* Likes:    79
* Dislikes: -
* Testcase Example:  '[0.4]\n1'
有一些不规则的硬币。在这些硬币中，prob[i] 表示第 i 枚硬币正面朝上的概率。
请对每一枚硬币抛掷 一次，然后返回正面朝上的硬币数等于 target 的概率。

示例 1：
输入：prob = [0.4], target = 1
输出：0.40000
示例 2：
输入：prob = [0.5,0.5,0.5,0.5,0.5], target = 0
输出：0.03125

提示：
1 <= prob.length <= 1000
0 <= prob[i] <= 1
0 <= target <= prob.length
如果答案与标准答案的误差在 10^-5 内，则被视为正确答案。
Hint 1: What about solving the problem with DP?
Hint 2: Use DP with two states dp[pos][cnt], where pos represents the pos-th coin and cnt is the number of heads seen so far.
Hint 3: You can do the transitions with a little bit math.
Hint 4: For the base case, when pos == n return (cnt == target) to filter out the invalid scenarios.

```

## Solution

[SourceCode](./solution.js)

## Translation

Coins with heads probability prob[i]; toss each once. Return the probability that exactly `target` coins come up heads.

- Example: prob = [0.5×5], target = 0 → `0.03125`

## Approach

**滚动 DP**。dp[j] = 已处理硬币中恰好 j 个正面的概率;新硬币 p 转移 dp[j] = dp[j−1]·p + dp[j]·(1−p),j 从大到小原地更新。dp[0] = 1 起步,答案 dp[target]。O(n²),n ≤ 1000。
