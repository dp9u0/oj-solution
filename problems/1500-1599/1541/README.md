# [1541] Minimum Insertions to Balance a Parentheses String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/description/)

* algorithms
* Medium (53.48%)
* Likes:    1269
* Dislikes: 296
* Testcase Example:  '"(()))"'

```md
Given a parentheses string s containing only the characters &#39;(&#39; and &#39;)&#39;. A parentheses string is balanced if:

Any left parenthesis &#39;(&#39; must have a corresponding two consecutive right parenthesis &#39;))&#39;.
Left parenthesis &#39;(&#39; must go before the corresponding two consecutive right parenthesis &#39;))&#39;.

In other words, we treat &#39;(&#39; as an opening parenthesis and &#39;))&#39; as a closing parenthesis.

For example, '())', '())(())))' and '(())())))' are balanced, ')()', '()))' and '(()))' are not balanced.

You can insert the characters &#39;(&#39; and &#39;)&#39; at any position of the string to balance it if needed.
Return the minimum number of insertions needed to make s balanced.

Example 1:

Input: s = '(()))'
Output: 1
Explanation: The second &#39;(&#39; has two matching &#39;))&#39;, but the first &#39;(&#39; has only &#39;)&#39; matching. We need to add one more &#39;)&#39; at the end of the string to be '(())))' which is balanced.

Example 2:

Input: s = '())'
Output: 0
Explanation: The string is already balanced.

Example 3:

Input: s = '))())('
Output: 3
Explanation: Add &#39;(&#39; to match the first &#39;))&#39;, Add &#39;))&#39; to match the last &#39;(&#39;.


Constraints:

1 <= s.length <= 105
s consists of &#39;(&#39; and &#39;)&#39; only.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定只含 '(' 和 ')' 的字符串，每个 '(' 需要配对两个连续的 '))'。可在任意位置插入字符使其平衡，返回最少插入次数。

## 解题思路

**Approach: 贪心计数**

1. 维护 need 变量表示还需要多少个 ')' 来匹配当前的 '('
2. 遇到 '(' → need += 2。若 need 为奇数，说明之前有一个孤立的 ')'，需要补一个 ')' 并 need--，insert++
3. 遇到 ')' → need--。若 need 变为 -1，说明多了一个 ')'，需要补一个 '(' 并 need = 1，insert++
4. 最终返回 insert + need
5. 复杂度 O(n)
