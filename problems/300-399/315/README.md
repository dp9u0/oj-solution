# [315] Count of Smaller Numbers After Self

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/)

* algorithms
* Hard (42.58%)
* Testcase Example:  '[5,2,6,1]'

```md
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example 1:
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.

Constraints:
0 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4

```

## Solution

### 树形数组

构造 数组 A 的树形数组 C 满足 `C[i]=A[i−2^k+1]+A[i−2^k+2]+...+A[i]` 其中 k 为 i 低位连续 0 的个数(观察可以得到: `2^k = i & -i`)

* `C[8]=A[1]+A[2]+A[3]+A[4]+A[5]+A[6]+A[7]+A[8]`
* `C[7]=A[7]`
...

`SUM(i)` 表示 `A[1]`~`A[i]` 的和 则有 `SUM(i)=C[i]+C[i−2^k1]+C[(i−2^k1)−2^k2​]+...` `k2` 是 `i−2^k1` `低位连续 0 的个数` (可以得到: `2^k2 = 2^k1 & -(2^k2)`)

### 解法

* `A[i]` 用于存放某个数字 i 出现的次数,每次出现 i 则需要更新数组 `C` 中与 `A[i]` 相关的位置
* 小于 `i` 的个数 `A[1]`~`A[i-1]` 即 `SUM(i)`

### 优化

如果 nums 过于稀疏 考虑使用 `num->idx` 映射关系 将有序的 `num` 映射为 紧凑的 `idx`

[SourceCode](./solution.js)
