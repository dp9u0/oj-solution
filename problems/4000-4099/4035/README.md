# [4035] Maximum Valid Split Positions I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-valid-split-positions-i/description/)

* algorithms
* Medium (50.23%)
* Likes:    19
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
2 <= nums.length <= 1000
1 <= nums[i] <= 109​​​​​​​
Hint 1: For a fixed remaining array arr, prefix and suffix GCD arrays let you determine its score in linear time.
Hint 2: Consider separately removing no element and removing each possible element. Since nums.length <= 1000, recomputing the score for every choice is fast enough.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个整数数组 `nums`。

你可以从 `nums` 中**最多移除一个**元素。设 `arr` 为剩余元素按原顺序组成的数组，`m` 为其长度。

分割位置 `i` 是**有效的**，当且仅当：
- `0 <= i < m - 1`，且
- `gcd(arr[0..i]) == gcd(arr[i+1..m-1])`

长度为 1 的数组没有有效分割位置。

`arr` 的得分 = 有效分割位置的数量。

返回 `arr` 可能的最大得分。

其中 `gcd(a)` 表示数组 `a` 中所有元素的最大公约数。

**示例 1：**
输入：`nums = [10,30,15,10]`，输出：`2`
移除 `nums[2] = 15` 后 `arr = [10,30,10]`，两个分割位置的前后 gcd 均为 10，全部有效。

**示例 2：**
输入：`nums = [2,10,14]`，输出：`1`
不移除任何元素，仅分割位置 0 有效（gcd(2)=2 == gcd(10,14)=2）。

**示例 3：**
输入：`nums = [2,4]`，输出：`0`
唯一可分割的数组是 `[2,4]` 本身，2 != 4，无有效分割位置。

**约束：**
- `2 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^9`

## 解题思路

**核心：前缀/后缀 GCD + 枚举删除位置**

1. **固定数组的得分（线性）**：预处理后缀 gcd 数组 `suf[i] = gcd(arr[i..m-1])`，再从左往右维护前缀 gcd，对每个分割位置 `i` 判断 `pre(i) == suf[i+1]`。利用 `gcd(0, x) = x`，用 `0` 作为 gcd 的单位元。
2. **枚举删除选择**：分别计算「不删除」和「删除每个下标 `j`」（仅当 `n >= 3`，否则删后长度为 1 得分为 0）之后的得分，取最大值。
3. **复杂度**：`n+1` 种选择 × 每种 O(n) → 总计 **O(n²)** 次 gcd 运算，`n <= 1000` 完全够快（约 10⁶ 次 gcd）。

这符合官方提示：`nums.length <= 1000` 时对每种删除选择重算得分是足够快的。
