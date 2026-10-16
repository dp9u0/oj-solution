# [面试题 16.22] 兰顿蚂蚁

## Description


```md
https://leetcode.cn/problems/langtons-ant-lcci/description/
* lcci
* Medium (58.61%)
* Likes:    36
* Dislikes: -
* Testcase Example:  '0'
一只蚂蚁坐在由白色和黑色方格构成的无限网格上。开始时，网格全白，蚂蚁面向右侧。每行走一步，蚂蚁执行以下操作。
(1) 如果在白色方格上，则翻转方格的颜色，向右(顺时针)转 90 度，并向前移动一个单位。
(2) 如果在黑色方格上，则翻转方格的颜色，向左(逆时针方向)转 90 度，并向前移动一个单位。
编写程序来模拟蚂蚁执行的前 K 个动作，并返回最终的网格。
网格由数组表示，每个元素是一个字符串，代表网格中的一行，黑色方格由 'X' 表示，白色方格由 '_' 表示，蚂蚁所在的位置由 'L', 'U', 'R', 'D' 表示，分别表示蚂蚁 左、上、右、下 的朝向。只需要返回能够包含蚂蚁走过的所有方格的最小矩形。
示例 1：
输入：0
输出：["R"]
示例 2：
输入：2
输出：
[
"_X",
"LX"
]
示例 3：
输入：5
输出：
[
"_U",
"X_",
"XX"
]
说明：
K <= 100000
Hint 1: 棘手的是处理无限网格。你有什么选择？
Hint 2: 选项1：你真的需要一个无线的网络吗？再次审题。你知道网格的最大尺寸吗？
Hint 3: 选项 2：想想ArrayList的工作原理。它能派上用场吗？
Hint 4: 选项2：使用ArrayList是不可能的，因为那样太烦琐了。也许构建自己的列表会更容易，但要专门针对矩阵。
Hint 5: 方法2：一种方法是当蚂蚁到达边缘时，将数组的大小加倍。但是，你将如何处理蚂蚁到达负坐标的问题呢？数组不能有负的索引。
Hint 6: 选项2：注意，问题中没有规定坐标的标签必须保持不变。你能把蚂蚁和所有的单元格信息移动到正坐标吗？换句话说，如果当你需要让数组n向负方向增长时，你重新标记了所有的指标使它们仍然是正的，会发生什么?
Hint 7: 选项3：另一件需要考虑的事情是，你是否真的需要一个网格来实现它。在这个问题中你真正需要什么信息?
Hint 8: 选项3：你实际上需要的是来查看一个单元格是白色的还是黑色的某种方式（当然还有蚂蚁的位置）。你能把所有的白色方格存在一个链表中吗?
Hint 9: 选项3：你可以考虑维护一个所有白色方格的散列集合。不过，你怎么才能打印出整个网格呢?

```

## Description (English)

An ant sits on an infinite grid of white and black squares, initially all white, facing right. On each move:
1. On a white square: flip the square's color, turn right 90 degrees (clockwise), move forward one unit.
2. On a black square: flip the square's color, turn left 90 degrees (counterclockwise), move forward one unit.

Write a program to simulate the first K moves and return the final grid. The grid is an array of strings: black square 'X', white square '_', ant position 'L'/'U'/'R'/'D' (left/up/right/down facing). Return only the smallest rectangle containing all squares the ant has visited.

Examples: K=0 → ["R"]; K=2 → ["_X","LX"]; K=5 → ["_U","X_","XX"].

Note: K <= 100000.

## 思路

直接模拟，O(K)（均摊）：无限网格不落数组——用 `Set` 存黑格坐标键，蚂蚁位置与朝向单独维护；顺时针方向序 R→D→L→U，左转即索引 +3，右转 +1。同时维护访问过的包围盒，最后在包围盒内逐格输出（蚂蚁位优先于颜色）。坐标允许负值是集合方案相对数组的最大便利。

## Solution

[SourceCode](./solution.js)
