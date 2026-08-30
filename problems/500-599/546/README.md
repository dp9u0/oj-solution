# [546] Remove Boxes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-boxes/description/)

* algorithms
* Hard (49.70%)
* Likes:    2502
* Dislikes: 138
* Testcase Example:  '[1,3,2,2,2,3,4,3,1]'

```md
You are given several boxes with different colors represented by different positive numbers.
You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of k boxes, k >= 1), remove them and get k * k points.
Return the maximum points you can get.

Example 1:

Input: boxes = [1,3,2,2,2,3,4,3,1]
Output: 23
Explanation:
[1, 3, 2, 2, 2, 3, 4, 3, 1]
----> [1, 3, 3, 4, 3, 1] (3*3=9 points)
----> [1, 3, 3, 3, 1] (1*1=1 points)
----> [1, 1] (3*3=9 points)
----> [] (2*2=4 points)

Example 2:

Input: boxes = [1,1,1]
Output: 9

Example 3:

Input: boxes = [1]
Output: 1


Constraints:

1 <= boxes.length <= 100
1 <= boxes[i]<= 100


```

## Solution

[SourceCode](./solution.js)

---

## 中文翻译

给定若干个由不同正整数(颜色)表示的盒子。

你需要经过若干轮操作把所有盒子移除,直到没有盒子剩下。每一轮你可以选择若干个**连续的、颜色相同**的盒子(设由 k 个盒子组成, k >= 1)移除它们,并获得 k * k 的分数。

返回你能获得的最大分数。

示例 1:
输入: boxes = [1,3,2,2,2,3,4,3,1]
输出: 23
解释:
[1, 3, 2, 2, 2, 3, 4, 3, 1]
----> [1, 3, 3, 4, 3, 1] (3*3=9 分)
----> [1, 3, 3, 3, 1] (1*1=1 分)
----> [1, 1] (3*3=9 分)
----> [] (2*2=4 分)

示例 2:
输入: boxes = [1,1,1]
输出: 9

示例 3:
输入: boxes = [1]
输出: 1

约束:
1 <= boxes.length <= 100
1 <= boxes[i] <= 100

---

## 解题思路

**关键洞察**:贪心(每次先删最长的同色段)是错的。因为先删掉中间的盒子,可以让原本不相邻的同色盒子合并成更大的段,平方级收益更大(见示例 1:先删 2,2,2 是为了让三个 3 合并)。

**状态设计**(区间 DP + 附加维度):

定义 `dp(l, r, k)` 为:处理区间 boxes[l..r],且区间左侧紧挨着还有 k 个与 boxes[l] **同色**的盒子(它们暂时不删,等待与 boxes[l] 所在段合并)时,能获得的最大分数。

`k` 的存在是核心:左侧同色盒子无法用区间表示(它们在区间外),必须记入状态。

**转移**:

1. 直接把 boxes[l] 与左侧 k 个同色盒子一起删除:
   `(k+1)^2 + dp(l+1, r, 0)`

2. 保留 boxes[l],先处理中间部分,寻找合并机会:枚举 m ∈ (l, r] 且 boxes[m] == boxes[l]:
   - 先删掉中间段 `dp(l+1, m-1, 0)`(注意与左侧无关,传 0)
   - 再把 boxes[l] 的"势力"传递给 boxes[m]:`dp(m, r, k+1)`
   - 两者相加即为候选答案。

答案为 `dp(0, n-1, 0)`。

**复杂度**:状态数 O(n² · n) = O(n³) ≤ 10^6,每个状态转移 O(n),总 O(n⁴) 最坏,但实际剪枝/记忆化后远小于该界,n ≤ 100 完全可过。空间 O(n³)。

**实现细节**:用三维数组记忆化;递归自顶向下最自然。

### 实现细节补充(调试中发现的两个关键坑)

1. **记忆化键必须用折叠前的 (l, r, k)**:折叠 (l→lo, k→kk) 不是单射,不同入参 k 折叠后得到相同 kk,若以折叠后的 k 作键,不同状态会互相污染(实测导致对拍失败)。
2. **转移 2 的中间段必须从折叠后的 `lo+1` 开始**而非 `l+1`:折叠段 boxes[l..lo] 已并入左侧同色组,若中间段仍从 l+1 开始,这些盒子会被重复计分(实测 [1,1,2,2,1,1] 算出 21 > 正确值 20)。

验证方式:用小规模暴力枚举(指数级)对拍 2000 组随机用例,全部一致后才提交。
