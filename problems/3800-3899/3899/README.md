# [3899] Angles of a Triangle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/angles-of-a-triangle/description/)

* algorithms
* Medium (62.43%)
* Likes:    40
* Dislikes: 36
* Testcase Example:  '[3,4,5]'

```md
You are given a positive integer array sides of length 3.
Determine if there exists a triangle with positive area whose three side lengths are given by the elements of sides.
If such a triangle exists, return an array of three floating-point numbers representing its internal angles (in degrees), sorted in non-decreasing order. Otherwise, return an empty array.
Answers within 10-5 of the actual answer will be accepted.

Example 1:
Input: sides = [3,4,5]
Output: [36.86990,53.13010,90.00000]
Explanation:
You can form a right-angled triangle with side lengths 3, 4, and 5. The internal angles of this triangle are approximately 36.869897646, 53.130102354, and 90 degrees respectively.
Example 2:
Input: sides = [2,4,2]
Output: []
Explanation:
You cannot form a triangle with positive area using side lengths 2, 4, and 2.

Constraints:
sides.length == 3
1 <= sides[i] <= 1000
Hint 1: Sort the sides first, then check the triangle inequality: after sorting, it is enough to verify a + b > c.
Hint 2: If valid, use the law of cosines to compute each angle in radians, then convert to degrees.
Hint 3: Sort the three angles before returning; if the triangle is invalid, return an empty array.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个长度为 3 的正整数数组 `sides`。

判断是否存在一个面积为正的三角形，其三条边长恰好为数组 `sides` 中的三个元素。

如果这样的三角形存在，返回一个包含三个浮点数的数组，表示该三角形的三个内角（单位：度），按非递减顺序排序；否则返回空数组。

与实际答案误差在 `10^-5` 以内的结果都会被接受。

示例 1：
输入：sides = [3,4,5]
输出：[36.86990,53.13010,90.00000]
解释：边长 3、4、5 可以构成直角三角形，其三个内角分别约为 36.869897646°、53.130102354° 和 90°。

示例 2：
输入：sides = [2,4,2]
输出：[]
解释：边长 2、4、2 无法构成面积为正的三角形。

提示：
- sides.length == 3
- 1 <= sides[i] <= 1000

## 解题思路

1. **三角形有效性判断**：将三边排序为 a ≤ b ≤ c 后，只需检查 `a + b > c`。若不满足（含退化情况 a + b == c，面积为 0），返回空数组。
2. **余弦定理求角**：边 x 所对的内角满足 `cos(θ) = (y² + z² - x²) / (2yz)`，用 `Math.acos` 求出弧度后乘 `180 / π` 转为度数。对三条边各求一次得到三个内角。
3. **排序返回**：由于大边对大角，直接将三个角度按非递减排序返回即可。

时间复杂度 O(1)，空间复杂度 O(1)。
