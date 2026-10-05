# [4070] 拨号的最少旋转次数 I

## Description


```md
https://leetcode.cn/problems/minimum-rotations-to-dial-a-number-i/description/
* algorithms
* Easy (79.87%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '"0192837465"'
给你一个长度为 10、由数字组成的字符串 s。
拨号盘上的数字 0 到 9 按顺序排列，且拨号盘是环形的，因此 0 和 9 相邻。指针最初指向 0。
要按顺序拨出 s 中的每个数字，需要旋转指针，直到它指向该数字。每次旋转都会将指针移动到一个相邻的数字，你可以向任一方向旋转。如果指针已经指向要拨出的数字，则无需旋转。
返回拨出 s 中所有数字所需的最少总旋转次数。

示例 1：
输入： s = "0192837465"
输出： 25
解释：


步骤
起始数字
目标数字
旋转次数




1
0
0
0


2
0
1
1


3
1
9
2


4
9
2
3


5
2
8
4


6
8
3
5


7
3
7
4


8
7
4
3


9
4
6
2


10
6
5
1


总旋转次数为 0 + 1 + 2 + 3 + 4 + 5 + 4 + 3 + 2 + 1 = 25，这是最少的总旋转次数。
示例 2：
输入： s = "1200210200"
输出： 12
解释：


步骤
起始数字
目标数字
旋转次数




1
0
1
1


2
1
2
1


3
2
0
2


4
0
0
0


5
0
2
2


6
2
1
1


7
1
0
1


8
0
2
2


9
2
0
2


10
0
0
0


总旋转次数为 1 + 1 + 2 + 0 + 2 + 1 + 1 + 2 + 2 + 0 = 12，这是最少的总旋转次数。

提示：
s.length == 10
s 仅由数字 '0' 到 '9' 组成
Hint 1: For each digit, let d be its absolute difference from the pointer's current digit. The minimum rotations needed are min(d, 10 - d).

```

## Description (English)

You are given a string `s` of length 10 consisting of digits.

A dial has the digits 0 to 9 arranged in order on a circle (0 and 9 are adjacent). The pointer initially points at 0.

To dial each digit of `s` in order, rotate the pointer until it points at that digit. Each rotation moves the pointer to an adjacent digit, in either direction. No rotation is needed if the pointer already points at the digit.

Return the minimum total number of rotations to dial all digits of `s`.

Constraints:
s.length == 10
s consists of digits '0' to '9'

## 思路

环形拨号盘上从数字 `a` 转到 `b` 的最少次数为 `min(|a - b|, 10 - |a - b|)`。从 `0` 开始依次模拟即可。

复杂度：时间 `O(|s|)`，空间 `O(1)`。

## Solution

[SourceCode](./solution.js)
