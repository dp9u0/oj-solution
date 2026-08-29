# [3974] Maximum Total Sum of K Selected Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-total-sum-of-k-selected-elements/description/)

* algorithms
* Medium (49.47%)
* Likes:    52
* Dislikes: 5
* Testcase Example:  '[6,1,2,9]\n3\n2'

```md
You are given an integer array nums and two integers k and mul.
Select exactly k elements from nums. Process these elements one by one in any order you choose.
For each selected element, independently choose one of the following:

Add the element&#39;s value to the total sum, or
Multiply the element by the current value of mul and add the result to the total sum.

After processing each selected element, mul decreases by 1, regardless of which option was chosen. The current value of mul may become 0 or negative.
Return an integer denoting the maximum possible total sum.

Example 1:

Input: nums = [6,1,2,9], k = 3, mul = 2
Output: 26
Explanation:
One optimal way:

One optimal selection is nums[3] = 9, nums[0] = 6, and nums[2] = 2.
Process nums[3] = 9 first: choose multiplication, so it contributes 9 * 2 = 18. Now, mul becomes 1.
Process nums[0] = 6 next: choose multiplication, so it contributes 6 * 1 = 6. Now, mul becomes 0.
Process nums[2] = 2 last: choose addition, so it contributes 2.
The total sum is 18 + 6 + 2 = 26.


Example 2:

Input: nums = [3,7,5,2], k = 2, mul = 4
Output: 43
Explanation:
One optimal way:

One optimal selection is nums[1] = 7 and nums[2] = 5.
Process nums[1] = 7 first: choose multiplication, so it contributes 7 * 4 = 28. Now, mul becomes 3.
Process nums[2] = 5 next: choose multiplication, so it contributes 5 * 3 = 15.
The total sum is 28 + 15 = 43.


Example 3:

Input: nums = [4,4], k = 1, mul = 1
Output: 4
Explanation:
One optimal way:

One optimal selection is nums[0] = 4.
Process nums[0] = 4: choose multiplication, so it contributes 4 * 1 = 4.
The total sum is 4.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= k <= nums.length
1 <= mul <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 `nums` 和整数 `k`、`mul`。选恰好 k 个元素，任意顺序逐个处理；每个元素二选一：加其值本身，或加 `值 × 当前 mul`；每处理一个元素 mul 减 1（无论选哪个），mul 可到 0 或负。返回最大总和。

示例 1：`[6,1,2,9], k=3, mul=2` → `26`（9×2 + 6×1 + 2×1）
示例 2：`[3,7,5,2], k=2, mul=4` → `43`（7×4 + 5×3）
示例 3：`[4,4], k=1, mul=1` → `4`

约束：`n ≤ 10^5`，`nums[i] ≤ 10^5`，`mul ≤ 10^5`

## 解题思路

第 j 个被处理的元素槽位乘数为 `mul − j`，元素实际乘数 = `max(1, mul − j)`（槽位 ≥1 时乘法不劣，槽位 ≤0 时选加法即 ×1）。

- 选哪 k 个：值全为正且权重 ≥1 → 取最大的 k 个；
- 如何配对：**重排不等式**——值降序与权重降序对应相乘最大。权重序列 max(1, mul−j) 本身随 j 递减 ✓ 顺序天然降序。

排序后 O(k) 求和。和 ≤ 10^5×10^5×10^5 = 10^15 < 2^53 安全。

验证示例 1：排序 [9,6,2,1]，权重 [2,1,1] → 18+6+2 = 26 ✓
