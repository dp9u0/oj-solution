# [2167] Minimum Time to Remove All Cars Containing Illegal Goods

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/description/)

* algorithms
* Hard (41.93%)
* Likes:    703
* Dislikes: 17
* Testcase Example:  '"1100101"'

```md
You are given a 0-indexed binary string s which represents a sequence of train cars. s[i] = &#39;0&#39; denotes that the ith car does not contain illegal goods and s[i] = &#39;1&#39; denotes that the ith car does contain illegal goods.
As the train conductor, you would like to get rid of all the cars containing illegal goods. You can do any of the following three operations any number of times:

Remove a train car from the left end (i.e., remove s[0]) which takes 1 unit of time.
Remove a train car from the right end (i.e., remove s[s.length - 1]) which takes 1 unit of time.
Remove a train car from anywhere in the sequence which takes 2 units of time.

Return the minimum time to remove all the cars containing illegal goods.
Note that an empty sequence of cars is considered to have no cars containing illegal goods.

Example 1:

Input: s = '1100101'
Output: 5
Explanation:
One way to remove all the cars containing illegal goods from the sequence is to
- remove a car from the left end 2 times. Time taken is 2 * 1 = 2.
- remove a car from the right end. Time taken is 1.
- remove the car containing illegal goods found in the middle. Time taken is 2.
This obtains a total time of 2 + 1 + 2 = 5.
An alternative way is to
- remove a car from the left end 2 times. Time taken is 2 * 1 = 2.
- remove a car from the right end 3 times. Time taken is 3 * 1 = 3.
This also obtains a total time of 2 + 3 = 5.
5 is the minimum time taken to remove all the cars containing illegal goods.
There are no other ways to remove them with less time.

Example 2:

Input: s = '0010'
Output: 2
Explanation:
One way to remove all the cars containing illegal goods from the sequence is to
- remove a car from the left end 3 times. Time taken is 3 * 1 = 3.
This obtains a total time of 3.
Another way to remove all the cars containing illegal goods from the sequence is to
- remove the car containing illegal goods found in the middle. Time taken is 2.
This obtains a total time of 2.
Another way to remove all the cars containing illegal goods from the sequence is to
- remove a car from the right end 2 times. Time taken is 2 * 1 = 2.
This obtains a total time of 2.
2 is the minimum time taken to remove all the cars containing illegal goods.
There are no other ways to remove them with less time.

Constraints:

1 <= s.length <= 2 * 105
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 题目翻译

给定 01 字符串 s，三种操作：左端删除(代价1)、右端删除(代价1)、任意位置删除(代价2)。移除所有 '1' 的最小总代价。

## 解题思路

**前后缀分解 + 枚举分割点**

对分割点 i，左部 s[0..i-1] 从左端移除或逐个移除 '1'，右部 s[i..n-1] 从右端移除或逐个移除 '1'。

costLeft[i] = 2×ones[i] + min_{j≤i}(j - 2×ones[j])（运行最小值，O(n)）

costRight[i] = -2×ones[i] + suffixMin[i]（后缀最小值，O(n)）

答案 = min(costLeft[i] + costRight[i])

## Solution

[SourceCode](./solution.js)
