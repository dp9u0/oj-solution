# [1996] The Number of Weak Characters in the Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/description/)

* algorithms
* Medium (44.52%)
* Likes:    3100
* Dislikes: 100
* Testcase Example:  '[[5,5],[6,3],[3,6]]'

```md
You are playing a game that contains multiple characters, and each of the characters has two main properties: attack and defense. You are given a 2D integer array properties where properties[i] = [attacki, defensei] represents the properties of the ith character in the game.
A character is said to be weak if any other character has both attack and defense levels strictly greater than this character&#39;s attack and defense levels. More formally, a character i is said to be weak if there exists another character j where attackj > attacki and defensej > defensei.
Return the number of weak characters.

Example 1:

Input: properties = [[5,5],[6,3],[3,6]]
Output: 0
Explanation: No character has strictly greater attack and defense than the other.

Example 2:

Input: properties = [[2,2],[3,3]]
Output: 1
Explanation: The first character is weak because the second character has a strictly greater attack and defense.

Example 3:

Input: properties = [[1,5],[10,4],[4,3]]
Output: 1
Explanation: The third character is weak because the second character has a strictly greater attack and defense.


Constraints:

2 <= properties.length <= 105
properties[i].length == 2
1 <= attacki, defensei <= 105


```

## 翻译

给定 `properties` 数组，每个元素 `[attack, defense]` 表示角色的攻防属性。如果存在另一个角色攻防都严格大于该角色，则该角色为"弱角色"。返回弱角色的数量。

## Approach

**排序 + 单调维护最大值。** 按 attack 降序排列，attack 相同时按 defense 升序排列。这样遍历时，当前角色的 attack 一定 <= 之前所有角色的 attack。只需维护之前出现的最大 defense，若当前 defense < maxDefense，则为弱角色。

attack 相同时 defense 升序排列，保证同 attack 的角色不会互相判定为弱角色。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
