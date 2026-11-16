# [3687] 图书馆逾期罚款计算器

## Description


```md
https://leetcode.cn/problems/library-late-fee-calculator/description/
* algorithms
* Easy (72.26%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[5,1,7]'
给定一个整数数组 daysLate，其中 daysLate[i] 表示第 i 书的归还日期晚了几天。
罚款计算如下：
如果 daysLate[i] == 1，罚款为 1。
如果 2 <= daysLate[i] <= 5，罚款为 2 * daysLate[i]。
如果 daysLate[i] > 5，罚款为 3 * daysLate[i]。
返回所有书的总罚款。

示例 1：
输入：daysLate = [5,1,7]
输入：32
解释：
daysLate[0] = 5：罚款是 2 * daysLate[0] = 2 * 5 = 10。
daysLate[1] = 1：罚款是 1。
daysLate[2] = 7：罚款是 3 * daysLate[2] = 3 * 7 = 21。
因此，总罚款为 10 + 1 + 21 = 32。
示例 2：
输入：daysLate = [1,1]
输出：2
解释：
daysLate[0] = 1：罚款为 1。
daysLate[1] = 1：罚款为 1。
因此，总罚款为 1 + 1 = 2。

提示：
1 <= daysLate.length <= 100
1 <= daysLate[i] <= 100
Hint 1: Simulate as described

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given an integer array `daysLate` where `daysLate[i]` is the number of days the `i`-th book was returned late.

The fine is calculated as follows:
- If `daysLate[i] == 1`, the fine is `1`.
- If `2 <= daysLate[i] <= 5`, the fine is `2 * daysLate[i]`.
- If `daysLate[i] > 5`, the fine is `3 * daysLate[i]`.

Return the total fine for all books.

**Example 1:**
Input: daysLate = [5,1,7]
Output: 32
Explanation: 2*5 + 1 + 3*7 = 10 + 1 + 21 = 32.

**Constraints:**
- 1 <= daysLate.length <= 100
- 1 <= daysLate[i] <= 100

## Approach

按规则直接模拟累加:晚 1 天罚 1;2~5 天按 2 倍;超过 5 天按 3 倍。一遍 reduce 求和。

时间 O(n),空间 O(1)。
