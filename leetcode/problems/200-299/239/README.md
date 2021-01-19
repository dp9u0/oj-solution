# [239] Sliding Window Maximum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sliding-window-maximum/description/)

* algorithms
* Hard (42.10%)
* Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'

```md
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.
Follow up:
Could you solve it in linear time?
Example:
Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7

Constraints:
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length

```

## Solution

1. 先进先出 Queue
2. 最大值 Heap

[SourceCode](./solution.js)
