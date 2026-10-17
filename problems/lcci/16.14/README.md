# [面试题 16.14] 最佳直线

## Description


```md
https://leetcode.cn/problems/best-line-lcci/description/
* lcci
* Medium (55.47%)
* Likes:    33
* Dislikes: -
* Testcase Example:  '[[-38935,27124],[-39837,19604],[-7086,42194],[-11571,-23257],[115,-23257],[20229,5976],[24653,-18488],[11017,21043],[-9353,16550],[-47076,15237],[-36686,42194],[-17704,1104],[31067,7368],[-20882,42194],[-19107,-10597],[-14898,24506],[-20801,42194],[-52268,40727],[-14042,42194],[-23254,42194],[-30837,-53882],[1402,801],[-33961,-984],[-6411,42194],[-12210,22901],[-8213,-19441],[-26939,20810],[30656,-23257],[-27195,21649],[-33780,2717],[23617,27018],[12266,3608]]'
给定一个二维平面及平面上的 N 个点列表Points，其中第i个点的坐标为Points[i]=[Xi,Yi]。请找出一条直线，其通过的点的数目最多。
设穿过最多点的直线所穿过的全部点编号从小到大排序的列表为S，你仅需返回[S[0],S[1]]作为答案，若有多条直线穿过了相同数量的点，则选择S[0]值较小的直线返回，S[0]相同则选择S[1]值较小的直线返回。
示例：
输入： [[0,0],[1,1],[1,0],[2,0]]
输出： [0,2]
解释： 所求直线穿过的3个点的编号为[0,2,3]
提示：
2 <= len(Points) <= 300
len(Points[i]) = 2
Hint 1: 有时，蛮力解法是相当好的办法。你能试试所有可能的直线吗？
Hint 2: 你不能真的试遍世界上所有可能的无限长的线。但你知道一条“最好”的线必须至少相交两点。你能连接每对点吗？你可以检查每一条线是否是最优的吗？
Hint 3: 你应该能得到O(N²)的解法。
Hint 4: 你试过使用散列表吗?

```

## Description (English)

Given N points on a 2D plane where the i-th point is Points[i] = [Xi, Yi], find the line passing through the most points. Let S be the sorted list of all point indices on that line; return [S[0], S[1]]. If multiple lines pass through the same number of points, choose the one with smaller S[0], then smaller S[1].

Example:
Input: [[0,0],[1,1],[1,0],[2,0]]
Output: [0,2]
Explanation: the line passes through points with indices [0,2,3].

Notes: 2 <= len(Points) <= 300; len(Points[i]) = 2.

## 思路

锚点分桶 O(n²)：以点 i 为锚，其余点按与 i 连线的精确斜率分桶——斜率约分成整数对并定号（dx<0 或 dx=0 且 dy<0 时取反），哈希键无浮点误差。桶内 j 升序，首元素即该线第二小下标；全局仅在**严格更多**时更新答案（i 升序遍历），并列时靠同锚点内桶的插入序（j_min 升序）天然取到更小的 [S0, S1]。

## Solution

[SourceCode](./solution.js)
