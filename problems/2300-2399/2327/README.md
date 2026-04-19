# [2327] Number of People Aware of a Secret

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-people-aware-of-a-secret/description/)

* algorithms
* Medium (60.81%)
* Likes:    1497
* Dislikes: 163
* Testcase Example:  '6\n2\n4'

```md
On day 1, one person discovers a secret.
You are given an integer delay, which means that each person will share the secret with a new person every day, starting from delay days after discovering the secret. You are also given an integer forget, which means that each person will forget the secret forget days after discovering it. A person cannot share the secret on the same day they forgot it, or on any day afterwards.
Given an integer n, return the number of people who know the secret at the end of day n. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: n = 6, delay = 2, forget = 4
Output: 5
Explanation:
Day 1: Suppose the first person is named A. (1 person)
Day 2: A is the only person who knows the secret. (1 person)
Day 3: A shares the secret with a new person, B. (2 people)
Day 4: A shares the secret with a new person, C. (3 people)
Day 5: A forgets the secret, and B shares the secret with a new person, D. (3 people)
Day 6: B shares the secret with E, and C shares the secret with F. (5 people)

Example 2:

Input: n = 4, delay = 1, forget = 3
Output: 6
Explanation:
Day 1: The first person is named A. (1 person)
Day 2: A shares the secret with B. (2 people)
Day 3: A and B share the secret with 2 new people, C and D. (4 people)
Day 4: A forgets the secret. B, C, and D share the secret with 3 new people. (6 people)


Constraints:

2 <= n <= 1000
1 <= delay < forget <= n


```

## 中文翻译

第1天有1人知道秘密。每人 delay 天后开始每天分享给1个新人，forget 天后忘记且不再分享。求第 n 天结束时知道秘密的人数 mod 10^9+7。

## 解题思路

**DP**

dp[i] = 第 i 天新知道秘密的人数。第 i 天新的人数 = 第 [i-forget+1, i-delay] 天新知道秘密的人数之和（这些人在第 i 天可以分享）。

用前缀和优化：sumDp[i] = dp[1]+...+dp[i]，则 dp[i] = sumDp[i-delay] - sumDp[i-forget]。

答案 = dp[n-forget+1] + ... + dp[n] = sumDp[n] - sumDp[n-forget]。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
