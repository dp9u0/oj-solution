# [3985] Palindromic Subarray Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/palindromic-subarray-sum/description/)

* algorithms
* Hard (34.34%)
* Likes:    43
* Dislikes: 6
* Testcase Example:  '[10,10]'

```md
You are given an integer array nums.
Return the maximum possible sum of a subarray of nums that is a palindrome.

Example 1:

Input: nums = [10,10]
Output: 20
Explanation:
The whole array [10,10] is a palindrome. Therefore, the maximum sum is 10 + 10 = 20.

Example 2:

Input: nums = [1,2,3,2,1,5,6]
Output: 9
Explanation:
The contiguous subarray [1,2,3,2,1] is a palindrome. Its sum is 1 + 2 + 3 + 2 + 1 = 9 and it is the maximum sum.

Example 3:

Input: nums = [7,1,2,1,7,3,4,3,4]
Output: 18
Explanation:
The contiguous subarray [7,1,2,1,7] is a palindrome. Its sum is 7 + 1 + 2 + 1 + 7 = 18 and it is the maximum sum.

Example 4:

Input: nums = [1,2,3,4,5]
Output: 5
Explanation:
No subarray with length greater than 1 is a palindrome. The largest element in the array is 5. Therefore, the answer is 5.

Example 5:

Input: nums = [1000]
Output: 1000
Explanation:
The subarray with only one element is a palindrome. Therefore, the answer is 1000.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 10​​​​​​​9


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 `nums`。返回**是回文**的子数组的最大可能和。

示例 1：`[10,10]` → `20`（整个数组是回文）
示例 2：`[1,2,3,2,1,5,6]` → `9`（`[1,2,3,2,1]`）
示例 3：`[7,1,2,1,7,3,4,3,4]` → `18`（`[7,1,2,1,7]`）
示例 4：`[1,2,3,4,5]` → `5`（无长度 >1 的回文，取最大单元素）
示例 5：`[1000]` → `1000`

约束：`1 <= n <= 10^5`，`1 <= nums[i] <= 10^9`（**全为正数**）

## 解题思路

两个关键观察：

1. **元素全为正** ⇒ 若回文还能向两侧扩展（`nums[l-1] == nums[r+1]`），扩展必更优。所以答案必是某个中心下的**极大回文**（不能再扩展）。
2. 枚举中心 + 双指针扩展在交错型数组（如 `1,2,1,2,...`）下总扩展量 O(n²) 会超时——用 **Manacher** 在 O(n) 内求出**每个中心**的极大回文半径。

做法：

- 值域作字符，插入分隔符 `-1`（值 ≥ 1，不冲突），标准 Manacher 求 `p[i]`；
- 前缀和 `pre`，对每个中心把 t 坐标 `[i-p, i+p]` 映射回原数组区间 `[L, R]`（`L = (i-p) >> 1`，`R = (i+p-1) >> 1`，`L > R` 表示空跳过），候选取 `pre[R+1] - pre[L]`；
- 答案 = 所有中心候选的最大值。

和 ≤ 10^5 × 10^9 = 10^14 < 2^53，双精度安全。复杂度 O(n)。

验证示例 3：Manacher 在中心 `2`（值 1）处得极大回文 `[7,1,2,1,7]`，和 18 ✓
