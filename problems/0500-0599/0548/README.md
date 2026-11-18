# [548] 将数组分割成和相等的子数组

## Description


```md
https://leetcode.cn/problems/split-array-with-equal-sum/description/
* algorithms
* Hard (39.56%)
* Likes:    73
* Dislikes: -
* Testcase Example:  '[1,2,1,2,1,2,1]'
给定一个有 n 个整数的数组 nums ，如果能找到满足以下条件的三元组  (i, j, k)  则返回 true ：
0 < i, i + 1 < j, j + 1 < k < n - 1
子数组 (0, i - 1) ， (i + 1, j - 1) ， (j + 1, k - 1) ， (k + 1, n - 1) 的和应该相等。
这里我们定义子数组 (l, r) 表示原数组从索引为 l 的元素开始至索引为 r 的元素。

示例 1:
输入: nums = [1,2,1,2,1,2,1]
输出: True
解释:
i = 1, j = 3, k = 5.
sum(0, i - 1) = sum(0, 0) = 1
sum(i + 1, j - 1) = sum(2, 2) = 1
sum(j + 1, k - 1) = sum(4, 4) = 1
sum(k + 1, n - 1) = sum(6, 6) = 1
示例 2:
输入: nums = [1,2,1,2,1,2,1,2]
输出: false

提示:
n == nums.length
1 <= n <= 2000
-106 <= nums[i] <= 106

```

## Solution

[SourceCode](./solution.js)

## Translation

Find indices (i, j, k) with `0 < i, i+1 < j, j+1 < k < n-1` such that removing single elements at i, j, k splits the array into 4 parts of equal sum.

- Example 1: [1,2,1,2,1,2,1] → `true` (i=1, j=3, k=5)
- Example 2: [1,2,1,2,1,2,1,2] → `false`

Constraints: n ≤ 2000; values in ±10^6.

## Approach

**枚举中间割点 j + 哈希集合**,O(n²):

- 前缀和数组支持 O(1) 区间和。
- 对每个 j:左侧枚举 i(1 ≤ i ≤ j-2),若 `sum(0,i-1) == sum(i+1,j-1)` 把该和加入集合;右侧枚举 k(j+2 ≤ k ≤ n-2),若 `sum(j+1,k-1) == sum(k+1,n-1)` 且该和在集合中 → true。
- 四段和相等 ⟺ 左两段相等且等于右两段相等。
