# [2526] Find Consecutive Integers from a Data Stream

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/description/)

* algorithms
* Medium (51.03%)
* Likes:    344
* Dislikes: 40
* Testcase Example:  '["DataStream","consec","consec","consec","consec"]\n[[4,3],[4],[4],[4],[3]]'

```md
For a stream of integers, implement a data structure that checks if the last k integers parsed in the stream are equal to value.
Implement the DataStream class:

DataStream(int value, int k) Initializes the object with an empty integer stream and the two integers value and k.
boolean consec(int num) Adds num to the stream of integers. Returns true if the last k integers are equal to value, and false otherwise. If there are less than k integers, the condition does not hold true, so returns false.


Example 1:

Input
['DataStream', 'consec', 'consec', 'consec', 'consec']
[[4, 3], [4], [4], [4], [3]]
Output
[null, false, false, true, false]
Explanation
DataStream dataStream = new DataStream(4, 3); //value = 4, k = 3
dataStream.consec(4); // Only 1 integer is parsed, so returns False.
dataStream.consec(4); // Only 2 integers are parsed.
// Since 2 is less than k, returns False.
dataStream.consec(4); // The 3 integers parsed are all equal to value, so returns True.
dataStream.consec(3); // The last k integers parsed in the stream are [4,4,3].
// Since 3 is not equal to value, it returns False.


Constraints:

1 <= value, num <= 109
1 <= k <= 105
At most 105 calls will be made to consec.


```

## 中文翻译

实现一个数据流类，每次添加数字后判断最后 k 个整数是否都等于 value。

## 解题思路

维护一个计数器，记录末尾连续等于 value 的个数。遇到 value 递增，遇到非 value 重置为 0。计数器 >= k 时返回 true。

时间复杂度：O(1) 每次操作，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
