# [2847] 给定数字乘积的最小数字

## Description


```md
https://leetcode.cn/problems/smallest-number-with-given-digit-product/description/
* algorithms
* Medium (25.40%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '105'
给定一个 正 整数 n。
返回一个字符串，表示使其各位数字的乘积等于 n 的 最小正整数，如果不存在这样的数字，则返回 "-1" 。

示例 1：
输入：n = 105
输出："357"
解释：3 * 5 * 7 = 105。可以证明，357 是各位数字的乘积等于 105 的最小数字。因此答案为 "357"。
示例 2：
输入：n = 7
输出："7"
解释：由于 7 只有一位数字，其各位数字的乘积为 7。由于数字 1 到 6 的乘积分别为 1 到 6，所以答案为 "7"。可以证明 7 是乘积等于 7 的最小数字。
示例 3：
输入：n = 44
输出："-1"
解释：可以证明，没有数字的各位数字乘积等于 44。因此答案为 "-1"。

提示：
1 <= n <= 1015
Hint 1: Find the prime factors of n.
Hint 2: If there is a prime factor p such that p >= 11, the answer is -1. Since there are no digits whose products equal p.
Hint 3: Factors 5 and 7 should be included in the answer since their product with any number bigger than 1 is a 2-digit number.
Hint 4: For factors 2 and 3, we group every three 2 into an 8 and every two 3 into a 9.
Hint 5: For any leftover 2 or 3, check all the possible combinations.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Smallest positive integer whose digit product equals n (n up to 1e15), or -1 if none.

Approach: n is representable iff every prime factor is in {2, 3, 5, 7} — so divide out 2/3/5/7; if a remainder > 1 stays, return -1 (no trial division beyond that needed). Handle factors: counts e2, e3, e5, e7. Digits 5 and 7 appear e5, e7 times. For 2s and 3s: group 2s into 8s (three each) and 3s into 9s (two each), then map the leftovers (e2 % 3, e3 % 2): (1,0)->2, (0,1)->3, (2,0)->4, (1,1)->6, (2,1)->26, (0,0)->none. Sort all digits ascending — a shorter number beats a longer one (greedy grouping minimizes digit count; for equal counts this mapping is lexicographically optimal, e.g. 2·3^2·... verified against 29<36, 26<34, 28<44 cases). n = 1 -> "1".

Complexity: O(log n).
