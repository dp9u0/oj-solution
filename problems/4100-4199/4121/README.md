# [4121] 使数组中所有元素相等的最小成本

## Description


```md
https://leetcode.cn/problems/minimum-cost-to-make-all-array-elements-equal/description/
* algorithms
* Medium (42.41%)
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给你一个长度为 n 的整数数组 nums。
你可以从以下操作中 任意 选择，执行 任意 次，顺序 任意。
前缀操作：选择一个满足 0 < i < n - 1 的下标 i，将下标从 0 到 i - 1 的 所有 元素设为 nums[i]。该操作的成本为 i * nums[i]。
后缀操作：选择一个满足 0 < i < n - 1 的下标 i，将下标从 i + 1 到 n - 1 的 所有 元素设为 nums[i]。该操作的成本为 (n - i - 1) * nums[i]。
操作的成本根据 nums[i] 的 当前 值计算。所选前缀或后缀中的每个元素都计入成本，即使该元素已经等于 nums[i]。
返回使 nums 中 所有 元素都相等所需的 最小总成本。

示例 1：
输入： nums = [1,2,3]
输出： 4
解释：
以下是一种达到最小成本的操作序列：


nums
操作
i
修改后的 nums
成本




[1, 2, 3]
后缀
1
[1, 2, 2]
(3 - 1 - 1) * 2 = 2


[1, 2, 2]
前缀
1
[2, 2, 2]
1 * 2 = 2


因此，总成本为 2 + 2 = 4。
示例 2：
输入： nums = [3,3,3,6,3,3]
输出： 9
解释：
以下是一种达到最小成本的操作序列：


nums
操作
i
修改后的 nums
成本




[3, 3, 3, 6, 3, 3]
后缀
2
[3, 3, 3, 3, 3, 3]
(6 - 2 - 1) * 3 = 9


因此，总成本为 9。
示例 3：
输入： nums = [3,4,4,5,4,4,3]
输出： 20
解释：
以下是一种达到最小成本的操作序列：


nums
操作
i
修改后的 nums
成本




[3, 4, 4, 5, 4, 4, 3]
前缀
4
[4, 4, 4, 4, 4, 4, 3]
4 * 4 = 16


[4, 4, 4, 4, 4, 4, 3]
后缀
5
[4, 4, 4, 4, 4, 4, 4]
(7 - 5 - 1) * 4 = 4


因此，总成本为 16 + 4 = 20。

提示：
3 <= n == nums.length <= 105
1 <= nums[i] <= 109
Hint 1: Consider a maximal contiguous block of equal values v. Can you preserve that block and change everything outside it to v?
Hint 2: A block can supply the final value only if it contains an interior index, since neither endpoint is a valid operation pivot.
Hint 3: For an eligible block of length len, at most two operations suffice, with total cost (n - len) * v. If the block touches an endpoint, only the operation on the other side is needed.
Hint 4: For a fixed final value, the positions never overwritten by operations assigning that value form a contiguous block of its original occurrences. Thus, keeping a longest eligible block is optimal.
Hint 5: Scan all maximal equal-value blocks and minimize their candidate costs.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Prefix op at pivot i (0 < i < n-1) sets 0..i-1 to nums[i] costing i*nums[i]; suffix op sets i+1..n-1 costing (n-i-1)*nums[i]. Min cost to make all equal.

Approach: the final value v comes from a maximal equal-value block that contains an interior index (a valid pivot). Keeping it, clearing both sides costs (n - len) * v (pivot-independent inside the block; endpoint-touching blocks need only one side). Scan maximal blocks, candidate = (n - len) * v when the block contains an index in [1, n-2]; answer = min. O(n).
