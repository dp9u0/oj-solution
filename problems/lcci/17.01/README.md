# [面试题 17.01] 不用加号的加法

## Description


```md
https://leetcode.cn/problems/add-without-plus-lcci/description/
* lcci
* Easy (64.63%)
* Likes:    107
* Dislikes: -
* Testcase Example:  '1\n2'
设计一个函数把两个数字相加。不得使用 + 或者其他算术运算符。
示例：
输入：a = 1, b = 1
输出：2

提示：
a, b 均可能是负数或 0
结果不会溢出 32 位整数
Hint 1: 手动（慢慢地）完成二进制加法，尝试真正理解发生了什么。
Hint 2: 你可以把二进制加法看成是对数字的每一位进行迭代、两位进行加和，并在必要时进位。你也可以对操作进行分组。如果首先对每位相加（不进位）会怎样？之后，你可以再处理进位。
Hint 3: 只关注上面的一个步骤。如果你“忘记”进位，那么加法操作会是什么样子?
Hint 4: 仅相加步骤就可以做如下转化：1 + 1 -> 0，1 + 0 -> 1，0 + 1 -> 1，0 + 0 -> 0。没有+号要怎么做?
Hint 5: 可以使用XOR执行加法步骤。
Hint 6: 现在关注进位。在什么情况下两个值会进位？如何使用进位？
Hint 7: 进位在1 + 1时发生。如何将进位应用到数值中？
Hint 8: 可以用AND运算来计算进位。如何使用它？
Hint 9: 你可能需要不止一次地执行加法/进位操作。将进位加到和中可能会产生新的进位值

```

## Description (English)

Design a function to add two numbers without using + or any other arithmetic operators.

Example:
Input: a = 1, b = 1
Output: 2

Notes: a and b may be negative or 0; the result will not overflow a 32-bit integer.

## 思路

异或 + 进位迭代：`a ^ b` 是无进位和，`(a & b) << 1` 是进位；把进位当作新的加数反复迭代直到进位为 0。JS 位运算固定 32 位有符号，进位最终左移出界归零，循环必然终止，负数与跨零加减均正确回绕。

## Solution

[SourceCode](./solution.js)
