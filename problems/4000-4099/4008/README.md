# [4008] Minimum Initial Strength to Defeat All Monsters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-initial-strength-to-defeat-all-monsters/description/)

* algorithms
* Medium (50.12%)
* Likes:    70
* Dislikes: 2
* Testcase Example:  '[5,10,15]\n[[1,1,10]]'

```md
You are given an integer array monsters, where monsters[i] represents the strength of the ith monster.
You are also given a 2D integer array boosts, where boosts[i] = [li, ri, vi] indicates that vi is added to your temporary bonus while fighting any monster whose index lies in [li, ri]. Boost ranges may overlap, and the values of all applicable boosts are added together.
You start with a non-negative initial strength and fight the monsters from left to right.
For each monster at index i:

Let bonus be the sum of the values of all boosts that apply to monster i.
You can defeat the monster only if your current strength plus bonus is at least monsters[i].
After defeating the monster, only your current strength decreases by monsters[i]. If it becomes negative, it is set to 0.

Return the minimum initial strength required to defeat all monsters.
Note: The temporary bonus is used only to determine whether the current monster can be defeated. It does not otherwise change your current strength.

Example 1:

Input: monsters = [5,10,15], boosts = [[1,1,10]]
Output: 30
Explanation:
Let&#39;s start with an initial strength of 30.

monsters[0] = 5: At index 0, the bonus is 0. Since 30 + 0 >= 5, this monster can be defeated. The strength becomes 30 - 5 = 25.
monsters[1] = 10: At index 1, the bonus is 10. Since 25 + 10 >= 10, this monster can be defeated. The strength becomes 25 - 10 = 15.
monsters[2] = 15: At index 2, the bonus is 0. Since 15 + 0 >= 15, this monster can be defeated. The strength becomes 15 - 15 = 0.

Thus, the minimum initial strength required is 30.

Example 2:

Input: monsters = [5,10,15], boosts = [[1,2,10],[1,2,5]]
Output: 5
Explanation:
Let&#39;s start with an initial strength of 5.

monsters[0] = 5: The bonus is 0. Since 5 + 0 >= 5, the monster can be defeated. The strength becomes 5 - 5 = 0.
monsters[1] = 10: The two overlapping boosts provide bonus = 10 + 5 = 15. Since 0 + 15 >= 10, the monster can be defeated. The strength remains 0.
monsters[2] = 15: The two overlapping boosts again provide bonus = 15. Since 0 + 15 >= 15, the monster can be defeated. The strength remains 0.

Thus, the minimum initial strength required is 5.


Constraints:

1 <= monsters.length <= 5 * 104
1 <= monsters[i] <= 109
0 <= boosts.length <= 5 * 104
boosts[i] == [li, ri, vi]
0 <= li <= ri < monsters.length
1 <= vi <= 109​​​​​​​


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个整数数组 `monsters`，其中 `monsters[i]` 表示第 `i` 只怪物的力量。

另给你一个二维整数数组 `boosts`，其中 `boosts[i] = [li, ri, vi]` 表示在与下标位于 `[li, ri]` 范围内的怪物战斗时，你的临时增益会增加 `vi`。增益区间可以重叠，所有适用增益的值会累加在一起。

你从一个非负的初始力量开始，从左到右依次与怪物战斗。

对于下标为 `i` 的每只怪物：

- 设 `bonus` 为所有适用于怪物 `i` 的增益值之和。
- 只有当你的当前力量加上 `bonus` 至少为 `monsters[i]` 时，才能击败这只怪物。
- 击败怪物后，只有你的当前力量会减少 `monsters[i]`。如果变为负数，则被置为 `0`。

返回击败所有怪物所需的最小初始力量。

注意：临时增益仅用于判断当前怪物能否被击败，它不会以其他方式改变你的当前力量。

示例 1：monsters = [5,10,15], boosts = [[1,1,10]] → 输出 30
示例 2：monsters = [5,10,15], boosts = [[1,2,10],[1,2,5]] → 输出 5

约束：

- 1 <= monsters.length <= 5 * 10^4
- 1 <= monsters[i] <= 10^9
- 0 <= boosts.length <= 5 * 10^4
- boosts[i] == [li, ri, vi]
- 0 <= li <= ri < monsters.length
- 1 <= vi <= 10^9

## 解题思路

**数学化简（一次遍历）**：

1. 设初始力量为 `S`。从左到右战斗时，每击败一只怪物当前力量减少 `monsters[i]`（负数截断为 0），因此打第 `i` 只怪物时的力量为：

   `cur_i = max(0, S - prefix_i)`，其中 `prefix_i = monsters[0] + ... + monsters[i-1]`。

2. 战斗约束为 `cur_i + bonus_i >= monsters[i]`。令 `need_i = monsters[i] - bonus_i`：
   - 若 `need_i <= 0`：该怪物不构成任何约束（即使力量为 0 也能打过）。
   - 若 `need_i > 0`：由于 `cur_i > 0`，截断不生效，`cur_i = S - prefix_i`，约束等价于 `S >= prefix_i + need_i`。

3. `S` 的可行域是所有约束的交集（一个右端无界的区间），最小值即为：

   `答案 = max(0, max{ prefix_i + need_i : need_i > 0 })`

4. `bonus_i` 是区间加、单点查，用**差分数组** `O(n + m)` 求出：对每个 `[l, r, v]` 做 `diff[l] += v, diff[r+1] -= v`，再前缀和还原。

- 时间复杂度：`O(n + m)`
- 空间复杂度：`O(n)`
