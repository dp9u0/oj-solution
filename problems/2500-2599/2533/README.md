# [2533] 好二进制字符串的数量

## Description


```md
https://leetcode.cn/problems/number-of-good-binary-strings/description/
* algorithms
* Medium (63.81%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '2\n3\n1\n2'
给你四个整数 minLength、maxLength、oneGroup 和 zeroGroup 。
好 二进制字符串满足下述条件：
字符串的长度在 [minLength, maxLength] 之间。
每块连续 1 的个数是 oneGroup 的整数倍

例如在二进制字符串 00110111100 中，每块连续 1 的个数分别是[2,4] 。


每块连续 0 的个数是 zeroGroup 的整数倍

例如在二进制字符串 00110111100 中，每块连续 0 的个数分别是 [2,1,2] 。


请返回 好 二进制字符串的个数。答案可能很大，请返回对 109 + 7 取余 后的结果。
注意：0 可以被认为是所有数字的倍数。

示例 1：
输入：minLength = 2, maxLength = 3, oneGroup = 1, zeroGroup = 2
输出：5
解释：在本示例中有 5 个好二进制字符串: "00", "11", "001", "100", 和 "111" 。
可以证明只有 5 个好二进制字符串满足所有的条件。
示例 2：
输入：minLength = 4, maxLength = 4, oneGroup = 4, zeroGroup = 3
输出：1
解释：在本示例中有 1 个好二进制字符串: "1111" 。
可以证明只有 1 个好字符串满足所有的条件。

提示：
1 <= minLength <= maxLength <= 105
1 <= oneGroup, zeroGroup <= maxLength
Hint 1: If we maintain DP(i, x) where i denotes the length and x denotes the last written integer (0 or 1), then it is not hard to solve in O(maxLength * max(zeroGroup, oneGroup)).
Hint 2: Notice that from DP(i, 0) we only have a transition to DP(j, 1) where (j - i) mod oneGroup == 0 and j > i. Similarly with DP(i,1). So we can use prefix sum to optimize our DP and solve it in O(maxLength).

```

## Solution

[SourceCode](./solution.js)

## English Translation

Count binary strings of length in [minLength, maxLength] where every run of 1s has length divisible by oneGroup and every run of 0s divisible by zeroGroup, modulo 1e9+7.

Example 1:
Input: minLength = 2, maxLength = 3, oneGroup = 1, zeroGroup = 2
Output: 5

Example 2:
Input: minLength = 4, maxLength = 4, oneGroup = 4, zeroGroup = 3
Output: 1

Constraints: 1 <= minLength <= maxLength <= 10^5, 1 <= oneGroup, zeroGroup <= maxLength.

## Approach

Blocks must alternate, so track dp0[j] (length j ending in a 0-block) and dp1[j] (ending in a 1-block). dp1[j] = sum of dp0[i] (plus the empty start) over i <= j - oneGroup with (j - i) % oneGroup == 0; symmetric for dp0. Maintain per-residue-class running sums (acc) updated after each j with prev0[j] = dp0[j] (prev0[0] = 1 = empty string, same for prev1). Answer = sum of dp0[j] + dp1[j] for j in [minLength, maxLength]. O(maxLength).
