# [2954] Count the Number of Infection Sequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-infection-sequences/description/)

* algorithms
* Hard (37.09%)
* Likes:    151
* Dislikes: 32
* Testcase Example:  '5\n[0,4]'

```md
You are given an integer n and an array sick sorted in increasing order, representing positions of infected people in a line of n people.
At each step, one uninfected person adjacent to an infected person gets infected. This process continues until everyone is infected.
An infection sequence is the order in which uninfected people become infected, excluding those initially infected.
Return the number of different infection sequences possible, modulo 109+7.

Example 1:

Input: n = 5, sick = [0,4]
Output: 4
Explanation:
There is a total of 6 different sequences overall.

Valid infection sequences are [1,2,3], [1,3,2], [3,2,1] and [3,1,2].
[2,3,1] and [2,1,3] are not valid infection sequences because the person at index 2 cannot be infected at the first step.


Example 2:

Input: n = 4, sick = [1]
Output: 3
Explanation:
There is a total of 6 different sequences overall.

Valid infection sequences are [0,2,3], [2,0,3] and [2,3,0].
[3,2,0], [3,0,2], and [0,3,2] are not valid infection sequences because the infection starts at the person at index 1, then the order of infection is 2, then 3, and hence 3 cannot be infected earlier than 2.



Constraints:

2 <= n <= 105
1 <= sick.length <= n - 1
0 <= sick[i] <= n - 1
sick is sorted in increasing order.


```

## 题目翻译

给定整数 n 和已排序数组 sick（初始感染者的位置），排成一行。每一步，一个与感染者相邻的未感染者被感染。感染序列是未感染者被感染的顺序（不含初始感染者）。返回不同感染序列的数量，模 10^9+7。

## 解题思路

**组合数学**

初始感染者将未感染者分成若干段：
- **边界段**（两端）：感染只能从一侧传播，顺序固定，贡献因子 = 1
- **内部段**（两个感染者之间，长度 L）：感染从两侧传播，每次选左或右 frontier 感染，最后一步无选择。贡献 = 2^(L-1)

各段独立的感染顺序可以任意交织。设有 m 个段，长度分别为 L_1, ..., L_m，总未感染人数 N = sum(L_i)。

答案 = N! / (L_1! * ... * L_m!) * product(2^(L_i - 1) for 内部段)

预计算阶乘和逆阶乘即可。注意模乘法精度问题。

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
