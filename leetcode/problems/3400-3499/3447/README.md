# [3447] Assign Elements to Groups with Constraints

## Description

[LeetCode Problem Description](https://leetcode.com/problems/assign-elements-to-groups-with-constraints/description/)

* algorithms
* Medium (26.89%)
* Likes:    135
* Dislikes: 12
* Testcase Example:  '[8,4,3,2,4]\n[4,2]'

```md
You are given an integer array groups, where groups[i] represents the size of the ith group. You are also given an integer array elements.
Your task is to assign one element to each group based on the following rules:

An element at index j can be assigned to a group i if groups[i] is divisible by elements[j].
If there are multiple elements that can be assigned, assign the element with the smallest index j.
If no element satisfies the condition for a group, assign -1 to that group.

Return an integer array assigned, where assigned[i] is the index of the element chosen for group i, or -1 if no suitable element exists.
Note: An element may be assigned to more than one group.

Example 1:

Input: groups = [8,4,3,2,4], elements = [4,2]
Output: [0,0,-1,1,0]
Explanation:

elements[0] = 4 is assigned to groups 0, 1, and 4.
elements[1] = 2 is assigned to group 3.
Group 2 cannot be assigned any element.


Example 2:

Input: groups = [2,3,5,7], elements = [5,3,3]
Output: [-1,1,0,-1]
Explanation:

elements[1] = 3 is assigned to group 1.
elements[0] = 5 is assigned to group 2.
Groups 0 and 3 cannot be assigned any element.


Example 3:

Input: groups = [10,21,30,41], elements = [2,1]
Output: [0,1,0,1]
Explanation:
elements[0] = 2 is assigned to the groups with even values, and elements[1] = 1 is assigned to the groups with odd values.


Constraints:

1 <= groups.length <= 105
1 <= elements.length <= 105
1 <= groups[i] <= 105
1 <= elements[i] <= 105


```

## 题目翻译

给定 groups 和 elements 数组。为每个 group[i] 分配一个 elements[j]，使得 groups[i] 能被 elements[j] 整除。若有多个满足条件的元素，选最小 j。若无满足条件的，分配 -1。

## 解题思路

按 j 从小到大遍历 elements，对每个首次出现的元素值 e，用筛法标记 e 的所有倍数 m（m <= 10^5），记录 bestAssign[m] = j。由于按 j 递增处理，首次标记的一定是最小 j。最后查表即可。时间复杂度 O(maxV * log(maxV))。

## Solution

[SourceCode](./solution.js)
