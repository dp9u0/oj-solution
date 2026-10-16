# [面试题 16.21] 交换和

## Description


```md
https://leetcode.cn/problems/sum-swap-lcci/description/
* lcci
* Medium (49.10%)
* Likes:    54
* Dislikes: -
* Testcase Example:  '[4, 1, 2, 1, 1, 2]\n[3, 6, 3, 3]'
给定两个整数数组，请交换一对数值（每个数组中取一个数值），使得两个数组所有元素的和相等。
返回一个数组，第一个元素是第一个数组中要交换的元素，第二个元素是第二个数组中要交换的元素。若有多个答案，返回任意一个均可。若无满足条件的数值，返回空数组。
示例 1：
输入：array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]
输出：[1, 3]
示例 2：
输入：array1 = [1, 2, 3], array2 = [4, 5, 6]
输出：[]
提示：
1 <= array1.length, array2.length <= 100000
Hint 1: 在这里用一些例子做些数学计算。这一对数值有什么需求？你发现它们的值有什么特点？
Hint 2: 当你把一个值a从数组A移动到数组B时，A的和减少了a, B的和增加了a。当你交换两个值时会发生什么？交换两个值并得到相同的和需要什么？
Hint 3: 如果你交换两个值，即a和b，那么A的和变成sumA - a + b，而B的和变成sumB - b + a。这两个和需要相等。
Hint 4: 你在寻找a和b的值，其中sumA - a + b = sumB - b + a。用数学方法算出这对a和b的值意味着什么。
Hint 5: 如果计算一下，那我们要找一对这样的值，即a - b = (sumA - sumB) / 2。然后，问题归结为寻找具有特定差的一对值。
Hint 6: 一种蛮力解法是遍历所有的数值对，以找到一个具有正确差值的数值对。这可能看起来为：对A进行外循环，对B进行内循环。对于每个值，计算差值并与目标差值进行比较。能说得更具体些吗？给定A中的值和目标差，可以知道要找的B中的元素的确切值吗?
Hint 7: 蛮力解法其实是在B中寻找一个等于a - target的值。你如何能更快地找到这个元素？什么方法可以帮助我们快速找到数组中是否存在某个元素?
Hint 8: 可以用散列表，也可以尝试排序。两者都能帮助我们更快地定位元素。
Hint 9: 如果A的和是11，B的和是8呢？能有一对数刚好有目标差吗？检查你的解决方案是否恰当地处理了这种情况。

```

## Description (English)

Given two integer arrays, swap one value from each array so that the sums of the two arrays become equal. Return an array whose first element is the value from the first array and second element is the value from the second array. If multiple answers exist, return any; if none, return an empty array.

Example 1:
Input: array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]
Output: [1, 3]

Example 2:
Input: array1 = [1, 2, 3], array2 = [4, 5, 6]
Output: []

Note: 1 <= array1.length, array2.length <= 100000.

## 思路

数学化归 + 哈希：交换 a、b 后需 `sumA - a + b = sumB - b + a`，即 `a - b = (sumA - sumB) / 2`。差为奇数直接无解；否则把 array2 放入 Set，扫 array1 找 `b = a - half` 是否存在。O(m+n)。

## Solution

[SourceCode](./solution.js)
