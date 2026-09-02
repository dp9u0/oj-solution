# [LCR 060] 前 K 个高频元素

## Description


```md
https://leetcode.cn/problems/g5c51o/description/
* algorithms
* Medium (67.58%)
* Likes:    77
* Dislikes: -
* Testcase Example:  '[1,1,1,2,2,3]\n2'
给定一个整数数组 nums 和一个整数 k ，请返回其中出现频率前 k 高的元素。可以按 任意顺序 返回答案。

示例 1：
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2：
输入: nums = [1], k = 1
输出: [1]

提示：
1 <= nums.length <= 105
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的

进阶：所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

注意：本题与主站 347 题相同：https://leetcode.cn/problems/top-k-frequent-elements/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given integer array `nums` and integer `k`, return the `k` most frequent elements (any order). Answer guaranteed unique.

**Example:** `nums=[1,1,1,2,2,3], k=2` → `[1,2]`

**Constraints:** n ≤ 10^5. Follow-up: better than O(n log n).

Note: same as LeetCode 347.

---

## Approach

Count frequencies, then keep a **min-heap of size k** keyed by frequency: push each (element, freq); if the heap exceeds k, pop the minimum frequency. At the end the heap holds the k most frequent.

Complexity: `O(n log k)`.
