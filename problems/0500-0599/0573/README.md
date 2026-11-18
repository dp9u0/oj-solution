# [573] 松鼠模拟

## Description


```md
https://leetcode.cn/problems/squirrel-simulation/description/
* algorithms
* Medium (65.66%)
* Likes:    53
* Dislikes: -
* Testcase Example:  '5\n7\n[2,2]\n[4,4]\n[[3,0], [2,5]]'
给你两个整数 height 和 width ，代表一个大小为 height x width 的花园。你还得到了以下信息：
一个数组 tree ，其中 tree = [treer, treec] 是花园中树的位置，
一个数组 squirrel ，其中 squirrel = [squirrelr, squirrelc] 是花园中松鼠的位置，
一个数组 nuts ，其中 nuts[i] = [nutir, nutic] 是花园中第 ith 个坚果的位置。
松鼠一次最多只能携带一个坚果，并且能够向上、下、左、右四个方向移动到相邻的单元格。
返回松鼠收集所有坚果并逐一放在树下的 最小距离 。
距离 是指移动的次数。

示例 1：
输入：height = 5, width = 7, tree = [2,2], squirrel = [4,4], nuts = [[3,0], [2,5]]
输出：12
解释：为实现最小的距离，松鼠应该先摘 [2, 5] 位置的坚果。
示例 2：
输入：height = 1, width = 3, tree = [0,1], squirrel = [0,0], nuts = [[0,2]]
输出：3

提示：
1 <= height, width <= 100
tree.length == 2
squirrel.length == 2
1 <= nuts.length <= 5000
nuts[i].length == 2
0 <= treer, squirrelr, nutir <= height
0 <= treec, squirrelc, nutic <= width
Hint 1: Will Brute force solution works here? What will be its complexity?
Hint 2: Brute force definitely won't work here. Think of some simple solution. Take some example and make some observations.
Hint 3: Will order of nuts traversed by squirrel is important or only first nut traversed by squirrel is important?
Hint 4: Are there some paths which squirrel have to cover in any case? If yes, what are they?
Hint 5: Did you notice only first nut traversed by squirrel matters? Obviously squirrel will choose first nut which will result in minimum distance.

```

## Solution

[SourceCode](./solution.js)

## Translation

Squirrel collects all nuts one by one and drops each at the tree. Manhattan grid. Except for the FIRST nut the squirrel picks, every round trip is nut→tree→(next nut). Minimize total steps.

- Example: height=5, width=7, tree=[2,2], squirrel=[4,4], nuts=[[3,0],[2,5]] → `12`

## Approach

**总路程 + 净差贪心**。基础:`Σ 2·d(nut, tree)`(每个坚果往返)。松鼠只对**第一个**坚果免掉"坚果→树"这一段、换成"松鼠→坚果":

- 答案 = `Σ 2·d(n,t) + min_i(d(s,n_i) − d(n_i,t))`。

每坚果 O(1),总 O(n)。height/width 只是背景参数不参与计算。
