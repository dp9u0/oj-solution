# [面试题 16.05] 阶乘尾数

## Description


```md
https://leetcode.cn/problems/factorial-zeros-lcci/description/
* lcci
* Easy (41.98%)
* Likes:    105
* Dislikes: -
* Testcase Example:  '3'
设计一个算法，算出 n 阶乘有多少个尾随零。
示例 1：
输入：3
输出：0
解释：3! = 6, 尾数中没有零。
示例 2：
输入：5
输出：1
解释：5! = 120, 尾数中有 1 个零.
说明: 你算法的时间复杂度应为 O(log n) 。
Hint 1: 0如何变成n!？这是什么意思？
Hint 2: n!中的每个0表示n能被10整除一次。这是什么意思？
Hint 3: n!中每一个因子10都意味着n!能被5和2整除。
Hint 4: 你能计算出5和2的因数的个数吗？需要两者都计算吗？
Hint 5: 你是否考虑过25实际上记录了两次因数5？

```

## Description (English)

Design an algorithm to count the number of trailing zeros in n factorial.

Example 1:
Input: 3
Output: 0 (3! = 6, no trailing zero)

Example 2:
Input: 5
Output: 1 (5! = 120, one trailing zero)

Note: the time complexity should be O(log n).

## 思路

尾零数 = n! 中因子 5 的个数（因子 2 远多于 5）：`⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …`——循环除 5 累加，O(log₅n)，25、125 等高次幂自动多计一次。

## Solution

[SourceCode](./solution.js)
