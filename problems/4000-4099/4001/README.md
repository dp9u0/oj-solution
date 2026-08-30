# [4001] Aggregate Two Time Series

## Description

[LeetCode Problem Description](https://leetcode.com/problems/aggregate-two-time-series/description/)

* algorithms
* Medium (57.94%)
* Likes:    60
* Dislikes: 12
* Testcase Example:  '[[1,3],[4,1]]\n[[2,2],[5,2]]'

```md
You are given two 2D integer arrays series1 and series2.
Each element in both series is of the form [timestamp, value], where:
timestamp is an integer representing the time.
value is an integer representing the value at that timestamp.
Each array is sorted in strictly increasing order of timestamp.
For any timestamp not present in a series, its value is taken from the next available timestamp in the same series if one exists. Otherwise, its value is considered 0.
The aggregated series is formed by summing the corresponding values from both series at every timestamp that appears in either series.
Return the aggregated series as a 2D integer array of [timestamp, summedValue] pairs, sorted in strictly increasing order of timestamp.

Example 1:
Input: series1 = [[1,3],[4,1]], series2 = [[2,2],[5,2]]
Output: [[1,5],[2,3],[4,3],[5,2]]
Explanation:


Timestamp
series1
series2
summedValue


1
3
2
5


2
1
2
3


4
1
2
3


5
0
2
2


Thus, the aggregated series is [[1, 5], [2, 3], [4, 3], [5, 2]].
Example 2:
Input: series1 = [[1,5],[3,1]], series2 = [[2,2]]
Output: [[1,7],[2,3],[3,1]]
Explanation:


Timestamp
series1
series2
summedValue


1
5
2
7


2
1
2
3


3
1
0
1


Thus, the aggregated series is [[1, 7], [2, 3], [3, 1]].
Example 3:
Input: series1 = [[1,5]], series2 = [[1000000000,2]]
Output: [[1,7],[1000000000,2]]
Explanation:
At timestamp 1, the next available value in series2 is 2 at timestamp 1000000000. At timestamp 1000000000, there is no later timestamp in series1, so its value is 0. Only timestamps that appear in at least one of the two series are included.

Constraints:
1 <= series1.length, series2.length <= 105
series1[i].length == series2[i].length == 2
1 <= series1[i][0], series2[i][0] <= 109
1 <= series1[i][1], series2[i][1] <= 109
Each series is sorted in strictly increasing order of timestamp.
Hint 1: Merge the timestamps from both series in increasing order, similarly to the merge step of merge sort.
Hint 2: Because a missing timestamp uses the next available value, process the merged timestamps from right to left while maintaining the next available value in each series.
Hint 3: At each timestamp, update the maintained value for every series containing that timestamp, then add the two maintained values to the answer.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你两个二维整数数组 series1 和 series2。

两个序列中的每个元素都形如 `[timestamp, value]`,其中:
- `timestamp` 是一个表示时间的整数。
- `value` 是该时间戳处的值。

每个数组都按 timestamp 严格递增排序。

对于某个序列中不存在的时间戳,其值取自该序列中**下一个可用时间戳**(即大于当前时间戳的最小时间戳)处的值;若不存在更晚的时间戳,则其值视为 0。

聚合序列的构成方式:对出现在任一序列中的每个时间戳,将两个序列在该时间戳处的值相加。

返回聚合序列,是一个按 timestamp 严格递增排序的 `[timestamp, summedValue]` 二维整数数组。

示例 1:
输入: series1 = [[1,3],[4,1]], series2 = [[2,2],[5,2]]
输出: [[1,5],[2,3],[4,3],[5,2]]
解释:时间戳 1 处 series1=3、series2 取下一个可用值 2,和为 5;时间戳 2 处 series1 取下一个可用值 1、series2=2,和为 3;以此类推。

示例 2:
输入: series1 = [[1,5],[3,1]], series2 = [[2,2]]
输出: [[1,7],[2,3],[3,1]]

示例 3:
输入: series1 = [[1,5]], series2 = [[1000000000,2]]
输出: [[1,7],[1000000000,2]]
解释:时间戳 1 处 series2 的下一个可用值是 2;时间戳 1000000000 处 series1 没有更晚的时间戳,值为 0。只包含至少出现在一个序列中的时间戳。

约束:
- 1 <= series1.length, series2.length <= 10^5
- series1[i].length == series2[i].length == 2
- 1 <= series1[i][0], series2[i][0] <= 10^9
- 1 <= series1[i][1], series2[i][1] <= 10^9
- 每个序列按 timestamp 严格递增排序。

## 解题思路

**关键观察**:缺失时间戳的值取"下一个可用值"(向右看),因此**从右往左**处理时间戳时,每个序列只需维护一个变量 `next`,表示当前位置右侧最近的值。

**算法(双指针 + 从右往左合并)**:

1. 先用归并排序合并步的思路,收集两个序列时间戳的并集(去重),得到严格递增的时间戳列表 `timestamps`。
2. 从右往左遍历 `timestamps`,维护 `next1`、`next2`(初始为 0,表示右边没有值时取 0):
   - 若当前时间戳等于 `series1[i][0]`,则 `next1 = series1[i][1]`,指针 i 左移;
   - 若当前时间戳等于 `series2[j][0]`,则 `next2 = series2[j][1]`,指针 j 左移;
   - 结果为 `[t, next1 + next2]`。
3. 由于是从右往左生成,最后反转得到递增顺序。

**复杂度**:
- 时间复杂度 O(n + m),n、m 为两个序列长度。
- 空间复杂度 O(n + m),存储时间戳并集与结果。
