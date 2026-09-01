# [LCP 72] 补给马车

## Description


```md
https://leetcode.cn/problems/hqCnmP/description/
* algorithms
* Easy (68.42%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[7,3,6,1,8]'
远征队即将开启未知的冒险之旅，不过在此之前，将对补给车队进行最后的检查。`supplies[i]` 表示编号为 `i` 的补给马车装载的物资数量。
考虑到车队过长容易被野兽偷袭，他们决定将车队的长度变为原来的一半（向下取整），计划为：
- 找出车队中 **物资之和最小** 两辆 **相邻** 马车，将它们车辆的物资整合为一辆。若存在多组物资之和相同的马车，则取编号最小的两辆马车进行整合；
- 重复上述操作直到车队长度符合要求。
请返回车队长度符合要求后，物资的分布情况。
**示例 1：**
>输入：`supplies = [7,3,6,1,8]`
>
>输出：`[10,15]`
>
>解释：
> 第 1 次合并，符合条件的两辆马车为 6,1，合并后的车队为 [7,3,7,8]；
> 第 2 次合并，符合条件的两辆马车为 (7,3) 和 (3,7)，取编号最小的 (7,3)，合并后的车队为 [10,7,8]；
> 第 3 次合并，符合条件的两辆马车为 7,8，合并后的车队为 [10,15]；
>返回 `[10,15]`
**示例 2：**
>输入：`supplies = [1,3,1,5]`
>
>输出：`[5,5]`
**解释：**
- `2 <= supplies.length <= 1000`
- `1 <= supplies[i] <= 1000`

```

## English Translation

The expedition team is about to embark on an unknown adventure, but before that, they will perform a final check on the supply convoy. `supplies[i]` represents the amount of supplies loaded in the supply wagon numbered `i`.

Considering that a convoy that is too long can easily be ambushed by beasts, they decide to reduce the convoy's length to half of its original length (rounded down). The plan is:

- Find the **two adjacent wagons** with the **smallest sum of supplies**, and merge their supplies into one wagon. If there are multiple groups of adjacent wagons with the same sum, merge the two wagons with the **smallest indices**;
- Repeat the above operation until the convoy length meets the requirement.

Return the distribution of supplies after the convoy length meets the requirement.

**Example 1:**
> Input: `supplies = [7,3,6,1,8]`
> Output: `[10,15]`
> Explanation:
> - 1st merge: the qualifying adjacent wagons are 6,1, the convoy becomes [7,3,7,8];
> - 2nd merge: the qualifying adjacent wagons are (7,3) and (3,7), take the (7,3) with smallest indices, the convoy becomes [10,7,8];
> - 3rd merge: the qualifying adjacent wagons are 7,8, the convoy becomes [10,15];
> Return `[10,15]`

**Example 2:**
> Input: `supplies = [1,3,1,5]`
> Output: `[5,5]`

**Constraints:**
- `2 <= supplies.length <= 1000`
- `1 <= supplies[i] <= 1000`

## Approach

纯模拟。目标长度 `target = Math.floor(supplies.length / 2)`。

循环直到数组长度等于 `target`:
1. 遍历数组,找到所有相邻对 `(i, i+1)` 中之和最小的一对;若有多个相同和,取编号最小(即下标最小)的。
2. 将 `supplies[i]` 更新为 `supplies[i] + supplies[i+1]`,然后删除 `supplies[i+1]`。

因为 `n <= 1000`,最多合并约 `n/2` 次,每次扫描 O(n),总体 O(n²),足够通过。

## Solution

[SourceCode](./solution.js)
