# [1842] 下个由相同数字构成的回文串

## Description


```md
https://leetcode.cn/problems/next-palindrome-using-same-digits/description/
* algorithms
* Hard (51.68%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '"1221"'
给你一个很长的数字回文串 num ，返回 大于 num、由相同数字重新组合而成的最小 回文串。
如果不存在这样的回文串，则返回空串 ""。
回文串 是正读和反读都一样的字符串。

示例 1：
输入：num = "1221"
输出："2112"
解释：下个比 "1221" 大的回文串是 "2112"。
示例 2：
输入：num = "32123"
输出：""
解释：不存在通过重组 "32123" 的数字可得、比 "32123" 还大的回文串。
示例 3：
输入：num = "45544554"
输出："54455445"
解释：下个比 "45544554" 还要大的回文串是 "54455445"。

提示：
1 <= num.length <= 105
num 是回文串。
Hint 1: Is it possible to swap one character in the first half of the palindrome to make the next one?
Hint 2: Are there different cases for when the length is odd and even?

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a palindromic digit string, return the SMALLEST larger palindrome using the same digits, or "".

## Approach

**前半做下一排列**。回文之间比较字典序 ⟺ 比较前半(next permutation 保多重集);前半无下一排列则 ""。对前 ceil(n/2) 做下一排列,再镜像前 floor(n/2) 位补右半。O(n)。

## Approach (final)

修正:奇数长度的中位字符必须保持不变,否则总多重集改变。下一排列作用于前 floor(n/2)(偶数时即 n/2);结果 = 前半' + (奇数 ? 中位字符 : '') + reverse(前半)。此前用 ceil(n/2) 时总多重集被破坏(如 "23143034132")。
