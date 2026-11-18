# [360] 有序转化数组

## Description


```md
https://leetcode.cn/problems/sort-transformed-array/description/
* algorithms
* Medium (63.14%)
* Likes:    93
* Dislikes: -
* Testcase Example:  '[-4,-2,2,4]\n1\n3\n5'
给你一个已经 排好序 的整数数组 nums 和整数 a 、 b 、 c 。对于数组中的每一个元素 nums[i] ，计算函数值 f(x) = ax2 + bx + c ，请 按升序返回数组 。

示例 1：
输入: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
输出: [3,9,15,33]
示例 2：
输入: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
输出: [-23,-5,1,7]

提示：
1 <= nums.length <= 200
-100 <= nums[i], a, b, c <= 100
nums 按照 升序排列

进阶：你可以在时间复杂度为 O(n) 的情况下解决这个问题吗？
Hint 1: x^2 + x  will form a parabola.
Hint 2: Parameter A in:  A * x^2 + B * x + C dictates the shape of the parabola.
Positive A means the parabola remains concave (high-low-high), but negative A inverts the parabola to be convex (low-high-low).

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a **sorted** integer array `nums` and integers `a`, `b`, `c`, apply the quadratic function `f(x) = ax² + bx + c` to each element `nums[i]` and return the resulting array in **ascending** order.

- Example 1: Input: `nums = [-4,-2,2,4], a = 1, b = 3, c = 5` → Output: `[3,9,15,33]`
- Example 2: Input: `nums = [-4,-2,2,4], a = -1, b = 3, c = 5` → Output: `[-23,-5,1,7]`

Constraints: `1 <= nums.length <= 200`; `-100 <= nums[i], a, b, c <= 100`; `nums` is sorted ascending.

Follow-up: could you solve it in O(n)?

## Approach

f(x) = ax² + bx + c 是抛物线:

- **a > 0**(开口向上):两侧端点的函数值是全局较大的一批,顶点附近最小。nums 有序 → 双指针从两端收缩,每次取两端**较大**者放入结果**末尾**。
- **a < 0**(开口向下):两侧端点是最小的一批 → 每次取两端**较小**者放入结果**开头**。
- **a = 0**:退化为线性 bx + c。b ≥ 0 时直接映射已有序;b < 0 映射后 reverse。

时间 O(n),空间 O(n)(输出),满足进阶要求。
