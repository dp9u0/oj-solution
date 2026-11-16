# [800] 相似 RGB 颜色

## Description


```md
https://leetcode.cn/problems/similar-rgb-color/description/
* algorithms
* Easy (67.90%)
* Likes:    23
* Dislikes: -
* Testcase Example:  '"#09f166"'
RGB 颜色 "#AABBCC" 可以简写成 "#ABC" 。
例如，"#15c" 其实是 "#1155cc" 的简写。
现在，假如我们分别定义两个颜色 "#ABCDEF" 和 "#UVWXYZ"，则他们的相似度可以通过这个表达式 -(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2 来计算。
那么给你一个按 "#ABCDEF" 形式定义的字符串 color 表示 RGB 颜色，请你以字符串形式，返回一个与它相似度最大且可以简写的颜色。（比如，可以表示成类似 "#XYZ" 的形式）
任何 具有相同的（最大）相似度的答案都会被视为正确答案。

示例 1：
输入：color = "#09f166"
输出："#11ee66"
解释：
因为相似度计算得出 -(0x09 - 0x11)^2 -(0xf1 - 0xee)^2 - (0x66 - 0x66)^2 = -64 -9 -0 = -73
这已经是所有可以简写的颜色中最相似的了
示例 2：
输入：color = "#4e3fe1"
输出："#5544dd"

提示：
color.length == 7
color[0] == '#'
对于任何 i > 0，color[i] 都是一个在范围 ['0', 'f'] 内的 16 进制数

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a color `#RRGGBB`, abbreviate each 2-digit hex channel to the "XX" form (two identical hex digits) so that the total squared difference `-(RR'-RR)^2 - (GG'-GG)^2 - (BB'-BB)^2` is maximized. Return the abbreviated color.

**Example:**
"#09f166" → "#11ee66"

## Approach

平方差按通道独立可加:每通道最接近 v 的 XX 形式即最接近 v 的 17 的倍数,`x = round(v/17)` clamp 到 [0,15] 即可(整数值不存在平局)。

时间 O(1),空间 O(1)。

## Description (English)

Given a color `#RRGGBB`, abbreviate each 2-digit hex channel to the "XX" form (two identical hex digits) so that the total squared difference is maximized. Return the abbreviated color.

**Example:**
"#09f166" → "#11ee66"

## Approach

平方差按通道独立可加:每通道最接近 v 的 XX 形式即最接近 v 的 17 的倍数,`x = round(v/17)` clamp 到 [0,15];注意 XX 是同一 hex 字符重复两次(`x.toString(16).repeat(2)`),不是普通两位十六进制。

时间 O(1),空间 O(1)。
