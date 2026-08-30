# [927] Three Equal Parts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/three-equal-parts/description/)

* algorithms
* Hard (41.66%)
* Likes:    859
* Dislikes: 127
* Testcase Example:  '[1,0,1,0,1]'

```md
You are given an array arr which consists of only zeros and ones, divide the array into three non-empty parts such that all of these parts represent the same binary value.
If it is possible, return any [i, j] with i + 1 < j, such that:

arr[0], arr[1], ..., arr[i] is the first part,
arr[i + 1], arr[i + 2], ..., arr[j - 1] is the second part, and
arr[j], arr[j + 1], ..., arr[arr.length - 1] is the third part.
All three parts have equal binary values.

If it is not possible, return [-1, -1].
Note that the entire part is used when considering what binary value it represents. For example, [1,1,0] represents 6 in decimal, not 3. Also, leading zeros are allowed, so [0,1,1] and [1,1] represent the same value.

Example 1:
Input: arr = [1,0,1,0,1]
Output: [0,3]
Example 2:
Input: arr = [1,1,0,1,1]
Output: [-1,-1]
Example 3:
Input: arr = [1,1,0,0,1]
Output: [0,2]


Constraints:

3 <= arr.length <= 3 * 104
arr[i] is 0 or 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个只包含 0 和 1 的数组 arr，将其划分为三个非空部分，使得这三部分表示相同的二进制值。

如果可以划分，返回任意满足 i + 1 < j 的 [i, j]，使得：

- arr[0], arr[1], ..., arr[i] 是第一部分，
- arr[i + 1], arr[i + 2], ..., arr[j - 1] 是第二部分，
- arr[j], arr[j + 1], ..., arr[arr.length - 1] 是第三部分，

且三部分表示的二进制值相等。

如果无法划分，返回 [-1, -1]。

注意：考虑二进制值时使用整段部分。例如 [1,1,0] 表示十进制 6 而不是 3。允许前导零，即 [0,1,1] 和 [1,1] 表示相同的值。

示例 1：
输入：arr = [1,0,1,0,1]
输出：[0,3]

示例 2：
输入：arr = [1,1,0,1,1]
输出：[-1,-1]

示例 3：
输入：arr = [1,1,0,0,1]
输出：[0,2]

约束：
3 <= arr.length <= 3 * 10^4
arr[i] 是 0 或 1

## 解题思路

数学 + 双指针，O(n) 时间：

1. 统计所有 1 的位置。若 1 的总数 count 不能被 3 整除，直接返回 [-1,-1]。
2. 若 count == 0（全 0 数组），任意划分都合法，返回 [0, n-1]。
3. 设 t = count / 3。第三部分固定以数组末尾结束，它末尾 1 之后有 zeros 个尾随 0。由于三部分二进制值相同（去前导零后位串完全一致，尾随 0 数量也一致），每部分最后一个 1 之后必须恰好跟 zeros 个 0，因此切分点是唯一确定的：
   - 第一部分结束位置 i = ones[t-1] + zeros（含）
   - 第三部分起始位置 j = ones[2t-1] + zeros + 1
4. 校验 i + 1 < j（保证第二部分非空），然后将三部分分别去掉前导零后比较字符串是否完全相等（空串代表值 0）。相等则返回 [i, j]，否则返回 [-1,-1]。

正确性：值相等 ⟺ 去掉前导零后的位串完全相同（含长度），而每部分最后一个 1 后的 0 的个数由值唯一决定，故切分点被迫为上述 i、j，只需验证即可。
