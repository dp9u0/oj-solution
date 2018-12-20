# 53. Maximum Subarray

## Description

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## Example

```javascript
Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

## Solution

dp 问题,  `f[i] = nums[i] + (f[i - 1] > 0 ? f[i - 1] : 0);`

[SourceCode](./solution.js)