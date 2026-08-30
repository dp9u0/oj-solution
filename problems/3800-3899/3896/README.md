# [3896] Minimum Operations to Transform Array into Alternating Prime

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-transform-array-into-alternating-prime/description/)

* algorithms
* Medium (52.89%)
* Likes:    68
* Dislikes: 5
* Testcase Example:  '[1,2,3,4]'

```md
You are given an integer array nums.
An array is considered alternating prime if:
Elements at even indices (0-based) are prime numbers.
Elements at odd indices are non-prime numbers.
In one operation, you may increment any element by 1.
Return the minimum number of operations required to transform nums into an alternating prime array.
A prime number is a natural number greater than 1 with only two factors, 1 and itself.

Example 1:
Input: nums = [1,2,3,4]
Output: 3
Explanation:
The element at index 0 must be prime. Increment nums[0] = 1 to 2, using 1 operation.
The element at index 1 must be non-prime. Increment nums[1] = 2 to 4, using 2 operations.
The element at index 2 is already prime.
The element at index 3 is already non-prime.
Total operations = 1 + 2 = 3.
Example 2:
Input: nums = [5,6,7,8]
Output: 0
Explanation:
The elements at indices 0 and 2 are already prime.
The elements at indices 1 and 3 are already non-prime.
No operations are needed.
Example 3:
Input: nums = [4,4]
Output: 1
Explanation:
The element at index 0 must be prime. Increment nums[0] = 4 to 5, using 1 operation.
The element at index 1 is already non-prime.
Total operations = 1.

Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 105
Hint 1: Each index can be handled independently. Focus on making each element valid with the minimum increments.
Hint 2: For even indices, find the smallest prime >= nums[i].
Hint 3: For odd indices, find the smallest non-prime >= nums[i].
Hint 4: Precompute primes efficiently (e.g., Sieve of Eratosthenes) to quickly check or jump to the next valid number.
Hint 5: For odd indices, note that any number > 2 becomes non-prime after at most 1 increment (except 2).

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个整数数组 `nums`。

如果一个数组满足以下条件，则称其为「交替质数数组」（alternating prime）：

- 偶数下标（从 0 开始）上的元素是质数。
- 奇数下标上的元素是非质数。

每次操作可以将任意元素加 1。

返回将 `nums` 变成交替质数数组所需的最少操作次数。

质数是大于 1 且只有 1 和它本身两个因子的自然数（注意 1 不是质数，即 1 属于非质数）。

示例 1：
输入：`nums = [1,2,3,4]`
输出：`3`
解释：下标 0 的元素必须是质数，把 1 增加到 2，用 1 次操作；下标 1 的元素必须是非质数，把 2 增加到 4，用 2 次操作；下标 2 的 3 已是质数；下标 3 的 4 已是非质数。总计 3。

示例 2：
输入：`nums = [5,6,7,8]`
输出：`0`

示例 3：
输入：`nums = [4,4]`
输出：`1`
解释：下标 0 的 4 增加到 5，1 次操作；下标 1 的 4 已是非质数。

约束：
- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## 解题思路

每个下标的代价相互独立，分别求最小增量后求和即可。

用埃氏筛预处理 `[0, 2*10^5]` 内的质数判定（`nums[i] <= 10^5`，其后第一个质数是 100003，上界足够），并倒序扫出 `nextPrime[v]`（>= v 的最小质数）。

- 偶数下标：代价为 `nextPrime[v] - v`。
- 奇数下标（目标是非质数）：
  - `v` 已是非质数（含 1）：代价 0。
  - `v == 2`：`3` 是质数、`4` 是非质数，代价 2。
  - `v` 是奇质数：`v + 1` 是大于 2 的偶数，必为非质数，代价 1。

总时间复杂度 `O(M + n)`（`M = 2*10^5` 为筛法上界），空间 `O(M)`。
