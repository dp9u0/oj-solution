# [777] Swap Adjacent in LR String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/swap-adjacent-in-lr-string/description/)

* algorithms
* Medium (38.02%)
* Likes:    1346
* Dislikes: 956
* Testcase Example:  '"RXXLRXRXL"\n"XRLXXRRLX"'

```md
In a string composed of &#39;L&#39;, &#39;R&#39;, and &#39;X&#39; characters, like 'RXXLRXRXL', a move consists of either replacing one occurrence of 'XL' with 'LX', or replacing one occurrence of 'RX' with 'XR'. Given the starting string start and the ending string result, return True if and only if there exists a sequence of moves to transform start to result.

Example 1:

Input: start = 'RXXLRXRXL', result = 'XRLXXRRLX'
Output: true
Explanation: We can transform start to result following these steps:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX

Example 2:

Input: start = 'X', result = 'L'
Output: false


Constraints:

1 <= start.length<= 104
start.length == result.length
Both start and result will only consist of characters in &#39;L&#39;, &#39;R&#39;, and&#39;X&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定由 'L', 'R', 'X' 组成的字符串 start 和 result。每次操作可以将 "XL" 替换为 "LX"（L 左移），或将 "RX" 替换为 "XR"（R 右移）。判断是否能通过一系列操作将 start 变为 result。

## 解题思路

关键观察：L 只能左移（与 X 交换），R 只能右移（与 X 交换），L 和 R 不能交叉。因此去掉所有 X 后，两个字符串的 L/R 序列必须相同。同时，start 中每个 L 的位置 >= result 中对应 L 的位置（L 只能左移），start 中每个 R 的位置 <= result 中对应 R 的位置（R 只能右移）。双指针逐一比较即可。
