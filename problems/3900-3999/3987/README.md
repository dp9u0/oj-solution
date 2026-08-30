# [3987] Minimum Total Cost to Process All Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-total-cost-to-process-all-elements/description/)

* algorithms
* Medium (24.90%)
* Likes:    66
* Dislikes: 15
* Testcase Example:  '[1,2,3,4]\n4'

```md
You are given an integer array nums and an integer k.
Initially, you have k units of resources.
You must process the elements of nums from left to right. To process the ith element, you need nums[i] resources.
If your available resources are less than nums[i], you may perform an operation that increases your available resources by k. The value of k is fixed and does not change throughout the process. The first such operation incurs a cost of 1, the second incurs a cost of 2, and so on.
After processing the ith element, your available resources decrease by nums[i].
Return an integer denoting the minimum total cost required to process all elements. Since the answer may be very large, return it modulo 109 + 7.

Example 1:
Input: nums = [1,2,3,4], k = 4
Output: 3
Explanation:
After processing nums[0], we have 4 - 1 = 3 units of resources left.
After processing nums[1], we have 3 - 2 = 1 unit of resources left.
Since nums[2] = 3 and only 1 unit of resources is available, we perform the first operation costing 1. After processing nums[2], we have 1 + 4 - 3 = 2 units of resources left.
Since nums[3] = 4 and only 2 units of resources are available, we perform the second operation costing 2, to have 2 + 4 = 6 units of resources, which is enough to process nums[3].
Thus, the total cost is 1 + 2 = 3.
Example 2:
Input: nums = [1,1,7,14], k = 4
Output: 15
Explanation:
After processing nums[0], we have 4 - 1 = 3 units of resources left.
After processing nums[1], we have 3 - 1 = 2 units of resources left.
Since nums[2] = 7 and only 2 units of resources are available, we perform two operations costing 1 + 2 = 3. After processing nums[2], we have 2 + 4 + 4 - 7 = 3 units of resources left.
Since nums[3] = 14 and only 3 units of resources are available, we perform three operations costing 3 + 4 + 5 = 12, to have 3 + 4 + 4 + 4 = 15 units of resources, which is enough to process nums[3].
Thus, the total cost is 3 + 12 = 15.
Example 3:
Input: nums = [1,2,3,4], k = 10
Output: 0
Explanation:
To process all elements, we can use the initial 10 units of resources without performing any operations. Thus, the total cost required is 0.

Constraints:
1
1
1
Hint 1: Perform an operation only when the current resources are less than the next required value.
Hint 2: If x more operations are needed after already performing cnt operations, their cost is (cnt + 1) + (cnt + 2) + ... + (cnt + x).
Hint 3: Use the arithmetic progression formula to add this cost efficiently, then update the current resources and continue scanning nums.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个整数数组 `nums` 和一个整数 `k`。

最初，你拥有 `k` 个单位的资源。你必须从左到右依次处理 `nums` 的所有元素。处理第 `i` 个元素需要消耗 `nums[i]` 个单位的资源。

如果你当前的可用资源小于 `nums[i]`，你可以执行一次"操作"，使可用资源增加 `k`。`k` 的值在整个过程中固定不变。第一次操作花费代价 1，第二次花费代价 2，以此类推（第 j 次操作花费 j）。

处理完第 `i` 个元素后，可用资源减少 `nums[i]`。

返回处理完所有元素所需的最小总代价。由于答案可能很大，返回其对 10^9 + 7 取模的结果。

示例 1：
输入：nums = [1,2,3,4], k = 4
输出：3
解释：处理完前两个元素后剩 1 个资源；处理 nums[2]=3 前执行第一次操作（代价 1）；处理 nums[3]=4 前执行第二次操作（代价 2）。总代价 1 + 2 = 3。

示例 2：
输入：nums = [1,1,7,14], k = 4
输出：15
解释：处理 nums[2]=7 前执行两次操作（代价 1+2=3），处理 nums[3]=14 前执行三次操作（代价 3+4+5=12）。总代价 15。

示例 3：
输入：nums = [1,2,3,4], k = 10
输出：0
解释：初始 10 个资源足够处理所有元素，无需任何操作。

## 解题思路

**数学推导（O(n) 闭式解）：**

设 `S = sum(nums)`，`prefix(i)` 为前 i 个元素之和。处理第 i 个元素前，若已执行 `o` 次操作，可用资源为 `k + o·k − prefix(i)`，需满足：

```
k + o·k − prefix(i) ≥ nums[i]   ⟺   o ≥ ceil((prefix(i+1) − k) / k)
```

- 由于 `nums[i] ≥ 1`，前缀和单调不减，最紧的约束出现在最后一个元素，故最少总操作数 `m = ceil((S − k) / k)`，当 `S > k` 时等价于 `m = floor((S − 1) / k)`（`S ≤ k` 时 m = 0，该式同样成立）。
- 贪心（仅在资源不足时执行操作）恰好达到该下界，且多执行操作只会增加代价（第 j 次操作代价固定为 j），所以最优总代价只由 m 决定：

```
answer = 1 + 2 + ... + m = m(m+1)/2  (mod 1e9+7)
```

**实现要点：** n 与 nums[i] 均可到 1e9 量级，S 可达 ~1e14，m ~1e14，m(m+1)/2 超出 Number 安全整数范围，全程用 `BigInt` 计算，最后取模返回。

**验证示例：** Ex1: S=10,k=4 → m=⌊9/4⌋=2 → 3 ✓；Ex2: S=23,k=4 → m=⌊22/4⌋=5 → 15 ✓；Ex3: S=10,k=10 → m=⌊9/10⌋=0 → 0 ✓。
