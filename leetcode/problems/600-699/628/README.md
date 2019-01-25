# [628] Maximum Product of Three Numbers

## Description

* algorithms
* Easy (45.34%)
* Total Accepted:    57.8K
* Total Submissions: 127.3K
* Testcase Example:  '[1,2,3]'

```md
Given an integer array, find three numbers whose product is maximum and output the maximum product.
Example 1:
Input: [1,2,3]
Output: 6
Example 2:
Input: [1,2,3,4]
Output: 24
Note:
The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

```

## Solution

可能是 `-100*-100*99` 或者 `99*100*99` 因此使用五个变量,最大的三个数  和最小的两个数(负数)

`Math.max(max1 * max2 * max3, max1 * min1 * min2);` 即可

[SourceCode](./solution.js)