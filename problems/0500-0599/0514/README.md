# [514] Freedom Trail

## Description

[LeetCode Problem Description](https://leetcode.com/problems/freedom-trail/description/)

* algorithms
* Hard (59.53%)
* Likes:    1600
* Dislikes: 82
* Testcase Example:  '"godding"\n"gd"'

```md
In the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the "Freedom Trail Ring" and use the dial to spell a specific keyword to open the door.
Given a string ring that represents the code engraved on the outer ring and another string key that represents the keyword that needs to be spelled, return the minimum number of steps to spell all the characters in the keyword.
Initially, the first character of the ring is aligned at the "12:00" direction. You should spell all the characters in key one by one by rotating ring clockwise or anticlockwise to make each character of the string key aligned at the "12:00" direction and then by pressing the center button.
At the stage of rotating the ring to spell the key character key[i]:
You can rotate the ring clockwise or anticlockwise by one place, which counts as one step. The final purpose of the rotation is to align one of ring's characters at the "12:00" direction, where this character must equal key[i].
If the character key[i] has been aligned at the "12:00" direction, press the center button to spell, which also counts as one step. After the pressing, you could begin to spell the next character in the key (next stage). Otherwise, you have finished all the spelling.

Example 1:
Input: ring = "godding", key = "gd"
Output: 4
Explanation:
For the first key character 'g', since it is already in place, we just need 1 step to spell this character.
For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
Also, we need 1 more step for spelling.
So the final output is 4.
Example 2:
Input: ring = "godding", key = "godding"
Output: 13

Constraints:
1 <= ring.length, key.length <= 100
ring and key consist of only lower case English letters.
It is guaranteed that key could always be spelled by rotating ring.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

在游戏《辐射 4》中，任务"自由之路"要求玩家到达一个名为"自由之路环"的金属转盘，并转动转盘拼出指定关键词来开门。

给定字符串 `ring` 表示刻在外圈上的字符，以及字符串 `key` 表示需要拼出的关键词。返回拼出关键词所有字符所需的**最少步数**。

初始时，`ring` 的第一个字符对齐在"12:00"方向。你需要逐个拼出 `key` 中的字符：每次顺时针或逆时针转动 `ring` 一格（计 1 步），使某个等于 `key[i]` 的字符对齐到"12:00"方向，然后按下中央按钮（计 1 步）完成该字符的拼写。按下按钮后开始拼写 `key` 的下一个字符，直到全部拼完。

示例 1：
输入：`ring = "godding"`, `key = "gd"`
输出：`4`
解释：第一个字符 'g' 已在 12:00 位置，只需 1 步（按钮）拼出；第二个字符 'd' 需逆时针转 2 步再按 1 步按钮。共 4 步。

示例 2：
输入：`ring = "godding"`, `key = "godding"`
输出：`13`

提示：
- `1 <= ring.length, key.length <= 100`
- `ring` 和 `key` 仅由小写英文字母组成
- 保证 `key` 一定可以由转动 `ring` 拼出

## 解题思路

**动态规划（区间环上最短路）**

状态定义：`dp[i][j]` 表示已拼出 `key[0..i-1]`，且当前 `ring[j]` 对齐在 12:00 位置时的最少步数（显然 `ring[j] === key[i-1]`）。

转移：拼 `key[i]` 时，枚举所有满足 `ring[j] === key[i]` 的位置 `j`，从前一层所有可行位置 `p` 转移：

```
dp[i][j] = min(dp[i-1][p] + dist(p, j) + 1)
```

其中 `dist(p, j) = min(|j-p|, n-|j-p|)` 为环上顺/逆时针旋转的最小格数，`+1` 为按按钮的一步。

初始：`dp[0][0] = 0`（ring[0] 初始对齐 12:00）。答案为最后一层 dp 的最小值。

实现上用滚动数组，并预处理哈希表 `pos[c]` 记录字符 `c` 在 ring 中的所有下标，只遍历有效状态。

复杂度：时间 `O(m·n²)`（n, m ≤ 100，最多 10⁶ 次基本运算），空间 `O(n)`。
