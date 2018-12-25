# [283] Move Zeroes

## Description

* algorithms
* Easy (53.00%)
* Source Code:       solving\283.js
* Total Accepted:    387.7K
* Total Submissions: 731.3K
* Testcase Example:  '[0,1,0,3,12]'

```md
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

```

## Solution

TP 先把非0元素移动到前面,移动完后填充0

[SourceCode](./solution.js)