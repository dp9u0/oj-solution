# [面试题 04.12] 求和路径

## Description


```md
https://leetcode.cn/problems/paths-with-sum-lcci/description/
* lcci
* Medium (49.57%)
* Likes:    150
* Dislikes: -
* Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
给定一棵二叉树，其中每个节点都含有一个整数数值(该值或正或负)。设计一个算法，打印节点数值总和等于某个给定值的所有路径的数量。注意，路径不一定非得从二叉树的根节点或叶节点开始或结束，但是其方向必须向下(只能从父节点指向子节点方向)。
示例：
给定如下二叉树，以及目标和 sum = 22，
5
/ \
4   8
/   / \
11  13  4
/  \    / \
7    2  5   1
输出：
3
解释：和为 22 的路径有：[5,4,11,2], [5,8,4,5], [4,11,7]
提示：
节点总数 <= 10000
Hint 1: 尝试简化问题。如果路径必须从根开始会如何？
Hint 2: 不要忘记路径可能会重叠。例如，如果你正在寻找总和6，那么路径1 -> 3 -> 2和1 -> 3 -> 2 -> 4 -> 6 -> 2都是有效的。
Hint 3: 如果每条路径必须从根开始，就从根开始遍历所有可能的路径。可以在遍历的同时追踪和，每次找到一个路径满足我们的目标和，就增加totalpaths的值。现在，如何将它扩展到可以在任何地方开始呢？记住：只需要一个蛮力算法即可完成。你可以稍后再优化。
Hint 4: 为了将其扩展到从任何地方开始的路径，我们可以对所有节点重复此过程。
Hint 5: 如果你已经设计了以上描述的算法，那么在平衡树中你会有一个O(NlogN)的算法。这是因为共N个节点，在最坏情况下，每个节点的深度是O(logN)。节点上方的每个节点都会访问一次。因此，N个节点将被访问O(logN)的时间。有一种优化算法，其运行时间为O(N)。
Hint 6: 在当前的蛮力算法中重复了什么工作？
Hint 7: 从根开始考虑每个路径（有n个这样的路径）作为一个数组。该蛮力算法具体运作如下：拿着每个数组来寻找所有具有特定和的连续子序列。我们这样做是计算了所有子数组以及它们的和。把目光聚焦在这个小问题上可能会大有裨益。给定一个数组，你如何寻找具有特定和的所有连续子序列？同样，想想蛮力算法中的重复工作。
Hint 8: 我们正在寻找和为targetSum的子数组。注意，可以在常数时间得到runningSumi的值，这是从元素0到元素i的和。一个从i到j的子数组和为targetSum，则 runningSumi-1 + targetSum必须等于runningSumj（试着画一个数组或一条数字线）。随着往下走，可以追踪runningSum，那么如何能快速查找i对应的使前面等式成立的值？
Hint 9: 尝试使用一个散列表，从runningSum的值映射到使用runningSum元素的个数。
Hint 10: 一旦你完成了这样的算法，找出了和为给定值的所有连续子数组，试着将它应用到一棵树上。请记住，在遍历和修改散列表时，你可能需要在遍历回来时将散列表的“损坏”逆转。

```

## Description (English)

Given a binary tree where each node contains an integer value (positive or negative), design an algorithm to count the number of downward paths whose node values sum to a given value. Paths need not start at the root or end at a leaf, but must move downward (parent to child only).

Example: with tree [5,4,8,11,null,13,4,7,2,null,null,5,1] and sum = 22 → 3 (paths [5,4,11,2], [5,8,4,5], [4,11,7])

Note: total nodes <= 10000.

## 思路

根到当前节点的前缀和 + 哈希计数，O(n)：路径和 = 当前前缀 − 某祖先前缀，查 `prefix[cur − sum]` 即以当前节点结尾的合法路径数。显式栈做迭代 DFS（1 万节点链形树会打爆递归栈），节点入栈时登记前缀、出栈时撤销，避免跨子树污染。

## Solution

[SourceCode](./solution.js)
