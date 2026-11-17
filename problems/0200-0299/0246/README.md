# [246] 中心对称数

## Description


```md
https://leetcode.cn/problems/strobogrammatic-number/description/
* algorithms
* Easy (47.84%)
* Likes:    65
* Dislikes: -
* Testcase Example:  '"69"'
中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。
请写一个函数来判断该数字是否是中心对称数，其输入将会以一个字符串的形式来表达数字。

示例 1:
输入: num = "69"
输出: true
示例 2:
输入: num = "88"
输出: true
示例 3:
输入: num = "962"
输出: false
示例 4：
输入：num = "1"
输出：true

```

## Solution

[SourceCode](./solution.js)

## Description (English)

A strobogrammatic number looks the same when rotated 180° (digits look like proper numbers). Valid digit mappings: 0→0, 1→1, 6→9, 8→8, 9→6. Given `num` (a string), return whether it is strobogrammatic.

**Example:**
"69" → true; "88" → true; "962" → false

## Approach

双指针从两端向中间:左端数字经映射后必须等于右端数字;中间位在奇数长度时自映射(0/1/8)。出现其他数字直接 false。

时间 O(n),空间 O(1)。
