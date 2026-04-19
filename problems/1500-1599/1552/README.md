# [1552] Magnetic Force Between Two Balls

## Description

[LeetCode Problem Description](https://leetcode.com/problems/magnetic-force-between-two-balls/description/)

* algorithms
* Medium (71.97%)
* Likes:    3207
* Dislikes: 274
* Testcase Example:  '[1,2,3,4,7]\n3'

```md
In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.
Rick stated that magnetic force between two different balls at positions x and y is
x - y
.
Given the integer array position and the integer m. Return the required force.

Example 1:


Input: position = [1,2,3,4,7], m = 3
Output: 3
Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.

Example 2:

Input: position = [5,4,3,2,1,1000000000], m = 2
Output: 999999999
Explanation: We can use baskets 1 and 1000000000.


Constraints:

n == position.length
2 <= n <= 105
1 <= position[i] <= 109
All integers in position are distinct.
2 <= m <= position.length


```

## 翻译

给定篮子位置数组 `position` 和球的数量 `m`，将 m 个球放入篮子中，使得任意两球之间的最小距离最大化。返回这个最大化的最小距离。

## Approach

二分答案 + 贪心验证。排序后，二分搜索最小距离 `mid`，用贪心验证是否能放下 m 个球：从第一个位置开始，每次放置距离 >= mid 的位置放一个球，统计能放多少个。若 >= m 则说明可行，尝试更大值。

时间复杂度 O(n log n + n log maxGap)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
