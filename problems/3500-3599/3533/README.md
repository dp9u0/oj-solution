# [3533] Concatenated Divisibility

## Description

[LeetCode Problem Description](https://leetcode.com/problems/concatenated-divisibility/description/)

* algorithms
* Hard (30.72%)
* Likes:    48
* Dislikes: 7
* Testcase Example:  '[3,12,45]\n5'

```md
You are given an array of positive integers nums and a positive integer k.
A permutation of nums is said to form a divisible concatenation if, when you concatenate the decimal representations of the numbers in the order specified by the permutation, the resulting number is divisible by k.
Return the lexicographically smallest permutation (when considered as a list of integers) that forms a divisible concatenation. If no such permutation exists, return an empty list.

Example 1:

Input: nums = [3,12,45], k = 5
Output: [3,12,45]
Explanation:



Permutation
Concatenated Value
Divisible by 5




[3, 12, 45]
31245
Yes


[3, 45, 12]
34512
No


[12, 3, 45]
12345
Yes


[12, 45, 3]
12453
No


[45, 3, 12]
45312
No


[45, 12, 3]
45123
No



The lexicographically smallest permutation that forms a divisible concatenation is [3,12,45].

Example 2:

Input: nums = [10,5], k = 10
Output: [5,10]
Explanation:



Permutation
Concatenated Value
Divisible by 10




[5, 10]
510
Yes


[10, 5]
105
No



The lexicographically smallest permutation that forms a divisible concatenation is [5,10].

Example 3:

Input: nums = [1,2,3], k = 5
Output: []
Explanation:
Since no permutation of nums forms a valid divisible concatenation, return an empty list.


Constraints:

1 <= nums.length <= 13
1 <= nums[i] <= 105
1 <= k <= 100


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定正整数数组 nums 和正整数 k。将 nums 的某个排列拼接成大数，如果该数能被 k 整除则为合法排列。返回字典序最小的合法排列，不存在则返回空列表。

### 解题思路

**状态压缩 DP + 记忆化搜索**

1. 先对 nums 排序（保证字典序）
2. 预计算每个数的位数 `len[i]` 和 `pow10[len[i]] % k`
3. 状态：(mask, remainder)，mask 表示已用的数，remainder 是当前拼接值 mod k
4. DFS 按排序顺序尝试每个未使用的数：新 remainder = (remainder × pow10[len[i]] + nums[i]) % k
5. 记忆化剪枝，第一个找到的全排列即为字典序最小的解
