# [2102] Sequentially Ordinal Rank Tracker

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/description/)

* algorithms
* Hard (61.39%)
* Likes:    407
* Dislikes: 48
* Testcase Example:  '["SORTracker","add","add","get","add","get","add","get","add","get","add","get","get"]\n' +

```md
'[[],["bradford",2],["branford",3],[],["alps",2],[],["orland",2],[],["orlando",3],[],["alpine",2],[],[]]'
A scenic location is represented by its name and attractiveness score, where name is a unique string among all locations and score is an integer. Locations can be ranked from the best to the worst. The higher the score, the better the location. If the scores of two locations are equal, then the location with the lexicographically smaller name is better.
You are building a system that tracks the ranking of locations with the system initially starting with no locations. It supports:

Adding scenic locations, one at a time.
Querying the ith best location of all locations already added, where i is the number of times the system has been queried (including the current query).

For example, when the system is queried for the 4th time, it returns the 4th best location of all locations already added.



Note that the test data are generated so that at any time, the number of queries does not exceed the number of locations added to the system.
Implement the SORTracker class:

SORTracker() Initializes the tracker system.
void add(string name, int score) Adds a scenic location with name and score to the system.
string get() Queries and returns the ith best location, where i is the number of times this method has been invoked (including this invocation).


Example 1:

Input
['SORTracker', 'add', 'add', 'get', 'add', 'get', 'add', 'get', 'add', 'get', 'add', 'get', 'get']
[[], ['bradford', 2], ['branford', 3], [], ['alps', 2], [], ['orland', 2], [], ['orlando', 3], [], ['alpine', 2], [], []]
Output
[null, null, null, 'branford', null, 'alps', null, 'bradford', null, 'bradford', null, 'bradford', 'orland']
Explanation
SORTracker tracker = new SORTracker(); // Initialize the tracker system.
tracker.add('bradford', 2); // Add location with name='bradford' and score=2 to the system.
tracker.add('branford', 3); // Add location with name='branford' and score=3 to the system.
tracker.get();              // The sorted locations, from best to worst, are: branford, bradford.
// Note that branford precedes bradford due to its higher score (3 > 2).
// This is the 1st time get() is called, so return the best location: 'branford'.
tracker.add('alps', 2);     // Add location with name='alps' and score=2 to the system.
tracker.get();              // Sorted locations: branford, alps, bradford.
// Note that alps precedes bradford even though they have the same score (2).
// This is because 'alps' is lexicographically smaller than 'bradford'.
// Return the 2nd best location 'alps', as it is the 2nd time get() is called.
tracker.add('orland', 2);   // Add location with name='orland' and score=2 to the system.
tracker.get();              // Sorted locations: branford, alps, bradford, orland.
// Return 'bradford', as it is the 3rd time get() is called.
tracker.add('orlando', 3);  // Add location with name='orlando' and score=3 to the system.
tracker.get();              // Sorted locations: branford, orlando, alps, bradford, orland.
// Return 'bradford'.
tracker.add('alpine', 2);   // Add location with name='alpine' and score=2 to the system.
tracker.get();              // Sorted locations: branford, orlando, alpine, alps, bradford, orland.
// Return 'bradford'.
tracker.get();              // Sorted locations: branford, orlando, alpine, alps, bradford, orland.
// Return 'orland'.


Constraints:

name consists of lowercase English letters, and is unique among all locations.
1 <= name.length <= 10
1 <= score <= 105
At any time, the number of calls to get does not exceed the number of calls to add.
At most 4 * 104 calls in total will be made to add and get.


```

## 中文翻译

设计一个景点排名追踪器。add(name, score) 添加景点，get() 第 i 次调用时返回所有已添加景点中第 i 好的景点名称。排名规则：分数高的更好，分数相同时名字字典序小的更好。

约束：总计最多 4*10^4 次 add 和 get 调用。

## 解题思路

**双堆（对顶堆）**

维护两个堆：
- left：最小堆（按"更差"排序），保存前 k 个最佳景点，堆顶是其中最差的。
- right：最小堆（按"更好"排序），保存剩余景点，堆顶是其中最好的。

add：推入 right，移到 left，若 left 超过 k 则移回 right。
get：k++，将 right 堆顶移到 left，返回 left 堆顶的名称。

每次操作 O(log n)。

## Solution

[SourceCode](./solution.js)
