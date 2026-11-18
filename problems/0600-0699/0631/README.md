# [631] 设计 Excel 求和公式

## Description


```md
https://leetcode.cn/problems/design-excel-sum-formula/description/
* algorithms
* Hard (34.59%)
* Likes:    39
* Dislikes: -
* Testcase Example:  '["Excel","set","sum","set","get"]\n' +
'[[3,"C"],[1,"A",2],[3,"C",["A1","A1:B2"]],[2,"B",2],[3,"C"]]'
请你设计 Excel 中的基本功能，并实现求和公式。
实现 Excel 类：
Excel(int height, char width)：用高度 height 和宽度 width 初始化对象。该表格是一个大小为 height x width 的整数矩阵 mat，其中行下标范围是 [1, height] ，列下标范围是 ['A', width] 。初始情况下，所有的值都应该为 零 。
void set(int row, char column, int val)：将 mat[row][column] 的值更改为 val 。
int get(int row, char column)：返回 mat[row][column] 的值。
int sum(int row, char column, List numbers)：将 mat[row][column] 的值设为由 numbers 表示的单元格的和，并返回 mat[row][column] 的值。此求和公式应该 长期作用于 该单元格，直到该单元格被另一个值或另一个求和公式覆盖。其中，numbers[i] 的格式可以为：

"ColRow"：表示某个单元格。

例如，"F7" 表示单元格 mat[7]['F'] 。


"ColRow1:ColRow2"：表示一组单元格。该范围将始终为一个矩形，其中 "ColRow1" 表示左上角单元格的位置，"ColRow2" 表示右下角单元格的位置。

例如，"B3:F7" 表示 3 <= i <= 7 和 'B' <= j <= 'F' 的单元格 mat[i][j] 。




注意：可以假设不会出现循环求和引用。
例如，mat[1]['A'] == sum(1, "B")，且 mat[1]['B'] == sum(1, "A") 。

示例 1：
输入：
["Excel", "set", "sum", "set", "get"]
[[3, "C"], [1, "A", 2], [3, "C", ["A1", "A1:B2"]], [2, "B", 2], [3, "C"]]
输出：
[null, null, 4, null, 6]
解释：
执行以下操作：
Excel excel = new Excel(3, "C");
// 构造一个 3 * 3 的二维数组，所有值初始化为零。
//   A B C
// 1 0 0 0
// 2 0 0 0
// 3 0 0 0
excel.set(1, "A", 2);
// 将 mat[1]["A"] 设置为 2 。
//   A B C
// 1 2 0 0
// 2 0 0 0
// 3 0 0 0
excel.sum(3, "C", ["A1", "A1:B2"]); // 返回 4
// 将 mat[3]["C"] 设置为 mat[1]["A"] 的值与矩形范围的单元格和的和，该范围的左上角单元格位置为 mat[1]["A"] ，右下角单元格位置为 mat[2]["B"] 。
//   A B C
// 1 2 0 0
// 2 0 0 0
// 3 0 0 4
excel.set(2, "B", 2);
// 将 mat[2]["B"] 设置为 2 。注意 mat[3]["C"] 也应该更改。
//   A B C
// 1 2 0 0
// 2 0 2 0
// 3 0 0 6
excel.get(3, "C"); // 返回 6

提示：
1 <= height <= 26
'A' <= width <= 'Z'
1 <= row <= height
'A' <= column <= width
-100 <= val <= 100
1 <= numbers.length <= 5
numbers[i] 的格式为 "ColRow" 或 "ColRow1:ColRow2" 。
最多会对 set 、get 和 sum 进行 100 次调用。

```

## Solution

[SourceCode](./solution.js)

## Translation

Design a mini Excel: grid up to 26×26. `set(r,c,v)` overwrites; `get(r,c)` returns the effective value; `sum(r,c,numbers)` permanently binds cell to a formula (cell refs "A1" or rectangles "A1:B2") until overwritten. No cyclic references.

- Example: set(1,A,2); sum(3,C,["A1","A1:B2"]) → 4; set(2,B,2); get(3,C) → 6

Constraints: ≤ 100 calls; ≤ 5 ranges per formula.

## Approach

**公式存储 + 递归求值**。每格存 `val` 或 `formula`(字符串列表)。`getVal(r,c)`:无公式取 val;有公式则逐项展开(矩形双重循环),对每个引用格递归 getVal 求和。set 清除公式覆盖;sum 绑定公式并返回当前值。首版无记忆化被 60 层链式 sum 打爆(4^14 条递归路径 TLE)——加 per-cell 记忆化,写操作(set/sum)时整体失效,无环引用保证正确。
