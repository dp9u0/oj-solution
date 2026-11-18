# [370] 区间加法

## Description


```md
https://leetcode.cn/problems/range-addition/description/
* algorithms
* Medium (78.74%)
* Likes:    201
* Dislikes: -
* Testcase Example:  '5\n[[1,3,2],[2,4,3],[0,2,-2]]'
假设你有一个长度为 n 的数组，初始情况下所有的数字均为 0，你将会被给出 k​​​​​​​ 个更新的操作。
其中，每个操作会被表示为一个三元组：[startIndex, endIndex, inc]，你需要将子数组 A[startIndex ... endIndex]（包括 startIndex 和 endIndex）增加 inc。
请你返回 k 次操作后的数组。
示例:
输入: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
输出: [-2,0,3,5,3]
解释:
初始状态:
[0,0,0,0,0]
进行了操作 [1,3,2] 后的状态:
[0,2,2,2,0]
进行了操作 [2,4,3] 后的状态:
[0,2,5,5,3]
进行了操作 [0,2,-2] 后的状态:
[-2,0,3,5,3]

提示：
1 <= length <= 105
0 <= updates.length <= 104
0 <= startIdxi <= endIdxi < length
-1000 <= inci <= 1000
Hint 1: Thinking of using advanced data structures? You are thinking it too complicated.
Hint 2: For each update operation, do you really need to update all elements between i and j?
Hint 3: Update only the first and end element is sufficient.
Hint 4: The optimal time complexity is O(k + n) and uses O(1) extra space.

```

## Solution

[SourceCode](./solution.js)

## Translation

You have an array of length `n` initialized to all zeros and `k` update operations. Each update `[startIndex, endIndex, inc]` adds `inc` to every element of `A[startIndex ... endIndex]` (inclusive). Return the array after all updates.

- Example: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]] → `[-2,0,3,5,3]`

Constraints: `1 <= length <= 10^5`; `0 <= updates.length <= 10^4`; `-1000 <= inc <= 1000`.

## Approach

**差分数组**:对区间 [s, e] 的整体加法只需在两端打标记——`diff[s] += inc`,`diff[e+1] -= inc`(e+1 越界则省略)。所有更新做完后对 diff 做一次前缀和即得结果。

每个操作 O(1),最后 O(n) 还原,总计 O(k + n);Hint 4 的最优解。
