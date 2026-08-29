# [3830] Longest Alternating Subarray After Removing At Most One Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-alternating-subarray-after-removing-at-most-one-element/description/)

* algorithms
* Hard (31.70%)
* Likes:    77
* Dislikes: 1
* Testcase Example:  '[2,1,3,2]'

```md
You are given an integer array nums.
A subarray nums[l..r] is alternating if one of the following holds:

nums[l] < nums[l + 1] > nums[l + 2] < nums[l + 3] > ...
nums[l] > nums[l + 1] < nums[l + 2] > nums[l + 3] < ...

In other words, if we compare adjacent elements in the subarray, then the comparisons alternate between strictly greater and strictly smaller.
You can remove at most one element from nums. Then, you select an alternating subarray from nums.
Return an integer denoting the maximum length of the alternating subarray you can select.
A subarray of length 1 is considered alternating.

Example 1:

Input: nums = [2,1,3,2]
Output: 4
Explanation:

Choose not to remove elements.
Select the entire array [2, 1, 3, 2], which is alternating because 2 > 1 < 3 > 2.


Example 2:

Input: nums = [3,2,1,2,3,2,1]
Output: 4
Explanation:

Choose to remove nums[3] i.e., [3, 2, 1, 2, 3, 2, 1]. The array becomes [3, 2, 1, 3, 2, 1].
Select the subarray [3, 2, 1, 3, 2, 1].


Example 3:

Input: nums = [100000,100000]
Output: 1
Explanation:

Choose not to remove elements.
Select the subarray [100000, 100000].



Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

交替子数组：相邻比较严格大于/小于交替出现（`a<b>c<d…` 或 `a>b<c>d…`，长度 1 也算交替）。可以先从 `nums` 中**删除至多一个元素**，再选出最长的交替**子数组**（连续）。返回最大长度。

示例 1：`[2,1,3,2]` → `4`（不删，整段 2>1<3>2）
示例 2：`[3,2,1,2,3,2,1]` → `4`（删 `nums[3]` 后取 `2,1,3,2`）
示例 3：`[100000,100000]` → `1`

约束：`2 <= n <= 10^5`

## 解题思路

线性 DP，两条链，状态 = (长度, 末比较方向)：

- `A[i]`：**未用删除**、以 i 结尾的最长交替子数组。转移：设 s = sign(nums[i−1], nums[i])：s=0 → 1；A[i−1].len=1 或 A[i−1].sign = −s → (A[i−1].len+1, s)；否则**断而重启** (2, s)（末两元素自成新链）。
- `B[i]`：**已用一次删除**、以 i 结尾。三类转移：
  1. 续接 B[i−1]（删除发生在更早），规则同上；
  2. **删除恰为 i−1**：新比较 s2 = sign(nums[i−2], nums[i])，从 A[i−2] 接续（len=1 或 sign 相反），得 (A[i−2].len+1, s2)；
  3. 断而重启 (2, s)。

答案 = max over i 的 A/B 长度。O(n)。

验证示例 2：A 最长 3；B 在 i=5 处得 4（链 2,1 |删2| 3,2）✓
