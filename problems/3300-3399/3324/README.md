# [3324] Find the Sequence of Strings Appeared on the Screen

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/description/)

* algorithms
* Medium (80.23%)
* Likes:    141
* Dislikes: 12
* Testcase Example:  '"abc"'

```md
You are given a string target.
Alice is going to type target on her computer using a special keyboard that has only two keys:

Key 1 appends the character 'a' to the string on the screen.
Key 2 changes the last character of the string on the screen to its next character in the English alphabet. For example, 'c' changes to 'd' and 'z' changes to 'a'.

Note that initially there is an empty string '' on the screen, so she can only press key 1.
Return a list of all strings that appear on the screen as Alice types target, in the order they appear, using the minimum key presses.

Example 1:

Input: target = 'abc'
Output: ['a','aa','ab','aba','abb','abc']
Explanation:
The sequence of key presses done by Alice are:

Press key 1, and the string on the screen becomes 'a'.
Press key 1, and the string on the screen becomes 'aa'.
Press key 2, and the string on the screen becomes 'ab'.
Press key 1, and the string on the screen becomes 'aba'.
Press key 2, and the string on the screen becomes 'abb'.
Press key 2, and the string on the screen becomes 'abc'.


Example 2:

Input: target = 'he'
Output: ['a','b','c','d','e','f','g','h','ha','hb','hc','hd','he']


Constraints:

1 <= target.length <= 400
target consists only of lowercase English letters.


```

## 翻译

用特殊键盘输入target字符串。键1追加'a'，键2将末字符变为字母表下一个字符。以最少按键次数输入target，返回屏幕上出现的所有字符串序列。

## 解题思路

逐字符构建。对于target[i]，先按键1追加'a'（记录），再按键2从'b'循环到target[i]（每步记录）。

## Solution

[SourceCode](./solution.js)
