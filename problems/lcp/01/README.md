# [LCP 01] 猜数字

## Description


```md
https://leetcode.cn/problems/guess-numbers/description/
* algorithms
* Easy (84.42%)
* Likes:    175
* Dislikes: -
* Testcase Example:  '[1,2,3]\n[1,2,3]'
小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？

输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。

示例 1：
输入：guess = [1,2,3], answer = [1,2,3]
输出：3
解释：小A 每次都猜对了。

示例 2：
输入：guess = [2,2,3], answer = [3,2,1]
输出：1
解释：小A 只猜对了第二次。

限制：
guess的长度 = 3
answer的长度 = 3
guess的元素取值为 {1, 2, 3} 之一。
answer的元素取值为 {1, 2, 3} 之一。

```

## English Description

A is playing a number-guessing game with B. Each round B secretly picks a number from `{1, 2, 3}`, and A guesses a number from `{1, 2, 3}`. They play three rounds in total. Given `guess` — the array of A's three guesses — and `answer` — the array of B's three picks, return the number of rounds A guessed correctly.

**Example 1:**

> Input: `guess = [1,2,3], answer = [1,2,3]`
>
> Output: `3`
>
> Explanation: A guessed correctly in every round.

**Example 2:**

> Input: `guess = [2,2,3], answer = [3,2,1]`
>
> Output: `1`
>
> Explanation: A guessed correctly only in the second round.

**Constraints:**

- `guess.length == 3` and `answer.length == 3`
- Every element of `guess` and `answer` is one of `1, 2, 3`.

## Approach

Straightforward element-wise comparison.

Since the two arrays have equal (fixed) length and values are compared **by position**, the number of correct guesses is simply the count of indices `i` where `guess[i] === answer[i]`.

- Loop over the arrays, compare each pair, and increment a counter when they match.
- No sorting or reordering is involved — only the exact same position counts as a hit.

**Complexity:** O(3) time with O(1) extra space (constant, since the arrays always have length 3).

## Solution

[SourceCode](./solution.js)
