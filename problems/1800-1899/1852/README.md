# [1852] 每个子数组的数字种类数

## Description


```md
https://leetcode.cn/problems/distinct-numbers-in-each-subarray/description/
* algorithms
* Medium (72.48%)
* Likes:    20
* Dislikes: -
* Testcase Example:  '[1,2,3,2,2,1,3]\n3'
给你一个长度为 n 的整数数组 nums 与一个整数 k。你的任务是找到 nums 所有 长度为 k 的子数组中 不同 元素的数量。
返回一个数组 ans，其中 ans[i] 是对于每个索引 0 <= i < n - k，nums[i..(i + k - 1)] 中不同元素的数量。


示例 1:
输入: nums = [1,2,3,2,2,1,3], k = 3
输出: [3,2,2,2,3]
解释：每个子数组的数字种类计算方法如下：
- nums[0..2] = [1,2,3] 所以 ans[0] = 3
- nums[1..3] = [2,3,2] 所以 ans[1] = 2
- nums[2..4] = [3,2,2] 所以 ans[2] = 2
- nums[3..5] = [2,2,1] 所以 ans[3] = 2
- nums[4..6] = [2,1,3] 所以 ans[4] = 3
示例 2:
输入: nums = [1,1,1,1,2,3,4], k = 4
输出: [1,2,3,4]
解释: 每个子数组的数字种类计算方法如下：
- nums[0..3] = [1,1,1,1] 所以 ans[0] = 1
- nums[1..4] = [1,1,1,2] 所以 ans[1] = 2
- nums[2..5] = [1,1,2,3] 所以 ans[2] = 3
- nums[3..6] = [1,2,3,4] 所以 ans[3] = 4

提示:
1 <= k <= nums.length <= 105
1 <= nums[i] <= 105
Hint 1: Keep a frequency map of the elements in each window.
Hint 2: When the frequency of the element is 0, remove it from the map.
Hint 3: The answer to each window is the size of the map.

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given an integer array `nums` of length `n` and an integer `k`. Your task is to find the number of **distinct** elements in every subarray of `nums` with length `k`.

Return an array `ans` where `ans[i]` is the number of distinct elements in `nums[i..(i + k - 1)]` for each index `0 <= i < n - k`.

Example 1:
Input: nums = [1,2,3,2,2,1,3], k = 3
Output: [3,2,2,2,3]

Example 2:
Input: nums = [1,1,1,1,2,3,4], k = 4
Output: [1,2,3,4]

Constraints: 1 <= k <= nums.length <= 10^5, 1 <= nums[i] <= 10^5

## Approach

Sliding window with a frequency map (size-k window moves one step at a time):

- Expand the window by adding `nums[i]`: if its count was 0 before increment, distinct count +1.
- When the window exceeds size k, remove `nums[i-k]`: decrement its count; if it drops to 0, distinct count -1.
- Once the window reaches exactly size k, record the current distinct count.

Each element enters and leaves the window once → O(n) time, O(k) distinct values in the map.
