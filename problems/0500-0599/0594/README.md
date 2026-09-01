# [594] Longest Harmonious Subsequence

## Description

* algorithms
* Easy (42.60%)
* Total Accepted:    31.2K
* Total Submissions: 73.3K
* Testcase Example:  '[1,3,2,2,5,2,3,7]'

```md
We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.
Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.
Example 1:
Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Note:
The length of the input array will not exceed 20,000.
```

## Solution

hashtable 问题,用hashtable 存储每个数字出现的次数,并且遍历nums时就算最大个数

[SourceCode](./solution.js)