# [2739] Total Distance Traveled

## Description

[LeetCode Problem Description](https://leetcode.com/problems/total-distance-traveled/description/)

* algorithms
* Easy (41.34%)
* Likes:    329
* Dislikes: 107
* Testcase Example:  '5\n10'

```md
A truck has two fuel tanks. You are given two integers, mainTank representing the fuel present in the main tank in liters and additionalTank representing the fuel present in the additional tank in liters.
The truck has a mileage of 10 km per liter. Whenever 5 liters of fuel getused up in the main tank,if the additional tank has at least 1 liters of fuel, 1 liters of fuel will be transferred from the additional tank to the main tank.
Return the maximum distance which can be traveled.
Note: Injection from the additional tank is not continuous. It happens suddenly and immediately for every 5 liters consumed.

Example 1:

Input: mainTank = 5, additionalTank = 10
Output: 60
Explanation:
After spending 5 litre of fuel, fuel remaining is (5 - 5 + 1) = 1 litre and distance traveled is 50km.
After spending another 1 litre of fuel, no fuel gets injected in the main tank and the main tank becomes empty.
Total distance traveled is 60km.

Example 2:

Input: mainTank = 1, additionalTank = 2
Output: 10
Explanation:
After spending 1 litre of fuel, the main tank becomes empty.
Total distance traveled is 10km.


Constraints:

1 <= mainTank, additionalTank <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

一辆卡车有两个油箱。给定两个整数 `mainTank` 表示主油箱中的燃料（升），`additionalTank` 表示副油箱中的燃料（升）。

卡车每升油行驶 10 公里。每当主油箱消耗 5 升燃料时，如果副油箱中至少有 1 升燃料，就会从副油箱向主油箱转移 1 升燃料。

返回可以行驶的最大距离。

注意：副油箱的注入不是连续的，而是每消耗 5 升后突然且立即发生的。

## 解题思路

直接模拟：主油箱每次消耗油，累计消耗量，每消耗 5 升检查副油箱是否可以补充。用 `used` 记录累计消耗，当 `used` 是 5 的倍数且副油箱有油时，从副油箱转移 1 升到主油箱。当主油箱为空时停止。

也可以简化：每消耗 5 升，如果副油箱有油，主油箱 +1，副油箱 -1。循环直到主油箱 < 5 且无法补充为止。
