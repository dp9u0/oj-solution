# [面试题 05.04] 下一个数

## Description


```md
https://leetcode.cn/problems/closed-number-lcci/description/
* lcci
* Medium (35.58%)
* Likes:    77
* Dislikes: -
* Testcase Example:  '2'
下一个数。给定一个正整数，找出与其二进制表达式中1的个数相同且大小最接近的那两个数（一个略大，一个略小）。
示例 1：
输入：num = 2（或者0b10）
输出：[4, 1] 或者（[0b100, 0b1]）
示例 2：
输入：num = 1
输出：[2, -1]
提示：
num 的范围在[1, 2147483647]之间；
如果找不到前一个或者后一个满足条件的正数，那么输出 -1。
Hint 1: 下一步：从每个蛮力解法开始。
Hint 2: 下一个：想象一个二进制数，在整个数中分布一串1和0。假设你把一个1翻转成0，把一个0翻转成1。在什么情况下数会更大？在什么情况下数会更小？
Hint 3: 下一步：如果你将1翻转成0，0翻转成1，假设 0 -> 1位更大，那么它就会变大。你如何使用这个来创建下一个最大的数字（具有相同数量的1）？
Hint 4: 下一步：你能翻转0到1，创建下一个最大的数字吗？
Hint 5: 下一步：把0翻转为1将创建一个更大的数字。索引越靠右，数字越大。如果有一个1001这样的数字，那么我们就想翻转最右边的0（创建1011）。但是如果有一个1010这样的数字，我们就不应该翻转最右边的1。
Hint 6: 下一步：我们应该翻转最右边但非拖尾的0。数字1010会变成1110。完成后，我们需要把1翻转成0让数字尽可能小，但要大于原始数字（1010）。该怎么办？如何缩小数字？
Hint 7: 下一步：我们可以通过将所有的1移动到翻转位的右侧，并尽可能地向右移动来缩小数字（在这个过程中去掉一个1）。
Hint 8: 获取前一个：一旦你解决了“获取后一个”，请尝试翻转“获取前一个”的逻辑。

```

## Description (English)

Next Number. Given a positive integer, find the two numbers with the same number of 1 bits in binary that are closest in size: one slightly larger, one slightly smaller.

Example 1:
Input: num = 2 (0b10)
Output: [4, 1]

Example 2:
Input: num = 1
Output: [2, -1]

Notes: num in [1, 2147483647]; output -1 if no such positive number exists.

## 思路

位运算构造 O(1)：

- **更大**：找最右非拖尾 0（跳过拖尾 0 段 c0 与紧随的 1 段 c1，p = c0+c1），置 1、清低 c0+c1 位、低位补 c1-1 个 1；p ≥ 31 无高位可翻 → -1。
- **更小**：`(n & (n+1)) === 0`（1 全部垫底，形如 0b…0111）无解；否则翻转最右非拖尾 1，其下 c0-1 处放 c1+1 个 1。

c1 ≥ 1、c0 ≥ 1 在各分支可证恒成立，移位无负数风险。

## Solution

[SourceCode](./solution.js)
