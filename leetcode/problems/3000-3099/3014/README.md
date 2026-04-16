# [3014] Minimum Number of Pushes to Type Word I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/description/)

* algorithms
* Easy (67.03%)
* Likes:    200
* Dislikes: 38
* Testcase Example:  '"abcde"'

```md
You are given a string word containing distinct lowercase English letters.
Telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with ['a','b','c'], we need to push the key one time to type 'a', two times to type 'b', and three times to type 'c' .
It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word.
Return the minimum number of pushes needed to type word after remapping the keys.
An example mapping of letters to keys on a telephone keypad is given below. Note that 1, *, #, and 0 do not map to any letters.


Example 1:


Input: word = 'abcde'
Output: 5
Explanation: The remapped keypad given in the image provides the minimum cost.
'a' -> one push on key 2
'b' -> one push on key 3
'c' -> one push on key 4
'd' -> one push on key 5
'e' -> one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost.

Example 2:


Input: word = 'xycdefghij'
Output: 12
Explanation: The remapped keypad given in the image provides the minimum cost.
'x' -> one push on key 2
'y' -> two pushes on key 2
'c' -> one push on key 3
'd' -> two pushes on key 3
'e' -> one push on key 4
'f' -> one push on key 5
'g' -> one push on key 6
'h' -> one push on key 7
'i' -> one push on key 8
'j' -> one push on key 9
Total cost is 1 + 2 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + 1 = 12.
It can be shown that no other mapping can provide a lower cost.


Constraints:

1 <= word.length <= 26
word consists of lowercase English letters.
All letters in word are distinct.


```

## 中文翻译

给定一个由互不相同的小写英文字母组成的字符串 word。电话键盘上有编号 2-9 的 8 个按键，每个按键可以映射到任意数量的字母，但每个字母只能映射到一个按键上。在按键上输入一个字母需要按该键的次数等于该字母在该键上的位置（第1个字母按1次，第2个按2次，以此类推）。求重新分配字母到按键后，输入 word 所需的最少按键次数。

## 解题思路

贪心。8个按键，每个按键可以有多个字母。为最小化总按键次数，应尽量让更多字母排在第1个位置（按1次），排满后再排第2个位置（按2次），以此类推。

对于 n 个不同字母：前8个各按1次，接下来8个各按2次，再接下来8个各按3次，剩余按4次。
公式：`fullRounds = Math.floor(n/8)`，`remainder = n % 8`，总次数 = `8 * fullRounds * (fullRounds+1) / 2 + (fullRounds+1) * remainder`。

时间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
