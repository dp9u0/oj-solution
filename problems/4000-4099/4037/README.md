# [4037] Maximum Valid Split Positions II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-valid-split-positions-ii/description/)

* algorithms
* Hard (26.97%)
* Likes:    17
* Dislikes: 3
* Testcase Example:  '[10,30,15,10]'

```md
You are given an integer array nums.
You may remove at most one element from nums. Let arr be the array of remaining elements in their original order, and let m be its length.
A split position i of arr is valid if:
0 <= i < m - 1, and
gcd(arr[0..i]) == gcd(arr[i + 1..m - 1]).
An array of length 1 has no valid split positions.
The score of arr is the number of valid split positions in it.
Return the maximum possible score of arr.
Here, gcd(a) denotes the greatest common divisor of all elements in the array a.

Example 1:
Input: nums = [10,30,15,10]
Output: 2
Explanation:
One optimal solution is to remove nums[2] = 15. Then arr = [10, 30, 10].
The split positions are:


Split Position i
gcd(arr[0..i])
gcd(arr[i + 1..m - 1])


0
10
10


1
10
10


All split positions are valid. Thus, the answer is 2.
Example 2:
Input: nums = [2,10,14]
Output: 1
Explanation:
One optimal solution is to not remove any element. Then arr = [2, 10, 14].
The split positions are:


Split Position i
gcd(arr[0..i])
gcd(arr[i + 1..m - 1])


0
2
2


1
2
14


Only the split position at index 0 is valid. Thus, the answer is 1.
Example 3:
Input: nums = [2,4]
Output: 0
Explanation:
The only remaining array that has a split position is arr = [2, 4].
The split positions are:


Split Position i
gcd(arr[0..i])
gcd(arr[i + 1..m - 1])


0
2
4


There are no valid split positions. Thus, the answer is 0.

Constraints:
2 <= nums.length <= 105
1 <= nums[i] <= 109​​​​​​​
Hint 1: Precompute prefix and suffix GCDs, and also consider the case where no element is removed. For a fixed removed index j, splits entirely to either side of j can be expressed using the GCD of two unaffected ranges; if 0 < j < n - 1, also consider the new split created between nums[j - 1] and nums[j + 1].
Hint 2: Do not examine every split separately for every j. As one endpoint of a range moves, its GCD can change only a small number of times: every strict decrease changes it to a proper divisor. Group consecutive split positions having the same GCD and process those groups together.

```

## 题目翻译（中文）

给你一个整数数组 `nums`。你可以从 `nums` 中**最多删除一个元素**。设 `arr` 是删除后按原顺序剩余元素组成的数组，`m` 为其长度。

分割位置 `i`（`0 <= i < m - 1`）是**有效的**，当且仅当：

- `gcd(arr[0..i]) == gcd(arr[i+1..m-1])`

长度为 1 的数组没有有效分割位置。`arr` 的得分是其中有效分割位置的数量。返回 `arr` 可能的最大得分。

**示例 1**：`nums = [10,30,15,10]`，输出 `2`。删除 `nums[2]=15` 后 `arr=[10,30,10]`，两个分割位置均有效。

**示例 2**：`nums = [2,10,14]`，输出 `1`。不删除任何元素时只有分割位置 0 有效（`2 == 2`）。

**示例 3**：`nums = [2,4]`，输出 `0`。

**约束**：`2 <= n <= 10^5`，`1 <= nums[i] <= 10^9`。

## 解题思路

**核心观察**：设原数组中"切分点" `t` 表示左部为 `nums[0..t-1]`、右部为 `nums[t..n-1]`。删除下标 `j` 后，`arr` 的每个分割位置唯一对应一个原数组切分点 `t`，分三类（互不重叠）：

1. **`t <= j-1`（删除元素在切分点右侧）**：左部不受影响为 `P[t-1]`（前缀 gcd），右部为 `gcd(gcd(nums[t..j-1]), S[j+1])`（后缀 gcd）。
2. **`t >= j+2`（删除元素在切分点左侧）**：左部为 `gcd(P[j-1], gcd(nums[j+1..t-1]))`，右部不受影响为 `S[t]`。
3. **中间切分（`t = j` 或 `t = j+1`，删除后为同一个 arr 分割位置）**：左部为 `P[j-1]`，右部为 `S[j+1]`，仅判一次相等。

再加上**不删除**的情况：统计 `P[t-1] == S[t]` 的个数。答案取所有方案的最大值。

**关键效率点（避免 O(n²)）**：固定 `j` 时，第 1/2 类条件的两侧 gcd 都是关于切分点单调的阶梯函数（一侧非增、一侧非减）。由经典结论：固定一端移动另一端时，区间 gcd 的不同取值只有 `O(log A)` 个（每次严格下降都变为真因子）。因此：

- 维护「以 `s` 为起点的区间 gcd 关于右端点的阶梯」`startList[s]`（从 `n-1` 倒序增量构建，与上一项逐个求 gcd 并去重）；
- 维护「以 `e` 为终点的区间 gcd 关于左端点的阶梯」`endList[e]`（从 `0` 正序增量构建）；
- `P`、`S` 本身的等值段也用游程（run）分解。

对每个 `j`，把两侧阶梯按游程区间做双指针扫描，值相等则累加重叠长度。总复杂度 **O(n log max(nums))**。

## Solution

[SourceCode](./solution.js)
