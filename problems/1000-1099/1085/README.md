# [1085] 最小元素各数位之和

## Description


```md
https://leetcode.cn/problems/sum-of-digits-in-the-minimum-number/description/
* algorithms
* Easy (77.53%)
* Likes:    11
* Dislikes: -
* Testcase Example:  '[34,23,1,24,75,33,54,8]'
给你一个正整数的数组 A。
然后计算 S，使其等于数组 A 当中最小的那个元素各个数位上数字之和。
最后，假如 S 所得计算结果是 奇数 ，返回 0 ；否则请返回 1。

示例 1:
输入：[34,23,1,24,75,33,54,8]
输出：0
解释：
最小元素为 1 ，该元素各个数位上的数字之和 S = 1 ，是奇数所以答案为 0 。
示例 2：
输入：[99,77,33,66,55]
输出：1
解释：
最小元素为 33 ，该元素各个数位上的数字之和 S = 3 + 3 = 6 ，是偶数所以答案为 1 。

提示：
1 <= A.length <= 100
1 <= A[i] <= 100
Hint 1: How to find the minimum number in an array?
Hint 2: Loop over the array and compare each one of the numbers.
Hint 3: How to find the sum of digits?
Hint 4: Divide the number consecutively and get their remainder modulus 10. Sum those remainders and return the answer as the problem asks.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array `nums`, compute the minimum element, sum its digits, and return 1 if the sum is even, otherwise 0.

**Example:**
[34,23,1,24,75,33,54,8] → min = 1, digit sum = 1 (odd) → 0

**Constraints:**
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100

## Approach

取最小值,逐位求和,按奇偶返回 1/0。

时间 O(n),空间 O(1)。
