# [1157] Online Majority Element In Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/online-majority-element-in-subarray/description/)

* algorithms
* Hard (40.34%)
* Likes:    663
* Dislikes: 66
* Testcase Example:  '["MajorityChecker","query","query","query"]\n' +

```md
'[[[1,1,2,2,1,1]],[0,5,4],[0,3,3],[2,3,2]]'
Design a data structure that efficiently finds the majority element of a given subarray.
The majority element of a subarray is an element that occurs threshold times or more in the subarray.
Implementing the MajorityChecker class:

MajorityChecker(int[] arr) Initializes the instance of the class with the given array arr.
int query(int left, int right, int threshold) returns the element in the subarray arr[left...right] that occurs at least threshold times, or -1 if no such element exists.


Example 1:

Input
['MajorityChecker', 'query', 'query', 'query']
[[[1, 1, 2, 2, 1, 1]], [0, 5, 4], [0, 3, 3], [2, 3, 2]]
Output
[null, 1, -1, 2]
Explanation
MajorityChecker majorityChecker = new MajorityChecker([1, 1, 2, 2, 1, 1]);
majorityChecker.query(0, 5, 4); // return 1
majorityChecker.query(0, 3, 3); // return -1
majorityChecker.query(2, 3, 2); // return 2


Constraints:

1 <= arr.length <= 2 * 104
1 <= arr[i] <= 2 * 104
0 <= left <= right < arr.length
threshold <= right - left + 1
2 * threshold > right - left + 1
At most 104 calls will be made to query.


```

## 题目翻译

设计数据结构，高效查找子数组中出现次数 ≥ threshold 的元素。保证 2*threshold > 子数组长度（即多数元素超过半数，至多一个）。

## 解题思路

随机化算法。预处理：对每个值存储其出现位置的有序数组。查询时：从 [left, right] 随机采样 20 个位置，对每个候选值用二分查找在有序位置数组中统计 [left, right] 内出现次数。由于多数元素占比 > 50%，每次采样命中概率 > 0.5，20 次失败概率 < 2^{-20}。

## Solution

[SourceCode](./solution.js)
