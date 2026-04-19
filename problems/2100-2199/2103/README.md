# [2103] Rings and Rods

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rings-and-rods/description/)

* algorithms
* Easy (81.46%)
* Likes:    1033
* Dislikes: 21
* Testcase Example:  '"B0B6G0R6R0R6G9"'

```md
There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.
You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

The first character of the ith pair denotes the ith ring&#39;s color (&#39;R&#39;, &#39;G&#39;, &#39;B&#39;).
The second character of the ith pair denotes the rod that the ith ring is placed on (&#39;0&#39; to &#39;9&#39;).

For example, 'R3G2B1' describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.
Return the number of rods that have all three colors of rings on them.

Example 1:


Input: rings = 'B0B6G0R6R0R6G9'
Output: 1
Explanation:
- The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
- The rod labeled 6 holds 3 rings, but it only has red and blue.
- The rod labeled 9 holds only a green ring.
Thus, the number of rods with all three colors is 1.

Example 2:


Input: rings = 'B0R0G0R9R0B0G0'
Output: 1
Explanation:
- The rod labeled 0 holds 6 rings with all colors: red, green, and blue.
- The rod labeled 9 holds only a red ring.
Thus, the number of rods with all three colors is 1.

Example 3:

Input: rings = 'G4'
Output: 0
Explanation:
Only one ring is given. Thus, no rods have all three colors.


Constraints:

rings.length == 2 * n
1 <= n <= 100
rings[i] where i is even is either &#39;R&#39;, &#39;G&#39;, or &#39;B&#39; (0-indexed).
rings[i] where i is odd is a digit from &#39;0&#39; to &#39;9&#39; (0-indexed).


```

## 题目翻译

有 n 个环，每个环是红色、绿色或蓝色。这些环分布在标号为 0 到 9 的 10 个杆子上。

给定一个长度为 2n 的字符串 rings，描述了 n 个环放置在杆子上的情况。rings 中每两个字符组成一个颜色-位置对：
- 第 i 对的第一个字符表示第 i 个环的颜色（'R'、'G'、'B'）
- 第 i 对的第二个字符表示第 i 个环放在哪个杆子上（'0' 到 '9'）

返回拥有全部三种颜色环的杆子数量。

## 解题思路

使用一个长度为 10 的数组，每个元素是一个集合（用位掩码表示），记录该杆子上的颜色。
- 遍历字符串，每两个字符为一组（颜色+杆子编号）
- 用位掩码记录颜色：R=1, G=2, B=4
- 最后统计有多少杆子的掩码为 7（即 1|2|4，三种颜色齐全）

时间复杂度 O(n)，空间复杂度 O(1)

## Solution

[SourceCode](./solution.js)
