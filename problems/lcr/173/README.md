# [LCR 173] 点名

## Description


```md
https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/description/
* algorithms
* Easy (44.75%)
* Likes:    448
* Dislikes: -
* Testcase Example:  '[0,1,2,3,5]'
某班级 n 位同学的学号为 0 ~ n-1。点名结果记录于升序数组 records。假定仅有一位同学缺席，请返回他的学号。

示例 1：
输入：records = [0,1,2,3,5]
输出：4
示例 2：
输入：records = [0, 1, 2, 3, 4, 5, 6, 8]
输出：7

提示：
1 <= records.length <= 10000

```

### English Translation

A class has `n` students whose student IDs are `0 ~ n-1`. The roll call result is recorded in the **ascending sorted** array `records`. Assuming exactly one student is absent, return his/her student ID.

**Example 1:**
```
Input: records = [0,1,2,3,5]
Output: 4
```

**Example 2:**
```
Input: records = [0, 1, 2, 3, 4, 5, 6, 8]
Output: 7
```

**Constraints:**
- `1 <= records.length <= 10000`

## Solution

[SourceCode](./solution.js)

### 解题思路 (Approach)

**核心洞察**:数组升序且学号为 `0 ~ n-1`,正常下标处 `records[i]` 应等于 `i`。一旦出现缺失,从缺失位置开始 `records[i]` 严格大于 `i`。因此找到**第一个满足 `records[mid] !== mid` 的位置**,该下标即为缺失学号。

**二分查找**:
- 若 `records[mid] === mid`,说明缺失在右侧,`left = mid + 1`;
- 否则(缺失在 `mid` 或左侧),`right = mid`。
- 循环结束后 `left` 即缺失数字。

**复杂度**:时间 `O(log n)`,空间 `O(1)`。相比线性遍历更优。
