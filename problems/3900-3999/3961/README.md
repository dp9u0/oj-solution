# [3961] Maximize Sum of Device Ratings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-sum-of-device-ratings/description/)

* algorithms
* Medium (39.62%)
* Likes:    68
* Dislikes: 3
* Testcase Example:  '[[1,3],[2,2]]'

```md
You are given a 2D integer array units of size m &times; n where units[i][j] represents the capacity of the jth unit in the ith device. Each device contains exactly n units.
The rating of a device is the minimum capacity among all its units.
You may perform the following operation any number of times (including zero):

Choose a device i that has not been used as a source before.
Remove exactly one unit from device i and add it to any different device.
Then mark device i as used, so it cannot be chosen again as a source.

Return the maximum possible sum of the ratings of all devices after any number of such operations.
Note:

Devices can receive units from multiple devices, regardless of whether they have been selected.
The rating of an empty device is 0.


Example 1:

Input: units = [[1,3],[2,2]]
Output: 4
Explanation:

​​​​​​​​​​​​​​Select device i = 0 and transfer units[0][0] = 1 to device i = 1.
After the transfer, the ratings are:

Device 0 = [3]: rating[0] = 3
Device 1 = [2, 2, 1]: rating[1] = 1


Thus, the sum of ratings is 3 + 1 = 4.


Example 2:

Input: units = [[1,2,3],[4,5,6]]
Output: 6
Explanation:

Select device i = 1 and transfer units[1][0] = 4 to device i = 0.
After the transfer, the ratings are:

Device 0 = [1, 2, 3, 4]: rating[0] = 1
Device 1 = [5, 6]: rating[1] = 5


Thus, the sum of ratings is 1 + 5 = 6.


Example 3:

Input: units = [[5,5,5],[1,1,1]]
Output: 6
Explanation:

No transfers increase the sum of ratings. Thus, the sum of ratings is 5 + 1 = 6.



Constraints:

1 <= m == units.length <= 105
1 <= n == units[i].length <= 105
m * n <= 2 * 105
1 <= units[i][j] <= 105


```

## Solution

[SourceCode](./solution.js)

---

## 中文翻译

给定一个大小为 m × n 的二维整数数组 units，其中 units[i][j] 表示第 i 个设备中第 j 个单位的容量。每个设备恰好包含 n 个单位。

设备的 rating（评分）是其所有单位中的最小容量。

你可以执行任意次数（包括零次）以下操作：

- 选择一个之前从未作为来源（source）使用过的设备 i。
- 从设备 i 中恰好移除一个单位，并将其添加到任意其他设备。
- 然后将设备 i 标记为已使用，之后它不能再被选为来源。

返回在任意次数此类操作之后，所有设备 rating 之和的最大可能值。

注意：

- 设备可以从多个设备接收单位，无论它们是否已被选为来源。
- 空设备的 rating 为 0。

示例 1：
输入：units = [[1,3],[2,2]]
输出：4
解释：选择设备 0，将 units[0][0] = 1 转移到设备 1。转移后：设备 0 = [3] rating=3，设备 1 = [2,2,1] rating=1，rating 之和 = 3+1 = 4。

示例 2：
输入：units = [[1,2,3],[4,5,6]]
输出：6
解释：选择设备 1，将 units[1][0] = 4 转移到设备 0。转移后：设备 0 = [1,2,3,4] rating=1，设备 1 = [5,6] rating=5，rating 之和 = 1+5 = 6。

示例 3：
输入：units = [[5,5,5],[1,1,1]]
输出：6
解释：任何转移都无法提高 rating 之和，因此答案是 5+1 = 6。

约束：
- 1 ≤ m = units.length ≤ 10^5
- 1 ≤ n = units[i].length ≤ 10^5
- m * n ≤ 2 * 10^5
- 1 ≤ units[i][j] ≤ 10^5

---

## 解题思路

每个设备最多只能作为来源（source）一次，即最多移除恰好一个单位；被移除的单位必须加到其他设备上。

**关键观察：**

1. 若设备 i 作为 source，最优是移除其**最小单位** r_i（这样 rating 提升最大），之后它的 rating 变为次小值 a_i，增益 g_i = a_i − r_i（n ≥ 2 时非负；n = 1 时移除后设备变空，必不选为 source）。
2. 所有被移除的单位必须被某设备"接收"。把它们全部加到同一个**垃圾桶设备** k 上最优：若 k 的 rating ≤ 被移除单位的最小值，则无损；否则 k 的 rating 被压低到被移除单位最小值。
3. 设全局最小初始 rating 为 r_min。只要全局最小设备被选为 source，被移除单位的最小值就是 r_min，垃圾桶 k（非 source）会被压低，损害 = max(0, r_k − r_min)。
4. 因此枚举垃圾桶 k，其余所有 n ≥ 2 设备全部作为 source（每个增益 g_i ≥ 0，多多益善且不增加损害）：
   - 收益(k) = Σg − g_k − max(0, r_k − r_min)
   - 答案 = Σ r_i + max_k 收益(k)

**复杂度**：O(m·n) 求每个设备的 min/次小 + O(m) 枚举，完全满足约束。
