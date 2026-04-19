# [3664] Two-Letter Card Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/two-letter-card-game/description/)

* algorithms
* Medium (12.56%)
* Likes:    125
* Dislikes: 59
* Testcase Example:  '["aa","ab","ba","ac"]\n"a"'

```md
You are given a deck of cards represented by a string array cards, and each card displays two lowercase letters.
You are also given a letter x. You play a game with the following rules:

Start with 0 points.
On each turn, you must find two compatible cards from the deck that both contain the letter x in any position.
Remove the pair of cards and earn 1 point.
The game ends when you can no longer find a pair of compatible cards.

Return the maximum number of points you can gain with optimal play.
Two cards are compatible if the strings differ in exactly 1 position.

Example 1:

Input: cards = ['aa','ab','ba','ac'], x = 'a'
Output: 2
Explanation:

On the first turn, select and remove cards 'ab' and 'ac', which are compatible because they differ at only index 1.
On the second turn, select and remove cards 'aa' and 'ba', which are compatible because they differ at only index 0.

Because there are no more compatible pairs, the total score is 2.

Example 2:

Input: cards = ['aa','ab','ba'], x = 'a'
Output: 1
Explanation:

On the first turn, select and remove cards 'aa' and 'ba'.

Because there are no more compatible pairs, the total score is 1.

Example 3:

Input: cards = ['aa','ab','ba','ac'], x = 'b'
Output: 0
Explanation:
The only cards that contain the character &#39;b&#39; are 'ab' and 'ba'. However, they differ in both indices, so they are not compatible. Thus, the output is 0.


Constraints:

2 <= cards.length <= 105
cards[i].length == 2
Each cards[i] is composed of only lowercase English letters between &#39;a&#39; and &#39;j&#39;.
x is a lowercase English letter between &#39;a&#39; and &#39;j&#39;.


```

## 中文翻译

给定一个字符串数组 cards（每个元素是两张小写字母卡牌）和一个字母 x。每次操作选两张都包含 x 且恰好在1个位置不同的兼容卡牌，移除得1分。求最优策略下的最大得分。

## 解题思路

包含 x 的卡牌分三类：
- Type1（x在位置0，位置1≠x）：形如 "xa"
- Type2（x在位置1，位置0≠x）：形如 "ax"
- Type3："xx"

Type1 内部：相同首字母 x，按第二字母分组，不同组之间任意两张兼容 → 完全多部图匹配，最大匹配 = min(total/2, total - maxGroup)。
Type2 内部同理。Type1 和 Type2 之间永远不兼容。"xx" 可加入任一侧。

枚举 "xx" 卡牌在两侧的分配 k（0~c3），分别计算匹配数取最大值。字母仅 a-j（10种），迭代 O(c3) 完全可行。

## Solution

[SourceCode](./solution.js)
