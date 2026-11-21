# [2422] 使用合并操作将数组转换为回文序列

## Description


```md
https://leetcode.cn/problems/merge-operations-to-turn-array-into-a-palindrome/description/
* algorithms
* Medium (64.44%)
* Likes:    12
* Dislikes: -
* Testcase Example:  '[4,3,2,1,2,3,1]'
给定一个由 正整数 组成的数组 nums。
可以对阵列执行如下操作，次数不限:
选择任意两个 相邻 的元素并用它们的 和 替换 它们。

例如，如果 nums = [1,2,3,1]，则可以应用一个操作使其变为 [1,5,1]。


返回将数组转换为 回文序列 所需的 最小 操作数。

示例 1:
输入: nums = [4,3,2,1,2,3,1]
输出: 2
解释: 我们可以通过以下 2 个操作将数组转换为回文:
- 在数组的第 4 和第 5 个元素上应用该操作，nums 将等于 [4,3,2,3,3,1].
- 在数组的第 5 和第 6 个元素上应用该操作，nums 将等于 [4,3,2,3,4].
数组 [4,3,2,3,4] 是一个回文序列。
可以证明，2 是所需的最小操作数。
示例 2:
输入: nums = [1,2,3,4]
输出: 3
解释: 我们在任意位置进行 3 次运算，最后得到数组 [10]，它是一个回文序列。

提示:
1 <= nums.length <= 105
1 <= nums[i] <= 106
Hint 1: Can you find how many operations are needed to make the first element of the array equal to the last element?
Hint 2: Notice that you can use the same idea of the previous hint to make the second element equal to the second last one.
Hint 3: Use the same idea until all elements of the array are used.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Replace any two adjacent elements by their sum (any number of times). Return the minimum operations to make nums a palindrome.

Example 1:
Input: nums = [4,3,2,1,2,3,1]
Output: 2

Example 2:
Input: nums = [1,2,3,4]
Output: 3

Constraints: 1 <= nums.length <= 10^5.

## Approach

Two pointers with running sums from both ends: if the sums are equal, both pointers advance (that pair matches). If the left sum is smaller, merge the left element into its neighbor (one op) and add; symmetrically for the right. Each merge = one operation; process until pointers cross.

O(n) time, O(1) space.
