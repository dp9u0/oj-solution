# [810] Chalkboard XOR Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/chalkboard-xor-game/description/)

* algorithms
* Hard (66.10%)
* Likes:    247
* Dislikes: 288
* Testcase Example:  '[1,1,2]'

```md
You are given an array of integers nums represents the numbers written on a chalkboard.
Alice and Bob take turns erasing exactly one number from the chalkboard, with Alice starting first. If erasing a number causes the bitwise XOR of all the elements of the chalkboard to become 0, then that player loses. The bitwise XOR of one element is that element itself, and the bitwise XOR of no elements is 0.
Also, if any player starts their turn with the bitwise XOR of all the elements of the chalkboard equal to 0, then that player wins.
Return true if and only if Alice wins the game, assuming both players play optimally.

Example 1:

Input: nums = [1,1,2]
Output: false
Explanation:
Alice has two choices: erase 1 or erase 2.
If she erases 1, the nums array becomes [1, 2]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 2 = 3. Now Bob can remove any element he wants, because Alice will be the one to erase the last element and she will lose.
If Alice erases 2 first, now nums become [1, 1]. The bitwise XOR of all the elements of the chalkboard is 1 XOR 1 = 0. Alice will lose.

Example 2:

Input: nums = [0,1]
Output: true

Example 3:

Input: nums = [1,2,3]
Output: true


Constraints:

1 <= nums.length <= 1000
0 <= nums[i] < 216


```

## 中文翻译

Alice 和 Bob 轮流从黑板上擦除一个数（Alice 先手）。擦除后若剩余所有数的异或为 0 则该玩家输；若轮到某玩家时异或已经为 0 则该玩家赢。双方最优博弈，判断 Alice 是否必赢。

## 解题思路

经典博弈论结论。设所有数异或为 S，数组长度为 n。
- 若 S == 0：Alice 开局即赢。
- 若 S != 0 且 n 为偶数：Alice 必赢。因为每次 Alice 擦除一个数后剩奇数个，可以证明 Alice 总能避免使异或变为 0，最终 Bob 被迫输。
- 若 S != 0 且 n 为奇数：Alice 必输。

答案：`S == 0 || n % 2 == 0`

## Solution

[SourceCode](./solution.js)
