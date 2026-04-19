# [1652] Defuse the Bomb

## Description

[LeetCode Problem Description](https://leetcode.com/problems/defuse-the-bomb/description/)

* algorithms
* Easy (79.29%)
* Likes:    1640
* Dislikes: 184
* Testcase Example:  '[5,7,1,4]\n3'

```md
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array codeof length of nand a key k.
To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous-k numbers.
If k == 0, replace the ith number with 0.

As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

Example 1:

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

Example 2:

Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0.

Example 3:

Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.


Constraints:

n == code.length
1 <= n<= 100
1 <= code[i] <= 100
-(n - 1) <= k <= n - 1


```

## 中文翻译

给定循环数组 code 和整数 k。k>0 时每个位置替换为后面 k 个数之和，k<0 时替换为前面 |k| 个数之和，k=0 时替换为 0。

## 解题思路

将数组复制一份拼在后面处理循环。k>0 时对每个 i 求 [i+1, i+k] 的和，k<0 时求 [i+k, i-1] 的和。用滑动窗口优化。

## Solution

[SourceCode](./solution.js)
