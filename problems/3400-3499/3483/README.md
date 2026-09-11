# [3483] 不同三位偶数的数目

## Description


```md
https://leetcode.cn/problems/unique-3-digit-even-numbers/description/
* algorithms
* Easy (74.55%)
* Likes:    14
* Dislikes: -
* Testcase Example:  '[1,2,3,4]'
给你一个数字数组 digits，你需要从中选择三个数字组成一个三位偶数，你的任务是求出 不同 三位偶数的数量。
注意：每个数字在三位偶数中都只能使用 一次 ，并且 不能 有前导零。

示例 1：
输入： digits = [1,2,3,4]
输出： 12
解释： 可以形成的 12 个不同的三位偶数是 124，132，134，142，214，234，312，314，324，342，412 和 432。注意，不能形成 222，因为数字 2 只有一个。
示例 2：
输入： digits = [0,2,2]
输出： 2
解释： 可以形成的三位偶数是 202 和 220。注意，数字 2 可以使用两次，因为数组中有两个 2 。
示例 3：
输入： digits = [6,6,6]
输出： 1
解释： 只能形成 666。
示例 4：
输入： digits = [1,3,5]
输出： 0
解释： 无法形成三位偶数。

提示：
3 <= digits.length <= 10
0 <= digits[i] <= 9
Hint 1: Use brute force to try all possibilities

```

## Solution

[SourceCode](./solution.js)

## English Description

You are given an array of digits `digits`. Your task is to count the number of **different** three-digit **even** numbers that can be formed by picking three digits from the array.

Note:

- Each digit can be used **at most once** in a number.
- Leading zeros are **not** allowed.

Example 1:

- Input: digits = [1,2,3,4]
- Output: 12
- Explanation: The 12 different three-digit even numbers are 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412 and 432. Note that 222 cannot be formed because there is only one 2.

Example 2:

- Input: digits = [0,2,2]
- Output: 2
- Explanation: The three-digit even numbers that can be formed are 202 and 220. Note that the digit 2 can be used twice because there are two 2s in the array.

Example 3:

- Input: digits = [6,6,6]
- Output: 1
- Explanation: Only 666 can be formed.

Example 4:

- Input: digits = [1,3,5]
- Output: 0
- Explanation: No three-digit even number can be formed.

Constraints:

- 3 <= digits.length <= 10
- 0 <= digits[i] <= 9

## Approach

Enumerate ordered index triples (i, j, k) with i, j, k pairwise distinct (at most 10×9×8 = 720). For each triple, form the number `digits[i]*100 + digits[j]*10 + digits[k]`; it is valid when `digits[i] !== 0` (no leading zero) and `digits[k] % 2 === 0` (even). Insert valid numbers into a Set to deduplicate, and return the set size.

Time complexity: O(n³). Space complexity: O(1) (at most 900 numbers in the set).
