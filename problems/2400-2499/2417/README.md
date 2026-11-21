# [2417] 最近的公平整数

## Description


```md
https://leetcode.cn/problems/closest-fair-integer/description/
* algorithms
* Medium (42.58%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '2'
给定一个 正整数 n。
如果一个整数 k 中的 偶数 位数与 奇数 位数相等，那么我们称 k 为公平整数。
返回 大于或等于 n 的 最小 的公平整数。

示例 1:
输入: n = 2
输出: 10
解释: 大于等于 2 的最小的公平整数是 10。
10是公平整数，因为它的偶数和奇数个数相等 (一个奇数和一个偶数)。
示例 2:
输入: n = 403
输出: 1001
解释: 大于或等于 403 的最小的公平整数是 1001。
1001 是公平整数，因为它有相等数量的偶数和奇数 (两个奇数和两个偶数)。

提示:
1 <= n <= 109
Hint 1: Suppose that the number that we are looking for has the same number of digits as n, the answer, in this case, will not be very far from n, so you can do a simple brute force. Can you prove why this is true?
Hint 2: How do you handle the case when the resulting number has more digits than n?

```

## Solution

[SourceCode](./solution.js)

## English Translation

A fair integer has an equal count of odd and even digits. Return the smallest fair integer >= n.

Example 1:
Input: n = 2
Output: 10

Example 2:
Input: n = 403
Output: 1001

Constraints: 1 <= n <= 10^9.

## Approach

A fair number's length is always even. For the target length L (d if d even, else d+1; if nothing exists at that length, L += 2), enumerate every subset of positions holding odd digits (|S| = L/2, at most C(12,6) subsets). For each subset construct the smallest L-digit number >= n: greedy tight digit fill, falling back to bumping the latest possible position and minimal-fill afterwards. Take the minimum across subsets. If L exceeds the digit count of n, every minimal fill is automatically >= n.
