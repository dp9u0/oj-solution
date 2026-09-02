# [LCP 55] 采集果实

## Description


```md
https://leetcode.cn/problems/PTXy4P/description/
* algorithms
* Easy (74.16%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[2,3,2]\n[[0,2],[1,4],[2,1]]\n3'
欢迎各位勇者来到力扣新手村，本次训练内容为「采集果实」。
在新手村中，各位勇者需要采集一些果实来制作药剂。`time[i]` 表示勇者每次采集 `1～limit` 颗第 `i` 种类型的果实需要的时间（即每次最多可以采集 `limit` 颗果实）。
当前勇者需要完成「采集若干批果实」的任务， `fruits[j] = [type, num]` 表示第 `j` 批需要采集 `num` 颗 `type` 类型的果实。采集规则如下：
- 按 `fruits` 给定的顺序**依次**采集每一批次
- 采集完当前批次的果实才能开始采集下一批次
- 勇者完成当前批次的采集后将**清空背包**（即多余的果实将清空）
请计算并返回勇者完成采集任务最少需要的时间。
**示例 1：**
>输入：`time = [2,3,2], fruits = [[0,2],[1,4],[2,1]], limit = 3`
>
>输出：`10`
>
>解释：
>由于单次最多采集 3 颗
>第 0 批需要采集 2 颗第 0 类型果实，需要采集 1 次，耗时为 2\*1=2
>第 1 批需要采集 4 颗第 1 类型果实，需要采集 2 次，耗时为 3\*2=6
>第 2 批需要采集 1 颗第 2 类型果实，需要采集 1 次，耗时为 2\*1=2
>返回总耗时 2+6+2=10
**示例 2：**
>输入：`time = [1], fruits = [[0,3],[0,5]], limit = 2`
>
>输出：`5`
>
>解释：
>由于单次最多采集 2 颗
>第 0 批需要采集 3 颗第 0 类型果实，需要采集 2 次，耗时为 1\*2=2
>第 1 批需要采集 5 颗第 0 类型果实，需要采集 3 次，耗时为 1\*3=3
>需按照顺序依次采集，返回 2+3=5
**提示：**
- `1 <= time.length <= 100`
- `1 <= time[i] <= 100`
- `1 <= fruits.length <= 10^3`
- `0 <= fruits[i][0] < time.length`
- `1 <= fruits[i][1] < 10^3`
- `1 <= limit <= 100`

```

## English Translation

```md
Welcome, brave adventurers, to the LeetCode novice village. Today's training is "Collecting Fruits".
In the novice village, adventurers need to collect fruits to brew potions. `time[i]` represents the time needed for the adventurer to collect `1 ~ limit` fruits of the `i`-th type each time (i.e., at most `limit` fruits can be collected each time).
The adventurer needs to complete the task of "collecting several batches of fruits". `fruits[j] = [type, num]` means the `j`-th batch requires collecting `num` fruits of `type` type. The collection rules are:
- Collect each batch **in sequence** according to the order given in `fruits`
- The next batch can only start after the current batch is fully collected
- After completing the current batch, the backpack is **emptied** (i.e., excess fruits are discarded)
Please calculate and return the minimum total time needed to complete all collection tasks.

Example 1:
Input: time = [2,3,2], fruits = [[0,2],[1,4],[2,1]], limit = 3
Output: 10
Explanation:
Since at most 3 fruits can be collected each time,
batch 0 needs 2 fruits of type 0, requires 1 collection, time = 2*1 = 2
batch 1 needs 4 fruits of type 1, requires 2 collections, time = 3*2 = 6
batch 2 needs 1 fruit of type 2, requires 1 collection, time = 2*1 = 2
Total time = 2+6+2 = 10

Example 2:
Input: time = [1], fruits = [[0,3],[0,5]], limit = 2
Output: 5
Explanation:
Since at most 2 fruits can be collected each time,
batch 0 needs 3 fruits of type 0, requires 2 collections, time = 1*2 = 2
batch 1 needs 5 fruits of type 0, requires 3 collections, time = 1*3 = 3
Collect in sequence, return 2+3 = 5

Constraints:
- 1 <= time.length <= 100
- 1 <= time[i] <= 100
- 1 <= fruits.length <= 10^3
- 0 <= fruits[i][0] < time.length
- 1 <= fruits[i][1] < 10^3
- 1 <= limit <= 100
```

## Approach

Since batches are collected in order and the backpack is emptied after each batch, batches are independent of each other.

For each batch `fruits[j] = [type, num]`:
- Each collection can gather at most `limit` fruits of that type, costing `time[type]`.
- Number of collections needed = `Math.ceil(num / limit)`.
- Time for this batch = `Math.ceil(num / limit) * time[type]`.

The answer is the sum of the time over all batches.

**Complexity:**
- Time: O(fruits.length)
- Space: O(1)
