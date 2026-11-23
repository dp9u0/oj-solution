# [3094] 使用按位查询猜测数字 II

## Description


```md
https://leetcode.cn/problems/guess-the-number-using-bitwise-questions-ii/description/
* algorithms
* Medium (24.04%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '31'
你需要找到一个在 0 和 230 - 1 （均包含）之间的数字 n。
有一个预定义的 API int commonBits(int num) 能帮助你完成任务。但挑战是每次你调用这个函数，n 都会以某种方式改变。但是记住，你需要找到的是 n 的 初始值。
commonBits(int num) 的操作如下：
计算 n 和 num 的二进制表示中值相同的二进制位的位的数量 count。
n = n XOR num
返回 count。
返回数字 n。
注意：在这个世界中，所有数字都在 0 和 230 - 1 之间（均包含），因此在计算公共二进制位时，我们只看那些数字的前 30 个二进制位。

提示：
0 <= n <= 230 - 1
0 <= num <= 230 - 1
如果你查询的 num 超出了给定的范围，输出将会是不可靠的。
Hint 1: Ask the number 0 and save the result in base.
Hint 2: Ask 2i for 0 <= i < 30.
Hint 3: If the result is greater than base for some i, then this bit is a set bit in n.
Hint 4: What can be done to revert the effect of the XOR.
Hint 5: Doing XOR again with the same number reverts the effect.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Interactive: guess n (0..2^30-1); each commonBits(num) call returns the count of EQUAL bits between current n and num, then n ^= num. Recover the ORIGINAL n.

Approach: base = commonBits(0) = 30 - popcount(n). For each bit i: c = commonBits(1 << i): the call flips bit i (n was still original), so c = base + 1 if bit i set, base - 1 if clear. Then call commonBits(1 << i) again to revert the XOR (returns base, no info). Set bits where c > base. 61 queries total.
