# [4114] 统计一致子数组数目 II

## Description


```md
https://leetcode.cn/problems/count-consistent-subarrays-ii/description/
* algorithms
* Hard (47.93%)
* Dislikes: -
* Testcase Example:  '[5,3,1,2]\r'
给你一个整数数组 nums。
如果一个子数组中所有元素的 按位与 运算结果等于该子数组的 最小值 ，则称该子数组为 一致子数组 。
返回 nums 中 一致子数组 的个数。
子数组 是数组中一个连续、非空的元素序列。

示例 1：
输入： nums = [5,3,1,2]
输出： 6
解释：
以下子数组是一致子数组：


子数组
包含的值
按位与
最小值


nums[0..0]
[5]
5
5


nums[1..1]
[3]
3
3


nums[2..2]
[1]
1
1


nums[3..3]
[2]
2
2


nums[1..2]
[3, 1]
3 & 1 = 1
1


nums[0..2]
[5, 3, 1]
5 & 3 & 1 = 1
1


因此，一致子数组的个数为 6。
示例 2：
输入： nums = [1,1,1]
输出： 6
解释：
对于每个子数组，其按位与运算结果和最小值均等于 1。因此，答案为 6。
示例 3：
输入： nums = [0]
输出： 1
解释：
唯一的子数组是 [0]，其按位与运算结果和最小值均为 0。因此，答案为 1。

提示：
1 <= nums.length <= 2 * 105
0 <= nums[i] <= 106
Hint 1: 1a (Distinct Suffix ANDs): The bitwise AND of a subarray is at most every element in it. Therefore, it equals the minimum exactly when the AND itself occurs in the subarray.
Hint 2: 1b (Distinct Suffix ANDs): Fix the right endpoint and move the start left. Each change in the AND clears at least one bit, so the starting positions split into only a few ranges of equal AND. To advance the right endpoint, AND each range's value with the new element, add the singleton, and merge adjacent ranges with equal values.
Hint 3: 1c (Distinct Suffix ANDs): Suppose starts in [a, b] give AND x. Among them, count the starts at or before the most recent occurrence of x. If x has not appeared, this range contributes zero.
Hint 4: 2a (Monotonic Stack): Assign each consistent subarray to its leftmost minimum at index i. Every element in it must contain every set bit of nums[i]. How far can the subarray extend on either side of i?
Hint 5: 2b (Monotonic Stack): On each side, stop at the nearest element missing a required bit. On the left, an equal value also stops the extension. If the stopping indices are L and R, index i contributes (i - L) * (R - i) subarrays. Use -1 and n for missing boundaries.
Hint 6: 2c (Monotonic Stack): Scan from left to right with a stack of indices waiting for their right boundary. While the current value lacks a set bit of the top value, pop the top and assign its boundary. Then push the current index. The surviving masks form a chain by bit inclusion, so checking the top is enough. Scan in reverse for left boundaries, also popping equal values.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Same as 4111 but with larger constraints: a subarray is **consistent** if the bitwise AND of all its elements equals the minimum value of the subarray. Return the number of consistent subarrays. Constraints: `1 <= nums.length <= 2e5`, `0 <= nums[i] <= 1e6`.

## Approach

关键性质:AND 不超过子数组中每个元素,因此所有元素 ≥ AND,于是 **AND == min 当且仅当 AND 这个值出现在子数组中**(出现处即最小值)。

经典的「log-trick」:固定右端点 `r`,从 `l=r` 向左扩展时 AND 单调不增,每变一次至少清掉一个比特,故不同的后缀 AND 只有 O(log maxA) 段,每段对应一个左端点区间 `[a,b]`,段内 AND 相同记为 `x`。

- 维护 `last[x]`:`x` 最近一次作为元素出现的下标(每步先更新 `last[nums[r]] = r`)。
- 段 `[a,b]`(AND 为 x)的贡献:子数组 `[l..r]` 一致当且仅当 `[l,r]` 中存在等于 x 的元素,即 `l ≤ last[x]`;故贡献 `min(b, last[x]) - a + 1`(若 `last[x] < a` 则为 0)。
- 转移:新单元素段 `(nums[r], r, r)`,旧每段 `(x & nums[r], a, b)`,相邻同值合并。

时间 O(n·log maxA),值域 ≤ 2^20,空间 O(maxA)。

## Solution

[SourceCode](./solution.js)
