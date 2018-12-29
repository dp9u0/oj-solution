# [500] Keyboard Row

## Description

* algorithms
* Easy (61.16%)
* Total Accepted:    78.2K
* Total Submissions: 127.8K
* Testcase Example:  '["Hello","Alaska","Dad","Peace"]'

```md
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


Example:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

```

## Solution

使用正则表达式,如果只存在 `[qwertyuiop] [asdfghjkl] [zxcvbnm]` 其中之一,则符合要求

[SourceCode](./solution.js)