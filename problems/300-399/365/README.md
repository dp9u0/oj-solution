# [365] Water and Jug Problem

## Description

[LeetCode Problem Description](https://leetcode.com/problems/water-and-jug-problem/description/)

* algorithms
* Medium (45.25%)
* Testcase Example:  '3\n5\n4'

```md
You are given two jugs with capacities x liters and y liters. You have an infinite water supply. Return whether the total amount of water in both jugs may reach target using the following operations:
Fill either jug completely with water.
Completely empty either jug.
Pour water from one jug into another until the receiving jug is full, or the transferring jug is empty.

Example 1:
Input:   x = 3, y = 5, target = 4
Output:   true
Explanation:
Follow these steps to reach a total of 4 liters:
Fill the 5-liter jug (0, 5).
Pour from the 5-liter jug into the 3-liter jug, leaving 2 liters (3, 2).
Empty the 3-liter jug (0, 2).
Transfer the 2 liters from the 5-liter jug to the 3-liter jug (2, 0).
Fill the 5-liter jug again (2, 5).
Pour from the 5-liter jug into the 3-liter jug until the 3-liter jug is full. This leaves 4 liters in the 5-liter jug (3, 4).
Empty the 3-liter jug. Now, you have exactly 4 liters in the 5-liter jug (0, 4).
Reference: The Die Hard example.
Example 2:
Input:   x = 2, y = 6, target = 5
Output:   false
Example 3:
Input:   x = 1, y = 2, target = 3
Output:   true
Explanation: Fill both jugs. The total amount of water in both jugs is equal to 3 now.

Constraints:
1

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
给你两个容量分别为 `x` 升和 `y` 升的倒水壶。你可以无限量地使用水。判断是否能够通过以下操作在两个水壶中得到恰好 `target` 升的水：
1. 装满任意一个水壶。
2. 清空任意一个水壶。
3. 把一个水壶里的水倒入另一个水壶中，直到另一个水壶装满或者当前水壶倒空为止。

示例 1:
输入: x = 3, y = 5, target = 4
输出: true
解释:
1. 装满 5 升水壶 (0, 5)
2. 将 5 升水壶的水倒入 3 升水壶，直到 3 升水壶装满，此时 5 升水壶还剩 2 升 (3, 2)
3. 清空 3 升水壶 (0, 2)
4. 将 5 升水壶的 2 升水倒入 3 升水壶 (2, 0)
5. 再次装满 5 升水壶 (2, 5)
6. 将 5 升水壶的水倒入 3 升水壶直到 3 升水壶满。这使得 5 升水壶中留有 4 升水 (3, 4)
7. 清空 3 升水壶。现在你在 5 升水壶中恰好拥有 4 升水 (0, 4)

示例 2:
输入: x = 2, y = 6, target = 5
输出: false

示例 3:
输入: x = 1, y = 2, target = 3
输出: true

约束：
1 <= x, y, target <= 10^4

### 解题思路 (Approach)
这是一道经典的数学题，名为“水壶问题”（Die Hard 问题）。
根据裴蜀定理（Bézout's identity），对于任意整数 x 和 y，如果我们要得到任意目标容量 target，那么 target 必须是 x 和 y 的最大公约数 (GCD) 的整数倍。
同时，水壶的总容量为 `x + y`，所以 target 不能超过水壶的总容量，即 `target <= x + y`。
因此，判断条件为：
1. `target <= x + y`
2. `target % gcd(x, y) == 0`
如果上述条件成立，则可以得到目标容量的水。
