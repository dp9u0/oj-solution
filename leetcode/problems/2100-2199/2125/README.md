# [2125] Number of Laser Beams in a Bank

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/)

* algorithms
* Medium (87.02%)
* Likes:    2241
* Dislikes: 223
* Testcase Example:  '["011001","000000","010100","001000"]'

```md
Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of &#39;0&#39;s and &#39;1&#39;s. &#39;0&#39; means the cell is empty, while&#39;1&#39; means the cell has a security device.
There is one laser beam between any two security devices if both conditions are met:

The two devices are located on two different rows: r1 and r2, where r1 < r2.
For each row i where r1 < i < r2, there are no security devices in the ith row.

Laser beams are independent, i.e., one beam does not interfere nor join with another.
Return the total number of laser beams in the bank.

Example 1:


Input: bank = ['011001','000000','010100','001000']
Output: 8
Explanation: Between each of the following device pairs, there is one beam. In total, there are 8 beams:
* bank[0][1] -- bank[2][1]
* bank[0][1] -- bank[2][3]
* bank[0][2] -- bank[2][1]
* bank[0][2] -- bank[2][3]
* bank[0][5] -- bank[2][1]
* bank[0][5] -- bank[2][3]
* bank[2][1] -- bank[3][2]
* bank[2][3] -- bank[3][2]
Note that there is no beam between any device on the 0th row with any on the 3rd row.
This is because the 2nd row contains security devices, which breaks the second condition.

Example 2:


Input: bank = ['000','111','000']
Output: 0
Explanation: There does not exist two devices located on two different rows.


Constraints:

m == bank.length
n == bank[i].length
1 <= m, n <= 500
bank[i][j] is either &#39;0&#39; or &#39;1&#39;.


```

## 题目翻译

银行内有防盗设备。给定一个二进制字符串数组 `bank`，bank[i] 表示第 i 行。'1' 表示有设备，'0' 表示空。两个不同行 r1 和 r2 上的设备之间有一束激光，当且仅当 r1 和 r2 之间的所有行都没有设备。返回激光束总数。

**示例 1：** bank = ["011001","000000","010100","001000"] → 8
（第0行3个设备与第2行2个设备：3*2=6，第2行2个设备与第3行1个设备：2*1=2，共8）

**示例 2：** bank = ["000","111","000"] → 0

**约束：**
- 1 <= m, n <= 500

## 解题思路 (Approach)

统计每行中 '1' 的个数（跳过全 0 行），相邻两个非零行的激光束数 = count[i] * count[i+1]，求和。

时间复杂度：O(m*n)，空间复杂度：O(m)。

## Solution

[SourceCode](./solution.js)
