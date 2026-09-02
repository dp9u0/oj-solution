# [LCP 28] 采购方案

## Description


```md
https://leetcode.cn/problems/4xy4Wx/description/
* algorithms
* Easy (35.95%)
* Likes:    71
* Dislikes: -
* Testcase Example:  '[2,5,3,5]\n6'
小力将 N 个零件的报价存于数组 `nums`。小力预算为 `target`，假定小力仅购买两个零件，要求购买零件的花费不超过预算，请问他有多少种采购方案。
注意：答案需要以 `1e9 + 7 (1000000007)` 为底取模，如：计算初始结果为：`1000000008`，请返回 `1`
**示例 1：**
>输入：`nums = [2,5,3,5], target = 6`
>
>输出：`1`
>
>解释：预算内仅能购买 nums[0] 与 nums[2]。
**示例 2：**
>输入：`nums = [2,2,1,9], target = 10`
>
>输出：`4`
>
>解释：符合预算的采购方案如下：
>nums[0] + nums[1] = 4
>nums[0] + nums[2] = 3
>nums[1] + nums[2] = 3
>nums[2] + nums[3] = 10
**提示：**
- `2 <= nums.length <= 10^5`
- `1 <= nums[i], target <= 10^5`

```

## English Description

A small force stores the quotes of N parts in array `nums`. The budget is `target`. Assuming he only buys two parts, and the total cost of the two parts must not exceed the budget, how many purchase plans are there?

Note: return the answer modulo `1e9 + 7 (1000000007)`.

**Example 1:**
>Input: `nums = [2,5,3,5], target = 6`
>
>Output: `1`
>
>Explanation: Only `nums[0] + nums[2]` is within budget.

**Example 2:**
>Input: `nums = [2,2,1,9], target = 10`
>
>Output: `4`
>
>Explanation: Valid plans are: nums[0]+nums[1]=4, nums[0]+nums[2]=3, nums[1]+nums[2]=3, nums[2]+nums[3]=10.

**Constraints:**
- `2 <= nums.length <= 10^5`
- `1 <= nums[i], target <= 10^5`

## Solution

### 思路

统计满足 `nums[i] + nums[j] <= target` 且 `i < j` 的下标对数量。

**排序 + 双指针**：先升序排序。初始化左右指针 `l = 0`, `r = n - 1`：
- 若 `nums[l] + nums[r] <= target`，说明对当前最小的 `l`，与 `(l, r]` 内任意下标配对都不超过预算（因为数组有序，`nums[r]` 是右半最大，左边更小），可贡献 `r - l` 对，累加后 `l++`。
- 否则说明当前 `r` 过大，与任何 `l` 之后的元素相加都会超预算，`r--`。

每次循环必有一个指针移动，复杂度 O(n)；排序 O(n log n)。总复杂度 O(n log n)，空间 O(1)（排序原地）。

## Approach

Sort the array, then use two pointers. Count pairs with sum not exceeding the budget, accumulating `r - l` pairs each time the left pointer can be fixed. Modulo `1e9 + 7` at the end.

## SourceCode

[SourceCode](./solution.js)
