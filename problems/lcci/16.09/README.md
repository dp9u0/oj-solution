# [面试题 16.09] 运算

## Description


```md
https://leetcode.cn/problems/operations-lcci/description/
* lcci
* Medium (58.05%)
* Likes:    33
* Dislikes: -
* Testcase Example:  '["Operations","minus","minus","multiply","multiply","divide","divide"]\n' +
'[[],[0,-2147483647],[-1,2147483647],[-1,-2147483647],[-100,21474836],[2147483647,-1],[-2147483648,1]]'
请实现整数数字的乘法、减法和除法运算，运算结果均为整数数字，程序中只允许使用加法运算符和逻辑运算符，允许程序中出现正负常数，不允许使用位运算。
你的实现应该支持如下操作：
Operations() 构造函数
minus(a, b) 减法，返回a - b
multiply(a, b) 乘法，返回a * b
divide(a, b) 除法，返回a / b
示例：
Operations operations = new Operations();
operations.minus(1, 2); //返回-1
operations.multiply(3, 4); //返回12
operations.divide(5, -2); //返回-2
提示：
你可以假设函数输入一定是有效的，例如不会出现除法分母为0的情况
单个用例的函数调用次数不会超过1000次
Hint 1: 从减法开始，逐步解决。一旦完成了一个函数，你可以用它来实现其他函数。
Hint 2: 减法：取负函数（将正整数转换为负数）有用吗？你可以使用加法操作符来实现吗?
Hint 3: 当a > b时，a – b > 0。你能得到a – b的符号位吗？
Hint 4: 你考虑过如何处理a – b中的整数溢出吗？

```

## Description (English)

Implement multiplication, subtraction and division on integers using ONLY the addition operator and logical operators. Constants (positive or negative) are allowed; bit operations are not. Support:
- Operations(): constructor
- minus(a, b): return a - b
- multiply(a, b): return a * b
- divide(a, b): return a / b

Examples: minus(1,2) → -1; multiply(3,4) → 12; divide(5,-2) → -2

Notes: inputs are always valid (e.g. no zero divisor); at most 1000 calls per case.

## 思路

核心是 `negate`（取负）：以 ±1 为初始步长，**步长自倍增**（step + step），只要不越过零就加倍，越界则结算并重置——O(log|x|) 次加法完成取负，无溢出顾虑（JS 双精度）。minus = a + negate(b)；multiply/divide 先转绝对值记录符号，再按"除数倍增 + 计数器同步倍增"二进制分解，除法商向零截断。全程仅加法与比较，无位运算。

## Solution

[SourceCode](./solution.js)
