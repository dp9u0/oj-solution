# [面试题 16.01] 交换数字

## Description


```md
https://leetcode.cn/problems/swap-numbers-lcci/description/
* lcci
* Medium (80.19%)
* Likes:    112
* Dislikes: -
* Testcase Example:  '[0,2147483647]'
编写一个函数，不用临时变量，直接交换numbers = [a, b]中a与b的值。
示例：
输入: numbers = [1,2]
输出: [2,1]
提示：
numbers.length == 2
-2147483647 <= numbers[i] <= 2147483647
Hint 1: 尝试在数轴上画出a和b两个数字。
Hint 2: 定义diff为a和b之间的差。你能以某种方式使用diff吗？那么你能去掉这个临时变量吗？
Hint 3: 你也可以尝试使用XOR。

```

## Description (English)

Write a function to swap the values of a and b in numbers = [a, b] directly without a temporary variable.

Example:
Input: numbers = [1,2]
Output: [2,1]

Notes: numbers.length == 2; -2147483647 <= numbers[i] <= 2147483647.

## 思路

XOR 交换律：`a^=b; b^=a; a^=b;` 三步无临时变量完成交换（值域在 int32 内，JS 位运算安全）。

## Solution

[SourceCode](./solution.js)
