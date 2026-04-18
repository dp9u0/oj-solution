# [3756] Concatenate Non-Zero Digits and Multiply by Sum II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-ii/description/)

* algorithms
* Medium (24.26%)
* Likes:    72
* Dislikes: 12
* Testcase Example:  '"10203004"\n[[0,7],[1,3],[4,6]]'

```md
You are given a string s of length m consisting of digits. You are also given a 2D integer array queries, where queries[i] = [li, ri].
For each queries[i], extract the substring s[li..ri]. Then, perform the following:

Form a new integer x by concatenating all the non-zero digits from the substring in their original order. If there are no non-zero digits, x = 0.
Let sum be the sum of digits in x. The answer is x * sum.

Return an array of integers answer where answer[i] is the answer to the ith query.
Since the answers may be very large, return them modulo 109 + 7.

Example 1:

Input: s = '10203004', queries = [[0,7],[1,3],[4,6]]
Output: [12340, 4, 9]
Explanation:

s[0..7] = '10203004'

x = 1234
sum = 1 + 2 + 3 + 4 = 10
Therefore, answer is 1234 * 10 = 12340.


s[1..3] = '020'

x = 2
sum = 2
Therefore, the answer is 2 * 2 = 4.


s[4..6] = '300'

x = 3
sum = 3
Therefore, the answer is 3 * 3 = 9.




Example 2:

Input: s = '1000', queries = [[0,3],[1,1]]
Output: [1, 0]
Explanation:

s[0..3] = '1000'

x = 1
sum = 1
Therefore, the answer is 1 * 1 = 1.


s[1..1] = '0'

x = 0
sum = 0
Therefore, the answer is 0 * 0 = 0.




Example 3:

Input: s = '9876543210', queries = [[0,9]]
Output: [444444137]
Explanation:

s[0..9] = '9876543210'

x = 987654321
sum = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45
Therefore, the answer is 987654321 * 45 = 44444444445.
We return 44444444445 modulo (109 + 7) = 444444137.





Constraints:

1 <= m == s.length <= 105
s consists of digits only.
1 <= queries.length <= 105
queries[i] = [li, ri]
0 <= li <= ri < m


```

## 翻译

给定数字字符串s和queries，对每个query[l,r]提取子串非零数字拼接为x，计算x*(x的数字和) mod 10^9+7。

## 解题思路

前缀处理。维护前缀非零数字拼接值prefixX、非零数字个数cnt、数字和prefixSum。对查询[l,r]，x=(prefixX[r+1]-prefixX[l]*10^(cntLR)) mod MOD，sum=prefixSum差值，答案=x*sum mod MOD。

## Solution

[SourceCode](./solution.js)
