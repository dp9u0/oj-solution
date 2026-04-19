# [2746] Decremental String Concatenation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/decremental-string-concatenation/description/)

* algorithms
* Medium (27.63%)
* Likes:    376
* Dislikes: 33
* Testcase Example:  '["aa","ab","bc"]'

```md
You are given a 0-indexed array words containing n strings.
Let&#39;s define a join operation join(x, y) between two strings x and y as concatenating them into xy. However, if the last character of x is equal to the first character of y, one of them is deleted.
For example join('ab', 'ba') = 'aba' and join('ab', 'cde') = 'abcde'.
You are to perform n - 1 join operations. Let str0 = words[0]. Starting from i = 1 up to i = n - 1, for the ith operation, you can do one of the following:

Make stri = join(stri - 1, words[i])
Make stri = join(words[i], stri - 1)

Your task is to minimize the length of strn - 1.
Return an integer denoting the minimum possible length of strn - 1.

Example 1:

Input: words = ['aa','ab','bc']
Output: 4
Explanation: In this example, we can perform join operations in the following order to minimize the length of str2:
str0 = 'aa'
str1 = join(str0, 'ab') = 'aab'
str2 = join(str1, 'bc') = 'aabc'
It can be shown that the minimum possible length of str2 is 4.
Example 2:

Input: words = ['ab','b']
Output: 2
Explanation: In this example, str0 = 'ab', there are two ways to get str1:
join(str0, 'b') = 'ab' or join('b', str0) = 'bab'.
The first string, 'ab', has the minimum length. Hence, the answer is 2.

Example 3:

Input: words = ['aaa','c','aba']
Output: 6
Explanation: In this example, we can perform join operations in the following order to minimize the length of str2:
str0 = 'aaa'
str1 = join(str0, 'c') = 'aaac'
str2 = join('aba', str1) = 'abaaac'
It can be shown that the minimum possible length of str2 is 6.



Constraints:

1 <= words.length <= 1000
1 <= words[i].length <= 50
Each character in words[i] is an English lowercase letter


```

## 题目翻译

给定 n 个字符串的数组 words。定义 join(x, y) 为拼接字符串 xy，但如果 x 的最后一个字符等于 y 的第一个字符，则删除其中一个。

从 str0 = words[0] 开始，每次操作可以选择 join(str[i-1], words[i]) 或 join(words[i], str[i-1])。求 str[n-1] 的最小可能长度。

## 解题思路

DP。只需跟踪当前结果字符串的首字符和尾字符，以及长度。

dp[first][last] = 当前结果以 first 开头、last 结尾时的最小长度。

转移：对于下一个 words[i]（首字符 wf，尾字符 wl，长度 wlen）：
- join(result, words[i])：新长度 = dp[first][last] + wlen - (last==wf ? 1 : 0)，新状态 (first, wl)
- join(words[i], result)：新长度 = dp[first][last] + wlen - (wl==first ? 1 : 0)，新状态 (wf, last)

时间复杂度 O(n * 26^2)，空间复杂度 O(26^2)

## Solution

[SourceCode](./solution.js)
