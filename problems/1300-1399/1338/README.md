# [1338] Reduce Array Size to The Half

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reduce-array-size-to-the-half/description/)

* algorithms
* Medium (69.36%)
* Likes:    3367
* Dislikes: 154
* Testcase Example:  '[3,3,3,3,5,5,5,2,2,7]'

```md
You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
Return the minimum size of the set so that at least half of the integers of the array are removed.

Example 1:

Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.

Example 2:

Input: arr = [7,7,7,7,7,7]
Output: 1
Explanation: The only possible set you can choose is {7}. This will make the new array empty.


Constraints:

2 <= arr.length <= 105
arr.length is even.
1 <= arr[i] <= 105


```

## 中文翻译

选择一个整数集合，移除数组中这些整数的所有出现。求使移除数量至少为数组长度一半的最小集合大小。

## 解题思路

**贪心**

统计频率，按频率从大到小排序，贪心地选频率最大的直到移除数 >= n/2。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
