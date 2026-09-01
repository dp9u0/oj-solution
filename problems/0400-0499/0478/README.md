# [478] Generate Random Point in a Circle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/generate-random-point-in-a-circle/description/)

* algorithms
* Medium (42.70%)
* Likes:    482
* Dislikes: 784
* Testcase Example:  '["Solution","randPoint","randPoint","randPoint"]\n[[1.0,0.0,0.0],[],[],[]]'

```md
Given the radius and the position of the center of a circle, implement the function randPoint which generates a uniform random point inside the circle.
Implement the Solution class:

Solution(double radius, double x_center, double y_center) initializes the object with the radius of the circle radius and the position of the center (x_center, y_center).
randPoint() returns a random point inside the circle. A point on the circumference of the circle is considered to be in the circle. The answer is returned as an array [x, y].


Example 1:

Input
['Solution', 'randPoint', 'randPoint', 'randPoint']
[[1.0, 0.0, 0.0], [], [], []]
Output
[null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]
Explanation
Solution solution = new Solution(1.0, 0.0, 0.0);
solution.randPoint(); // return [-0.02493, -0.38077]
solution.randPoint(); // return [0.82314, 0.38945]
solution.randPoint(); // return [0.36572, 0.17248]


Constraints:

0 <radius <= 108
-107 <= x_center, y_center <= 107
At most 3 * 104 calls will be made to randPoint.


```

## 翻译

给定圆的半径和圆心坐标，实现 randPoint() 生成圆内均匀随机点。圆上的点也算在圆内。

## 解题思路

极坐标法。随机角度 θ ∈ [0, 2π)，随机半径 r = R * √(uniform)，其中 √ 保证面积均匀分布（因为面积与 r² 成正比）。然后转换为直角坐标。

## Solution

[SourceCode](./solution.js)
