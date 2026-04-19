# [125] Valid Palindrome

## Description

* algorithms
* Easy (29.40%)
* Total Accepted:    295.5K
* Total Submissions: 1M
* Testcase Example:  '"A man, a plan, a canal: Panama"'

```md
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.
Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:
Input: "race a car"
Output: false

```

## Solution

`s = s.replace(/[^A-Za-z0-9]/g, "").toLocaleLowerCase();`

[SourceCode](./solution.js)