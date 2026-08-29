# [3941] Password Strength

## Description

[LeetCode Problem Description](https://leetcode.com/problems/password-strength/description/)

* algorithms
* Medium (74.54%)
* Likes:    30
* Dislikes: 4
* Testcase Example:  '"aA1!"'

```md
You are given a string password.
The strength of the password is calculated based on the following rules:

1 point for each distinct lowercase letter (&#39;a&#39; to &#39;z&#39;).
2 points for each distinct uppercase letter (&#39;A&#39; to &#39;Z&#39;).
3 points for each distinct digit (&#39;0&#39; to &#39;9&#39;).
5 points for each distinct special character from the set '!@#$'.

Each character contributes at most once, even if it appears multiple times.
Return an integer denoting the strength of the password.

Example 1:

Input: password = 'aA1!'
Output: 11
Explanation:

The distinct characters are &#39;a&#39;, &#39;A&#39;, &#39;1&#39; and &#39;!&#39;.
Thus, the strength = 1 + 2 + 3 + 5 = 11.


Example 2:

Input: password = 'bbB11#'
Output: 11
Explanation:

The distinct characters are &#39;b&#39;, &#39;B&#39;, &#39;1&#39; and &#39;#&#39;.
Thus, the strength = 1 + 2 + 3 + 5 = 11.​​​​​​​



Constraints:

1 <= password.length <= 105
password consists of lowercase and uppercase English letters, digits, and special characters from '!@#$'.


```

## Solution

[SourceCode](./solution.js)
