# [面试题 16.16] 部分排序

## Description


```md
https://leetcode.cn/problems/sub-sort-lcci/description/
* lcci
* Medium (46.24%)
* Likes:    137
* Dislikes: -
* Testcase Example:  '[]'
给定一个整数数组，编写一个函数，找出索引m和n，只要将索引区间[m,n]的元素排好序，整个数组就是有序的。注意：n-m尽量最小，也就是说，找出符合条件的最短序列。函数返回值为[m,n]，若不存在这样的m和n（例如整个数组是有序的），请返回[-1,-1]。
示例：
输入： [1,2,4,7,10,11,7,12,6,7,16,18,19]
输出： [3,9]
提示：
0 <= len(array) <= 1000000
Hint 1: 在开始和结束时知道最长的排序序列会有帮助吗？
Hint 2: 我们可以把这个数组分成3个子数组：LEFT、MIDDLE和RIGHT。LEFT和RIGHT都是有序的。MIDDLE的元素顺序是任意的。我们需要展开MIDDLE，直到可以对这些元素排序并使整个数组有序。
Hint 3: 考虑3个子数组：LEFT、MIDDLE和RIGHT。只关注这个问题：是否可以排序MIDDLE以使整个数组有序？如何进行验证？
Hint 4: 为了能够对MIDDLE进行排序并对整个数组进行排序，需要MAX(LEFT) <= MIN(MIDDLE, RIGHT)和MAX(LEFT, MIDDLE) <= MIN(RIGHT)。
Hint 5: 你能把中间部分展开直到满足前面的条件吗？
Hint 6: 你应该能在O(N)时间内解出来。

```

## Description (English)

Given an integer array, find indices m and n such that sorting only the elements in [m, n] makes the entire array sorted, with n - m minimized. Return [m, n]; if the array is already sorted, return [-1, -1].

Example:
Input: [1,2,4,7,10,11,7,12,6,7,16,18,19]
Output: [3,9]

Note: 0 <= len(array) <= 1000000.

## 思路

两次线性扫描 O(n)/O(1)：从右往左维护后缀最小值，`array[i] > min(右侧)` 的最左 i 即左端 m（该元素必须进排序区才能被挪走）；从左往右维护前缀最大值，`array[i] < max(左侧)` 的最右 i 即右端 n。已排序时两者均不触发，返回 [-1,-1]。

## Solution

[SourceCode](./solution.js)
