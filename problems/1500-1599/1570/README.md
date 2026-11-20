# [1570] 两个稀疏向量的点积

## Description


```md
https://leetcode.cn/problems/dot-product-of-two-sparse-vectors/description/
* algorithms
* Medium (87.16%)
* Likes:    52
* Dislikes: -
* Testcase Example:  '[1,0,0,2,3]\n[0,3,0,4,0]'
给定两个稀疏向量，计算它们的点积（数量积）。
实现类 SparseVector：
SparseVector(nums) 以向量 nums 初始化对象。
dotProduct(vec) 计算此向量与 vec 的点积。
稀疏向量 是指绝大多数分量为 0 的向量。你需要 高效 地存储这个向量，并计算两个稀疏向量的点积。
进阶：当其中只有一个向量是稀疏向量时，你该如何解决此问题？

示例 1：
输入：nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
输出：8
解释：v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
示例 2：
输入：nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]
输出：0
解释：v1 = SparseVector(nums1) , v2 = SparseVector(nums2)
v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0
示例 3：
输入：nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]
输出：6

提示：
n == nums1.length == nums2.length
1 <= n <= 10^5
0 <= nums1[i], nums2[i] <= 100
Hint 1: Because the vector is sparse, use a data structure that stores the index and value where the element is nonzero.

```

## Solution

[SourceCode](./solution.js)

## Translation

Store a sparse vector efficiently; dotProduct(vec) computes the dot product using only nonzero entries.

## Approach

**非零对 + 双指针**。构造时只存 (index, value) 非零对(按索引天然有序);点积双指针归并,索引相等累乘积。构造 O(n),点积 O(非零数之和)。
