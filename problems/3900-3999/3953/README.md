# [3953] Maximum Score with Co-Prime Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-with-co-prime-element/description/)

* algorithms
* Hard (29.02%)
* Likes:    27
* Dislikes: 5
* Testcase Example:  '[3,4,6]\n5'

```md
You are given an integer array nums of length n and an integer maxVal.
You may change any element in nums to any positive integer less than or equal to maxVal. Each such change costs 1.
Two integers are co-prime if their greatest common divisor (GCD) is 1.
After all modifications, you must choose an index i such that, nums[i] is co-prime with every other element nums[j].
Let:

selectedValue be the final value of nums[i] after modifications.
modificationCost be the total number of elements changed.

The score is defined as score = selectedValue - modificationCost.
Return the maximum possible score.

Example 1:

Input: nums = [3,4,6], maxVal = 5
Output: 4
Explanation:
Change nums[2] from 6 to 5, which costs 1. Choose nums[2] = 5, since it is co-prime with 3 and 4.

selectedValue = 5
modificationCost = 1
The score is 5 - 1 = 4


Example 2:

Input: nums = [1,2,3], maxVal = 4
Output: 3
Explanation:
No modifications are required. Choose nums[2] = 3, since it is co-prime with 1 and 2.

selectedValue = 3
modificationCost = 0
The score is 3 - 0 = 3


Example 3:

Input: nums = [2,2], maxVal = 1
Output: 1
Explanation:
Change nums[0] from 2 to 1, which costs 1. Choose nums[1] = 2, since it is co-prime with 1.

selectedValue = 2
modificationCost = 1
The score is ​​​​​​​2 - 1 = 1



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= maxVal <= 10​​​​​​​5


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

可把任意元素改为 ≤ maxVal 的正整数（每次花费 1）。最后选一个下标 i，使 `nums[i]` 与**其他所有元素**互素。得分 = 选中元素最终值 − 修改次数。返回最大得分。

示例 1：`[3,4,6], maxVal=5` → `4`（把 6 改成 5）

约束：n ≤ 10^5，值与 maxVal ≤ 10^5

## 解题思路

枚举选中元素的最终值 v：

- **候选 = [1, maxVal] 全部 + 原数组中的去重值（保留原值不必改，可超过 maxVal）**——后者是易漏点；
- 代价：其他与 v 不互素的元素各需改 1 次；选中元素若已等于 v（保留）免改，否则改 1 次。

与 v 不互素的个数用**容斥**：SPF 筛取 v 的不同质因数集合 P，#互素 = Σ_{S⊆P} (−1)^{|S|}·cnt[∏S]，其中 cnt[m] = 能被 m（无平方）整除的元素个数，由每个元素的质因数子集预统计。每个值 ≤ 64 个子集，总计 ~10^7。