# [4011] Count Subarrays With Even Odd Ratio I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-with-even-odd-ratio-i/description/)

* algorithms
* Medium (60.80%)
* Likes:    42
* Dislikes: 4
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

1 <= nums.length <= 1000
1 <= nums[i] <= 1000
1 <= a, b <= 1000

Hint 1: Fix the left endpoint and extend the right endpoint while maintaining the numbers of even and odd elements.
Hint 2: A subarray with y > 0 is valid exactly when b * x <= a * y. Use this comparison instead of floating-point division.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个整数数组 `nums` 和两个整数 `a`、`b`。

对于一个子数组，令：

- `x` 为其中偶数元素的个数
- `y` 为其中奇数元素的个数

子数组中偶数与奇数个数之比定义为 `x / y`，比较比值时按精确的有理数值比较。

一个子数组被认为是**合法的**，当且仅当：

- `y > 0`，且
- `x / y <= a / b`

返回 `nums` 中合法子数组的数目。

**示例 1：**

输入：`nums = [1,2,1,2], a = 3, b = 2`
输出：`7`
解释：合法子数组共 7 个：`[1]`(0/1)、`[1,2]`(1/1)、`[1,2,1]`(1/2)、`[1,2,1,2]`(2/2)、`[2,1]`(1/1)、`[1]`(0/1)、`[1,2]`(1/1)。

**示例 2：**

输入：`nums = [2,2,1], a = 2, b = 1`
输出：`3`
解释：合法子数组为 `[2,2,1]`(2/1)、`[2,1]`(1/1)、`[1]`(0/1)。

**示例 3：**

输入：`nums = [2,2,2], a = 1, b = 1`
输出：`0`
解释：每个子数组都不含奇数，因此没有合法子数组。

**约束：**

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `1 <= a, b <= 1000`

## 解题思路

**转化（避免浮点比较）**：`x / y <= a / b` 等价于 `b * x <= a * y`（b, y > 0，交叉相乘保序）。

**关键观察**：给每个元素赋权 `w[i] = b`（偶数）或 `-a`（奇数），则对子数组有 `b*x - a*y = sum(w[l..r])`，合法条件即 **区间权和 ≤ 0**。而 `y > 0` 的条件可以省略——若 `y = 0` 则子数组非空意味着 `x >= 1`，`b*x >= 1 > 0` 必然违反不等式，即满足不等式的子数组天然含有奇数。

**计数**：设前缀和 `P[0] = 0`，`P[j] = w[0] + ... + w[j-1]`，则子数组 `(l, r]` 合法 ⟺ `P[l] >= P[r]`。问题转化为统计前缀和数组中 `i < j 且 P[i] >= P[j]` 的对数，即**非严格逆序对计数**。

用树状数组（BIT）+ 离散化，从左到右扫描：每个 `P[j]` 之前统计已插入值中 `>= P[j]` 的个数，再插入自身。总复杂度 **O(n log n)**。

样例 1 验证：w = [-3, 2, -3, 2]，P = [0, -3, -1, -4, -2]，满足 `P[i] >= P[j]` (i<j) 的对数恰为 7。✓
