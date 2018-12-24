# [189] Rotate Array

## Description

* algorithms
* Easy (27.91%)
* Total Accepted:    242.3K
* Total Submissions: 868.2K
* Testcase Example:  '[1,2,3,4,5,6,7]\n3'

```md
Given an array, rotate the array to the right by k steps, where k is non-negative.
Example 1:
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:
Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?

```

## Solution

以 `k` 将 `nums` 分割为 `left 和 right`,先对 `nums` 进行 `reverse`,然后再对  `left和right` 分别 `reverse`

[SourceCode](./solution.js)