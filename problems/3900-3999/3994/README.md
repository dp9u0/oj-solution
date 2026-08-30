# [3994] Minimum Adjacent Swaps to Partition Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-adjacent-swaps-to-partition-array/description/)

* algorithms
* Medium (56.98%)
* Likes:    64
* Dislikes: 3
* Testcase Example:  '[1,3,2,4,5,6]\r\n3\r\n4\r'

```md
You are given an integer array nums and two integers a and b such that a < b.
An array is called good if it can be split into three contiguous parts, in this order, such that:
Every element in the first part is less than a.
Every element in the second part is in the range [a, b] inclusive.
Every element in the third part is greater than b.
Any of the three parts may be empty.
In one adjacent swap, you may swap two neighboring elements of nums.
Return the minimum number of adjacent swaps required to make nums good. Since the answer may be very large, return it modulo 109 + 7.

Example 1:
Input: nums = [1,3,2,4,5,6], a = 3, b = 4
Output: 1
Explanation:
Swap nums[1] and nums[2]. The array becomes [1, 2, 3, 4, 5, 6].
This array is good because it can be split into [1, 2], [3, 4], and [5, 6].
Example 2:
Input: nums = [9,7,5,3], a = 4, b = 8
Output: 5
Explanation:
One sequence of optimal swaps is as follows:
Swap nums[2] and nums[3]. The array becomes [9, 7, 3, 5].
Swap nums[1] and nums[2]. The array becomes [9, 3, 7, 5].
Swap nums[0] and nums[1]. The array becomes [3, 9, 7, 5].
Swap nums[1] and nums[2]. The array becomes [3, 7, 9, 5].
Swap nums[2] and nums[3]. The array becomes [3, 7, 5, 9].
This array is good because it can be split into [3], [7, 5], and [9].
Example 3:
Input: nums = [3,7,5,9], a = 4, b = 8
Output: 0
Explanation:
The array is already good. No swaps are needed.

Constraints:
1 <= nums.length <= 105
​​​​​​​1 <= nums[i] <= 109
1 <= a < b <= 109​​​​​​​
Hint 1: Replace each element with its group number: 0 if it is less than a, 1 if it is in the range [a, b], and 2 if it is greater than b.
Hint 2: After this replacement, the goal is to make the array sorted in non-decreasing order.
Hint 3: With adjacent swaps, the minimum number of swaps needed is the number of inversions in this group array.
Hint 4: Since there are only three possible group values, scan from left to right and count how many previous values are greater than the current value.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个整数数组 `nums` 和两个整数 `a`、`b`，且 `a < b`。

如果一个数组能被切分成**连续的三段**（按顺序），则称其为「好数组」：
- 第一段中的每个元素都**小于** `a`；
- 第二段中的每个元素都在 `[a, b]` 范围内（含边界）；
- 第三段中的每个元素都**大于** `b`。
- 三段中任意一段都可以为空。

每次操作可以交换 `nums` 中相邻的两个元素。返回使 `nums` 变成好数组所需的最少相邻交换次数。由于答案可能很大，返回对 `10^9 + 7` 取模的结果。

**示例 1：**
输入：`nums = [1,3,2,4,5,6], a = 3, b = 4`
输出：`1`
解释：交换 `nums[1]` 和 `nums[2]`，数组变为 `[1,2,3,4,5,6]`，可切分为 `[1,2] | [3,4] | [5,6]`。

**示例 2：**
输入：`nums = [9,7,5,3], a = 4, b = 8`
输出：`5`

**示例 3：**
输入：`nums = [3,7,5,9], a = 4, b = 8`
输出：`0`（已经是好数组）

**约束：**
- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= a < b <= 10^9`

## 解题思路

**核心转化：** 将每个元素替换为组号：小于 `a` 记为 `0`，在 `[a, b]` 内记为 `1`，大于 `b` 记为 `2`。替换后目标是让组数组**非递减排序**（任何好数组切分都等价于组数组有序）。

**逆序对 = 最少相邻交换次数：** 冒泡排序的经典结论：用相邻交换将数组排序的最少交换次数等于数组中的逆序对数量（每次相邻交换至多消除一个逆序对，且总能选到能消除逆序对的相邻对）。

**O(n) 统计：** 组号只有 0/1/2 三种取值，无需树状数组。从左到右扫描，维护已出现的 `1` 的个数 `cnt1` 和 `2` 的个数 `cnt2`：
- 遇到 `0`：它与之前所有 `1` 和 `2` 都构成逆序对，`ans += cnt1 + cnt2`；
- 遇到 `1`：它与之前所有 `2` 构成逆序对，`ans += cnt2`，然后 `cnt1++`；
- 遇到 `2`：`cnt2++`。

对 `10^9 + 7` 取模输出。时间复杂度 O(n)，空间复杂度 O(1)。
