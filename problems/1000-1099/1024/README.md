# [1024] Video Stitching

## Description

[LeetCode Problem Description](https://leetcode.com/problems/video-stitching/description/)

* algorithms
* Medium (52.60%)
* Likes:    1863
* Dislikes: 64
* Testcase Example:  '[[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]]\n10'

```md
You are given a series of video clips from a sporting event that lasted time seconds. These video clips can be overlapping with each other and have varying lengths.
Each video clip is described by an array clips where clips[i] = [starti, endi] indicates that the ith clip started at starti and ended at endi.
We can cut these clips into segments freely.

For example, a clip [0, 7] can be cut into segments [0, 1] + [1, 3] + [3, 7].

Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event [0, time]. If the task is impossible, return -1.

Example 1:

Input: clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10
Output: 3
Explanation: We take the clips [0,2], [8,10], [1,9]; a total of 3 clips.
Then, we can reconstruct the sporting event as follows:
We cut [1,9] into segments [1,2] + [2,8] + [8,9].
Now we have segments [0,2] + [2,8] + [8,10] which cover the sporting event [0, 10].

Example 2:

Input: clips = [[0,1],[1,2]], time = 5
Output: -1
Explanation: We cannot cover [0,5] with only [0,1] and [1,2].

Example 3:

Input: clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], time = 9
Output: 3
Explanation: We can take clips [0,4], [4,7], and [6,9].


Constraints:

1 <= clips.length <= 100
0 <= starti <= endi <= 100
1 <= time <= 100


```

## 中文翻译

你获得了一系列体育赛事的视频片段，赛事持续 `time` 秒。这些片段可以相互重叠，长度不一。

每个片段用数组 `clips` 描述，`clips[i] = [starti, endi]` 表示第 i 个片段从 `starti` 开始到 `endi` 结束。可以自由裁剪这些片段。

返回覆盖整个赛事区间 `[0, time]` 所需的最少片段数。如果不可能覆盖，返回 -1。

## 解题思路

**贪心算法：**

1. 将片段按起始时间排序
2. 维护当前覆盖范围 `[0, end]`，在每次迭代中选择起点 `<= end` 且终点最远的片段来扩展覆盖范围
3. 如果某次迭代中无法找到能扩展的片段，说明存在间隔，返回 -1
4. 重复直到覆盖到 `time`

时间复杂度：O(n log n)（排序），空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
