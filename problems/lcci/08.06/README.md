# [面试题 08.06] 汉诺塔问题

## Description


```md
https://leetcode.cn/problems/hanota-lcci/description/
* lcci
* Easy (64.50%)
* Likes:    310
* Dislikes: -
* Testcase Example:  '[0]\n[]\n[]'
在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:
(1) 每次只能移动一个盘子;
(2) 盘子只能从柱子顶端滑出移到下一根柱子;
(3) 盘子只能叠在比它大的盘子上。
请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。
你需要原地修改栈。
示例 1：
输入：A = [2, 1, 0], B = [], C = []
输出：C = [2, 1, 0]
示例 2：
输入：A = [1, 0], B = [], C = []
输出：C = [1, 0]
提示：
A 中盘子的数目不大于 14 个。
Hint 1: 尝试简单构建法。
Hint 2: 你可以很容易地把最小的圆盘从一根柱子移到另一根柱子。把最小的两个圆盘从一根柱子移到另一根柱子也是小菜一碟。你能移动最小的三个圆盘吗？
Hint 3: 考虑将最小的圆盘从柱X = 0 移动到柱Y = 2，使用柱Z = 1作为临时保留点，作为f(1, X = 0, Y = 2, Z = 1)的解题方案。移动最小的两个圆盘来表示f(2, X = 0, Y = 2, Z = 1)。给定你f(1, X = 0, Y = 2, Z = 1)和f(2, X = 0, Y = 2, Z = 1)的题目解法，你能解出f(3, X = 0, Y = 2, Z = 1)吗？
Hint 4: 请注意，哪根柱子是源、目的地或暂存点并不重要。你可以通过f(2, X = 0, Y = 2, Z = 1)来计算f(2, X = 0, Y = 1, Z = 2)（将两个盘子从柱0移动到柱1，以柱2作为暂存点），然后将盘子3从柱0移动到柱2，计算f(2, X = 1, Y = 2, Z = 0)（将两个盘子从柱1移动到柱2，以柱0作为暂存点）。这个过程是怎样重复的？
Hint 5: 如果你在递归方面遇到困难，请尝试更多地相信递归过程。一旦弄清如何将前2个盘子从柱0移至柱2，就可以相信你完成了这项工作。当需要移动3个盘子时，请相信你可以将2个盘子从一根柱子移动到另一根柱子。现在，你已经移动了2个盘子。那么要如何处理第三个盘子呢？

```

## Description (English)

In the classic Tower of Hanoi puzzle there are 3 pegs and N disks of different sizes which can slide onto any peg. Initially all disks are stacked on the first peg in ascending order from top to bottom (each disk only on top of a larger one). Constraints when moving disks:
1. Only one disk may be moved at a time.
2. A disk can only slide off the top of a peg onto another peg.
3. A disk can only be stacked on a larger disk.
Write a program to move all disks from the first peg to the last using stacks. Modify the stacks in-place.

Example 1:
Input: A = [2, 1, 0], B = [], C = []
Output: C = [2, 1, 0]

Example 2:
Input: A = [1, 0], B = [], C = []
Output: C = [1, 0]

Note: A has at most 14 disks.

## 思路

经典汉诺塔递归 O(2ⁿ)（最少移动步数即 2ⁿ-1）：`move(n, from, aux, to)` = 先把上 n-1 个盘 from→aux（借助 to），再把最大盘 from→to，最后把 n-1 个盘 aux→to（借助 from）。n ≤ 14，至多 16383 次真实栈顶弹出/压入，三个栈全程满足约束。

## Solution

[SourceCode](./solution.js)
