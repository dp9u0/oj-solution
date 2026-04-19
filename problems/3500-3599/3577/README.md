# [3577] Count the Number of Computer Unlocking Permutations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/description/)

* algorithms
* Medium (58.98%)
* Likes:    358
* Dislikes: 130
* Testcase Example:  '[1,2,3]'

```md
You are given an array complexity of length n.
There are n locked computers in a room with labels from 0 to n - 1, each with its own unique password. The password of the computer i has a complexity complexity[i].
The password for the computer labeled 0 is already decrypted and serves as the root. All other computers must be unlocked using it or another previously unlocked computer, following this information:

You can decrypt the password for the computer i using the password for computer j, where j is any integer less than i with a lower complexity. (i.e. j < i and complexity[j] < complexity[i])
To decrypt the password for computer i, you must have already unlocked a computer j such that j < i and complexity[j] < complexity[i].

Find the number of permutations of [0, 1, 2, ..., (n - 1)] that represent a valid order in which the computers can be unlocked, starting from computer 0 as the only initially unlocked one.
Since the answer may be large, return it modulo 109 + 7.
Note that the password for the computer with label 0 is decrypted, and not the computer with the first position in the permutation.

Example 1:

Input: complexity = [1,2,3]
Output: 2
Explanation:
The valid permutations are:

[0, 1, 2]

Unlock computer 0 first with root password.
Unlock computer 1 with password of computer 0 since complexity[0] < complexity[1].
Unlock computer 2 with password of computer 1 since complexity[1] < complexity[2].


[0, 2, 1]

Unlock computer 0 first with root password.
Unlock computer 2 with password of computer 0 since complexity[0] < complexity[2].
Unlock computer 1 with password of computer 0 since complexity[0] < complexity[1].




Example 2:

Input: complexity = [3,3,3,4,4,4]
Output: 0
Explanation:
There are no possible permutations which can unlock all computers.


Constraints:

2 <= complexity.length <= 105
1 <= complexity[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 complexity 数组，n 台电脑编号 0~n-1，电脑 0 已解锁。解锁电脑 i 需要已解锁的电脑 j 满足 j < i 且 complexity[j] < complexity[i]。求能解锁所有电脑的排列数（mod 10^9+7）。

## 解题思路

关键观察：电脑 0 编号为 0，对所有 i >= 0 满足 j=0 < i。因此如果 complexity[0] < complexity[i] 对所有 i >= 1 成立，则电脑 0 可以解锁所有其他电脑。

- 若存在 i >= 1 使得 complexity[i] <= complexity[0]，则该电脑无法被任何 j < i 解锁（因为 min(complexity[0..i-1]) >= complexity[0] >= complexity[i]），返回 0。
- 否则，电脑 0 必须排第一，其余 n-1 台可以任意排列，答案为 (n-1)!

时间复杂度 O(n)
