# [1558] Minimum Numbers of Function Calls to Make Target Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/description/)

* algorithms
* Medium (62.77%)
* Likes:    645
* Dislikes: 38
* Testcase Example:  '[1,5]'

```md
You are given an integer array nums. You have an integer array arr of the same length with all values set to 0 initially. You also have the following modify function:

You want to use the modify function to convert arr to nums using the minimum number of calls.
Return the minimum number of function calls to make nums from arr.
The test cases are generated so that the answer fits in a 32-bit signed integer.

Example 1:

Input: nums = [1,5]
Output: 5
Explanation: Increment by 1 (second element): [0, 0] to get [0, 1] (1 operation).
Double all the elements: [0, 1] -> [0, 2] -> [0, 4] (2 operations).
Increment by 1 (both elements)  [0, 4] -> [1, 4] -> [1, 5] (2 operations).
Total of operations: 1 + 2 + 2 = 5.

Example 2:

Input: nums = [2,2]
Output: 3
Explanation: Increment by 1 (both elements) [0, 0] -> [0, 1] -> [1, 1] (2 operations).
Double all the elements: [1, 1] -> [2, 2] (1 operation).
Total of operations: 2 + 1 = 3.

Example 3:

Input: nums = [4,2,5]
Output: 6
Explanation: (initial)[0,0,0] -> [1,0,0] -> [1,0,1] -> [2,0,2] -> [2,1,2] -> [4,2,4] -> [4,2,5](nums).


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

从全 0 数组出发，两种操作：①将某元素+1（算1次）；②将所有元素×2（算1次）。求最少操作次数得到目标数组 nums。

## 解题思路

**Approach: 逆向思考 + 位运算**

1. 反向操作：每个数从目标值减到 0，奇数则 -1（add 操作），偶数则 /2（multiply 操作）
2. 对每个数统计：其二进制中 1 的个数（add 次数）和总位数（multiply 次数）
3. multiply 操作对所有数同时生效，取最大位数
4. 总操作 = 所有数的 popcount 之和 + 最大位数 - 1（最高位不需要 multiply）
5. 复杂度 O(n * log(max))
