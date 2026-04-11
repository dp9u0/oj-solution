# [838] Push Dominoes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/push-dominoes/description/)

* algorithms
* Medium (63.00%)
* Likes:    3959
* Dislikes: 277
* Testcase Example:  '"RR.L"'

```md
There are n dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.
After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.
When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.
For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.
You are given a string dominoes representing the initial state where:

dominoes[i] = &#39;L&#39;, if the ith domino has been pushed to the left,
dominoes[i] = &#39;R&#39;, if the ith domino has been pushed to the right, and
dominoes[i] = &#39;.&#39;, if the ith domino has not been pushed.

Return a string representing the final state.

Example 1:

Input: dominoes = 'RR.L'
Output: 'RR.L'
Explanation: The first domino expends no additional force on the second domino.

Example 2:


Input: dominoes = '.L.R...LR..L..'
Output: 'LL.RR.LLRRLL..'


Constraints:

n == dominoes.length
1 <= n <= 105
dominoes[i] is either &#39;L&#39;, &#39;R&#39;, or &#39;.&#39;.


```

## 翻译

给定多米诺骨牌初始状态字符串 `dominoes`，'L' 表示被推向左，'R' 表示被推向右，'.' 表示竖立。同时推倒后，每个倒下的骨牌推动相邻的骨牌。两侧同时受力时保持竖立。返回最终状态。

## Approach

**双指针 / 计算受力。** 对每个位置计算它受到的左侧 R 的力和右侧 L 的力。用两次遍历：

1. 从左到右计算每个位置最近 R 的距离（forceR），遇到 L 则重置
2. 从右到左计算每个位置最近 L 的距离（forceL），遇到 R 则重置

比较每个位置的两个力：forceR < forceL 则倒向 R，forceR > forceL 则倒向 L，相等则竖立。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
