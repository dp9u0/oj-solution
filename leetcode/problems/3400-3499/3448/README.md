# [3448] Count Substrings Divisible By Last Digit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-substrings-divisible-by-last-digit/description/)

* algorithms
* Hard (23.16%)
* Likes:    78
* Dislikes: 8
* Testcase Example:  '"12936"'

```md
You are given a string s consisting of digits.
Return the number of substrings of s divisible by their non-zero last digit.
Note: A substring may contain leading zeros.

Example 1:

Input: s = '12936'
Output: 11
Explanation:
Substrings '29', '129', '293' and '2936' are not divisible by their last digit. There are 15 substrings in total, so the answer is 15 - 4 = 11.

Example 2:

Input: s = '5701283'
Output: 18
Explanation:
Substrings '01', '12', '701', '012', '128', '5701', '7012', '0128', '57012', '70128', '570128', and '701283' are all divisible by their last digit. Additionally, all substrings that are just 1 non-zero digit are divisible by themselves. Since there are 6 such digits, the answer is 12 + 6 = 18.

Example 3:

Input: s = '1010101010'
Output: 25
Explanation:
Only substrings that end with digit &#39;1&#39; are divisible by their last digit. There are 25 such substrings.


Constraints:

1 <= s.length <= 105
s consists of digits only.


```

## 题目翻译

给定数字字符串 s，求子串中数值能被其末位非零数字整除的个数。

## 解题思路

**按末位数字 d 分类处理（d=1..9）**

利用各数字的整除性质分别处理：
- d=1,2,5：末位即满足整除条件，所有子串都算，贡献 = i+1
- d=3,6,9：利用各位数字之和的整除规则（10≡1 mod 3/9）。用前缀数字和维护频率表
- d=4：仅看末两位（10≡2 mod 4），直接公式计算
- d=7：用 G[k]=P[k]·inv(10^k) mod 7 的频率匹配（inv(10)=5 mod 7）
- d=8：仅看末三位（10≡2 mod 8），直接公式计算

每种 d 独立 O(n) 扫描，总 O(9n)。

## Solution

[SourceCode](./solution.js)
