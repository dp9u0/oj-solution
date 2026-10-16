# [面试题 05.08] 绘制直线

## Description


```md
https://leetcode.cn/problems/draw-line-lcci/description/
* lcci
* Medium (53.72%)
* Likes:    31
* Dislikes: -
* Testcase Example:  '1\n32\n30\n31\n0'
已知一个由像素点组成的单色屏幕，每行均有 w 个像素点，所有像素点初始为 0，左上角位置为 (0,0)。
现将每行的像素点按照「每 32 个像素点」为一组存放在一个 int 中，再依次存入长度为 length 的一维数组中。
我们将在屏幕上绘制一条从点 (x1,y) 到点 (x2,y) 的直线（即像素点修改为 1），请返回绘制过后的数组。

注意：
用例保证屏幕宽度 w 可被 32 整除（即一个 int 不会分布在两行上）

示例 1：
输入：length = 1, w = 32, x1 = 30, x2 = 31, y = 0
输出：[3]
解释：在第 0 行的第 30 位到第 31 位画一条直线，屏幕二进制形式表示为 [00000000000000000000000000000011]，因此返回 [3]
示例 2：
输入：length = 3, w = 96, x1 = 0, x2 = 95, y = 0
输出：[-1, -1, -1]
解释：由于二进制 11111111111111111111111111111111 的 int 类型代表 -1，因此返回 [-1,-1,-1]

提示：
1 <= length <= 10^5
1 <= w <= 3 * 10^5
0 <= x1 <= x2 < w
0 <= y <= 10
Hint 1: 先试试简单解法。你能设置一个特定的“像素”吗？
Hint 2: 当你画一条长线时，你会得到即将变成1的序列的全部字节。你可以一次性设置它吗？
Hint 3: 那这条线的起点和终点呢？你需要单独设置这些像素，还是可以同时设置所有像素？
Hint 4: 当x1和x2在同一个字节中时，你的代码能否处理这种情况。

```

## Description (English)

A monochrome screen made of pixels has `w` pixels per row, all initially 0, with the top-left corner at (0, 0). Each row's pixels are packed into ints, 32 pixels per int, and stored sequentially in a one-dimensional array of length `length`. Draw a horizontal line from (x1, y) to (x2, y) (set those pixels to 1) and return the resulting array.

Note: the screen width w is guaranteed to be divisible by 32 (an int never spans two rows).

Example 1:
Input: length = 1, w = 32, x1 = 30, x2 = 31, y = 0
Output: [3]  // binary ...00000011

Example 2:
Input: length = 3, w = 96, x1 = 0, x2 = 95, y = 0
Output: [-1, -1, -1]  // all ones as a signed 32-bit int is -1

Constraints: 1 <= length <= 10^5, 1 <= w <= 3*10^5, 0 <= x1 <= x2 < w, 0 <= y <= 10.

## 思路

按 int 分段打掩码：像素 x 落在第 `x >> 5` 个 int、该 int 的第 `31 - (x % 32)` 位（x=0 为最高位，故 x=31 置出 [3]、整行置出 -1）。

对线段覆盖的每个 int 求本段内的列范围 [from, to]（首尾 int 截断，中间 int 整段），掩码 = `(1 << (to-from+1)) - 1 << (31 - to)`，宽度 32 时直接取 -1（避免 JS `1 << 32` 溢出回绕）。`|=` 累加到 `y * (w/32) + off` 位置。时间 O(x2-x1 跨越的 int 数) ≤ O(w/32)。

## Solution

[SourceCode](./solution.js)
