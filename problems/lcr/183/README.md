# [LCR 183] 望远镜中最高的海拔

## Description


```md
https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/description/
* algorithms
* Hard (44.58%)
* Likes:    659
* Dislikes: -
* Testcase Example:  '[14,2,27,-5,28,13,39]\n3'
科技馆内有一台虚拟观景望远镜，它可以用来观测特定纬度地区的地形情况。该纬度的海拔数据记于数组 heights ，其中 heights[i] 表示对应位置的海拔高度。请找出并返回望远镜视野范围 limit 内，可以观测到的最高海拔值。
示例 1：
输入：heights = [14,2,27,-5,28,13,39], limit = 3
输出：[27,27,28,28,39]
解释：
滑动窗口的位置                最大值
---------------               -----
[14 2 27] -5 28 13 39          27
14 [2 27 -5] 28 13 39          27
14 2 [27 -5 28] 13 39          28
14 2 27 [-5 28 13] 39          28
14 2 27 -5 [28 13 39]          39

提示：
你可以假设输入总是有效的，在输入数组不为空的情况下：
1 <= limit <= heights.length
-10000 <= heights[i] <= 10000
注意：本题与主站 239 题相同：https://leetcode.cn/problems/sliding-window-maximum/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The telescope observes terrain heights `heights`. Find, for every window of size `limit`, the maximum altitude within it. Return the array of window maxima.

**Example:** `heights=[14,2,27,-5,28,13,39], limit=3` → `[27,27,28,28,39]`

**Constraints:** `1 <= limit <= heights.length`. Note: same as LeetCode 239.

---

## Approach

**Monotonic deque** holding indices with decreasing `heights` values.

- Slide `right` from 0..n-1: pop back indices with value `<= heights[right]` (they can't be future maxima), push `right`.
- Pop front indices `< right - limit + 1` (out of window).
- When `right >= limit - 1`, record `heights[deque.front]`.

Complexity: `O(n)`.
