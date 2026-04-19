# [3703] Remove K-Balanced Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-k-balanced-substrings/description/)

* algorithms
* Medium (32.60%)
* Likes:    130
* Dislikes: 11
* Testcase Example:  '"(())"\n1'

```md
You are given a string s consisting of &#39;(&#39; and &#39;)&#39;, and an integer k.
A string is k-balanced if it is exactly k consecutive &#39;(&#39; followed by k consecutive &#39;)&#39;, i.e., &#39;(&#39; * k + &#39;)&#39; * k.
For example, if k = 3, k-balanced is '((()))'.
You must repeatedly remove all non-overlapping k-balanced substrings from s, and then join the remaining parts. Continue this process until no k-balanced substring exists.
Return the final string after all possible removals.

​​​​​​​Example 1:

Input: s = '(())', k = 1
Output: ''
Explanation:
k-balanced substring is '()'



Step
Current s
k-balanced
Result s




1
(())
(())
()


2
()
()
Empty



Thus, the final string is ''.

Example 2:

Input: s = '(()(', k = 1
Output: '(('
Explanation:
k-balanced substring is '()'



Step
Current s
k-balanced
Result s




1
(()(
(()(
((


2
((
-
((



Thus, the final string is '(('.

Example 3:

Input: s = '((()))()()()', k = 3
Output: '()()()'
Explanation:
k-balanced substring is '((()))'



Step
Current s
k-balanced
Result s




1
((()))()()()
((()))()()()
()()()


2
()()()
-
()()()



Thus, the final string is '()()()'.


Constraints:

2 <= s.length <= 105
s consists only of &#39;(&#39; and &#39;)&#39;.
1 <= k <= s.length / 2


```

## 中文翻译

给定由 '(' 和 ')' 组成的字符串 s 和整数 k。k-balanced 子串为恰好 k 个 '(' 后跟 k 个 ')'。反复删除所有不重叠的 k-balanced 子串，直到不存在为止。返回最终字符串。

## 解题思路

栈 + 游程编码。栈中存储 [字符, 连续计数] 对。遇到 ')' 时检查栈顶是否形成 k-balanced 模式（栈顶 ')' 计数 >= k 且下方 '(' 计数 >= k），满足则各减 k，清零的出栈，同字符合并。

## Solution

[SourceCode](./solution.js)
