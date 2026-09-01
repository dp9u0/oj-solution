# [LCR 164] 破解闯关密码

## Description


```md
https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/description/
* algorithms
* Medium (54.77%)
* Likes:    700
* Dislikes: -
* Testcase Example:  '[15,8,7]'
闯关游戏需要破解一组密码，闯关组给出的有关密码的线索是：
一个拥有密码所有元素的非负整数数组 password
密码是 password 中所有元素拼接后得到的最小的一个数
请编写一个程序返回这个密码。

示例 1：
输入：password = [15, 8, 7]
输出："1578"
示例 2：
输入：password = [0, 3, 30, 34, 5, 9]
输出："03033459"

提示：
0 < password.length <= 100
说明:
输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

```

## Solution

[SourceCode](./solution.js)

## English Description

There is a password-cracking game. The clues given by the organizer are:
- A non-negative integer array `password` that contains all elements of the password.
- The password is the smallest number obtained by concatenating all elements of `password`.

Write a program to return this password.

**Example 1:**
```
Input: password = [15, 8, 7]
Output: "1578"
```

**Example 2:**
```
Input: password = [0, 3, 30, 34, 5, 9]
Output: "03033459"
```

**Constraints:**
- `0 < password.length <= 100`

**Note:**
- The result can be very large, so you need to return a string instead of an integer.
- The concatenated number may have leading zeros, and you do not need to remove them.

## 解题思路

**自定义排序 + 拼接**

要使拼接结果最小，关键是确定两个数字 `x` 和 `y` 的相对顺序。若 `x + y < y + x`（字符串拼接比较），则 `x` 应排在 `y` 前面；否则 `y` 在前。通过这个比较器对数组排序后直接拼接即可得到最小数。

- 将每个数字转为字符串。
- 使用 `Array.prototype.sort` 传入比较器 `(a, b) => (a + b).localeCompare(b + a)` 或 `(a + b) < (b + a) ? -1 : 1`。
- 排序后 `join('')` 得到结果。
- 时间复杂度 O(n log n)，空间复杂度 O(n)。

**为什么正确**：这是一个可传递的比较关系（可证明满足全序），排序后任意相邻元素都满足 `x + y <= y + x`，因此整体拼接结果最小。
