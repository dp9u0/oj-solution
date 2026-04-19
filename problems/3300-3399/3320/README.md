# [3320] Count The Number of Winning Sequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-winning-sequences/description/)

* algorithms
* Hard (32.12%)
* Likes:    105
* Dislikes: 5
* Testcase Example:  '"FFF"'

```md
Alice and Bob are playing a fantasy battle game consisting of n rounds where they summon one of three magical creatures each round: a Fire Dragon, a Water Serpent, or an Earth Golem. In each round, players simultaneously summon their creature and are awarded points as follows:

If one player summons a Fire Dragon and the other summons an Earth Golem, the player who summoned the Fire Dragon is awarded a point.
If one player summons a Water Serpent and the other summons a Fire Dragon, the player who summoned the Water Serpent is awarded a point.
If one player summons an Earth Golem and the other summons a Water Serpent, the player who summoned the Earth Golem is awarded a point.
If both players summon the same creature, no player is awarded a point.

You are given a string s consisting of n characters &#39;F&#39;, &#39;W&#39;, and &#39;E&#39;, representing the sequence of creatures Alice will summon in each round:

If s[i] == &#39;F&#39;, Alice summons a Fire Dragon.
If s[i] == &#39;W&#39;, Alice summons a Water Serpent.
If s[i] == &#39;E&#39;, Alice summons an Earth Golem.

Bob&rsquo;s sequence of moves is unknown, but it is guaranteed that Bob will never summon the same creature in two consecutive rounds. Bob beats Alice if the total number of points awarded to Bob after n rounds is strictly greater than the points awarded to Alice.
Return the number of distinct sequences Bob can use to beat Alice.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: s = 'FFF'
Output: 3
Explanation:
Bob can beat Alice by making one of the following sequences of moves: 'WFW', 'FWF', or 'WEW'. Note that other winning sequences like 'WWE' or 'EWW' are invalid since Bob cannot make the same move twice in a row.

Example 2:

Input: s = 'FWEFW'
Output: 18
Explanation:
Bob can beat Alice by making one of the following sequences of moves: 'FWFWF', 'FWFWE', 'FWEFE', 'FWEWE', 'FEFWF', 'FEFWE', 'FEFEW', 'FEWFE', 'WFEFE', 'WFEWE', 'WEFWF', 'WEFWE', 'WEFEF', 'WEFEW', 'WEWFW', 'WEWFE', 'EWFWE', or 'EWEWE'.


Constraints:

1 <= s.length <= 1000
s[i] is one of &#39;F&#39;, &#39;W&#39;, or &#39;E&#39;.


```

## 题目翻译

Alice和Bob进行n轮对战，各有F/W/E三种召唤物。F>E, W>F, E>W（循环克制），平局0分。Bob不能连续两轮召唤相同生物。求Bob得分严格大于Alice的不同序列数。

## 解题思路

DP: dp[i][j][c] = 前i轮，得分差为j（Bob-Alice），第i轮Bob召唤c的方案数。得分差范围[-n, n]，用偏移n映射到[0, 2n]。每轮Bob有3种选择（排除上一轮相同的），计算得分变化后转移。最后累加j>0的所有方案。

## Solution

[SourceCode](./solution.js)
