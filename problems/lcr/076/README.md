# [LCR 076] 数组中的第 K 个最大元素

## Description


```md
https://leetcode.cn/problems/xx4gT2/description/
* algorithms
* Medium (65.71%)
* Likes:    115
* Dislikes: -
* Testcase Example:  '[3,2,1,5,6,4]\n2'
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1：
输入：nums = [3,2,1,5,6,4], k = 2
输出：5
示例 2：
输入：nums = [3,2,3,1,2,4,5,5,6], k = 4
输出：4

提示：
1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104

注意：本题与主站 215 题相同： https://leetcode.cn/problems/kth-largest-element-in-an-array/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given `nums` and `k`, return the `k`-th largest element (in sorted order, not distinct).

**Example:** `[3,2,1,5,6,4], k=2` → 5.

**Constraints:** n ≤ 10^4. Note: same as LeetCode 215.

---

## Approach

Maintain a **min-heap of size k** (top = k-th largest): push each element, pop when heap exceeds k; answer is heap top.

Complexity: `O(n log k)` time, `O(k)` space.
