# [319] Bulb Switcher

## Description

[LeetCode Problem Description](https://leetcode.com/problems/bulb-switcher/description/)

* algorithms
* Medium (53.49%)
* Likes:    2755
* Dislikes: 3159
* Testcase Example:  '3'

## 题目翻译

有 n 个灯泡最初都是关闭的。第一轮，你将所有的灯泡都打开。第二轮，你每隔一个灯泡关闭一个。第三轮，你每隔两个灯泡切换一个灯泡的开关状态（如果开着就关闭，关着就打开）。对于第 i 轮，你每隔 i-1 个灯泡切换一个灯泡的开关状态。对于第 n 轮，你只切换最后一个灯泡的开关状态。

返回 n 轮后亮着的灯泡的数量。

## 解题思路

这道题可以通过数学方法来解决：

1. 对于第 i 个灯泡，它会在第 j 轮被切换，如果 j 是 i 的因数
2. 因此，第 i 个灯泡最终的状态取决于它的因数个数：
   - 如果因数个数为奇数，最终是亮的
   - 如果因数个数为偶数，最终是灭的
3. 只有完全平方数的因数个数是奇数（因为除了平方根外，其他因数都是成对出现的）
4. 所以，最终亮着的灯泡数量就等于 n 以内完全平方数的个数
5. 即为 floor(sqrt(n))

因此，这道题的答案就是对 n 开平方后向下取整。

## Solution

[SourceCode](./solution.js)
