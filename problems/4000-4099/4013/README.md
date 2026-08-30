# [4013] Count Subarrays With Even Odd Ratio II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-with-even-odd-ratio-ii/description/)

* algorithms
* Hard (40.12%)
* Likes:    50
* Dislikes: 2
* Testcase Example:  '[1,2,1,2]\n3\n2'

```md
You are given an integer array nums and two integers a and b.
For a subarray, let:
x be the number of even elements.
y be the number of odd elements.
The ratio of even to odd elements in a subarray is defined as x / y, where ratios are compared by their exact rational values.
A subarray is considered valid if:
y > 0, and
x / y <= a / b.
Return the number of valid subarrays in nums.

Example 1:
Input: nums = [1,2,1,2], a = 3, b = 2
Output: 7
Explanation:
The following are the valid subarrays:


Subarray
Values
Even Count
Odd Count
Ratio


nums[0..0]
[1]
0
1
0 / 1


nums[0..1]
[1, 2]
1
1
1 / 1


nums[0..2]
[1, 2, 1]
1
2
1 / 2


nums[0..3]
[1, 2, 1, 2]
2
2
2 / 2


nums[1..2]
[2, 1]
1
1
1 / 1


nums[2..2]
[1]
0
1
0 / 1


nums[2..3]
[1, 2]
1
1
1 / 1


Thus, the number of valid subarrays is 7.
Example 2:
Input: nums = [2,2,1], a = 2, b = 1
Output: 3
Explanation:
The following are the valid subarrays:


Subarray
Values
Even Count
Odd Count
Ratio


nums[0..2]
[2, 2, 1]
2
1
2 / 1


nums[1..2]
[2, 1]
1
1
1 / 1


nums[2..2]
[1]
0
1
0 / 1


Thus, the number of valid subarrays is 3.
Example 3:
Input: nums = [2,2,2], a = 1, b = 1
Output: 0
Explanation:
Every subarray contains 0 odd numbers, so no subarray is valid.

Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= a, b <= 109​​​​​​​
Hint 1: Replace every even element with b and every odd element with -a. A subarray is valid exactly when its transformed sum is at most 0.
Hint 2: The condition y > 0 is then automatic, because a non-empty subarray containing only even elements has a positive transformed sum.
Hint 3: Let pref[i] be the prefix sum of the transformed array. A subarray [l, r] is valid when pref[r + 1] <= pref[l].
Hint 4: Scan the prefix sums from left to right and count how many previous prefix sums are greater than or equal to the current one using coordinate compression and a Fenwick tree.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个整数数组 `nums` 和两个整数 `a`、`b`。

对于一个子数组，令：
- `x` 为其中偶数元素的个数
- `y` 为其中奇数元素的个数

子数组中偶数与奇数元素的比例定义为 `x / y`（按精确有理数值比较）。

一个子数组是**有效的**当且仅当：
- `y > 0`，且
- `x / y <= a / b`

返回 `nums` 中有效子数组的数量。

**示例 1**：`nums = [1,2,1,2], a = 3, b = 2` → 输出 `7`（7 个子数组满足条件，如 [1]、[1,2]、[1,2,1] 等）

**示例 2**：`nums = [2,2,1], a = 2, b = 1` → 输出 `3`

**示例 3**：`nums = [2,2,2], a = 1, b = 1` → 输出 `0`（所有子数组都没有奇数，全部无效）

**约束**：`1 <= nums.length <= 10^5`，`1 <= nums[i] <= 10^9`，`1 <= a, b <= 10^9`

## 解题思路

**变换 + 前缀和 + 树状数组（逆序对计数）**

1. **等价变换**：把每个偶数元素替换为 `+b`，每个奇数元素替换为 `-a`。子数组变换和为 `x·b − y·a`。
   - `x/y <= a/b`（`b, y > 0`）⟺ `x·b <= y·a` ⟺ 变换和 `<= 0`
   - `y > 0` 自动满足：若子数组全是偶数，变换和 = `x·b > 0`，不满足 `<= 0`
2. **前缀和**：设 `pref[i]` 为变换数组的前缀和（`pref[0] = 0`），子数组 `[l, r]` 有效 ⟺ `pref[r+1] − pref[l] <= 0` ⟺ `pref[r+1] <= pref[l]`。
3. **计数**：从左到右扫描 `pref[0..n]`，统计满足 `i < j` 且 `pref[i] >= pref[j]` 的对数——即对每个 `j` 查询之前插入的值中 `>= pref[j]` 的个数（已插入总数 − 比 `pref[j]` 小的个数）。
4. **实现**：前缀和值域达 `10^14`，先坐标压缩到 `[1, m]`，再用 Fenwick 树（树状数组）维护出现次数，单点更新 + 前缀查询，总复杂度 `O(n log n)`。
5. **数值范围**：`|pref| <= 10^5 × 10^9 = 10^14 < 2^53`，答案 `<= n(n+1)/2 ≈ 5×10^9 < 2^53`，JS number 精确安全。
