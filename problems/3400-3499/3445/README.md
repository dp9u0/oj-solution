# [3445] Maximum Difference Between Even and Odd Frequency II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-ii/description/)

* algorithms
* Hard (48.64%)
* Likes:    392
* Dislikes: 105
* Testcase Example:  '"12233"\n4'

```md
You are given a string s and an integer k. Your task is to find the maximum difference between the frequency of two characters, freq[a] - freq[b], in a substring subs of s, such that:

subs has a size of at least k.
Character a has an odd frequency in subs.
Character b has a non-zero even frequency in subs.

Return the maximum difference.
Note that subs can contain more than 2 distinct characters.

Example 1:

Input: s = '12233', k = 4
Output: -1
Explanation:
For the substring '12233', the frequency of &#39;1&#39; is 1 and the frequency of &#39;3&#39; is 2. The difference is 1 - 2 = -1.

Example 2:

Input: s = '1122211', k = 3
Output: 1
Explanation:
For the substring '11222', the frequency of &#39;2&#39; is 3 and the frequency of &#39;1&#39; is 2. The difference is 3 - 2 = 1.

Example 3:

Input: s = '110', k = 3
Output: -1


Constraints:

3 <= s.length <= 3 * 104
s consists only of digits &#39;0&#39; to &#39;4&#39;.
The input is generated that at least one substring has a character with an even frequency and a character with an odd frequency.
1 <= k <= s.length


```

## 中文翻译

给定数字字符串 s（仅含 0-4）和整数 k，求所有长度 >= k 的子串中 freq[a] - freq[b] 的最大值，其中 a 的频率为奇数，b 的频率为非零偶数。

约束：n <= 3*10^4，字符仅 0-4

## 解题思路

**枚举字符对 + 前缀和奇偶分组**

1. 枚举所有字符对 (a, b)，a ≠ b，共 20 对。
2. 对每对，维护 cnt_a[r] - cnt_b[r] - (cnt_a[l] - cnt_b[l]) 的最大值。
3. 约束转化为：cnt_a[l] 与 cnt_a[r] 奇偶不同，cnt_b[l] 与 cnt_b[r] 奇偶相同，cnt_b[l] < cnt_b[r]。
4. 按 (cnt_a[l]%2, cnt_b[l]%2) 分 4 组，每组维护按 cnt_b[l] 排序的最小 diff[l]。
5. 用指针扩展法维护前缀最小值。每组内 cnt_b 非递减（前缀和性质），故可 O(1) 均摊扩展。
6. 总时间 O(25 * n)。

## Solution

[SourceCode](./solution.js)
