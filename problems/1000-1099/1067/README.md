# [1067] 范围内的数字计数

## Description


```md
https://leetcode.cn/problems/digit-count-in-range/description/
* algorithms
* Hard (49.44%)
* Likes:    33
* Dislikes: -
* Testcase Example:  '1\n1\n13'
给定一个在 0 到 9 之间的整数 d，和两个正整数 low 和 high 分别作为上下界。返回 d 在 low 和 high 之间的整数中出现的次数，包括边界 low 和 high。

示例 1：
输入：d = 1, low = 1, high = 13
输出：6
解释：
数字 d=1 在 1,10,11,12,13 中出现 6 次。注意 d=1 在数字 11 中出现两次。
示例 2：
输入：d = 3, low = 100, high = 250
输出：35
解释：
数字 d=3 在 103,113,123,130,131,...,238,239,243 出现 35 次。

提示：
0 <= d <= 9
1 <= low <= high <= 2×10^8
Hint 1: Define a function f(x) to get the requested sum from 1 to x. So the answer will be f(hi) - f(lo - 1)
Hint 2: In order to solve f(x) we need to do a DP over digits approach.

```

## Solution

[SourceCode](./solution.js)

## Translation

Count occurrences of digit d in all integers between low and high inclusive.

- Example: d=1, low=1, high=13 → `6` (1,10,11 twice,12,13)

## Approach

**逐位计数**。f(x) = d 在 1..x 中出现次数,答案 f(high) − f(low−1)。对每个位 p:记 higher = ⌊x/10p⌋,cur = 该位数字,lower = x%p。d≠0:cur>d 加 (higher+1)p;cur=d 加 higher·p + lower + 1;cur<d 加 higher·p。d=0 需扣前导零:cur>0 加 higher·p,cur=0 加 (higher−1)p + lower + 1。每位 O(1),共 O(log x)。
