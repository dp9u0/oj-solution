# [LCR 161] 连续天数的最高销售额

## Description


```md
https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/description/
* algorithms
* Easy (59.97%)
* Likes:    757
* Dislikes: -
* Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
某公司每日销售额记于整数数组 sales，请返回所有 连续 一或多天销售额总和的最大值。
要求实现时间复杂度为 O(n) 的算法。

示例 1：
输入：sales = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：[4,-1,2,1] 此连续四天的销售总额最高，为 6。
示例 2：
输入：sales = [5,4,-1,7,8]
输出：23
解释：[5,4,-1,7,8] 此连续五天的销售总额最高，为 23。

提示：
1 <= arr.length <= 10^5
-100 <= arr[i] <= 100
注意：本题与主站 53 题相同：https://leetcode.cn/problems/maximum-subarray/

```

### English Translation

Given an integer array `sales` representing the daily sales of a company, return the maximum sum of a contiguous (non-empty) subarray of one or more days. An O(n) time algorithm is required.

Example 1:
Input: sales = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: sales = [5,4,-1,7,8]
Output: 23
Explanation: [5,4,-1,7,8] has the largest sum = 23.

Constraints:
- 1 <= arr.length <= 10^5
- -100 <= arr[i] <= 100

## Approach

### 思路

经典的最大子数组和问题，使用 **Kadane 算法**，时间复杂度 O(n)、空间复杂度 O(1)。

- 遍历数组时维护两个变量：
  - `currentSum`：以当前元素结尾的连续子数组的最大和。
  - `maxSum`：遍历到目前为止的最大子数组和。
- 对每个元素 `sales[i]`：`currentSum = Math.max(sales[i], currentSum + sales[i])`。这一步表示要么从当前元素重新开始一段子数组，要么把当前元素接续到之前的子数组后面（取较大者）。
- 每步用 `maxSum = Math.max(maxSum, currentSum)` 更新全局最大值。
- 因为题目保证子数组非空且长度至少为 1，初始时 `currentSum` 和 `maxSum` 都设为 `-Infinity`，遍历第一个元素后自然被替换。

### 复杂度
- 时间：O(n)
- 空间：O(1)

## Solution

[SourceCode](./solution.js)
