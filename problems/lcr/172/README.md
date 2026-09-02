# [LCR 172] 统计目标成绩的出现次数

## Description


```md
https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/description/
* algorithms
* Easy (52.68%)
* Likes:    464
* Dislikes: -
* Testcase Example:  '[2,2,3,4,4,4,5,6,6,8]\n4'
某班级考试成绩按非严格递增顺序记录于整数数组 scores，请返回目标成绩 target 的出现次数。

示例 1：
输入: scores = [2, 2, 3, 4, 4, 4, 5, 6, 6, 8], target = 4
输出: 3
示例 2：
输入: scores = [1, 2, 3, 5, 7, 9], target = 6
输出: 0

提示：
0 <= scores.length <= 105
-109 <= scores[i] <= 109
scores 是一个非递减数组
-109 <= target <= 109

注意：本题与主站 34 题相同（仅返回值不同）：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The class exam scores are recorded in non-decreasing array `scores`. Return how many times the target score `target` appears.

**Example 1:** `scores = [2,2,3,4,4,4,5,6,6,8], target = 4` → `3`
**Example 2:** target 6 absent → `0`

**Constraints:** up to 10^5 elements. Note: similar to LeetCode 34.

---

## Approach

Two **binary searches**: find the first index `>= target` and the first index `> target`; count = difference. Handles absence (returns 0) naturally.

Complexity: `O(log n)`.
