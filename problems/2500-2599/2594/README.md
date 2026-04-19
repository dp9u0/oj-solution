# [2594] Minimum Time to Repair Cars

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-repair-cars/description/)

* algorithms
* Medium (59.57%)
* Likes:    1349
* Dislikes: 92
* Testcase Example:  '[4,2,3,1]\n10'

```md
You are given an integer array ranks representing the ranks of some mechanics. ranksi is the rank of the ith mechanic. A mechanic with a rank r can repair n cars in r * n2 minutes.
You are also given an integer cars representing the total number of cars waiting in the garage to be repaired.
Return the minimum time taken to repair all the cars.
Note: All the mechanics can repair the cars simultaneously.

Example 1:

Input: ranks = [4,2,3,1], cars = 10
Output: 16
Explanation:
- The first mechanic will repair two cars. The time required is 4 * 2 * 2 = 16 minutes.
- The second mechanic will repair two cars. The time required is 2 * 2 * 2 = 8 minutes.
- The third mechanic will repair two cars. The time required is 3 * 2 * 2 = 12 minutes.
- The fourth mechanic will repair four cars. The time required is 1 * 4 * 4 = 16 minutes.
It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​

Example 2:

Input: ranks = [5,1,8], cars = 6
Output: 16
Explanation:
- The first mechanic will repair one car. The time required is 5 * 1 * 1 = 5 minutes.
- The second mechanic will repair four cars. The time required is 1 * 4 * 4 = 16 minutes.
- The third mechanic will repair one car. The time required is 8 * 1 * 1 = 8 minutes.
It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​


Constraints:

1 <= ranks.length <= 105
1 <= ranks[i] <= 100
1 <= cars <= 106


```

## 中文翻译

给定技工等级数组 ranks，等级为 r 的技工修 n 辆车需要 r*n² 分钟。所有技工同时工作，求修完 cars 辆车的最短时间。

## 解题思路

**二分答案：**

1. 二分搜索时间 T，判定在时间 T 内能否修完所有车
2. 判定：对每个技工，在时间 T 内最多修 floor(sqrt(T/r)) 辆车，求总和
3. 搜索范围：[1, minRank * cars²]（最快技工独自修所有车的时间）
4. 提前剪枝：累计已够时直接返回 true

时间复杂度：O(n log(minRank * cars²))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
