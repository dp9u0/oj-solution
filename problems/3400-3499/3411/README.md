# [3411] 最长乘积等价子数组

## Description


```md
https://leetcode.cn/problems/maximum-subarray-with-equal-products/description/
* algorithms
* Easy (57.46%)
* Likes:    15
* Dislikes: -
* Testcase Example:  '[1,2,1,2,1,1,1]'
给你一个由 正整数 组成的数组 nums。
如果一个数组 arr 满足 prod(arr) == lcm(arr) * gcd(arr)，则称其为 乘积等价数组 ，其中：
prod(arr) 表示 arr 中所有元素的乘积。
gcd(arr) 表示 arr 中所有元素的最大公因数 (GCD)。
lcm(arr) 表示 arr 中所有元素的最小公倍数 (LCM)。
返回数组 nums 的 最长 乘积等价 子数组 的长度。

示例 1：
输入： nums = [1,2,1,2,1,1,1]
输出： 5
解释：
最长的乘积等价子数组是 [1, 2, 1, 1, 1]，其中 prod([1, 2, 1, 1, 1]) = 2， gcd([1, 2, 1, 1, 1]) = 1，以及 lcm([1, 2, 1, 1, 1]) = 2。
示例 2：
输入： nums = [2,3,4,5,6]
输出： 3
解释：
最长的乘积等价子数组是 [3, 4, 5]。
示例 3：
输入： nums = [1,2,3,1,4,5,1]
输出： 5

提示：
2 <= nums.length <= 100
1 <= nums[i] <= 10
Hint 1: What is the maximum possible lcm?

```

## Description (English)

You are given an array of **positive** integers `nums`.

An array `arr` is called **product equivalent** if `prod(arr) == lcm(arr) * gcd(arr)`, where:

- `prod(arr)` is the product of all elements of `arr`.
- `gcd(arr)` is the greatest common divisor (GCD) of all elements of `arr`.
- `lcm(arr)` is the least common multiple (LCM) of all elements of `arr`.

Return the length of the **longest product equivalent subarray** of `nums`.

Example 1:

Input: nums = [1,2,1,2,1,1,1]
Output: 5
Explanation: The longest product equivalent subarray is [1, 2, 1, 1, 1], where prod = 2, gcd = 1, lcm = 2.

Example 2:

Input: nums = [2,3,4,5,6]
Output: 3
Explanation: The longest product equivalent subarray is [3, 4, 5].

Example 3:

Input: nums = [1,2,3,1,4,5,1]
Output: 5

Constraints:

- 2 <= nums.length <= 100
- 1 <= nums[i] <= 10

## 思路

关键观察:

1. **任意长度为 2 的子数组必然满足条件**:对两个数 a、b 恒有 `a*b == gcd(a,b) * lcm(a,b)`,所以答案至少为 2。
2. **值域极小(1~10)**:任何子数组的 lcm 必然整除 `lcm(1..10) = 2520`,gcd 不超过 10,因此 `lcm * gcd <= 25200`。一旦子数组乘积 `prod` 超过 25200,继续向右扩展(元素均为正整数,prod 只增不减)也不可能再满足条件,可以直接剪枝。

算法:枚举每个左端点 `i`,向右扩展 `j`,增量维护 `prod`、`gcd`、`lcm`;若 `prod == lcm * gcd` 则更新答案;若 `prod > 25200` 则提前终止该左端点的扩展。

复杂度:最坏 O(n²) 且乘积剪枝使有效扩展长度有限(n ≤ 100),实际运算量极小;空间 O(1)。

## Solution

[SourceCode](./solution.js)
