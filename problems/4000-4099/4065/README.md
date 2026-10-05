# [4065] 移除不同值重排数组

## Description


```md
https://leetcode.cn/problems/rearrange-array-by-removing-distinct-values/description/
* algorithms
* Easy (81.08%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[3,1,3,2,1,3]'
给你一个整数数组 nums。
初始时，你有一个 空 数组 ans。重复执行以下操作，直到 nums 变为 空 ：
找出当前 nums 中 所有不同 的值。
将当前 nums 中每个 不同 的值各移除一个，并按 升序 将这些值依次添加到 ans 中。
返回数组 ans。

示例 1：
输入： nums = [3,1,3,2,1,3]
输出： [1,2,3,1,3,3]
解释：


操作
添加到 ans 的值
操作后的 nums
操作后的 ans




1
1, 2, 3
[3, 1, 3]
[1, 2, 3]


2
1, 3
[3]
[1, 2, 3, 1, 3]


3
3
[]
[1, 2, 3, 1, 3, 3]


此时 nums 已为空，因此答案为 [1, 2, 3, 1, 3, 3]。
示例 2：
输入： nums = [7,7,4,4,4]
输出： [4,7,4,7,4]
解释：


操作
添加到 ans 的值
操作后的 nums
操作后的 ans




1
4, 7
[7, 4, 4]
[4, 7]


2
4, 7
[4]
[4, 7, 4, 7]


3
4
[]
[4, 7, 4, 7, 4]


此时 nums 已为空，因此答案为 [4, 7, 4, 7, 4]。

提示：
1 <= nums.length <= 100
1 <= nums[i] <= 100
Hint 1: 1a (Frequency Counting): Count how many times each value appears.
Hint 2: 1b (Frequency Counting): In each round, visit the values in ascending order, append each value with a positive remaining count, and decrease its count.
Hint 3: 2a (Sorting): Assign each occurrence of a value its occurrence number among copies of that value. This number determines the round in which it is appended.
Hint 4: 2b (Sorting): Sort the occurrences first by their round number, then by their value.

```

## Description (English)

You are given an integer array `nums`. Initially you have an empty array `ans`. Repeat the following until `nums` becomes empty:

- Find all distinct values in the current `nums`.
- Remove one occurrence of each distinct value from `nums`, and append these values to `ans` in ascending order.

Return the array `ans`.

Example 1:
Input: nums = [3,1,3,2,1,3]
Output: [1,2,3,1,3,3]
Explanation: Round 1 removes 1,2,3 → ans [1,2,3], nums [3,1,3]; round 2 removes 1,3 → ans [1,2,3,1,3], nums [3]; round 3 removes 3 → ans [1,2,3,1,3,3].

Example 2:
Input: nums = [7,7,4,4,4]
Output: [4,7,4,7,4]

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100

## 思路

直接模拟：统计每个值的出现次数；每一轮按值升序遍历值域 `1..100`，计数为正则追加到 `ans` 并将计数减一；直到所有计数为 0。轮数不超过最大出现次数。

复杂度：时间 `O(n + maxCount * V)`（`V = 100`），空间 `O(V)`。

## Solution

[SourceCode](./solution.js)
