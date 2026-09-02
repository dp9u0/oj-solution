# [LCR 180] 文件组合

## Description


```md
https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/description/
* algorithms
* Easy (70.35%)
* Likes:    586
* Dislikes: -
* Testcase Example:  '12'
待传输文件被切分成多个部分，按照原排列顺序，每部分文件编号均为一个 正整数（至少含有两个文件）。传输要求为：连续文件编号总和为接收方指定数字 target 的所有文件。请返回所有符合该要求的文件传输组合列表。
注意，返回时需遵循以下规则：
每种组合按照文件编号 升序 排列；
不同组合按照第一个文件编号 升序 排列。

示例 1：
输入：target = 12
输出：[[3, 4, 5]]
解释：在上述示例中，存在一个连续正整数序列的和为 12，为 [3, 4, 5]。
示例 2：
输入：target = 18
输出：[[3,4,5,6],[5,6,7]]
解释：在上述示例中，存在两个连续正整数序列的和分别为 18，分别为 [3, 4, 5, 6] 和 [5, 6, 7]。

提示：
1 <= target <= 10^5

```

## Solution

[SourceCode](./solution.js)

### English Translation

A file to be transmitted is split into several parts. Each part is numbered with a positive integer, and there are at least two parts, kept in their original order. We need all combinations of consecutive file numbers whose sum equals the given target number.

Return all such combinations. Note:
- Each combination should be in ascending order.
- Different combinations should be sorted by their first number in ascending order.

Example 1:
Input: target = 12
Output: [[3, 4, 5]]

Example 2:
Input: target = 18
Output: [[3,4,5,6],[5,6,7]]

Constraints:
1 <= target <= 10^5

### 解题思路

**滑动窗口（双指针）**

- 用左指针 `l`（从 1 开始）和右指针 `r`（从 2 开始）维护一个连续正整数窗口。
- 窗口和 `sum = (l + r) * (r - l + 1) / 2`（等差数列求和）。
- 若 `sum < target`：窗口太小，`r++` 扩大窗口。
- 若 `sum > target`：窗口太大，`l++` 缩小窗口。
- 若 `sum === target`：记录窗口 `[l, r]`，然后 `l++` 继续寻找下一组。
- 由于至少两个数，循环条件为 `l < r`，且 `l <= target / 2` 即可剪枝。

**复杂度**：时间 O(target)，空间 O(1)（不计返回结果）。
