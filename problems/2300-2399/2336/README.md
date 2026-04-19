# [2336] Smallest Number in Infinite Set

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-number-in-infinite-set/description/)

* algorithms
* Medium (70.58%)
* Likes:    1850
* Dislikes: 233
* Testcase Example:  '["SmallestInfiniteSet","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest"]\n' +

```md
'[[],[2],[],[],[],[1],[],[],[]]'
You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].
Implement the SmallestInfiniteSet class:

SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
int popSmallest() Removes and returns the smallest integer contained in the infinite set.
void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.


Example 1:

Input
['SmallestInfiniteSet', 'addBack', 'popSmallest', 'popSmallest', 'popSmallest', 'addBack', 'popSmallest', 'popSmallest', 'popSmallest']
[[], [2], [], [], [], [1], [], [], []]
Output
[null, null, 1, 2, 3, null, 1, 4, 5]
Explanation
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
// is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.


Constraints:

1 <= num <= 1000
At most 1000 calls will be made in total to popSmallest and addBack.


```

## 中文翻译

维护一个包含所有正整数的无限集合。实现 popSmallest（弹出最小值）和 addBack（将数加回集合）操作。

## 解题思路

用最小堆（优先队列）存储被 addBack 加回的小于当前指针的数，用一个变量 next 追踪连续正整数的起点。popSmallest 时优先从堆中取最小值，否则取 next 并递增。用 Set 记录堆中已有的数避免重复添加。

## Solution

[SourceCode](./solution.js)
