# [3927] Minimize Array Sum Using Divisible Replacements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-array-sum-using-divisible-replacements/description/)

* algorithms
* Medium (32.30%)
* Likes:    75
* Dislikes: 3
* Testcase Example:  '[3,6,2]'

```md
You are given an integer array nums.
You can perform the following operation any number of times:

Choose two indices a and b such that nums[a] % nums[b] == 0.
Replace nums[a] with nums[b].

Return the minimum possible sum of the array after performing any number of operations.

Example 1:

Input: nums = [3,6,2]
Output: 7
Explanation:

Choose a = 1, b = 2, where nums[a] = 6 and nums[b] = 2. Since 6 % 2 == 0, replace nums[1] with nums[2].
The array becomes [3, 2, 2].
No further operation reduces the sum. Thus, the final sum is 3 + 2 + 2 = 7.


Example 2:

Input: nums = [4,2,8,3]
Output: 9
Explanation:

Choose a = 0, b = 1, where nums[a] = 4 and nums[b] = 2. Since 4 % 2 == 0, replace nums[0] with nums[1].
Choose a = 2, b = 1, where nums[a] = 8 and nums[b] = 2. Since 8 % 2 == 0, replace nums[2] with nums[1].
The array becomes [2, 2, 2, 3].
No further operation reduces the sum. Thus, the final sum is 2 + 2 + 2 + 3 = 9.


Example 3:

Input: nums = [7,5,9]
Output: 21
Explanation:

There is no pair (a, b) such that nums[a] % nums[b] == 0.
Hence, no operation can be performed. The sum remains 7 + 5 + 9 = 21.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 10​​​​​​​5


```

## 中文翻译

给你一个整数数组 nums。你可以执行以下操作任意次：

- 选择两个下标 a 和 b，满足 nums[a] % nums[b] == 0，将 nums[a] 替换为 nums[b]。

返回执行任意次操作后，数组可能的最小和。

示例 1：nums = [3,6,2]，选择 a=1, b=2（6 % 2 == 0），数组变为 [3,2,2]，无法继续减小，答案为 7。
示例 2：nums = [4,2,8,3]，4 和 8 都能替换为 2，数组变为 [2,2,2,3]，答案为 9。
示例 3：nums = [7,5,9]，不存在可执行的操作，答案为 21。

提示：1 <= nums.length <= 10^5，1 <= nums[i] <= 10^5。

## 思路

关键观察：

1. **值集合不变**：操作 `nums[a] ← nums[b]` 中 b 位置的值保留，因此数组中出现过的值的集合永不改变。于是每个位置可以独立地沿"整除链"下降：值 v 最终可变为 u，当且仅当存在一条链 v → u1 → u2 → … → u，每一步前一项被后一项整除，且链上每个值都在数组中出现过。

2. **谁能降到最小值 m**：设 m = min(nums)。值 v 能降到 m，当且仅当 v 是某个"能降到 m 的现存值"的倍数。因此从 m 出发做倍数筛法（BFS）：A = {m}，若 w ∈ A，则所有现存的 w 的倍数也加入 A。由于倍数一定大于自身，按值从小到大遍历一遍即可完成闭包。

3. **降不到 m 时的最优终值**：整除链上每一项都整除 v，所以终值必然是 v 的一个现存因子；其中最小的一个（设为 d）一步即可直接到达，故最优终值 = v 的最小现存因子。对每个现存值 u 从小到大筛其倍数，首个写入者即最小因子。

4. **答案** = Σ (v ∈ A ? m : minDiv[v])。

复杂度：两次调和级数筛法，时间 O(V log V)（V = max(nums) ≤ 10^5），空间 O(V)。

## Solution

[SourceCode](./solution.js)
