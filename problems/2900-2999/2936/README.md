# [2936] 包含相等值数字块的数量

## Description


```md
https://leetcode.cn/problems/number-of-equal-numbers-blocks/description/
* algorithms
* Medium (44.03%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[3,3,3,3,3]'
给定一个整数数组 nums，其 下标从 0 开始。对于 nums，有以下性质：
所有相同值的元素都是相邻的。换句话说，如果存在两个下标 i < j，使得 nums[i] == nums[j]，那么对于所有下标 k，满足 i < k < j，都有 nums[k] == nums[i]。
由于 nums 是一个非常大的数组，这里提供了一个 BigArray 类的实例，该实例具有以下函数：
int at(long long index): 返回 nums[i] 的值。
long long size(): 返回 nums.length。
让我们把数组分成 最大 的块，使得每个块包含 相等的值。返回这些块的数量。
请注意，如果要使用自定义测试测试解决方案，对于 nums.length > 10 的测试行为是未定义的。

示例 1：
输入：nums = [3,3,3,3,3]
输出：1
解释：这里只有一个块，也就是整个数组（因为所有数字都相等），即：[3,3,3,3,3]。因此答案是 1。
示例 2：
输入：nums = [1,1,1,3,9,9,9,2,10,10]
输出：5
解释：这里有 5 个块：
块号 1: [1,1,1,3,9,9,9,2,10,10]
块号 2: [1,1,1,3,9,9,9,2,10,10]
块号 3: [1,1,1,3,9,9,9,2,10,10]
块号 4: [1,1,1,3,9,9,9,2,10,10]
块号 5: [1,1,1,3,9,9,9,2,10,10]
因此答案是 5。
示例 3：
输入：nums = [1,2,3,4,5,6,7]
输出：7
解释：由于所有数字都是不同的，这里有 7 个块，每个元素代表一个块。因此答案是 7。

提示：
1 <= nums.length <= 1015
1 <= nums[i] <= 109
在生成的输入中所有相同值的元素是相邻的。
nums 的所有元素之和最多为 1015。
Hint 1: Start from the beginning of the array nums.at(0).
Hint 2: Do a binary search on the last index last such that nums.at(0) == nums.at(last).
Hint 3: Continue this process until you get to the end of the array (nums.size()).

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Interactive BigArray (size up to 1e15) where equal values are always adjacent. Count the maximal blocks of equal values.

Approach: from each block start lo, binary search the first index where the value differs (values are contiguous, so the predicate is monotone); jump lo there, count++. Number of blocks * O(log size) at() calls.

Note: l + r <= 2e15 < 2^53 so mid computation stays exact with plain numbers.
