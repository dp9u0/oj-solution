# [LCR 191] 按规则计算统计结果

## Description


```md
https://leetcode.cn/problems/gou-jian-cheng-ji-shu-zu-lcof/description/
* algorithms
* Medium (56.56%)
* Likes:    358
* Dislikes: -
* Testcase Example:  '[2,4,6,8,10]'
为了深入了解这些生物群体的生态特征，你们进行了大量的实地观察和数据采集。数组 arrayA 记录了各个生物群体数量数据，其中 arrayA[i] 表示第 i 个生物群体的数量。请返回一个数组 arrayB，该数组为基于数组 arrayA 中的数据计算得出的结果，其中 arrayB[i] 表示将第 i 个生物群体的数量从总体中排除后的其他数量的乘积。

示例 1：
输入：arrayA = [2, 4, 6, 8, 10]
输出：[1920, 960, 640, 480, 384]

提示：
所有元素乘积之和不会溢出 32 位整数
arrayA.length <= 100000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given counts `arrayA`, return `arrayB` where `arrayB[i]` is the product of all elements except `arrayA[i]` (i.e. arrayB[i] = Π_{j≠i} arrayA[j]).

**Example:** `[2,4,6,8,10]` → `[1920,960,640,480,384]`

**Constraints:** length ≤ 10^5, products fit 32-bit.

---

## Approach

**Prefix/suffix product, in-place**:
1. `arrayB[i]` = product of all to the left of i (left pass).
2. Multiply by product of all to the right (right pass with a running suffix product).

No division needed (handles zeros). O(n) time, O(1) extra space (besides output).
