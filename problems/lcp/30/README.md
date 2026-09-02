# [LCP 30] 魔塔游戏

## Description


```md
https://leetcode.cn/problems/p0NxJO/description/
* algorithms
* Medium (46.60%)
* Likes:    133
* Dislikes: -
* Testcase Example:  '[100,100,100,-250,-60,-140,-50,-50,100,150]'
小扣当前位于魔塔游戏第一层，共有 `N` 个房间，编号为 `0 ~ N-1`。每个房间的补血道具/怪物对于血量影响记于数组 `nums`，其中正数表示道具补血数值，即血量增加对应数值；负数表示怪物造成伤害值，即血量减少对应数值；`0` 表示房间对血量无影响。
**小扣初始血量为 1，且无上限**。假定小扣原计划按房间编号升序访问所有房间补血/打怪，**为保证血量始终为正值**，小扣需对房间访问顺序进行调整，**每次仅能将一个怪物房间（负数的房间）调整至访问顺序末尾**。请返回小扣最少需要调整几次，才能顺利访问所有房间。若调整顺序也无法访问完全部房间，请返回 -1。
**示例 1：**
>输入：`nums = [100,100,100,-250,-60,-140,-50,-50,100,150]`
>
>输出：`1`
>
>解释：初始血量为 1。至少需要将 nums[3] 调整至访问顺序末尾以满足要求。
**示例 2：**
>输入：`nums = [-200,-300,400,0]`
>
>输出：`-1`
>
>解释：调整访问顺序也无法完成全部房间的访问。
**提示：**
- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Xiao Kou is at the first floor of a magic tower with `N` rooms numbered `0..N-1`. Each room's heal/monster effect on HP is recorded in array `nums`: positive = heal (add HP), negative = monster damage (subtract HP), `0` = no effect.

He starts with **HP = 1, unbounded max**. He plans to visit rooms in ascending order. **To keep HP always positive**, he may adjust the visiting order, but each adjustment can only move **one monster room (negative) to the very end** of the order. Return the **minimum** number of adjustments so he can visit all rooms. If impossible even after adjustment, return `-1`.

**Example 1:** `nums = [100,100,100,-250,-60,-140,-50,-50,100,150]` → `1`
**Example 2:** `nums = [-200,-300,400,0]` → `-1`

**Constraints:** `1 <= nums.length <= 10^5`, `-10^5 <= nums[i] <= 10^5`.

---

## Approach

Walk rooms left→right accumulating HP (start 1). Whenever a negative would drop HP to `<= 0`, we must postpone the **most negative** monster room seen so far (a min-heap tracks them): undo its damage now and count one adjustment.

Afterward, the postponed monsters are dealt at the very end; surviving the whole run is possible iff the total HP change `sum(nums) + 1 > 0`, i.e. `sum(nums) >= 0` — otherwise return `-1`.

Complexity: `O(n log n)` (heap operations), `O(n)` space.
