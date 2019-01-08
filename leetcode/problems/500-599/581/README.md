# [581] Shortest Unsorted Continuous Subarray

## Description

* algorithms
* Easy (29.50%)
* Total Accepted:    53.4K
* Total Submissions: 181K
* Testcase Example:  '[2,6,4,8,10,9,15]'

```md
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.  
You need to find the shortest such subarray and output its length.
Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means .

```

## Solution

通过维护 max 和 min 两个变量,找到开始位置和结束位置

[SourceCode](./solution.js)