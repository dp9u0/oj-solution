# [面试题 10.11] 峰与谷

## Description


```md
https://leetcode.cn/problems/peaks-and-valleys-lcci/description/
* lcci
* Medium (66.80%)
* Likes:    64
* Dislikes: -
* Testcase Example:  '[3,5,2,1,6,4]'
在一个整数数组中，“峰”是大于或等于相邻整数的元素，相应地，“谷”是小于或等于相邻整数的元素。例如，在数组{5, 8, 4, 2, 3, 4, 6}中，{8, 6}是峰， {5, 2}是谷。现在给定一个整数数组，将该数组按峰与谷的交替顺序排序。
示例：
输入：[5, 3, 1, 2, 3]
输出：[5, 1, 3, 2, 3]
提示：
nums.length <= 10000
Hint 1: 假设数组按升序排序。有什么办法可以把它调整为交替的高峰和低谷？
Hint 2: 尝试遍历排序的数组。你可以交换元素直到将数组调整好吗？
Hint 3: 请注意，如果确保山峰位置正确，那么山谷也会在正确位置。因此，对数组x的迭代可以跳过每一个其他元素。
Hint 4: 你是否一定要对数组进行排序？你可以用一个未排序的数组来做到这一点吗？
Hint 5: 假设你有{0, 1, 2}三个元素的序列，以任意顺序排列。写出这些元素所有可能的排列，以及如何把它们变成1是波峰的形式。
Hint 6: 重新访问你刚才写出的{0, 1, 2}序列。想象一下有元素在最左边的元素之前。你能确保交换元素的方式不会使数组的前一部分失效吗？
Hint 7: 你应该可以设计一个O(n) 的算法。

```

## Description (English)

In an integer array, a "peak" is an element greater than or equal to its adjacent elements, and a "valley" is an element less than or equal to its adjacent elements. E.g. in {5, 8, 4, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys. Given an integer array, sort it into an alternating peak-valley order.

Example:
Input: [5, 3, 1, 2, 3]
Output: [5, 1, 3, 2, 3]

Note: nums.length <= 10000.

## 思路

贪心相邻交换 O(n)：约定偶数位为峰、奇数位为谷，从左到右扫一遍，位置 i 不满足身份（i 为谷却大于左邻 / i 为峰却小于左邻）就与左邻交换。交换不会破坏已处理前缀——新换上来的值必然仍满足 (i−2, i−1) 的关系（由旧关系传递不等号），就地完成无需排序。

## Solution

[SourceCode](./solution.js)
