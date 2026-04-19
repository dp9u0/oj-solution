# [1146] Snapshot Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/snapshot-array/description/)

* algorithms
* Medium (36.69%)
* Likes:    3925
* Dislikes: 541
* Testcase Example:  '["SnapshotArray","set","snap","set","get"]\n[[3],[0,5],[],[0,6],[0,0]]'

```md
Implement a SnapshotArray that supports the following interface:

SnapshotArray(int length) initializes an array-like data structure with the given length. Initially, each element equals 0.
void set(index, val) sets the element at the given index to be equal to val.
int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id


Example 1:

Input: ['SnapshotArray','set','snap','set','get']
[[3],[0,5],[],[0,6],[0,0]]
Output: [null,null,0,null,5]
Explanation:
SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0,5);  // Set array[0] = 5
snapshotArr.snap();  // Take a snapshot, return snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5

Constraints:

1 <= length <= 5 * 104
0 <= index < length
0 <= val <= 109
0 <= snap_id < (the total number of times we call snap())
At most 5 * 104 calls will be made to set, snap, and get.


```

## 翻译

实现快照数组：set 设置值，snap 拍快照返回 snap_id，get 查询某快照中某位置的值。

## 解题思路

每个位置维护 (snap_id, value) 列表。set 时追加当前 snap_count，snap 时递增计数器，get 时二分查找 <= snap_id 的最新值。

## Solution

[SourceCode](./solution.js)
