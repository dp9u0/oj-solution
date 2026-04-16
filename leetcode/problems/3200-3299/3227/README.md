# [3227] Vowels Game in a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/vowels-game-in-a-string/description/)

* algorithms
* Medium (77.09%)
* Likes:    552
* Dislikes: 116
* Testcase Example:  '"leetcoder"'

```md
Alice and Bob are playing a game on a string.
You are given a string s, Alice and Bob will take turns playing the following game where Alice starts first:

On Alice&#39;s turn, she has to remove any non-empty substring from s that contains an odd number of vowels.
On Bob&#39;s turn, he has to remove any non-empty substring from s that contains an even number of vowels.

The first player who cannot make a move on their turn loses the game. We assume that both Alice and Bob play optimally.
Return true if Alice wins the game, and false otherwise.
The English vowels are: a, e, i, o, and u.

Example 1:

Input: s = 'leetcoder'
Output: true
Explanation:
Alice can win the game as follows:

Alice plays first, she can delete the underlined substring in s = 'leetcoder' which contains 3 vowels. The resulting string is s = 'der'.
Bob plays second, he can delete the underlined substring in s = 'der' which contains 0 vowels. The resulting string is s = 'er'.
Alice plays third, she can delete the whole string s = 'er' which contains 1 vowel.
Bob plays fourth, since the string is empty, there is no valid play for Bob. So Alice wins the game.


Example 2:

Input: s = 'bbcd'
Output: false
Explanation:
There is no valid play for Alice in her first turn, so Alice loses the game.


Constraints:

1 <= s.length <= 105
s consists only of lowercase English letters.


```

## 中文翻译

Alice 和 Bob 轮流从字符串中删除子串。Alice 删除含奇数元音的子串，Bob 删除含偶数元音的子串。无法操作者输。判断 Alice 是否获胜。

## 解题思路

如果字符串中没有元音，Alice 无法操作，直接输。如果有至少一个元音，Alice 总能赢：她可以每次只删一个元音（1个=奇数），Bob 回合必须删偶数个元音的子串。Alice 通过策略总能让 Bob 先无法操作。因此只需判断字符串是否含有元音。

## Solution

[SourceCode](./solution.js)
