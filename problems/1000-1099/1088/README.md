# [1088] 易混淆数 II

## Description


```md
https://leetcode.cn/problems/confusing-number-ii/description/
* algorithms
* Hard (52.16%)
* Likes:    50
* Dislikes: -
* Testcase Example:  '20'
易混淆数（Confusing Number）指的是一个数字在整体旋转 180° 以后，能够得到一个和原来 不同 的数，且 新数字的每一位都应该是有效的。
本题我们会将数字旋转 180° 来生成一个新的数字。
当 0, 1, 6, 8, 9 旋转 180° 以后，我们得到的新数字分别为 0, 1, 9, 8, 6。
当 2, 3, 4, 5, 7 旋转 180° 后，是 无法 得到任何数字的。
请注意，在旋转一个数字之后，我们可以忽略前导零。
例如，在旋转 8000 之后，我们有 0008 ，它被认为只是 8 。
给出正整数 n，请你返回  [1, n] 范围内的 易混淆数 的数量 。

示例 1：
输入：n = 20
输出：6
解释：易混淆数为 [6,9,10,16,18,19]。
6 转换为 9
9 转换为 6
10 转换为 01 也就是 1
16 转换为 91
18 转换为 81
19 转换为 61
示例 2：
输入：n = 100
输出：19
解释：易混淆数为 [6,9,10,16,18,19,60,61,66,68,80,81,86,89,90,91,98,99,100]。

提示：
1 <= n <= 109
Hint 1: Which set of digits have the valid numbers?
Hint 2: Only 0, 1, 6, 8, 9 are the valid set of digits, do a backtracking to generate all the numbers containing this digits and check they are valid.

```

## Solution

[SourceCode](./solution.js)

## Translation

Count numbers in [1, n] that become a DIFFERENT valid number when rotated 180° (digits 0,1,6,8,9 map to 0,1,9,8,6; others invalid; leading zeros dropped). n ≤ 1e9.

- Example: n = 20 → `6` (6,9,10,16,18,19)

## Approach

**回溯 + 旋转比对**。只由 {0,1,6,8,9} 组成的数才可能有效:DFS 每层追加一个数字,value > n 即剪枝(追加只会更大),只走无前导零分支。每生成一个数计算旋转值(数字反序 × 逐位映射,自然丢弃前导零),不等则计数。n=1e9 时节点约 5^9·(9/10)+ ≈ 2.4M,全程 32 位整数内。
