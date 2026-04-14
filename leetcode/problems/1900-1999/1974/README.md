# [1974] Minimum Time to Type Word Using Special Typewriter

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/description/)

* algorithms
* Easy (78.50%)
* Likes:    792
* Dislikes: 38
* Testcase Example:  '"abc"'

```md
There is a special typewriter with lowercase English letters &#39;a&#39; to &#39;z&#39; arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character &#39;a&#39;.

Each second, you may perform one of the following operations:

Move the pointer one character counterclockwise or clockwise.
Type the character the pointer is currently on.

Given a string word, return the minimum number of seconds to type out the characters in word.

Example 1:

Input: word = 'abc'
Output: 5
Explanation:
The characters are printed as follows:
- Type the character &#39;a&#39; in 1 second since the pointer is initially on &#39;a&#39;.
- Move the pointer clockwise to &#39;b&#39; in 1 second.
- Type the character &#39;b&#39; in 1 second.
- Move the pointer clockwise to &#39;c&#39; in 1 second.
- Type the character &#39;c&#39; in 1 second.

Example 2:

Input: word = 'bza'
Output: 7
Explanation:
The characters are printed as follows:
- Move the pointer clockwise to &#39;b&#39; in 1 second.
- Type the character &#39;b&#39; in 1 second.
- Move the pointer counterclockwise to &#39;z&#39; in 2 seconds.
- Type the character &#39;z&#39; in 1 second.
- Move the pointer clockwise to &#39;a&#39; in 1 second.
- Type the character &#39;a&#39; in 1 second.

Example 3:

Input: word = 'zjpc'
Output: 34
Explanation:
The characters are printed as follows:
- Move the pointer counterclockwise to &#39;z&#39; in 1 second.
- Type the character &#39;z&#39; in 1 second.
- Move the pointer clockwise to &#39;j&#39; in 10 seconds.
- Type the character &#39;j&#39; in 1 second.
- Move the pointer clockwise to &#39;p&#39; in 6 seconds.
- Type the character &#39;p&#39; in 1 second.
- Move the pointer counterclockwise to &#39;c&#39; in 13 seconds.
- Type the character &#39;c&#39; in 1 second.


Constraints:

1 <= word.length <= 100
word consists of lowercase English letters.


```

## 翻译

a-z 环形排列的打字机，初始指向 'a'。每秒可顺/逆时针移动一格或打字。求打完 word 的最少秒数。

## Approach

遍历每个字符，计算与当前指针位置的最小距离 min(|diff|, 26 - |diff|)，加上打字 1 秒。总时间 = sum(每字符的移动时间 + 1)。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
