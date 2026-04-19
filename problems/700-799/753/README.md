# [753] Cracking the Safe

## Description

[LeetCode Problem Description](https://leetcode.com/problems/cracking-the-safe/description/)

* algorithms
* Hard (58.42%)
* Likes:    667
* Dislikes: 130
* Testcase Example:  '1\n2'

```md
There is a safe protected by a password. The password is a sequence of n digits where each digit can be in the range [0, k - 1].
The safe has a peculiar way of checking the password. When you enter in a sequence, it checks the most recent n digits that were entered each time you type a digit.

For example, the correct password is '345' and you enter in '012345':

After typing 0, the most recent 3 digits is '0', which is incorrect.
After typing 1, the most recent 3 digits is '01', which is incorrect.
After typing 2, the most recent 3 digits is '012', which is incorrect.
After typing 3, the most recent 3 digits is '123', which is incorrect.
After typing 4, the most recent 3 digits is '234', which is incorrect.
After typing 5, the most recent 3 digits is '345', which is correct and the safe unlocks.



Return any string of minimum length that will unlock the safe at some point of entering it.

Example 1:

Input: n = 1, k = 2
Output: '10'
Explanation: The password is a single digit, so enter each digit. '01' would also unlock the safe.

Example 2:

Input: n = 2, k = 2
Output: '01100'
Explanation: For each possible password:
- '00' is typed in starting from the 4th digit.
- '01' is typed in starting from the 1st digit.
- '10' is typed in starting from the 3rd digit.
- '11' is typed in starting from the 2nd digit.
Thus '01100' will unlock the safe. '10011', and '11001' would also unlock the safe.


Constraints:

1 <= n <= 4
1 <= k <= 10
1 <= kn <= 4096


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

密码是 n 位 k 进制数。安全锁每次检查最近 n 位输入。求一个最短字符串，使得所有 k^n 个可能的密码都作为子串出现过。

## 解题思路

De Bruijn 序列。将每个 (n-1) 位串作为节点，每个 n 位串作为边（从去掉首字符到去掉末字符）。用 Hierholzer 算法找欧拉回路。
