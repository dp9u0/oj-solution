# [1282] Group the People Given the Group Size They Belong To

## Description

[LeetCode Problem Description](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/)

* algorithms
* Medium (87.48%)
* Likes:    3162
* Dislikes: 749
* Testcase Example:  '[3,3,3,3,3,1,3]'

```md
There are n peoplethat are split into some unknown number of groups. Each person is labeled with aunique IDfrom0ton - 1.
You are given an integer arraygroupSizes, where groupSizes[i]is the size of the group that personiis in. For example, ifgroupSizes[1] = 3, thenperson1must be in agroup of size3.
Returna list of groupssuch thateach personiis in a group of sizegroupSizes[i].
Each person shouldappear inexactly one group,and every person must be in a group. If there aremultiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

Example 1:

Input: groupSizes = [3,3,3,3,3,1,3]
Output: [[5],[0,1,2],[3,4,6]]
Explanation:
The first group is [5]. The size is 1, and groupSizes[5] = 1.
The second group is [0,1,2]. The size is 3, and groupSizes[0] = groupSizes[1] = groupSizes[2] = 3.
The third group is [3,4,6]. The size is 3, and groupSizes[3] = groupSizes[4] = groupSizes[6] = 3.
Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

Example 2:

Input: groupSizes = [2,1,3,3,3,2]
Output: [[1],[0,5],[2,3,4]]


Constraints:

groupSizes.length == n
1 <= n<= 500
1 <=groupSizes[i] <= n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

有 n 个人分成若干组。groupSizes[i] 表示第 i 个人所在组的大小。返回一种合法的分组方案，每个人恰好出现在一个组中。

## 解题思路

**哈希表 + 贪心**

1. 用 Map 按组大小分类收集人员 ID
2. 对于每个组大小 size，将收集到的人每 size 个分成一组
3. 当某组凑满 size 人时加入结果

时间复杂度 O(n)，空间复杂度 O(n)。
