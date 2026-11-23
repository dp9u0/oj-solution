# [3141] 最大汉明距离

## Description


```md
https://leetcode.cn/problems/maximum-hamming-distances/description/
* algorithms
* Hard (28.98%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[9,12,9,11]\n4'
给定一个数组 nums 和一个整数 m，每个元素 nums[i] 满足 0 <= nums[i] < 2m，返回数组 answer。answer 数组应该与 nums  有相同的长度，每个元素 answer[i] 表示 nums[i] 和数组中其它任何元素 nums[j] 的最大 汉明距离。
两个二进制整数之间的 汉明距离 定义为对应位上二进制位不同的数量（如果需要，添加前置零）。

示例 1：
输入：nums = [9,12,9,11], m = 4
输出：[2,3,2,3]
解释：
二进制表示为 nums = [1001,1100,1001,1011]。
每个下标的最大汉明距离为：
nums[0]：1001 与 1100 距离为 2。
nums[1]：1100 与 1011 距离为 3。
nums[2]：1001 与 1100 距离为 2。
nums[3]：1011 与 1100 距离为 3。
示例 2：
输入：nums = [3,4,6,10], m = 4
输出：[3,3,2,3]
解释：
二进制表示为 nums = [0011,0100,0110,1010]。
每个下标的最大汉明距离为：
nums[0]：0011 与 0100 距离为 3。
nums[1]：0100 与 0011 距离为 3。
nums[2]：0110 与 1010 距离为 2。
nums[3]：1010 与 0100 距离为 3。

提示：
1 <= m <= 17
2 <= nums.length <= 2m
0 <= nums[i] < 2m
Hint 1: For each nums[i], complement it (for each bit, if it is 1, it becomes 0 and vice-versa).
Hint 2: Instead of finding the maximum Hamming distance from x = nums[i], let's think of finding the minimum Hamming distance from the complement of x to any element of the array.
Hint 3: Create a graph with V = {0, 1, ..., 2m - 1}. Put an edge between two vertices if they differ in exactly one bit.
Hint 4: Run a multi-source BFS from elements of nums.
Hint 5: Now for each x, to find its minimum Hamming distance from elements of the array, simply calculate its shortest path from array elements.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): nums[i] < 2^m (m <= 17). For each i, answer[i] = max Hamming distance between nums[i] and any other element.

Approach: max distance from x = m - (min distance from ~x). Multi-source BFS on the m-dimensional hypercube (2^m vertices, edge = flip one bit) seeded with all nums values gives dist[v] = min Hamming distance from v to the set; answer[i] = m - dist[(~nums[i]) & mask]. O(2^m * m).

Verified: [9,12,9,11]/4 -> [2,3,2,3]; [3,4,6,10]/4 -> [3,3,2,3].
