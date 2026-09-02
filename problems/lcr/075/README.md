# [LCR 075] 数组的相对排序

## Description


```md
https://leetcode.cn/problems/0H97ZC/description/
* algorithms
* Easy (69.06%)
* Likes:    79
* Dislikes: -
* Testcase Example:  '[2,3,1,3,2,4,6,7,9,2,19]\n[2,1,4,3,9,6]'
给定两个数组，arr1 和 arr2，
arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

示例：
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]

提示：
1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中

注意：本题与主站 1122 题相同：https://leetcode.cn/problems/relative-sort-array/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given `arr1` and `arr2` (arr2 elements distinct, all appear in arr1), sort `arr1` so that elements keep arr2's relative order; elements not in arr2 go at the end in ascending order.

**Example:** → `[2,2,2,1,4,3,3,9,6,7,19]`.

Note: same as LeetCode 1122.

---

## Approach

Count occurrences of each value in arr1 (values ≤ 1000). Emit arr2 values in order (each its count), then any remaining values in ascending order.

Complexity: `O(n + maxV)`.
