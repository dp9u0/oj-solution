# [2483] Minimum Penalty for a Shop

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-penalty-for-a-shop/description/)

* algorithms
* Medium (71.23%)
* Likes:    2461
* Dislikes: 136
* Testcase Example:  '"YYNY"'

```md
You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters &#39;N&#39; and &#39;Y&#39;:

if the ith character is &#39;Y&#39;, it means that customers come at the ith hour
whereas &#39;N&#39; indicates that no customers come at the ith hour.

If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:

For every hour when the shop is open and no customers come, the penalty increases by 1.
For every hour when the shop is closed and customers come, the penalty increases by 1.

Return the earliest hour at which the shop must be closed to incur a minimum penalty.
Note that if a shop closes at the jth hour, it means the shop is closed at the hour j.

Example 1:

Input: customers = 'YYNY'
Output: 2
Explanation:
- Closing the shop at the 0th hour incurs in 1+1+0+1 = 3 penalty.
- Closing the shop at the 1st hour incurs in 0+1+0+1 = 2 penalty.
- Closing the shop at the 2nd hour incurs in 0+0+0+1 = 1 penalty.
- Closing the shop at the 3rd hour incurs in 0+0+1+1 = 2 penalty.
- Closing the shop at the 4th hour incurs in 0+0+1+0 = 1 penalty.
Closing the shop at 2nd or 4th hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.

Example 2:

Input: customers = 'NNNNN'
Output: 0
Explanation: It is best to close the shop at the 0th hour as no customers arrive.
Example 3:

Input: customers = 'YYYY'
Output: 4
Explanation: It is best to close the shop at the 4th hour as customers arrive at each hour.


Constraints:

1 <= customers.length <= 105
customers consists only of characters &#39;Y&#39; and &#39;N&#39;.


```

## 翻译

给定一个由 'Y' 和 'N' 组成的字符串 `customers`，表示商店每小时是否有顾客到访。

如果在第 j 小时关门，惩罚为：
- 营业期间没有顾客的小时数（'N' 的数量）
- 关门后有顾客的小时数（'Y' 的数量）

返回使惩罚最小的最早关门时间。

## Approach

**前缀统计。** 从左到右扫描，维护当前惩罚值。初始惩罚为所有 'Y' 的数量（假设第 0 小时关门）。

遍历每个位置 i，如果 `customers[i] == 'Y'` 则关门后少一个 Y，惩罚减 1；如果是 'N' 则营业期间多一个 N，惩罚加 1。记录最小惩罚的最早位置。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
