# [1093] Statistics from a Large Sample

## Description

[LeetCode Problem Description](https://leetcode.com/problems/statistics-from-a-large-sample/description/)

* algorithms
* Medium (43.06%)
* Likes:    179
* Dislikes: 109
* Testcase Example:  '[0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]'

```md
You are given a large sample of integers in the range [0, 255]. Since the sample is so large, it is represented by an array countwhere count[k] is the number of times that k appears in the sample.
Calculate the following statistics:

minimum: The minimum element in the sample.
maximum: The maximum element in the sample.
mean: The average of the sample, calculated as the total sum of all elements divided by the total number of elements.
median:

If the sample has an odd number of elements, then the median is the middle element once the sample is sorted.
If the sample has an even number of elements, then the median is the average of the two middle elements once the sample is sorted.


mode: The number that appears the most in the sample. It is guaranteed to be unique.

Return the statistics of the sample as an array of floating-point numbers [minimum, maximum, mean, median, mode]. Answers within 10-5 of the actual answer will be accepted.

Example 1:

Input: count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,3.00000,2.37500,2.50000,3.00000]
Explanation: The sample represented by count is [1,2,2,2,3,3,3,3].
The minimum and maximum are 1 and 3 respectively.
The mean is (1+2+2+2+3+3+3+3) / 8 = 19 / 8 = 2.375.
Since the size of the sample is even, the median is the average of the two middle elements 2 and 3, which is 2.5.
The mode is 3 as it appears the most in the sample.

Example 2:

Input: count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,4.00000,2.18182,2.00000,1.00000]
Explanation: The sample represented by count is [1,1,1,1,2,2,2,3,3,4,4].
The minimum and maximum are 1 and 4 respectively.
The mean is (1+1+1+1+2+2+2+3+3+4+4) / 11 = 24 / 11 = 2.18181818... (for display purposes, the output shows the rounded number 2.18182).
Since the size of the sample is odd, the median is the middle element 2.
The mode is 1 as it appears the most in the sample.


Constraints:

count.length == 256
0 <= count[i] <= 109
1 <= sum(count) <= 109
The mode of the sample that count represents is unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个范围在 `[0, 255]` 内的大样本整数。样本太大，用计数数组 `count` 表示，`count[k]` 是值 `k` 在样本中出现的次数。

计算以下统计量：

- **minimum**：样本最小元素
- **maximum**：样本最大元素
- **mean**：所有元素之和除以元素总数
- **median**：样本个数为奇数时是排序后的中间元素；偶数时是中间两个元素的平均值
- **mode**：出现次数最多的数（题目保证唯一）

以浮点数数组 `[minimum, maximum, mean, median, mode]` 返回，误差 `10^-5` 内即可接受。

示例 1：
- 输入：`count = [0,1,3,4,0,...]`
- 输出：`[1.00000,3.00000,2.37500,2.50000,3.00000]`（样本 `[1,2,2,2,3,3,3,3]`）

示例 2：
- 输入：`count = [0,4,3,2,2,0,...]`
- 输出：`[1.00000,4.00000,2.18182,2.00000,1.00000]`（样本 `[1,1,1,1,2,2,2,3,3,4,4]`）

约束：
- `count.length == 256`
- `0 <= count[i] <= 10^9`
- `1 <= sum(count) <= 10^9`
- 众数唯一

## 解题思路

一遍扫描 + 前缀计数定位中位数，全部 O(256)：

1. 扫描 `count`：累加总数 `n` 与加权和 `sum`（≤ 255×10^9 ≈ 2.5×10^11 < 2^53，双精度精确）；首个非零下标即 `minimum`，最后一个非零下标即 `maximum`；计数最大的下标即 `mode`。
2. 中位数：写 `kth(rank)` 辅助函数，沿 `count` 累计前缀和，找到第一个前缀和 ≥ rank 的下标，即第 rank 小的值。`n` 为奇数时中位数 = `kth((n+1)/2)`；偶数时 = `(kth(n/2) + kth(n/2+1)) / 2`。
3. `mean = sum / n`。

时间复杂度 O(256)，空间 O(1)。
